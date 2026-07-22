'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, Mail, ArrowRight } from 'lucide-react';

const github_url = 'https://github.com/kassymkhan1';
const youtube_url = 'https://www.youtube.com/channel/UCwQgVeAPJORKHc3uK3_JjZw';

const skills = [
  { label: 'Docker', color: 'bg-blue-500/20 text-blue-300' },
  { label: 'Kubernetes', color: 'bg-indigo-500/20 text-indigo-300' },
  { label: 'AWS', color: 'bg-orange-500/20 text-orange-300' },
  { label: 'Terraform', color: 'bg-purple-500/20 text-purple-300' },
  { label: 'CI/CD', color: 'bg-green-500/20 text-green-300' },
  { label: 'Fly.io', color: 'bg-violet-500/20 text-violet-300' },
  { label: 'Go', color: 'bg-cyan-500/20 text-cyan-300' },
  { label: 'TypeScript', color: 'bg-blue-400/20 text-blue-200' },
  { label: 'Envoy', color: 'bg-teal-500/20 text-teal-300' },
  { label: 'GitHub Actions', color: 'bg-gray-500/20 text-gray-300' },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-300">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm text-emerald-400 font-mono mb-2 tracking-wide">
              Hey, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Kassymkhan
            </h1>
            <p className="text-xl text-gray-400 mt-3">
              DevOps Engineer &amp; Content Creator
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            I build scalable infrastructure, automate everything I can, and share
            what I learn on YouTube. Based in Kazakhstan.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-red-600/30"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="mailto:kassymkhan24@gmail.com"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/10"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl scale-125" />
            <Image
              src="/logo/avatar.jpg"
              alt="Kassymkhan"
              width={200}
              height={200}
              className="relative rounded-full object-cover ring-2 ring-emerald-500/30"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-5 font-mono">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s.label}
              className={`px-3 py-1 rounded-full text-sm font-medium ${s.color}`}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-5 font-mono">
          Explore
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: '/projects', label: 'Projects', desc: "Things I've built" },
            { href: '/blog', label: 'Blog', desc: 'Thoughts & learnings' },
            { href: '/about', label: 'About', desc: 'More about me' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
