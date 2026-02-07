import Link from 'next/link';
import { Target, Lightbulb, Cpu, Globe, ArrowRight, Sparkles, CircuitBoard, Eye } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target size={28} />, title: "Purpose-Driven", desc: "Every product solves a real problem. No gimmicks, just thoughtful innovation that matters." },
    { icon: <Cpu size={28} />, title: "Precision Built", desc: "Micron-level accuracy in every component. Built to last, designed to perform." },
    { icon: <Globe size={28} />, title: "Globally Minded", desc: "Products designed for humans everywhere. Inclusive, accessible, universal." },
    { icon: <Lightbulb size={28} />, title: "Future-Ready", desc: "Modular by design. Update, upgrade, evolve without waste." },
  ];

  const milestones = [
    { year: "2024", title: "Founded", desc: "BoxPox was born with a vision to democratize robotics." },
    { year: "2025", title: "R&D Phase", desc: "Development of BoxBot and Wocals begins in-house." },
    { year: "2026", title: "Product Launch", desc: "BoxBot and Wocals prepare for consumer launch." },
    { year: "Beyond", title: "Global Scale", desc: "Expanding the product line and reaching markets worldwide." },
  ];

  return (
    <main className="bg-neo-black min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute inset-0 scan-lines" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-neo-yellow/10 glow-orb" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">
              <Sparkles size={14} />
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[0.9] font-display">
              The Box of<br />
              <span className="text-neo-yellow neon-yellow">Possibility</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              We&apos;re a team of engineers, designers, and dreamers building consumer robotics and AI-powered electronics that make the future accessible today.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-neo-gray/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 dot-pattern-animated opacity-10" />
                <div className="relative z-10 flex flex-col items-center gap-6 p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neo-yellow/10 border border-neo-yellow/20 flex items-center justify-center">
                      <Cpu size={32} className="text-neo-yellow" />
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                      <Eye size={32} className="text-blue-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-1">BoxBot + Wocals</p>
                    <p className="text-white/40 text-sm">The future of human-machine interaction</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-neo-yellow rounded-2xl p-4 max-w-[200px] glow-yellow">
                <div className="flex items-center gap-2 mb-1.5">
                  <CircuitBoard size={18} className="text-neo-black" />
                  <span className="font-bold text-neo-black text-sm">Made in India</span>
                </div>
                <p className="text-xs text-neo-black/70">Designed and engineered with precision.</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">
                <Target size={14} />
                OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[0.95] font-display">
                Bringing robotics<br />
                <span className="text-neo-yellow neon-yellow">to everyone</span>
              </h2>
              <p className="text-base lg:text-lg text-white/50 leading-relaxed mb-6">
                At BoxPox, we believe robotics and AI shouldn&apos;t be confined to research labs and factories. We&apos;re building consumer-grade products that bring these technologies into homes, classrooms, and workshops.
              </p>
              <p className="text-base lg:text-lg text-white/50 leading-relaxed mb-8">
                Our approach combines precision engineering with human-centered design. Every product goes through hundreds of iterations before it reaches your hands.
              </p>

              <div className="grid grid-cols-2 gap-4 p-6 bg-white/[0.03] rounded-2xl border border-white/[0.06]">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-black text-white">2</span>
                  <span className="stat-label block">Products</span>
                </div>
                <div className="text-center border-l border-white/[0.06]">
                  <span className="text-3xl sm:text-4xl font-black text-neo-yellow">∞</span>
                  <span className="stat-label block">Possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="section-label">
              <Lightbulb size={14} />
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display">
              What We <span className="text-neo-yellow neon-yellow">Stand For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value, i) => (
              <div key={i} className="feature-card text-center sm:text-left">
                <div className="w-14 h-14 bg-neo-yellow rounded-2xl flex items-center justify-center text-neo-black mb-5 mx-auto sm:mx-0">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white font-display">{value.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-neo-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-animated opacity-10" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="section-label">
              <Sparkles size={14} />
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display">
              From Idea to <span className="text-neo-yellow neon-yellow">Reality</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {milestones.map((milestone, i) => (
              <div key={i} className="relative p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-neo-yellow/20 transition-all">
                <span className="robot-badge mb-4 font-mono">{milestone.year}</span>
                <h3 className="text-xl sm:text-2xl font-black mb-2 text-white font-display">{milestone.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-neo-yellow">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-neo-black mb-2 font-display">Ready to explore what&apos;s next?</h3>
              <p className="text-neo-black/70 text-base sm:text-lg">Discover our products and join the BoxPox journey.</p>
            </div>
            <Link href="/products" className="robot-btn-dark whitespace-nowrap">
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
