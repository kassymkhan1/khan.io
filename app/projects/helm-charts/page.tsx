import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const tags = ['Helm', 'Kubernetes', 'DevOps'];

export default function HelmChartsProjectPage() {
  return (
    <main className="bg-[#0d1117] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to projects
        </Link>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h1 className="text-3xl font-bold text-white">helm-charts</h1>
            <span className="shrink-0 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-medium">
              In Progress
            </span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            A public repository of reusable{' '}
            <a href="https://helm.sh" target="_blank" rel="noreferrer" className="text-white hover:underline">
              Helm
            </a>{' '}
            charts for deploying services to Kubernetes, published to Artifact Hub and served as a chart repository
            via GitHub Pages.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium bg-gray-500/20 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Usage</h2>
          <div className="md:col-span-2 space-y-3">
            <p className="text-gray-400 leading-relaxed">
              Add the repository once Helm is installed, then search it like any other Helm repo:
            </p>
            <pre className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
{`helm repo add kassymkhan1 https://kassymkhan1.github.io/helm-charts
helm search repo kassymkhan1`}
            </pre>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Status</h2>
          <p className="md:col-span-2 text-gray-400 leading-relaxed">
            The repository scaffolding, Artifact Hub listing, and GitHub Pages publishing are set up; charts are
            being added under <code className="text-gray-300">charts/</code> as they&apos;re ready.
          </p>
        </section>

        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/kassymkhan1/helm-charts"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View source on GitHub
          </a>
          <a
            href="https://artifacthub.io/packages/search?repo=kassymkhan1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View on Artifact Hub
          </a>
        </div>
      </div>
    </main>
  );
}
