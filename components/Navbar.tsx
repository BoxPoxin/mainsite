"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks: { href: string; label: string; external?: boolean }[] = [
    { href: '/pro', label: 'Pro' },
    { href: '/labs', label: 'Labs' },
    { href: 'https://boxpox-2.myshopify.com', label: 'Shop', external: true },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? 'bg-neo-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-2 lg:gap-3">
              <Image src="/logo.png?v=2026" alt="BoxPox" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10 object-contain" priority unoptimized />
              <span className="text-white font-bold text-lg lg:text-xl tracking-tight font-display">BoxPox</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => 
                link.external ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link font-display tracking-wider text-xs">{link.label}</a>
                ) : (
                  <Link key={link.href} href={link.href} className="nav-link font-display tracking-wider text-xs">{link.label}</Link>
                )
              )}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="robot-btn py-3 px-6 text-sm font-display tracking-wider">
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex lg:hidden items-center justify-center text-white active:scale-95 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-neo-black/98 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
        <div className={`relative h-full flex flex-col pt-20 px-5 transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {navLinks.map((link, i) => 
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-semibold transition-all active:scale-[0.98] hover:bg-white/5 ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="text-white">{link.label}</span>
                  <ArrowRight size={18} className="text-white/30" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-semibold transition-all active:scale-[0.98] hover:bg-white/5 ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="text-white">{link.label}</span>
                  <ArrowRight size={18} className="text-white/30" />
                </Link>
              )
            )}
          </nav>

          {/* Quick Actions */}
          <div className="py-6 space-y-3 border-t border-white/10">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="robot-btn w-full justify-center py-5 text-base">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="pb-6 flex items-center justify-center gap-4 text-sm text-white/30">
            <a href="tel:+917888601710" className="hover:text-white/50">+91 7888601710</a>
            <span>•</span>
            <a href="mailto:info@boxpox.in" className="hover:text-white/50">info@boxpox.in</a>
          </div>
        </div>
      </div>
    </>
  );
}
