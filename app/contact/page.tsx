import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, Headphones, FileQuestion, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const contactMethods = [
    { icon: <MessageSquare size={24} />, title: "Email Us", desc: "We reply within 24 hours", action: "info@boxpox.in", highlight: true },
    { icon: <Headphones size={24} />, title: "Phone Support", desc: "Mon-Fri, 9AM-6PM IST", action: "+91 7888601710" },
    { icon: <FileQuestion size={24} />, title: "FAQ", desc: "Common questions answered", action: "Browse FAQ" },
  ];

  const contactInfo = [
    { icon: <MapPin size={20} />, label: "Address", value: "D-180, Phase 8B, Industrial Area, Sector 74", subtext: "SAS Nagar, Punjab 160055" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 7888601710 (Main)", subtext: "+91 9835502288 (Secondary)" },
    { icon: <Mail size={20} />, label: "Email", value: "info@boxpox.in", subtext: "We reply within 24 hours" },
    { icon: <Clock size={20} />, label: "Working Hours", value: "Monday - Friday", subtext: "9:00 AM - 6:00 PM IST" },
  ];

  return (
    <main className="bg-neo-black min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute inset-0 scan-lines" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-neo-yellow/10 glow-orb" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">
              <Send size={14} />
              CONTACT US
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 lg:mb-8 leading-[0.9] font-display">
              Let&apos;s work<br />
              <span className="text-neo-yellow neon-yellow">together</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Have a question, feedback, or an idea for collaboration? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 lg:py-16 border-y border-white/[0.06]">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`p-6 lg:p-8 rounded-3xl transition-all ${
                  method.highlight
                    ? 'bg-neo-yellow text-neo-black'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-neo-yellow/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  method.highlight ? 'bg-neo-black text-neo-yellow' : 'bg-neo-yellow text-neo-black'
                }`}>
                  {method.icon}
                </div>
                <h3 className={`text-lg font-bold mb-1.5 font-display ${method.highlight ? 'text-neo-black' : 'text-white'}`}>{method.title}</h3>
                <p className={`mb-3 text-sm ${method.highlight ? 'text-neo-black/70' : 'text-white/50'}`}>{method.desc}</p>
                <span className={`inline-flex items-center gap-2 font-bold text-sm ${method.highlight ? 'text-neo-black' : 'text-neo-yellow'}`}>
                  {method.action}
                  <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <span className="section-label">
                <MessageSquare size={14} />
                SEND A MESSAGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 lg:mb-8 leading-[0.95] font-display">
                Drop us a<br />
                <span className="text-neo-yellow neon-yellow">Line</span>
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <span className="section-label">
                <Send size={14} />
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 lg:mb-8 leading-[0.95] font-display">
                Contact<br />
                <span className="text-neo-yellow neon-yellow">Info</span>
              </h2>

              <div className="space-y-3 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-neo-yellow/20 transition-all">
                    <div className="w-11 h-11 bg-neo-yellow rounded-xl flex items-center justify-center text-neo-black flex-shrink-0">{info.icon}</div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="font-bold text-white text-base lg:text-lg">{info.value}</p>
                      <p className="text-sm text-white/50">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-neo-gray rounded-3xl border border-white/[0.06]">
                <p className="text-white font-bold mb-3 text-base">Follow us on social media</p>
                <div className="flex flex-wrap gap-2">
                  {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm font-medium hover:border-neo-yellow hover:text-neo-yellow transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
