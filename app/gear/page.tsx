'use client';

import Image from 'next/image';

const devices = [
  {
    url: 'https://apple.com/macbook-pro/',
    name: 'MacBook Pro 14"',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobj-8Pw04nd4JSrO4qT9_1ui2PWVLf1JnIQ&usqp=CAU',
    description: 'Primary workstation for infrastructure engineering, local Kubernetes dev, and everything else',
  },
  {
    url: 'https://apple.com/ipad-pro/',
    name: 'iPad Pro 11"',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRLlzogCRG_bdmmtPDkfMemdXtU95gwccHw&usqp=CAU',
    description: 'Companion device for reading docs, note-taking, and consuming content on the go',
  },
  {
    url: 'https://apple.com/iphone/',
    name: 'iPhone 15 Pro',
    image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg',
    description: 'Always-on mobile device for monitoring alerts, Grafana dashboards, and Slack on the go',
  }
];

const softwares = [

  {
    url: 'https://lazyvim.org/',
    name: 'LazyVim',
    image: 'https://user-images.githubusercontent.com/292349/213447056-92290767-ea16-430c-8727-ce994c93e9cc.png',
    description: 'Modal editor for config files, Go code, and Bash scripts — fast and keyboard-driven',
  },
  {
    url: 'https://linear.app',
    name: 'Linear',
    image: 'https://images.seeklogo.com/logo-png/48/1/linear-logo-png_seeklogo-483920.png',
    description: 'Issue tracking for infrastructure tasks, incident management, and sprint planning',
  },
  {
    url: 'https://slack.com',
    name: 'Slack',
    image: 'https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png',
    description: 'Primary async communication across distributed engineering teams',
  },
  {
    url: 'https://obsidian.md/',
    name: 'Obsidian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahXinYc2t-idm77fyrnWpdW-QpFtMomYqCnEMRx6HnA&s',
    description: 'Personal knowledge base for runbooks, architecture notes, and linked thinking',
  },
  {
    url: 'https://code.visualstudio.com/',
    name: 'VS Code',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJd3F4VZHrGgTPVcvtT9jlIZMAMYGTpUlsSZC2tmyRxXHiFf0WGX1OSqx&s=10',
    description: 'Go-to editor for larger projects, Helm charts, and anything that needs extensions',
  },
  {
    url: 'https://unity.com/',
    name: 'Unity',
    image: 'https://1000logos.net/wp-content/uploads/2021/10/Unity-logo.png',
    description: 'Game engine for side projects and experimenting with real-time 3D',
  },
];

function GearGrid({ items }: { items: typeof devices }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 border border-white/10 rounded-xl p-4 hover:border-white/20 hover:bg-white/5 transition-all"
        >
          <div className="relative w-full h-40 bg-white/5 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain p-2"
              unoptimized
            />
          </div>
          <div>
            <p className="text-white font-medium text-sm">{item.name}</p>
            <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function GearPage() {
  return (
    <main className="bg-[#0d1117] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-14">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Gear</h1>
          <p className="text-gray-400">
            The hardware and software I rely on every day as a DevOps engineer.
          </p>
        </section>

        <section>
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono mb-5">
            Devices
          </h2>
          <GearGrid items={devices} />
        </section>

        <section>
          <h2 className="text-sm text-gray-500 uppercase tracking-widest font-mono mb-5">
            Software
          </h2>
          <GearGrid items={softwares} />
        </section>
      </div>
    </main>
  );
}
