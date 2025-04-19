export default function AboutPage() {
  return (
    <main className="bg-[#1e293b] text-gray-300 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section 1 */}
        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-xl font-semibold text-white">About</h2>
          <p className="md:col-span-2 text-gray-400">
            Just a quick glimpse into who I am.
          </p>
        </section>

        {/* Section 2 */}
        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-xl font-semibold text-white">Background</h2>
          <div className="md:col-span-2 space-y-4">
            <p>Hello world, I’m Kalzhan Kassymkhan — a DevOps engineer, developer, and tech enthusiast based in Kazakhstan.</p>
            <p>
              I’ve always been drawn to solving complex problems and building systems that are efficient, scalable, and reliable. Over the past few years, I’ve worked across multiple layers of the tech stack, but my true passion lies in automating infrastructure and making developers’ lives easier.
            </p>
            <p>
              I specialize in working with tools like Docker, Kubernetes, and Terraform, and I’m a strong advocate for CI/CD, infrastructure as code, and cloud-native technologies. My daily work often involves platforms like AWS, Fly.io, GitHub Actions, and Envoy Proxy.
            </p>
            <p>
              In addition to my technical work, I also enjoy sharing what I learn. I create YouTube videos where I talk about dev tools, engineering workflows, and productivity tips — all with a focus on simplicity and clarity.
            </p>
            <p>
              Outside of tech, I enjoy reading about philosophy, filming creative vlogs, and occasionally experimenting with digital art and motion design.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-xl font-semibold text-white">Connect</h2>
          <p className="md:col-span-2 text-gray-400">
            Got a question, collaboration idea, or just want to say hi? Feel free to reach out via email or DM me anywhere at <span className="text-white font-medium">@kassymkhan24</span>. Always happy to connect with other engineers, creators, or curious minds.
          </p>
        </section>

        {/* Section 4 */}
        <section className="grid md:grid-cols-3 gap-6">
          <h2 className="text-xl font-semibold text-white">Work</h2>
          <div className="md:col-span-2 space-y-4">
            <p>
              With over 3 years of hands-on experience in DevOps and cloud engineering, I’ve had the chance to work on everything from small-scale deployments to large production environments.
            </p>
            <p>
              I began my journey as a university student tinkering with Linux servers and open-source tools. Since then, I’ve worked with a number of startups and remote teams, helping them deploy faster, debug smarter, and scale more reliably.
            </p>
            <p>
              Today, I continue to explore new technologies, build useful side-projects, and push myself to be better every day — both as an engineer and as a person.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}


