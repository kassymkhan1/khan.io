'use client';

import Image from 'next/image';

const devices = [
  {
    url: 'https://apple.com',
    name: 'Macbook Pro 14',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobj-8Pw04nd4JSrO4qT9_1ui2PWVLf1JnIQ&usqp=CAU',
    description: 'Base machine for work',
  },
  {
    url: 'https://apple.com',
    name: 'iPad Pro 11',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRLlzogCRG_bdmmtPDkfMemdXtU95gwccHw&usqp=CAU',
    description: 'My watch device',
  },
];

const softwares = [
  {
    url: 'https://lazyvim.org/',
    name: 'LazyVim',
    image: 'https://user-images.githubusercontent.com/292349/213447056-92290767-ea16-430c-8727-ce994c93e9cc.png',
    description: 'My editor of choice',
  },
  {
    url: 'https://linear.app',
    name: 'Linear',
    image: 'https://linear.app/static/og/home.jpg',
    description: 'Project management',
  },
  {
    url: 'https://slack.com',
    name: 'Slack',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ0xsTd-O1JdW3HAvp6m8jHcSnp1QQ_Nw7Q&usqp=CAU',
    description: 'Team communication',
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
            The hardware and software I use every day.
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
