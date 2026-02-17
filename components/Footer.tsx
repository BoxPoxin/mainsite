'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    studios: [
      { label: 'Pro — Engineering', href: '/pro' },
      { label: 'Labs — Consumer Tech', href: '/labs' },
      { label: 'Maker — Custom & Bulk', href: '/maker' },
      { label: 'All Products', href: '/products' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/contact' },
    ],
    support: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Refunds', href: '/refund' },
    ],
    legal: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-neo-black relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-animated opacity-20" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-white/10">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-[0.95] font-display">
                Find the right<br />
                <span className="text-neo-yellow">studio for you</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
                Engineering, consumer tech, or custom creations — discover what BoxPox can do for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/pro" className="robot-btn text-sm px-6 py-3">
                  Pro
                  <ArrowRight size={16} />
                </Link>
                <Link href="/labs" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-400 text-neo-black font-bold text-sm rounded-full transition-all duration-300 font-display tracking-wider hover:bg-blue-300">
                  Labs
                  <ArrowRight size={16} />
                </Link>
                <Link href="/maker" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-400 text-neo-black font-bold text-sm rounded-full transition-all duration-300 font-display tracking-wider hover:bg-purple-300">
                  Maker
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-b border-white/10">
          <div className="container py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
              {/* Brand */}
              <div className="col-span-2">
                <Link href="/" className="inline-flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-neo-yellow rounded-full flex items-center justify-center">
                    <Image src="/logo.png?v=2026" alt="BoxPox" width={40} height={40} className="w-7 h-7 object-contain" unoptimized />
                  </div>
                  <span className="text-white font-bold text-xl font-display">BoxPox</span>
                </Link>
                <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                  Three studios — Pro, Labs &amp; Maker — engineering the future, one product at a time.
                </p>
                <div className="flex gap-3">
                  {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:border-neo-yellow hover:text-neo-yellow transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Studios */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-display">Studios</h4>
                <ul className="space-y-3">
                  {footerLinks.studios.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/40 hover:text-neo-yellow transition-colors text-sm inline-flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-display">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/40 hover:text-neo-yellow transition-colors text-sm inline-flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-display">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/40 hover:text-neo-yellow transition-colors text-sm inline-flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-display">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/40 text-sm">
                    <MapPin size={16} className="text-neo-yellow mt-0.5 flex-shrink-0" />
                    <span>1617 Sector 70<br />Mohali, 160071</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/40 text-sm">
                    <Phone size={16} className="text-neo-yellow flex-shrink-0" />
                    <div className="flex flex-col">
                      <a href="tel:+917888601710" className="hover:text-white transition-colors">+91 7888601710</a>
                      <a href="tel:+919835502288" className="text-white/30 text-xs hover:text-white transition-colors">+91 9835502288</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-white/40 text-sm">
                    <Mail size={16} className="text-neo-yellow flex-shrink-0" />
                    <a href="mailto:info@boxpox.in" className="hover:text-white transition-colors">info@boxpox.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-white/30">© {currentYear} BoxPox. All rights reserved.</span>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/30 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-neo-yellow/50 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent mt-px" />
      </div>
    </footer>
  );
}
