"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, CircuitBoard, User, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (pathname.startsWith('/admin')) return null;

  const navItems = [
    { href: '/', icon: Home, label: 'Home', isActive: pathname === '/' },
    { href: '/products', icon: CircuitBoard, label: 'Products', isActive: pathname === '/products' },
    { href: '/contact', icon: MessageSquare, label: 'Contact', isActive: pathname === '/contact' },
    { href: user ? '/account' : '/signin', icon: User, label: user ? 'Account' : 'Sign In', isActive: pathname === '/account' || pathname === '/signin' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[1000] lg:hidden">
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-neo-black to-transparent pointer-events-none" />
      <div className="bg-neo-black/98 backdrop-blur-xl border-t border-white/10 safe-bottom">
        <div className="flex items-center justify-evenly px-1 py-2 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center w-16 py-1.5 rounded-xl transition-all active:scale-95 ${
                  item.isActive ? 'text-neo-yellow bg-neo-yellow/10' : 'text-white/50'
                }`}
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
