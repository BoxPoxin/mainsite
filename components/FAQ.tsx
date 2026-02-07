"use client";
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What is BoxBot?",
    answer: "BoxBot is a 6 degrees-of-freedom consumer robotic arm designed for makers, developers, students, and hobbyists. It brings industrial-grade precision to your desktop with programmable movements, AI-ready processing, and an open SDK."
  },
  {
    question: "What are Wocals?",
    answer: "Wocals are AI-powered smart glasses that combine real-time object recognition, voice commands, and contextual information in a lightweight, everyday wearable. They augment your world with intelligent visual data."
  },
  {
    question: "When will the products launch?",
    answer: "We're currently in the development phase. Sign up for our newsletter to be the first to know about launch dates, early access, and pre-order opportunities."
  },
  {
    question: "Do you ship internationally?",
    answer: "We plan to offer international shipping at launch. Initially, we'll prioritize India-wide delivery before expanding to global markets."
  },
  {
    question: "Can I develop custom applications for BoxBot?",
    answer: "Absolutely! BoxBot comes with an open SDK and developer-friendly APIs. You can create custom automation workflows, integrate with other tools, and build entirely new applications."
  },
  {
    question: "How can I contact BoxPox?",
    answer: "You can reach us at +91 7888601710 (main) or +91 9835502288 (secondary), or email us at info@boxpox.in. Visit our Contact page for more ways to get in touch."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-neo-black">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="section-label">
                <HelpCircle size={14} />
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 lg:mb-6 leading-[0.95] font-display">
                Questions?<br />
                <span className="text-neo-yellow neon-yellow">Answered.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6 text-base lg:text-lg">
                Everything you need to know about BoxPox products.
              </p>
              <Link href="/contact" className="robot-btn-outline py-3 px-6">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all ${
                    openIndex === index
                      ? 'bg-white/[0.06] border border-neo-yellow/20'
                      : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex justify-between items-center text-left gap-4"
                  >
                    <span className="flex items-center gap-3 sm:gap-4">
                      <span className={`font-display text-sm font-bold ${openIndex === index ? 'text-neo-yellow' : 'text-white/20'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-white">{faq.question}</span>
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? 'bg-neo-yellow text-neo-black' : 'bg-white/10 text-white'
                    }`}>
                      {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="pl-8 sm:pl-10 text-white/50 leading-relaxed text-sm sm:text-base border-l-2 border-neo-yellow/20">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
