'use client';

import Link from 'next/link';
import { ArrowRight, CircuitBoard, Cpu, Code2, Cog, BrainCircuit, Shield, Zap, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

function useInView() {
  const ref = useRef<HTMLElement>(null);
  return { ref, isInView: true };
}

const services = [
  {
    icon: <CircuitBoard size={28} />,
    title: 'PCB Design & Manufacturing',
    desc: 'From schematic capture to multi-layer PCB layout, DFM review, and prototype manufacturing. We handle single and multi-layer boards with quick-turn prototyping.',
    tags: ['Schematic', 'Layout', 'DFM', 'Prototype'],
    number: '01',
  },
  {
    icon: <Cog size={28} />,
    title: 'Product Development',
    desc: 'End-to-end product development from concept to production-ready design. Mechanical enclosures, firmware development, and certification support.',
    tags: ['Concept', 'Mechanical', 'Firmware', 'Certification'],
    number: '02',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'AI & ML Integration',
    desc: 'Embed custom AI/ML models into your hardware products. Edge inference, computer vision, NLP, and predictive analytics for IoT devices.',
    tags: ['Edge AI', 'Vision', 'NLP', 'IoT'],
    number: '03',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Functional Prototyping',
    desc: 'Rapid prototyping using ESP32, STM32, and custom SoCs. 3D printed enclosures, working demos, and investor-ready prototypes.',
    tags: ['ESP32', 'STM32', 'Rapid Proto', 'Demo Ready'],
    number: '04',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Embedded Firmware',
    desc: 'Custom firmware development in C/C++, Rust, and MicroPython. RTOS integration, OTA updates, and secure boot implementations.',
    tags: ['C/C++', 'RTOS', 'OTA', 'Secure Boot'],
    number: '05',
  },
  {
    icon: <Shield size={28} />,
    title: 'Testing & Compliance',
    desc: 'EMC/EMI testing, thermal analysis, and regulatory compliance (CE, FCC, BIS). We ensure your product passes certification first time.',
    tags: ['EMC', 'Thermal', 'CE/FCC', 'BIS'],
    number: '06',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your requirements, constraints, and business goals.' },
  { step: '02', title: 'Architecture', desc: 'System design, component selection, and technical feasibility analysis.' },
  { step: '03', title: 'Development', desc: 'Iterative hardware and firmware development with regular check-ins.' },
  { step: '04', title: 'Validation', desc: 'Testing, compliance, and production optimization before handoff.' },
];

export default function ProPage() {
  const hero = useInView();
  const servicesRef = useInView();
  const processRef = useInView();
  const ctaRef = useInView();

  return (
    <main className="bg-neo-black">
      {/* HERO */}
      <section ref={hero.ref} className="min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0 scan-lines" />
        {/* Schematic grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-yellow/40 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[400px] h-px bg-gradient-to-r from-neo-yellow/20 to-transparent" />
        <div className="absolute top-2/3 right-0 w-[300px] h-px bg-gradient-to-l from-neo-yellow/20 to-transparent" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-neo-yellow/[0.05] glow-orb" />
        <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] bg-neo-yellow/[0.03] glow-orb" style={{ animationDelay: '3s' }} />

        <div className={`container relative z-10 py-12 lg:py-20 transition-all duration-1000 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-neo-yellow/10 border border-neo-yellow/20 rounded-full">
              <Cpu size={14} className="text-neo-yellow" />
              <span className="text-neo-yellow text-xs font-bold font-display tracking-widest">BOXPOX | PRO</span>
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-12">
            <h1 className="text-[42px] sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 lg:mb-8 font-display">
              <span className="text-white block">Engineering</span>
              <span className="text-neo-yellow block neon-yellow">Excellence.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed px-4">
              PCB design, product development, and AI integration for startups and hardware companies. <span className="text-neo-yellow font-semibold">From concept to production.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mb-14 px-4">
            <Link href="/contact" className="robot-btn text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center group">
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="robot-btn-outline text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center">
              View Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto px-2">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '4-Layer', label: 'PCB Capability' },
              { number: '< 7d', label: 'Proto Turnaround' },
              { number: 'ISO', label: 'Quality Standards' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.03] border border-neo-yellow/10 corner-accents">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-neo-yellow tracking-tighter block font-display">{stat.number}</span>
                <span className="stat-label block text-[10px] sm:text-xs lg:text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={servicesRef.ref} className="py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent" />

        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${servicesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <span className="section-label">
              <Zap size={14} />
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-display">
              Full-stack<br />
              <span className="text-neo-yellow neon-yellow">hardware</span> services
            </h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg">
              Everything you need to take a hardware product from idea to manufacturing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {services.map((service, i) => (
              <div key={i} className="tech-card text-center sm:text-left group">
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 text-3xl lg:text-4xl font-black text-white/[0.04] font-display">{service.number}</div>
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-neo-yellow flex items-center justify-center text-neo-black mb-4 lg:mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(255,208,88,0.3)]">
                  {service.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 font-display">{service.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-neo-yellow/60 border border-neo-yellow/10 bg-neo-yellow/5 rounded-full font-display tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={processRef.ref} className="py-16 lg:py-28 bg-neo-gray/40 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent" />

        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${processRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
            <span className="section-label">
              <CircuitBoard size={14} />
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-display">
              How we<br />
              <span className="text-neo-yellow neon-yellow">build</span> it
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-center p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-neo-yellow/10 hover:border-neo-yellow/30 transition-all duration-500">
                  <span className="text-5xl lg:text-6xl font-black text-neo-yellow/20 font-display block mb-4 group-hover:text-neo-yellow/40 transition-colors">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-neo-yellow/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PRO */}
      <section className="py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <span className="section-label mx-auto lg:mx-0">
                <Shield size={14} />
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-display">
                Built for<br />
                <span className="text-neo-yellow neon-yellow">serious</span> hardware
              </h2>
              <div className="space-y-5">
                {[
                  'In-house PCB design and prototyping facility',
                  'ESP32-S3, STM32, and custom SoC expertise',
                  'Schematic review and DFM optimization',
                  'From 1 prototype to 10,000+ unit production',
                  'NDA-protected, confidential development',
                  'Post-launch firmware and hardware support',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 justify-center lg:justify-start group">
                    <CheckCircle2 size={18} className="text-neo-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm sm:text-base group-hover:text-white/80 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-neo-yellow/5 to-transparent border border-neo-yellow/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 scan-lines" />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-3xl bg-neo-yellow/10 border-2 border-neo-yellow/20 flex items-center justify-center">
                    <CircuitBoard size={56} className="text-neo-yellow" />
                  </div>
                  <p className="text-white font-bold text-xl mb-1 font-display">Internal View</p>
                  <p className="text-white/40 text-sm">ESP32-S3 • Multi-layer PCB • Traces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef.ref} className="py-16 lg:py-28 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className={`container relative z-10 transition-all duration-1000 delay-200 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-[0.95] font-display">
              Ready to build<br />
              <span className="text-neo-yellow neon-yellow">your product?</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Let&#39;s discuss your hardware project. Get a free technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4">
              <Link href="/contact" className="robot-btn text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 w-full sm:w-auto justify-center group">
                Start a Conversation
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
