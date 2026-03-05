"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, CircuitBoard, Palette, Cpu, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) return null;

  const navItems = [
    { href: '/', icon: Home, label: 'Home', isActive: pathname === '/', external: false },
    { href: '/pro', icon: CircuitBoard, label: 'Pro', isActive: pathname === '/pro', external: false },
    { href: '/labs', icon: Cpu, label: 'Labs', isActive: pathname === '/labs', external: false },
    { href: 'https://boxpox-2.myshopify.com', icon: ShoppingBag, label: 'Shop', isActive: false, external: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[1000] lg:hidden">
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-neo-black to-transparent pointer-events-none" />
      <div className="bg-neo-black/98 backdrop-blur-xl border-t border-white/10 safe-bottom">
        <div className="flex items-center justify-evenly px-1 py-2 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const className = `relative flex flex-col items-center justify-center w-16 py-1.5 rounded-xl transition-all active:scale-95 ${
              item.isActive ? 'text-neo-yellow bg-neo-yellow/10' : 'text-white/50'
            }`;
            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <Icon size={20} strokeWidth={item.isActive ? 2.5 : 1.5} />
                <span className={`text-[9px] font-semibold mt-0.5 ${item.isActive ? 'text-neo-yellow' : 'text-white/40'}`}>
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={className}
              >
                <Icon size={20} strokeWidth={item.isActive ? 2.5 : 1.5} />
                <span className={`text-[9px] font-semibold mt-0.5 ${item.isActive ? 'text-neo-yellow' : 'text-white/40'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
