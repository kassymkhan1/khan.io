'use client';

import { useState } from 'react';

const posts = []; // Заменишь на свои статьи

export default function BlogPage() {
  const [query, setQuery] = useState('');

  return (
    <main className="bg-[#1e293b] text-gray-200 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Blog</h1>
          <p className="text-gray-400">Posts about code, design, productivity, and more...</p>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-1/2 px-4 py-3 rounded-full bg-white text-gray-800 shadow-md focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="text-gray-400 text-sm">
          {posts.length === 0 ? 'No posts found.' : `${posts.length} post(s) found.`}
        </div>

        {/* Future: list of filtered posts */}
      </div>
    </main>
  );
}

