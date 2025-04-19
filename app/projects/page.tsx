'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Magic Chess',
    description: 'A strategy-based magical chess game with custom animations.',
    link: '#',
  },
  {
    title: 'EdgeProxy',
    description: 'Custom edge proxy service with Fly.io and Envoy.',
    link: '#',
  },
];

export default function ProjectsPage() {
  const [query, setQuery] = useState('');

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="bg-[#1e293b] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Projects</h1>
          <p className="text-gray-400">Things I’ve built or currently working on.</p>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-1/2 px-4 py-3 rounded-full bg-white text-gray-800 shadow-md focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {filtered.length === 0 ? (
            <p className="text-gray-400">No projects found.</p>
          ) : (
            filtered.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="border border-gray-700 rounded-md p-4 hover:bg-gray-800 transition"
              >
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </a>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

