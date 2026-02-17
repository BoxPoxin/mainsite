'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Cpu, Eye, Rocket, BrainCircuit, Wifi, Zap, ChevronRight, Bot, Glasses, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) { setIsInView(true); return; }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { setIsInView(true); return; }
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

const products = [
  {
    name: 'BoxBot',
    tagline: '6DOF Robotic Arm',
    desc: 'A six-degree-of-freedom consumer robotic arm that brings industrial precision to your desk. Program it, automate tasks, and create with unmatched dexterity.',
    icon: <Cpu size={48} />,
    tags: ['6DOF', 'Programmable', 'Desktop', 'AI Ready'],
    status: 'Coming Soon',
    color: 'blue',
    features: ['6-axis articulation', 'Sub-millimeter precision', 'Python SDK', 'ROS2 compatible'],
  },
  {
    name: 'Wocals',
    tagline: 'AI Smart Glasses',
    desc: 'AI-powered smart glasses that augment your reality with real-time intelligence. See more, know more, do more — all hands-free.',
    icon: <Eye size={48} />,
    tags: ['AI Vision', 'Smart Display', 'Lightweight', 'Voice Control'],
    status: 'Coming Soon',
    color: 'cyan',
    features: ['On-device AI processing', '12hr battery life', 'AR overlays', '360° spatial audio'],
  },
];

const techStack = [
  { icon: <Bot size={24} />, label: 'ROS2 Integration', sub: 'Robotics OS' },
  { icon: <BrainCircuit size={24} />, label: 'Neural Engine', sub: 'Edge AI' },
  { icon: <Glasses size={24} />, label: 'AR Framework', sub: 'Mixed Reality' },
  { icon: <Smartphone size={24} />, label: 'Companion App', sub: 'iOS & Android' },
  { icon: <Wifi size={24} />, label: 'Cloud Sync', sub: 'BLE + WiFi' },
  { icon: <Zap size={24} />, label: 'OTA Updates', sub: 'Always Current' },
];

export default function LabsPage() {
  const hero = useInView(0.1);
  const productsRef = useInView(0.1);
  const techRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <main className="bg-neo-black">
      {/* HERO */}
      <section ref={hero.ref} className="min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0 hex-pattern" />
        <div className="absolute inset-0 scan-lines" />
        {/* Blue accent orbs */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-blue-500/[0.08] glow-orb" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-400/[0.06] glow-orb" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-blue-400/50 animate-pulse" />
        <div className="absolute top-[50%] left-[8%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[25%] right-[10%] w-1 h-1 rounded-full bg-blue-400/30 animate-pulse" style={{ animationDelay: '3s' }} />

        <div className={`container relative z-10 py-12 lg:py-20 transition-all duration-1000 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-400/10 border border-blue-400/20 rounded-full">
              <Rocket size={14} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-bold font-display tracking-widest">BOXPOX | LABS</span>
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-12">
            <h1 className="text-[42px] sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 lg:mb-8 font-display">
              <span className="text-white block">Future</span>
              <span className="text-blue-400 block neon-blue">Technology.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed px-4">
              Consumer robotics and AI-powered wearables designed for <span className="text-blue-400 font-semibold">tech enthusiasts and early adopters</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mb-14 px-4">
            <Link href="/products" className="inline-flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-blue-400 text-neo-black font-bold text-base lg:text-lg rounded-full transition-all duration-300 font-display tracking-wider hover:bg-blue-300 hover:scale-105 w-full sm:w-auto group">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="robot-btn-outline text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center">
              Our Story
            </Link>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto px-2">
            {[
              { number: '6', label: 'Degrees of Freedom' },
              { number: 'AI', label: 'Powered Vision' },
              { number: '2', label: 'Products Launching' },
              { number: '∞', label: 'Possibilities' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.03] border border-blue-400/10 corner-accents">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 tracking-tighter block font-display">{stat.number}</span>
                <span className="stat-label block text-[10px] sm:text-xs lg:text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section ref={productsRef.ref} className="py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${productsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 font-display">
              <Zap size={14} />
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-display">
              Machines that<br />
              <span className="text-blue-400 neon-blue">understand</span> you
            </h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg">
              Two groundbreaking products designed to bring robotics and AI into everyday life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <div key={i} className="group">
                <div className="relative rounded-3xl overflow-hidden border border-blue-400/10 hover:border-blue-400/30 transition-all duration-700 hover:-translate-y-1" style={{ boxShadow: 'none' }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 hex-pattern opacity-20" />

                  <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                    {/* Product visual */}
                    <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-neo-gray to-neo-black border border-white/[0.06] mb-6 lg:mb-8 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 hex-pattern opacity-30" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full ${i === 0 ? 'bg-blue-500/10 border-blue-400/30' : 'bg-cyan-500/10 border-cyan-400/30'} border-2 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                          <span className={i === 0 ? 'text-blue-400' : 'text-cyan-400'}>{product.icon}</span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-white/30 font-display mt-2 tracking-wider">{product.tagline.toUpperCase()}</span>
                      </div>
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-1.5 bg-blue-400 text-neo-black text-xs font-bold uppercase tracking-wider rounded-full font-display">{product.status}</div>
                    </div>

                    {/* Product info */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:${i === 0 ? 'text-blue-400' : 'text-cyan-400'} transition-colors font-display`}>{product.name}</h3>
                        <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">{product.desc}</p>
                      </div>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border ${i === 0 ? 'border-blue-400/20 group-hover:border-blue-400 group-hover:bg-blue-400/10' : 'border-cyan-400/20 group-hover:border-cyan-400 group-hover:bg-cyan-400/10'} flex items-center justify-center flex-shrink-0 transition-all`}>
                        <ArrowUpRight size={18} className={`${i === 0 ? 'text-blue-400/40 group-hover:text-blue-400' : 'text-cyan-400/40 group-hover:text-cyan-400'} transition-colors`} />
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-white/40">
                          <ChevronRight size={12} className="text-blue-400" />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[10px] sm:text-xs font-medium text-blue-400/60 bg-blue-400/5 border border-blue-400/10 rounded-full font-display tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section ref={techRef.ref} className="py-16 lg:py-28 bg-neo-gray/40 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${techRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 font-display">
              <BrainCircuit size={14} />
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-3">
              What powers <span className="text-blue-400 neon-blue">our tech</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {techStack.map((cap, i) => (
              <div key={i} className="group p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-blue-400/10 hover:border-blue-400/30 transition-all duration-500 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 mx-auto mb-3 group-hover:bg-blue-400 group-hover:text-neo-black transition-all duration-300">
                  {cap.icon}
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-0.5">{cap.label}</h4>
                <p className="text-white/30 text-xs font-display tracking-wider">{cap.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef.ref} className="py-16 lg:py-28 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-[0.95] font-display">
              Ready to explore the<br />
              <span className="text-blue-400 neon-blue">future of tech?</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Join the waitlist for BoxBot and Wocals. Be the first to experience the next generation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4">
              <Link href="/products" className="inline-flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-blue-400 text-neo-black font-bold text-base lg:text-lg rounded-full transition-all duration-300 font-display tracking-wider hover:bg-blue-300 hover:scale-105 w-full sm:w-auto group">
                View All Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/" className="robot-btn-outline text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center group">
                Back to Home
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
