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

  const reposRes = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100&sort=pushed`,
    { headers }
  )
  const repos = await reposRes.json()

  const totalStars = repos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0
  )

  const topRepos = repos
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
    publicRepos: user.public_repos,
    followers: user.followers,
    totalStars,
    topRepos,
  }
}