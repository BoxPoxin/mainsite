"use client";
import { Mail } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Newsletter() {
  return (
    <section className="section-padding-sm bg-neo-gray/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl gradient-border p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-neo-yellow rounded-bl-[100px] opacity-20" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <span className="section-label">
                  <Mail size={14} />
                  NEWSLETTER
                </span>
                
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-[0.95] font-display">
                  Join the<br />
                  <span className="text-neo-yellow neon-yellow">Inner Circle</span>
                </h2>
                
                <p className="text-white/60 leading-relaxed text-lg">
                  Get launch updates for BoxBot &amp; Wocals, early access, and behind-the-scenes content. No spam, just innovation.
                </p>
              </div>

              {/* Form */}
              <div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
