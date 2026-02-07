'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Cpu, Eye, Zap, Shield, CircuitBoard, Wifi, BrainCircuit, Sparkles, ChevronRight, Bot, Glasses, Rocket, Code2, Activity } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';

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

export default function Home() {
  const hero = useInView(0.1);
  const products = useInView();
  const features = useInView();
  const stats = useInView();
  const mission = useInView();
  const partners = useInView(0.1);

  return (
    <main className="bg-neo-black">
      {/* HERO SECTION */}
      <section ref={hero.ref} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0 hex-pattern" />
        <div className="absolute inset-0 scan-lines" />
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-neo-yellow/[0.07] glow-orb" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-blue-500/[0.05] glow-orb" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[15%] right-[10%] w-2 h-2 rounded-full bg-neo-yellow/40 animate-pulse" />
        <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] right-[15%] w-1 h-1 rounded-full bg-neo-yellow/30 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className={`container relative z-10 py-12 lg:py-20 transition-all duration-1000 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Top badge */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 px-4 lg:px-5 py-2 lg:py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-green-500"></span>
              </span>
              <span className="text-white/70 text-xs lg:text-sm font-medium font-display tracking-wider">NOW BUILDING THE FUTURE</span>
            </div>
          </div>

          {/* Hero headline */}
          <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-12">
            <h1 className="text-[42px] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px] font-black leading-[0.9] tracking-tight mb-6 lg:mb-8 font-display">
              <span className="text-white block">Robotics for</span>
              <span className="text-neo-yellow block neon-yellow">Everyone.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed px-4">
              Consumer robotics &amp; smart electronics designed to seamlessly integrate into your world. Built by <span className="text-neo-yellow font-semibold">BoxPox</span>.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mb-14 lg:mb-20 px-4">
            <Link href="/products" className="robot-btn text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center group">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="robot-btn-outline text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center">
              Our Story
            </Link>
          </div>

          {/* Hero stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto px-2">
            {[
              { number: '6', label: 'Degrees of Freedom', color: 'neo-yellow' },
              { number: 'AI', label: 'Powered Vision', color: 'blue-400' },
              { number: '2', label: 'Products Launching', color: 'neo-yellow' },
              { number: '∞', label: 'Possibilities', color: 'blue-400' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] corner-accents hover:border-white/[0.12] transition-all duration-500">
                <span className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black text-${stat.color} tracking-tighter block font-display`}>{stat.number}</span>
                <span className="stat-label block text-[10px] sm:text-xs lg:text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="py-6 border-y border-white/[0.06] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neo-black via-transparent to-neo-black z-10 pointer-events-none" />
        <div className="marquee-container">
          <div className="marquee-content">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 lg:gap-12">
                {['ROBOTICS', 'AI VISION', 'SMART GLASSES', 'ROBOTIC ARM', '6DOF', 'CONSUMER ELECTRONICS', 'INNOVATION', 'BOXBOT', 'WOCALS'].map((word, i) => (
                  <span key={`${setIdx}-${i}`} className="flex items-center gap-8 lg:gap-12">
                    <span className="text-white/20 font-black text-sm lg:text-base uppercase tracking-widest whitespace-nowrap font-display">{word}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neo-yellow/40 flex-shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section ref={products.ref} className="py-16 lg:section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${products.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="section-label">
              <CircuitBoard size={14} />
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-display">
              Machines that<br />
              <span className="text-neo-yellow neon-yellow">understand</span> you
            </h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg px-2">
              Two groundbreaking products designed to bring robotics and AI into everyday life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* BoxBot Card */}
            <Link href="/products#boxbot" className="group block">
              <div className="relative rounded-3xl overflow-hidden tech-card line-scan p-6 sm:p-8 lg:p-10">
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-neo-gray to-neo-black border border-white/[0.06] mb-6 lg:mb-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 hex-pattern opacity-30" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-neo-yellow/10 border-2 border-neo-yellow/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-glow-ring">
                      <Cpu size={36} className="text-neo-yellow sm:hidden" />
                      <Cpu size={48} className="text-neo-yellow hidden sm:block lg:hidden" />
                      <Cpu size={56} className="text-neo-yellow hidden lg:block" />
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neo-yellow/60 group-hover:bg-neo-yellow transition-colors" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-white/30 font-display mt-2 tracking-wider">6 DEGREES OF FREEDOM</span>
                  </div>
                  <div className="absolute top-4 left-4 robot-badge text-[10px] sm:text-xs">Coming Soon</div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-neo-yellow transition-colors font-display">BoxBot</h3>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">A 6DOF consumer robotic arm that brings industrial precision to your desk. Program, automate, and create.</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-neo-yellow group-hover:bg-neo-yellow/10 transition-all">
                    <ArrowUpRight size={18} className="text-white/40 group-hover:text-neo-yellow transition-colors" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['6DOF', 'Programmable', 'Desktop', 'AI Ready'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] sm:text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Wocals Card */}
            <Link href="/products#wocals" className="group block">
              <div className="relative rounded-3xl overflow-hidden tech-card p-6 sm:p-8 lg:p-10 hover:border-blue-400/20">
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-neo-gray to-neo-black border border-white/[0.06] mb-6 lg:mb-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 hex-pattern opacity-30" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-blue-500/10 border-2 border-blue-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Eye size={36} className="text-blue-400 sm:hidden" />
                      <Eye size={48} className="text-blue-400 hidden sm:block lg:hidden" />
                      <Eye size={56} className="text-blue-400 hidden lg:block" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-1 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors" />
                      <div className="w-3 h-3 rounded-full border-2 border-blue-400/50 group-hover:border-blue-400 transition-colors" />
                      <div className="w-6 h-0.5 bg-blue-400/30" />
                      <div className="w-3 h-3 rounded-full border-2 border-blue-400/50 group-hover:border-blue-400 transition-colors" />
                      <div className="w-8 h-1 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-white/30 font-display mt-3 tracking-wider">AI POWERED VISION</span>
                  </div>
                  <div className="absolute top-4 left-4 robot-badge text-[10px] sm:text-xs">Coming Soon</div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors font-display">Wocals</h3>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">AI-powered smart glasses that augment your world with real-time intelligence. See more, know more.</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all">
                    <ArrowUpRight size={18} className="text-white/40 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['AI Vision', 'Smart Display', 'Lightweight', 'Voice Control'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] sm:text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ENGINEERING FEATURES */}
      <section ref={features.ref} className="py-16 lg:section-padding bg-neo-gray/40 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent" />
        
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${features.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <span className="section-label">
              <Zap size={14} />
              ENGINEERED FOR TOMORROW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-display">
              Built <span className="text-neo-yellow neon-yellow">different</span>,<br />
              by design
            </h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg px-2">
              Every component is optimized for real-world performance, safety, and seamless integration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { icon: <BrainCircuit size={26} />, title: "On-Device AI", desc: "Local processing for instant responses. Your data stays private, your experience stays fast.", number: "01" },
              { icon: <CircuitBoard size={26} />, title: "Precision Hardware", desc: "Aerospace-grade components deliver micron-level accuracy in every movement and interaction.", number: "02" },
              { icon: <Wifi size={26} />, title: "Seamless Connectivity", desc: "BLE, Wi-Fi, and cloud sync work together so your devices are always in harmony.", number: "03" },
              { icon: <Shield size={26} />, title: "Safety First", desc: "Collision detection, force limiting, and smart sensors keep you and your environment safe.", number: "04" },
              { icon: <Code2 size={26} />, title: "Open SDK", desc: "Developer-friendly APIs and SDKs let you build custom applications and integrations.", number: "05" },
              { icon: <Rocket size={26} />, title: "Future-Proof", desc: "OTA updates continuously add new features and capabilities. Your device gets better with time.", number: "06" },
            ].map((feature, i) => (
              <div key={i} className="tech-card text-center sm:text-left group">
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 text-3xl lg:text-4xl font-black text-white/[0.04] font-display">{feature.number}</div>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-neo-yellow flex items-center justify-center text-neo-black mb-4 lg:mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(255,208,88,0.3)]">{feature.icon}</div>
                <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 font-display">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section ref={stats.ref} className="py-16 lg:py-24 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${stats.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {[
              { number: '6', suffix: 'DOF', desc: 'Degrees of freedom in BoxBot' },
              { number: '< 1', suffix: 'ms', desc: 'AI inference latency' },
              { number: '12', suffix: 'hr', desc: 'Battery life on Wocals' },
              { number: '360', suffix: '°', desc: 'Spatial awareness' },
            ].map((stat, i) => (
              <div key={i} className={`text-center py-4 lg:py-0 ${i < 3 ? 'lg:border-r lg:border-white/[0.06]' : ''}`}>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter font-display">{stat.number}</span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neo-yellow font-display">{stat.suffix}</span>
                </div>
                <p className="text-white/40 text-xs sm:text-sm mt-1 lg:mt-2">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK / CAPABILITIES - NEW SECTION */}
      <section ref={partners.ref} className="py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-10" />
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${partners.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-10 lg:mb-14">
            <span className="section-label">
              <Activity size={14} />
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-3">
              What powers <span className="text-neo-yellow">our tech</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {[
              { icon: <Bot size={24} />, label: 'ROS2 Integration', sub: 'Robotics OS' },
              { icon: <BrainCircuit size={24} />, label: 'Neural Engine', sub: 'Edge AI' },
              { icon: <Glasses size={24} />, label: 'AR Framework', sub: 'Mixed Reality' },
              { icon: <Code2 size={24} />, label: 'Python SDK', sub: 'Open Source' },
            ].map((cap, i) => (
              <div key={i} className="group p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-neo-yellow/20 transition-all duration-500 text-center">
                <div className="w-12 h-12 rounded-xl bg-neo-yellow/10 flex items-center justify-center text-neo-yellow mx-auto mb-3 group-hover:bg-neo-yellow group-hover:text-neo-black transition-all duration-300">
                  {cap.icon}
                </div>
                <h4 className="font-display font-bold text-white text-sm lg:text-base mb-0.5">{cap.label}</h4>
                <p className="text-white/30 text-xs font-display tracking-wider">{cap.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / WHY BOXPOX */}
      <section ref={mission.ref} className="py-16 lg:section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${mission.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <span className="section-label mx-auto lg:mx-0">
                <Sparkles size={14} />
                WHY BOXPOX
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 leading-[0.95] font-display">
                Making robots<br />
                <span className="text-neo-yellow neon-yellow">useful</span>, fast
              </h2>
              <p className="text-white/50 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We believe robotics shouldn&apos;t be locked in labs and factories. Our mission is to build consumer-grade robots and smart devices that are accessible, affordable, and genuinely useful.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Consumer-first design philosophy',
                  'Open platform for developers & makers',
                  'Safety certified for home use',
                  'Continuous updates via OTA',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center lg:justify-start group">
                    <div className="w-6 h-6 rounded-full bg-neo-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neo-yellow/40 transition-colors">
                      <ChevronRight size={12} className="text-neo-yellow" />
                    </div>
                    <span className="text-white/60 text-sm sm:text-base group-hover:text-white/80 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="robot-btn w-full sm:w-auto justify-center sm:inline-flex group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-border flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 hex-pattern opacity-20" />
                <div className="absolute inset-0 scan-lines" />
                <div className="relative z-10 text-center p-6 lg:p-8">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-3xl bg-neo-yellow/10 border-2 border-neo-yellow/20 flex items-center justify-center animate-float">
                    <CircuitBoard size={44} className="text-neo-yellow sm:hidden" />
                    <CircuitBoard size={56} className="text-neo-yellow hidden sm:block lg:hidden" />
                    <CircuitBoard size={64} className="text-neo-yellow hidden lg:block" />
                  </div>
                  <p className="text-white font-bold text-lg lg:text-xl mb-1 font-display">Box of Possibility</p>
                  <p className="text-white/40 text-sm">Robotics &amp; Consumer Electronics</p>
                </div>
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs text-white/40 font-display tracking-wider">EST. 2024</div>
                <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-neo-yellow/10 border border-neo-yellow/20 rounded-full text-[10px] sm:text-xs text-neo-yellow font-display tracking-wider">INDIA 🇮🇳</div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-neo-yellow/30 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-neo-yellow/30 rounded-br-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* NEWSLETTER */}
      <Newsletter />
    </main>
  );
}
