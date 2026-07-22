'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gear', href: '/gear' },
];

export default function Toolbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#0d1117]/80 border-b border-white/5 py-4 px-6 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex items-center gap-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/vader.png"
            alt="Logo"
            width={34}
            height={34}
            className="rounded-xl bg-gray-100 p-1"
          />
        </Link>

        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
