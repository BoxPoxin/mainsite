'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Cpu, Eye, ArrowRight, CircuitBoard, BrainCircuit, Wifi, Shield, Zap, ChevronRight, Mail, Loader2, CheckCircle, Sparkles } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

export default function Products() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const boxbotRef = useInView();
  const wocalsRef = useInView();

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsLoading(false);
  };

  return (
    <main className="bg-neo-black min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:section-padding">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute inset-0 scan-lines" />
        <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-neo-yellow/10 glow-orb" />
        <div className="absolute bottom-20 right-10 w-52 md:w-80 h-52 md:h-80 bg-blue-500/5 glow-orb" style={{ animationDelay: '2s' }} />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label inline-flex items-center gap-2 mb-5 lg:mb-8">
              <CircuitBoard size={14} />
              OUR PRODUCTS
            </span>

            <h1 className="text-[32px] sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 lg:mb-6 tracking-tight leading-[0.95] font-display">
              The future,<br />
              <span className="text-neo-yellow neon-yellow">in your hands</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-white/50 max-w-xl mx-auto mb-8 lg:mb-12 px-2">
              Consumer robotics and AI-powered wearables that bring next-generation technology into your everyday life.
            </p>

            {/* Notify Form */}
            {isSubscribed ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400">
                <CheckCircle size={20} />
                <span className="font-medium">We&apos;ll notify you when we launch!</span>
              </div>
            ) : (
              <form onSubmit={handleNotify} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="Enter your email for launch updates"
                    className="robot-input flex-1"
                    required
                  />
                  <button type="submit" disabled={isLoading} className="robot-btn whitespace-nowrap">
                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><Mail size={16} /> Notify Me</>}
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BoxBot Detail */}
      <section id="boxbot" ref={boxbotRef.ref} className="py-16 lg:section-padding border-t border-white/[0.06]">
        <div className={`container transition-all duration-1000 ${boxbotRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 dot-pattern-animated opacity-10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-neo-yellow/10 border-2 border-neo-yellow/30 flex items-center justify-center mb-6 animate-float">
                    <Cpu size={48} className="text-neo-yellow sm:hidden" />
                    <Cpu size={64} className="text-neo-yellow hidden sm:block lg:hidden" />
                    <Cpu size={80} className="text-neo-yellow hidden lg:block" />
                  </div>
                  <div className="flex items-center gap-2.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-neo-yellow/60 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                    <span className="text-xs text-white/30 font-display mt-3 tracking-wider">6 AXIS • CONSUMER GRADE</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 px-4 py-2 bg-neo-yellow rounded-xl shadow-lg glow-yellow">
                <p className="text-neo-black font-bold text-sm">Coming Soon</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">
                <Cpu size={14} />
                ROBOTIC ARM
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 leading-[0.95] font-display">
                Box<span className="text-neo-yellow neon-yellow">Bot</span>
              </h2>
              <p className="text-white/50 text-base lg:text-lg mb-8 leading-relaxed">
                A 6 degrees-of-freedom consumer robotic arm designed to bring industrial-grade precision to your desk. Whether you&apos;re a maker, developer, student, or hobbyist — BoxBot is your gateway to robotics.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Zap size={18} />, text: '6DOF Precision' },
                  { icon: <BrainCircuit size={18} />, text: 'AI-Ready Processing' },
                  { icon: <Shield size={18} />, text: 'Force-Limited Safety' },
                  { icon: <Wifi size={18} />, text: 'BLE + Wi-Fi' },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-neo-yellow/10 flex items-center justify-center text-neo-yellow flex-shrink-0">{spec.icon}</div>
                    <span className="text-white/60 text-sm">{spec.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl mb-8">
                <h4 className="text-white font-bold mb-3">Use Cases</h4>
                <div className="space-y-2">
                  {['Automated pick-and-place tasks', 'Drawing, writing, and art creation', 'Educational robotics platform', 'Custom automation workflows'].map((use, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-neo-yellow flex-shrink-0" />
                      <span className="text-white/50 text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wocals Detail */}
      <section id="wocals" ref={wocalsRef.ref} className="py-16 lg:section-padding bg-neo-gray/30 border-t border-white/[0.06]">
        <div className={`container transition-all duration-1000 ${wocalsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className="section-label">
                <Eye size={14} />
                SMART GLASSES
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 leading-[0.95] font-display">
                Wo<span className="text-blue-400 neon-blue">cals</span>
              </h2>
              <p className="text-white/50 text-base lg:text-lg mb-8 leading-relaxed">
                AI-powered smart glasses that blend the digital and physical worlds. Real-time object recognition, voice commands, and contextual information — all in a lightweight, everyday wearable.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Eye size={18} />, text: 'AI Vision Engine' },
                  { icon: <BrainCircuit size={18} />, text: 'On-Device Processing' },
                  { icon: <Sparkles size={18} />, text: 'Lightweight Design' },
                  { icon: <Wifi size={18} />, text: 'Voice Assistant' },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">{spec.icon}</div>
                    <span className="text-white/60 text-sm">{spec.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl mb-8">
                <h4 className="text-white font-bold mb-3">Features</h4>
                <div className="space-y-2">
                  {['Real-time object & text recognition', 'Contextual AI assistant', 'Navigation and wayfinding', 'All-day 12hr battery life'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-blue-400 flex-shrink-0" />
                      <span className="text-white/50 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 dot-pattern-animated opacity-10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-blue-500/10 border-2 border-blue-400/30 flex items-center justify-center mb-6 animate-float">
                    <Eye size={48} className="text-blue-400 sm:hidden" />
                    <Eye size={64} className="text-blue-400 hidden sm:block lg:hidden" />
                    <Eye size={80} className="text-blue-400 hidden lg:block" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-10 h-1 rounded-full bg-blue-400/50" />
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400/50" />
                    <div className="w-8 h-0.5 bg-blue-400/30" />
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400/50" />
                    <div className="w-10 h-1 rounded-full bg-blue-400/50" />
                  </div>
                    <span className="text-xs text-white/30 font-display mt-3 tracking-wider">AI POWERED • ALWAYS ON</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 px-4 py-2 bg-blue-400 rounded-xl shadow-lg">
                <p className="text-neo-black font-bold text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neo-yellow">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neo-black mb-4 font-display">
              Be the first to know
            </h2>
            <p className="text-neo-black/70 text-base sm:text-lg mb-8">
              Join our community and get launch updates, early access, and behind-the-scenes content.
            </p>
            <Link href="/contact" className="robot-btn-dark">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
