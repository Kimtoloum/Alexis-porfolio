import FadeIn from "@/components/ui/FadeIn"
import { getGitHubStats, getCommitActivity } from "@/lib/github"
import CommitChart from "@/components/stats/CommitChart"

export const revalidate = 3600

export default async function Dashboard() {
  const stats = await getGitHubStats()
  const commitData = await getCommitActivity()

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
      <FadeIn>
        <h1 className="text-2xl font-semibold tracking-tight">
          Dashboard GitHub
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-2 text-neutral-400">
          Mes statistiques GitHub en temps réel.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="border border-neutral-800 rounded-lg p-4">
          <p className="text-sm text-neutral-400">Repositories</p>
          <p className="text-2xl font-semibold mt-1">{stats.publicRepos}</p>
        </div>
        <div className="border border-neutral-800 rounded-lg p-4">
          <p className="text-sm text-neutral-400">Total stars</p>
          <p className="text-2xl font-semibold mt-1">{stats.totalStars}</p>
        </div>
        <div className="border border-neutral-800 rounded-lg p-4">
          <p className="text-sm text-neutral-400">Followers</p>
          <p className="text-2xl font-semibold mt-1">{stats.followers}</p>
        </div>
      </div>

      <div className="mt-8">
        <CommitChart data={commitData} />
      </div>

      <h2 className="text-lg font-semibold mt-10 mb-4">Top repos</h2>
      <div className="space-y-3">
        {stats.topRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-600 transition-colors"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">{repo.name}</p>
              <p className="text-sm text-neutral-400">★ {repo.stars}</p>
            </div>
            {repo.description && (
              <p className="text-sm text-neutral-400 mt-1">{repo.description}</p>
            )}
            {repo.language && (
              <p className="text-xs text-neutral-500 mt-2">{repo.language}</p>
            )}
          </a>
        ))}
      </div>
    </main>
  )
}