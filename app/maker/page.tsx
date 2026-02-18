'use client';

import Link from 'next/link';
import { ArrowRight, Palette, Gift, Package, ShoppingBag, Truck, Star, Zap, ChevronRight, User, LogIn, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

function useInView() {
  const ref = useRef<HTMLElement>(null);
  return { ref, isInView: true };
}


/* ──── DEMO PRODUCTS ──── */
const demoProducts = [
  {
    id: 'moon-lamp',
    name: 'Moon Lamp',
    category: 'Lamps',
    price: 499,
    originalPrice: 799,
    emoji: '🌕',
    desc: 'Realistic 3D printed moon with warm LED glow. Touch to change brightness.',
    badge: 'Bestseller',
  },
  {
    id: 'lithophane-lamp',
    name: 'Photo Lithophane Lamp',
    category: 'Lamps',
    price: 699,
    originalPrice: 999,
    emoji: '🖼️',
    desc: 'Your photo turned into a glowing 3D lithophane. Stunning night lamp gift.',
    badge: 'Popular',
  },
  {
    id: 'name-lamp',
    name: 'Custom Name Lamp',
    category: 'Lamps',
    price: 399,
    originalPrice: 599,
    emoji: '💡',
    desc: 'Your name or message as a 3D LED lamp. Perfect for desks and bedrooms.',
    badge: null,
  },
  {
    id: 'name-keychain',
    name: 'Name Keychain',
    category: 'Keychains',
    price: 99,
    originalPrice: 149,
    emoji: '🔑',
    desc: 'Personalized 3D printed keychain with your name in bold letters.',
    badge: 'From ₹99',
  },
  {
    id: 'couple-keychain',
    name: 'Couple Keychain Set',
    category: 'Keychains',
    price: 199,
    originalPrice: 299,
    emoji: '💕',
    desc: 'Interlocking heart keychains with initials. Perfect anniversary gift.',
    badge: null,
  },
  {
    id: 'logo-keychain',
    name: 'Logo Keychain (Bulk)',
    category: 'Keychains',
    price: 49,
    originalPrice: 99,
    emoji: '🏢',
    desc: 'Custom logo keychains for events and corporate gifting. Min 50 pcs.',
    badge: 'Bulk',
  },
  {
    id: 'photo-frame',
    name: '3D Photo Frame',
    category: 'Gifts',
    price: 599,
    originalPrice: 899,
    emoji: '📸',
    desc: 'Unique 3D printed frame with your photo embedded. Desk-ready gift.',
    badge: null,
  },
  {
    id: 'figurine',
    name: 'Mini Figurine',
    category: 'Gifts',
    price: 799,
    originalPrice: 1299,
    emoji: '🧸',
    desc: 'Custom 3D printed figurine from your photo. A truly unique keepsake.',
    badge: 'Premium',
  },
  {
    id: 'phone-stand',
    name: 'Phone Stand',
    category: 'Gifts',
    price: 249,
    originalPrice: 399,
    emoji: '📱',
    desc: 'Stylish 3D printed phone stand with custom name or design engraving.',
    badge: null,
  },
  {
    id: 'pen-holder',
    name: 'Geometric Pen Holder',
    category: 'Gifts',
    price: 349,
    originalPrice: 499,
    emoji: '✏️',
    desc: 'Modern geometric design pen holder. Available in multiple colors.',
    badge: null,
  },
  {
    id: 'bulk-corporate',
    name: 'Corporate Gift Box',
    category: 'Bulk Orders',
    price: 299,
    originalPrice: 499,
    emoji: '🎁',
    desc: 'Custom branded gift box with keychain + lamp + card. Min 100 pcs.',
    badge: 'Corporate',
  },
  {
    id: 'event-favors',
    name: 'Event Favors Pack',
    category: 'Bulk Orders',
    price: 79,
    originalPrice: 149,
    emoji: '🎉',
    desc: 'Mini 3D printed keepsakes for weddings, birthdays, and conferences.',
    badge: 'Min 50 pcs',
  },
];

const categoryFilters = ['All', 'Lamps', 'Keychains', 'Gifts', 'Bulk Orders'];

export default function MakerPage() {
  const hero = useInView();
  const productsRef = useInView();
  const howRef = useInView();
  const [activeCategory, setActiveCategory] = useState('All');
  const [user, setUser] = useState<{ email?: string; user_metadata?: { first_name?: string } } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const filteredProducts = activeCategory === 'All'
    ? demoProducts
    : demoProducts.filter(p => p.category === activeCategory);

  return (
    <main className="bg-neo-black">
      {/* ━━━ HERO ━━━ */}
      <section ref={hero.ref} className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 to-neo-black" />

        <div className={`container relative z-10 py-12 lg:py-20 transition-all duration-1000 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-400/10 border border-purple-400/20 rounded-full">
              <Palette size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-bold font-display tracking-widest">BOXPOX | MAKER</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-[38px] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-5 font-display">
              <span className="text-white block">Custom 3D Printed</span>
              <span className="text-purple-400 block">Gifts & Products</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed px-4">
              Personalized lamps, keychains, figurines & more. Starting at just <span className="text-purple-400 font-bold">₹99</span>.
            </p>
          </div>

          {/* Auth bar — sign in prompt or user greeting */}
          <div className="max-w-md mx-auto mb-8">
            {user ? (
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-purple-400/5 border border-purple-400/15">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <User size={18} className="text-neo-black" />
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-bold">Welcome, {user.user_metadata?.first_name || 'there'}!</p>
                  <p className="text-white/40 text-xs">Browse products below or check your <Link href="/account" className="text-purple-400 underline">account</Link></p>
                </div>
              </div>
            ) : (
              <Link href="/signin" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-purple-400/5 border border-purple-400/15 hover:border-purple-400/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-400 group-hover:text-neo-black transition-all">
                  <LogIn size={18} className="text-purple-400 group-hover:text-neo-black" />
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-bold">Sign in to order</p>
                  <p className="text-white/40 text-xs">Track orders, save favorites & get deals</p>
                </div>
                <ArrowRight size={16} className="text-purple-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <Link href="#products" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-400 text-neo-black font-bold text-sm rounded-full transition-all font-display tracking-wider hover:bg-purple-300 w-full sm:w-auto group">
              <ShoppingCart size={16} />
              Browse Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-bold text-sm rounded-full transition-all font-display tracking-wider hover:border-purple-400/50 w-full sm:w-auto">
              Custom Order Request
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
      </section>

      {/* ━━━ QUICK INFO BAR ━━━ */}
      <section className="py-5 bg-purple-400/5 border-b border-white/[0.06]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-xs sm:text-sm text-white/50">
            <span className="flex items-center gap-2"><Truck size={14} className="text-purple-400" /> Free Shipping ₹499+</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-purple-400" /> 3–5 Day Delivery</span>
            <span className="flex items-center gap-2"><Star size={14} className="text-purple-400" /> 4.8★ Rating</span>
            <span className="flex items-center gap-2"><Package size={14} className="text-purple-400" /> 1000+ Orders</span>
          </div>
        </div>
      </section>

      {/* ━━━ PRODUCTS GRID ━━━ */}
      <section id="products" ref={productsRef.ref} className="py-14 lg:py-20 relative">
        <div className={`container transition-all duration-1000 delay-200 ${productsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-10">
            <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-display">Shop Products</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-3">
              Our <span className="text-purple-400">Collection</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Browse our ready-to-order products or request a fully custom design.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 lg:mb-10">
            {categoryFilters.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-display tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-400 text-neo-black'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group rounded-2xl border border-white/[0.08] hover:border-purple-400/30 bg-neo-gray/30 overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col">
                {/* Product emoji display */}
                <div className="relative aspect-square bg-gradient-to-br from-purple-500/5 to-transparent flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-500">{product.emoji}</span>
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-purple-400 text-neo-black text-[9px] sm:text-[10px] font-bold rounded-full font-display">{product.badge}</span>
                  )}
                </div>

                {/* Product info */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <p className="text-[10px] text-purple-400/60 font-display tracking-wider uppercase mb-1">{product.category}</p>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 font-display leading-snug">{product.name}</h3>
                  <p className="text-white/35 text-xs leading-relaxed mb-3 hidden sm:block flex-1">{product.desc}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-purple-400 font-black text-lg sm:text-xl font-display">₹{product.price}</span>
                    <span className="text-white/25 text-xs line-through">₹{product.originalPrice}</span>
                    <span className="text-green-400 text-[10px] font-bold">{Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>
                  </div>

                  {/* Order button */}
                  <Link
                    href={user ? '/contact' : '/signin'}
                    className="w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl bg-purple-400/10 text-purple-400 text-xs sm:text-sm font-bold font-display hover:bg-purple-400 hover:text-neo-black transition-all"
                  >
                    <ShoppingBag size={14} />
                    {user ? 'Order Now' : 'Sign in to Order'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom order CTA */}
          <div className="text-center mt-10 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <Gift size={28} className="text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-1 font-display">Don&apos;t see what you need?</h3>
            <p className="text-white/40 text-sm mb-4 max-w-md mx-auto">
              Send us your idea, photo, or 3D file and we&apos;ll make it for you. Custom orders welcome!
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-400 text-neo-black font-bold text-sm rounded-full font-display tracking-wider hover:bg-purple-300 transition-all group">
              Request Custom Order
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ━━━ WHY CHOOSE US ━━━ */}
      <section className="py-14 lg:py-20 bg-neo-gray/20">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-display">Why Maker</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display">
              Why shop with <span className="text-purple-400">us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Star size={22} />, title: 'Premium PLA+', desc: 'Durable, high-quality 3D printing material' },
              { icon: <Truck size={22} />, title: 'Pan India Shipping', desc: 'Free shipping on orders above ₹499' },
              { icon: <ShoppingBag size={22} />, title: 'Fully Custom', desc: 'Send your design or tell us your idea' },
              { icon: <Zap size={22} />, title: 'Fast Turnaround', desc: '3-5 day production + shipping' },
            ].map((item, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-400/20 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400 mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-white/35 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section ref={howRef.ref} className="py-14 lg:py-20 relative">
        <div className={`container transition-all duration-1000 delay-200 ${howRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-10">
            <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-display">How It Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display">
              Three easy <span className="text-purple-400">steps</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { step: '1', title: 'Choose or Customize', desc: 'Pick from our catalog or send your own idea, photo, or 3D file.' },
              { step: '2', title: 'We 3D Print It', desc: 'High-quality PLA+ printing with manual quality checks on every piece.' },
              { step: '3', title: 'Delivered to You', desc: 'Carefully packed and shipped. Track your order every step of the way.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-400 text-neo-black font-black text-xl flex items-center justify-center mx-auto mb-4 font-display">{item.step}</div>
                <h3 className="text-base font-bold text-white mb-2 font-display">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <ChevronRight size={18} className="text-purple-400/30 mx-auto mt-4 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SIGN IN CTA (for non-auth users) ━━━ */}
      {!user && (
        <section className="py-14 lg:py-20 bg-gradient-to-b from-purple-950/20 to-neo-black border-t border-white/[0.06]">
          <div className="container">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-purple-400/10 flex items-center justify-center mx-auto mb-5">
                <User size={28} className="text-purple-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 font-display">
                Create your account
              </h2>
              <p className="text-white/40 text-sm sm:text-base mb-6 max-w-sm mx-auto">
                Sign in to place orders, track shipments, save favorites, and get exclusive deals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/signin" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-400 text-neo-black font-bold text-sm rounded-full font-display tracking-wider hover:bg-purple-300 transition-all w-full sm:w-auto group">
                  <LogIn size={16} />
                  Sign In
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-bold text-sm rounded-full font-display tracking-wider hover:border-purple-400/50 transition-all w-full sm:w-auto">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
