
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Share2 } from 'lucide-react';

const github_url = 'https://github.com/kassymkhan1';
const youtube_url = 'https://www.youtube.com/channel/UCwQgVeAPJORKHc3uK3_JjZw';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#1e293b] text-gray-300 px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-200 tracking-wide">
          KALZHAN KASSYMKHAN
        </h1>
        <p className="mt-2 text-lg text-gray-400">I write code and make video</p>
      </div>

      {/* Avatar + Socials */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <Image
          src="/logo/avatar.jpg"
          alt="Avatar"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />

        <div className="flex flex-col gap-4">
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-bold w-[140px] text-center hover:opacity-90 transition"
          >
            GITHUB
          </a>
          <a
            href={youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold w-[140px] text-center hover:opacity-90 transition"
          >
            YOUTUBE
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center text-lg text-gray-300 space-y-4 mb-6 px-4">
        <p>
          Hi, I’m <span className="font-semibold text-white">Kassymkhan</span> — a DevOps engineer passionate about
          building scalable infrastructure and shipping things that actually work.
        </p>
        <p>
          I specialize in cloud platforms like AWS and Fly.io, and work daily with tools like Docker, Kubernetes, and CI/CD pipelines.
          My goal is to make deployment boring — in the best possible way.
        </p>
        <p>
          In addition to backend and infrastructure work, I love making things visual — from dashboards to developer tools. I also enjoy creating YouTube videos about code, tech workflows, and personal growth.
        </p>
        <p>
          I’m currently working on a few side projects involving edge proxies, automated deployment pipelines, and games powered by modern web tech.
          If you’re into dev tooling, automation, or just cool nerdy stuff — you’re in the right place.
        </p>
      </div>

      {/* Icons */}
      <div className="flex gap-6 text-gray-300 text-xl">
        <Link href="/home" className="hover:text-white">
          <Mail className="w-6 h-6" />
        </Link>
        <Link href="/home" className="hover:text-white">
          <Share2 className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
}

