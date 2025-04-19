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
            <span className="flex justify-center items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.302 
                  3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 
                  1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 
                  1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.931 
                  0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 
                  0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 
                  3.003-.404 1.02.005 2.047.138 
                  3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 
                  1.653.242 2.873.118 3.176.77.84 1.233 
                  1.911 1.233 3.221 0 4.609-2.807 
                  5.628-5.479 5.921.43.372.823 1.102.823 
                  2.222 0 1.604-.015 2.896-.015 
                  3.286 0 .319.216.694.825.576C20.565 
                  21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              GITHUB
            </span>
          </a>
          <a
            href={youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold w-[140px] text-center hover:opacity-90 transition"
          >
            <span className="flex justify-center items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184A2.99 2.99 0 0 0 17.48 2.64C15.42 2.5 12 2.5 12 2.5s-3.42 0-5.48.14a2.99 2.99 0 0 0-2.136.544A3.005 3.005 0 0 0 3.5 5.48C3.36 7.54 3.36 10.96 3.36 10.96s0 3.42.14 5.48a2.99 2.99 0 0 0 .544 2.136 3.005 3.005 0 0 0 2.136.544c2.06.14 5.48.14 5.48.14s3.42 0 5.48-.14a2.99 2.99 0 0 0 2.136-.544 3.005 3.005 0 0 0 .544-2.136c.14-2.06.14-5.48.14-5.48s0-3.42-.14-5.48a2.99 2.99 0 0 0-.544-2.136ZM10 14.8V7.2l6.4 3.8Z" />
              </svg>
              YOUTUBE
            </span>
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center text-lg text-gray-300 space-y-4 mb-6 px-4">
        <p>
          Hi, I'm <span className="font-semibold text-white">Kassymkhan</span> — a DevOps engineer passionate about
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
          I'm currently working on a few side projects involving edge proxies, automated deployment pipelines, and games powered by modern web tech.
          If you're into dev tooling, automation, or just cool nerdy stuff — you're in the right place.
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

