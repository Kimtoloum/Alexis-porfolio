const BASE_URL = "https://api.github.com"

export type GitHubStats = {
  publicRepos: number
  followers: number
  totalStars: number
  topRepos: {
    name: string
    description: string | null
    stars: number
    language: string | null
    url: string
  }[]
}

export async function getGitHubStats(): Promise<GitHubStats> {
  const username = process.env.GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
  }

  const userRes = await fetch(`${BASE_URL}/users/${username}`, { headers })
  const user = await userRes.json()

  // Récupère TOUS les repos (publics + privés) pour le comptage global
  const allReposRes = await fetch(
    `${BASE_URL}/user/repos?per_page=100&sort=pushed&affiliation=owner`,
    { headers }
  )
  const allRepos = await allReposRes.json()

  // Filtre les repos publics uniquement pour l'affichage (top repos)
  const publicRepos = allRepos.filter((repo: any) => !repo.private)

  const totalStars = publicRepos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0
  )

  const topRepos = publicRepos
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      url: repo.html_url,
    }))

  return {
    publicRepos: allRepos.length, // compte TOUS les repos, privés inclus
    followers: user.followers,
    totalStars,
    topRepos, // mais affiche SEULEMENT les publics
  }
}
export async function getCommitActivity() {
  const username = process.env.GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
  }

  const reposRes = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100`,
    { headers }
  )
  const repos = await reposRes.json()

  const monthCounts: Record<string, number> = {}
  const now = new Date()

  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const label = d.toLocaleDateString("fr-FR", { month: "short" })
    monthCounts[label] = 0
  }

  for (const repo of repos.slice(0, 10)) {
    const commitsRes = await fetch(
      `${BASE_URL}/repos/${username}/${repo.name}/commits?per_page=100`,
      { headers }
    )
    if (!commitsRes.ok) continue
    const commits = await commitsRes.json()
    if (!Array.isArray(commits)) continue

    for (const commit of commits) {
      const date = new Date(commit.commit.author.date)
      const label = date.toLocaleDateString("fr-FR", { month: "short" })
      if (label in monthCounts) {
        monthCounts[label]++
      }
    }
  }

  return Object.entries(monthCounts).map(([month, commits]) => ({
    month,
    commits,
  }))
}