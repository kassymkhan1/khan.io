'use client';

import { useState } from 'react';
import { PenLine } from 'lucide-react';

const posts: { title: string; date: string; summary: string; slug: string }[] = [];

export default function BlogPage() {
  const [query, setQuery] = useState('');

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="bg-[#0d1117] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Blog</h1>
          <p className="text-gray-400">Posts about code, DevOps, productivity, and more.</p>
        </div>

        <input
          type="text"
          placeholder="Search posts..."
          className="w-full md:w-1/2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/20 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <PenLine className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-gray-400 font-medium">No posts yet</p>
            <p className="text-gray-600 text-sm max-w-xs">
              Posts are coming soon. Check back later or follow on YouTube for the latest content.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-white font-semibold">{post.title}</h2>
                    <p className="text-gray-400 text-sm">{post.summary}</p>
                  </div>
                  <span className="shrink-0 text-xs text-gray-500">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
