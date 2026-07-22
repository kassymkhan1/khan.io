const skillGroups = [
  {
    label: 'Platforms & Orchestration',
    skills: ['Kubernetes', 'AWS EKS', 'Helm', 'ArgoCD', 'HashiCorp Nomad'],
  },
  {
    label: 'Networking & Service Mesh',
    skills: ['Envoy', 'Consul', 'Load Balancing'],
  },
  {
    label: 'Observability',
    skills: ['VictoriaMetrics', 'Prometheus', 'Grafana', 'Loki', 'Promtail'],
  },
  {
    label: 'IaC & Automation',
    skills: ['Terraform', 'Ansible', 'GitLab CI/CD', 'Bash', 'Python', 'Go'],
  },
  {
    label: 'Security',
    skills: ['HashiCorp Vault', 'Kubernetes OIDC', 'Secrets Management'],
  },
  {
    label: 'Data & Storage',
    skills: ['PostgreSQL', 'ClickHouse', 'Cassandra'],
  },
  {
    label: 'Cloud',
    skills: ['AWS', 'DigitalOcean'],
  },
];

const experience = [
  {
    role: 'DevOps Engineer',
    company: 'GetBlock',
    period: 'Jan 2023 – Jul 2026',
    duration: '3 yr 7 mo',
    bullets: [
      'Designed and operated bare-metal Kubernetes infrastructure powering 50+ production blockchain and internal services.',
      'Introduced GitOps delivery with ArgoCD backed by GitLab CI/CD, cutting manual deployment errors.',
      'Migrated monitoring stack from Prometheus to VictoriaMetrics, cutting incident response time by 30–50%.',
      'Built end-to-end log aggregation with Loki/Promtail and Grafana dashboards for full-stack cluster visibility.',
      'Configured Consul for dynamic service discovery and Envoy for traffic management and observability.',
      'Automated operations with Ansible and Bash; managed secrets with HashiCorp Vault.',
    ],
  },
  {
    role: 'Node Engineer',
    company: 'GetBlock',
    period: 'Jan 2021 – Jan 2023',
    duration: '2 yr 1 mo',
    bullets: [
      'Owned infrastructure for 80+ blockchain nodes across 8 networks (Ethereum, Ronin/OP Stack, Dash, Cardano, B3, TON, NEAR, HyperEVM), sustaining 99.9% uptime.',
      'Deployed node infrastructure via Helm and ArgoCD GitOps workflows.',
      'Built and maintained a ClickHouse/Cassandra indexing service processing 10+ TB of blockchain data.',
      'Designed data schemas and optimized queries for real-time indexing workloads.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'i-Tis.io',
    period: 'Aug 2020 – Jan 2021',
    duration: 'Moscow',
    bullets: [
      'Owned end-to-end infrastructure on DigitalOcean (10+ servers) for a distributed team, keeping services stable.',
      'Introduced Terraform for declarative IaC, reducing manual configuration errors.',
      'Automated deployments with Ansible and CI/CD pipelines, cutting operational time by 40–50%.',
      'Built internal Python and Go tooling, including a Telegram bot for team workflow automation.',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0d1117] text-gray-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">About</h2>
          <p className="md:col-span-2 text-gray-400 text-lg">
            Just a quick glimpse into who I am.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Background</h2>
          <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hello world, I&apos;m <span className="text-white font-semibold">Kassymkhan Kalzhan</span> — a DevOps
              engineer specializing in Kubernetes, GitOps, and cloud infrastructure security, based in Almaty, Kazakhstan.
            </p>
            <p>
              With 5+ years of experience designing and operating bare-metal and cloud Kubernetes platforms for blockchain
              and fintech infrastructure, I bring deep hands-on expertise in GitOps (ArgoCD), observability
              (VictoriaMetrics, Grafana, Loki), Envoy service networking, and secrets management (HashiCorp Vault).
            </p>
            <p>
              I&apos;ve reduced incident response time by up to 50% through an observability stack migration and sustained
              99.9% uptime across 80+ revenue-critical blockchain nodes. My background in Information Security
              complements a security-first approach to everything I build.
            </p>
            <p>
              Outside of tech, I enjoy reading about philosophy, filming creative vlogs, and experimenting with digital
              art and motion design.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Skills</h2>
          <div className="md:col-span-2 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Experience</h2>
          <div className="md:col-span-2 space-y-10">
            {experience.map((job) => (
              <div key={`${job.role}-${job.company}-${job.period}`} className="space-y-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-white font-semibold">{job.role}</p>
                    <p className="text-gray-400 text-sm">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 font-mono shrink-0">
                    <p>{job.period}</p>
                    <p>{job.duration}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-gray-400 text-sm leading-relaxed">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-600 mt-0.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Education</h2>
          <div className="md:col-span-2 space-y-1 text-gray-300">
            <p className="text-white font-semibold">Tomsk State University of Control Systems and Radioelectronics</p>
            <p className="text-gray-400 text-sm">B.S., Computer and Information Systems Security / Information Assurance</p>
            <p className="text-gray-500 text-sm font-mono">Sep 2017 – Jul 2021</p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Connect</h2>
          <p className="md:col-span-2 text-gray-400 leading-relaxed">
            Got a question, collaboration idea, or just want to say hi? Reach out via{' '}
            <a href="mailto:han.mask21@gmail.com" className="text-white hover:underline font-medium">
              han.mask21@gmail.com
            </a>{' '}
            or find me online. Always happy to connect with other engineers, creators, or curious minds.
          </p>
        </section>

      </div>
    </main>
  );
}
