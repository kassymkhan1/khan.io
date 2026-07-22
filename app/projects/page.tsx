'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Magic Chess',
    description: 'A strategy-based magical chess game with custom animations built with modern web tech.',
    link: '#',
    tags: ['TypeScript', 'Canvas', 'Game'],
    status: 'In Progress',
  },
  {
    title: 'EdgeProxy',
    description: 'Custom edge proxy service deployed on Fly.io using Envoy for intelligent traffic routing.',
    link: '#',
    tags: ['Go', 'Envoy', 'Fly.io', 'DevOps'],
    status: 'In Progress',
  },
];

const tagColors: Record<string, string> = {
  TypeScript: 'bg-blue-500/20 text-blue-300',
  Go: 'bg-cyan-500/20 text-cyan-300',
  'Fly.io': 'bg-violet-500/20 text-violet-300',
  Envoy: 'bg-teal-500/20 text-teal-300',
  DevOps: 'bg-green-500/20 text-green-300',
  Canvas: 'bg-orange-500/20 text-orange-300',
  Game: 'bg-pink-500/20 text-pink-300',
};

export default function ProjectsPage() {
  const [query, setQuery] = useState('');

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="bg-[#0d1117] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Projects</h1>
          <p className="text-gray-400">Things I&apos;ve built or currently working on.</p>
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full md:w-1/2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/20 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-4 pt-2">
          {filtered.length === 0 ? (
            <p className="text-gray-500 text-sm">No projects found.</p>
          ) : (
            filtered.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="group flex flex-col gap-3 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                  <span className="shrink-0 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${tagColors[tag] ?? 'bg-gray-500/20 text-gray-300'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-gray-300 transition-colors mt-1">
                  <ExternalLink className="w-3 h-3" />
                  View project
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
