'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Palette, Rocket, Zap, ChevronRight, CircuitBoard, Eye, Gift } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) { setIsInView(true); return; }

    // Immediate check — element may already be visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsInView(true);
      return;
    }

    // Fallback timer — ensure content is always shown
    const timer = setTimeout(() => setIsInView(true), 800);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); clearTimeout(timer); } },
      { threshold, rootMargin: '50px' }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [threshold]);

  return { ref, isInView };
}

export default function Home() {
  const hero = useInView(0.1);
  const gateway = useInView(0.1);
  const highlights = useInView(0.1);

  return (
    <main className="bg-neo-black">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Simple, clear headline + subtitle
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={hero.ref} className="min-h-[75vh] flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neo-gray/50 to-neo-black" />

        <div className={`container relative z-10 py-16 lg:py-24 transition-all duration-1000 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[42px] sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 lg:mb-8 font-display">
              <span className="text-white block">Box of</span>
              <span className="text-neo-yellow block">Possibility.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 px-4">
              Three specialized studios under one roof — pick the one that fits your needs.
            </p>

            {/* Quick-jump buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
              <Link href="/pro" className="robot-btn text-sm px-7 py-3.5 w-full sm:w-auto justify-center group">
                <Cpu size={16} />
                Engineering
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/labs" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-400 text-neo-black font-bold text-sm rounded-full transition-all font-display tracking-wider hover:bg-blue-300 w-full sm:w-auto group">
                <Rocket size={16} />
                Consumer Tech
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/maker" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-400 text-neo-black font-bold text-sm rounded-full transition-all font-display tracking-wider hover:bg-purple-300 w-full sm:w-auto group">
                <Palette size={16} />
                Custom & Gifts
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Simple divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          OUR STUDIOS — Three clear cards
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={gateway.ref} className="py-16 lg:py-24 relative">
        <div className={`container transition-all duration-1000 delay-200 ${gateway.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-neo-yellow text-xs font-bold uppercase tracking-[0.2em] mb-3 font-display">Our Studios</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-3">
              What are you looking for?
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto">
              Each studio serves a different purpose. Explore the one that matches your needs.
            </p>
          </div>

          {/* Studio Cards — clean layout */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {/* PRO */}
            <Link href="/pro" className="group block">
              <div className="rounded-2xl border border-neo-yellow/15 hover:border-neo-yellow/40 bg-neo-gray/30 p-6 lg:p-8 h-full transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-neo-yellow/10 flex items-center justify-center text-neo-yellow group-hover:bg-neo-yellow group-hover:text-neo-black transition-all">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Pro Studio</h3>
                    <p className="text-neo-yellow text-xs font-display tracking-wider">B2B ENGINEERING</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  PCB design, product development, AI integration & prototyping for startups and hardware companies.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['PCB Design', 'AI Integration', 'Firmware', 'Prototyping'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-neo-yellow/60 border border-neo-yellow/10 bg-neo-yellow/5 rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-neo-yellow text-sm font-bold font-display">
                  Explore Pro
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* LABS */}
            <Link href="/labs" className="group block">
              <div className="rounded-2xl border border-blue-400/15 hover:border-blue-400/40 bg-neo-gray/30 p-6 lg:p-8 h-full transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-neo-black transition-all">
                    <Rocket size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Labs Studio</h3>
                    <p className="text-blue-400 text-xs font-display tracking-wider">CONSUMER TECH</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  6DOF Robotic Arm (BoxBot), AI Smartglasses (Wocals) and cutting-edge wearables for tech enthusiasts.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['BoxBot', 'Wocals', 'Robotics', 'AI Wearables'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-blue-400/60 border border-blue-400/10 bg-blue-400/5 rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-bold font-display">
                  Explore Labs
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* MAKER */}
            <Link href="/maker" className="group block">
              <div className="rounded-2xl border border-purple-400/15 hover:border-purple-400/40 bg-neo-gray/30 p-6 lg:p-8 h-full transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-neo-black transition-all">
                    <Palette size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Maker Studio</h3>
                    <p className="text-purple-400 text-xs font-display tracking-wider">CUSTOM & BULK</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  3D Printed Lamps, Keychains, Personalized Gifts, and Bulk Orders — shop or customize your own!
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['3D Printing', 'Lamps', 'Gifts', 'Bulk Orders'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-purple-400/60 border border-purple-400/10 bg-purple-400/5 rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-bold font-display">
                  Browse Products
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HIGHLIGHTS — Quick glance at what each studio offers
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={highlights.ref} className="py-16 lg:py-24 bg-neo-gray/20 relative">
        <div className={`container transition-all duration-1000 delay-200 ${highlights.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-3 font-display">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-3">
              One brand, <span className="text-neo-yellow">three worlds</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto">
              Whether you need engineering help, consumer tech, or custom gifts — we&apos;ve got you.
            </p>
          </div>

          {/* Highlight rows */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Pro highlight */}
            <div className="flex items-start gap-5 p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-neo-yellow/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neo-yellow/10 flex items-center justify-center text-neo-yellow flex-shrink-0">
                <CircuitBoard size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base mb-1 font-display">Hardware Engineering & PCB Design</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  From schematic to production. We design PCBs, develop firmware, build prototypes, and handle certification for your hardware product.
                </p>
              </div>
              <Link href="/pro" className="hidden sm:flex items-center gap-1 text-neo-yellow text-xs font-bold font-display whitespace-nowrap flex-shrink-0">
                Learn more <ChevronRight size={14} />
              </Link>
            </div>

            {/* Labs highlight */}
            <div className="flex items-start gap-5 p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-400/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Eye size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base mb-1 font-display">Robotics & AI Wearables</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Two upcoming products — BoxBot (6DOF robotic arm) and Wocals (AI smart glasses). Built for creators and early adopters.
                </p>
              </div>
              <Link href="/labs" className="hidden sm:flex items-center gap-1 text-blue-400 text-xs font-bold font-display whitespace-nowrap flex-shrink-0">
                Learn more <ChevronRight size={14} />
              </Link>
            </div>

            {/* Maker highlight */}
            <div className="flex items-start gap-5 p-5 lg:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-400/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Gift size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base mb-1 font-display">Custom 3D Printing & Gifts</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Moon lamps, lithophanes, keychains, figurines and more. Perfect for personal gifts, corporate events, or bulk orders.
                </p>
              </div>
              <Link href="/maker" className="hidden sm:flex items-center gap-1 text-purple-400 text-xs font-bold font-display whitespace-nowrap flex-shrink-0">
                Shop now <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Simple about CTA */}
          <div className="text-center mt-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-display transition-colors group">
              <Zap size={14} className="text-neo-yellow" />
              Learn more about BoxPox
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* FAQ */}
      <FAQ />

      {/* NEWSLETTER */}
      <Newsletter />
    </main>
  );
}
