const techBadges = [
  'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Fly.io',
  'GitHub Actions', 'Envoy Proxy', 'Go', 'TypeScript', 'Linux',
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
              Hello world, I&apos;m <span className="text-white font-semibold">Kalzhan Kassymkhan</span> — a DevOps engineer,
              developer, and tech enthusiast based in Kazakhstan.
            </p>
            <p>
              I&apos;ve always been drawn to solving complex problems and building systems that are efficient, scalable,
              and reliable. Over the past few years, I&apos;ve worked across multiple layers of the tech stack, but my
              true passion lies in automating infrastructure and making developers&apos; lives easier.
            </p>
            <p>
              I specialize in tools like Docker, Kubernetes, and Terraform, and I&apos;m a strong advocate for CI/CD,
              infrastructure as code, and cloud-native technologies. My daily work often involves platforms like AWS,
              Fly.io, GitHub Actions, and Envoy Proxy.
            </p>
            <p>
              In addition to my technical work, I enjoy sharing what I learn through YouTube videos about dev tools,
              engineering workflows, and productivity tips.
            </p>
            <p>
              Outside of tech, I enjoy reading about philosophy, filming creative vlogs, and experimenting with
              digital art and motion design.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Skills</h2>
          <div className="md:col-span-2 flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Work</h2>
          <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
            <p>
              With over 3 years of hands-on experience in DevOps and cloud engineering, I&apos;ve had the chance to
              work on everything from small-scale deployments to large production environments.
            </p>
            <p>
              I began my journey as a university student tinkering with Linux servers and open-source tools. Since
              then, I&apos;ve worked with a number of startups and remote teams, helping them deploy faster, debug
              smarter, and scale more reliably.
            </p>
            <p>
              Today, I continue to explore new technologies, build useful side-projects, and push myself to be
              better every day — both as an engineer and as a person.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono">Connect</h2>
          <p className="md:col-span-2 text-gray-400 leading-relaxed">
            Got a question, collaboration idea, or just want to say hi? Reach out via email or DM me anywhere at{' '}
            <span className="text-white font-medium">@kassymkhan24</span>. Always happy to connect with other
            engineers, creators, or curious minds.
          </p>
        </section>

      </div>
    </main>
  );
}
