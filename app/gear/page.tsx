'use client';

import Image from 'next/image';

const devices = [
  {
    URL: 'https://apple.com',
    Name: 'Macbook Pro 14',
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobj-8Pw04nd4JSrO4qT9_1ui2PWVLf1JnIQ&usqp=CAU',
    Description: 'Base machine for work',
    sponsored: false,
  },
  {
    URL: 'https://apple.com',
    Name: 'iPad Pro 11',
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRLlzogCRG_bdmmtPDkfMemdXtU95gwccHw&usqp=CAU',
    Description: 'My watch device',
    sponsored: false,
  },
];

const softwares = [
  {
    URL: 'https://astronvim.com/',
    Name: 'Nvim',
    Image: 'https://astronvim.com/_astro/astrodark.CdHFd1a7_eiWC4.webp',
    Description: 'My best IDE',
  },
  {
    URL: 'https://linear.app',
    Name: 'Linear',
    Image: 'https://linear.app/static/og/home.jpg',
    Description: 'My productive app',
  },
  {
    URL: 'https://slack.com',
    Name: 'Slack',
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ0xsTd-O1JdW3HAvp6m8jHcSnp1QQ_Nw7Q&usqp=CAU',
    Description: 'Communication Application',
  },
];

export default function GearPage() {
  return (
    <main className="bg-[#1e293b] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title & intro */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold">Gear</h1>
          <p className="text-gray-400">My toolbox</p>
          <p className="text-gray-400 max-w-2xl">
            The gear I use and recommend. Some links are affiliate links that help support my content — at no extra cost to you.
          </p>
        </section>

        {/* Devices */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Devices</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {devices.map((item) => (
              <a
                key={item.Name}
                href={item.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.Image}
                    alt={item.Name}
                    fill
                    className="object-cover rounded-md shadow-md"
                    unoptimized
                  />
                </div>
                <p className="mt-2 font-medium">{item.Name}</p>
                <p className="text-sm text-gray-400">{item.Description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Softwares */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Softwares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softwares.map((item) => (
              <a
                key={item.Name}
                href={item.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full h-48 bg-white rounded-md p-2">
                  <Image
                    src={item.Image}
                    alt={item.Name}
                    fill
                    className="object-contain rounded-md"
                    unoptimized
                  />
                </div>
                <p className="mt-2 font-medium">{item.Name}</p>
                <p className="text-sm text-gray-400">{item.Description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

