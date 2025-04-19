'use client';

import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gear', href: '/gear' },
];

export default function Toolbar() {
  return (
    <header className="w-full bg-[#1e293b] py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-12">
        {/* Центрированный логотип */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/vader.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl bg-gray-100 p-1"
          />
        </Link>

        {/* Навигация рядом с логотипом */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


