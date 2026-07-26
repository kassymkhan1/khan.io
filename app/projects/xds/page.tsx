import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const tags = ['Go', 'Envoy', 'gRPC', 'DevOps'];

const apis = [
  { name: 'CDS', full: 'Cluster Discovery Service', note: 'upstream clusters — required' },
  { name: 'LDS', full: 'Listener Discovery Service', note: 'listeners — required' },
  { name: 'EDS', full: 'Endpoint Discovery Service', note: 'endpoints within clusters — optional' },
  { name: 'RDS', full: 'Route Discovery Service', note: 'routing rules — optional' },
  { name: 'SDS', full: 'Secret Discovery Service', note: 'TLS certificates and secrets — optional' },
];

const features = [
  'Each xDS API is loaded from its own YAML file, validated, and hot-reloaded independently — a failure parsing one file leaves the others’ last-good config untouched.',
  'Cross-resource validation: a listener’s RDS reference and a cluster’s EDS reference must resolve to a loaded resource, or the load (or reload) fails instead of reaching Envoy as an empty config.',
  'Admin HTTP server alongside the gRPC server: /healthz, /readyz, and a Prometheus /metrics endpoint.',
  'Built on the official envoyproxy/go-control-plane library, serving config over gRPC via ADS.',
];

export default function XdsProjectPage() {
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
            <h1 className="text-3xl font-bold text-white">xds</h1>
            <span className="shrink-0 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-medium">
              In Progress
            </span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            A production-ready control plane for{' '}
            <a href="https://www.envoyproxy.io/" target="_blank" rel="noreferrer" className="text-white hover:underline">
              Envoy Proxy
            </a>
            , implementing the xDS (Discovery Service) protocol. It dynamically configures Envoy proxies across a
            cluster or service mesh without restarting them or dropping connections.
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
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">What it does</h2>
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-400 leading-relaxed">
              The control plane serves configuration to connected Envoy proxies over gRPC. Each xDS API is configured
              from its own file, loaded, validated, and hot-reloaded independently of the others — all five files are
              polled every 2 seconds.
            </p>
            <ul className="space-y-2">
              {apis.map((api) => (
                <li key={api.name} className="flex gap-3 text-sm">
                  <span className="shrink-0 font-mono text-white w-10">{api.name}</span>
                  <span className="text-gray-400">
                    <span className="text-gray-300">{api.full}</span> — {api.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Highlights</h2>
          <ul className="md:col-span-2 space-y-2 text-gray-400 text-sm leading-relaxed">
            {features.map((feature, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gray-600 mt-0.5 shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Stack</h2>
          <p className="md:col-span-2 text-gray-400">
            Go, gRPC/Protobuf (Envoy API v3), and{' '}
            <a
              href="https://github.com/envoyproxy/go-control-plane"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              go-control-plane
            </a>{' '}
            for the snapshot cache.
          </p>
        </section>

        <a
          href="https://github.com/kassymkhan1/xds"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View source on GitHub
        </a>
      </div>
    </main>
  );
}
