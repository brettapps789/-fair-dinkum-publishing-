"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Mic, 
  ArrowRight, 
  Smartphone,
  Accessibility,
  CheckCircle2,
  ChevronRight,
  Info
} from "lucide-react";

const products = [
  {
    id: "easy-on-oxford",
    title: "The 'Easy-On' Oxford Shirt",
    price: 89.00,
    desc: "Hidden magnetic closures replace difficult buttons. Premium cotton feel with independent dressing in seconds.",
    icon: <Zap className="text-[#A3432B]" />,
    buyButtonId: "buy_btn_adaptive_shirt",
    publishableKey: "pk_test_placeholder"
  },
  {
    id: "smart-cane",
    title: "Sovereign Smart-Cane",
    price: 149.00,
    desc: "Carbon-fiber strength with integrated GPS, fall detection, and an emergency SOS button.",
    icon: <ShieldCheck className="text-[#4F7942]" />,
    buyButtonId: "buy_btn_adaptive_cane",
    publishableKey: "pk_test_placeholder"
  },
  {
    id: "kitchen-pack",
    title: "Voice-Safe Kitchen Kit",
    price: 59.00,
    desc: "A curated set of tools that pair with your phone for voice-guided, safe cooking. No more guessing.",
    icon: <Mic className="text-[#333333]" />,
    buyButtonId: "buy_btn_adaptive_kitchen",
    publishableKey: "pk_test_placeholder"
  }
];

export default function FairGoAdaptive() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">
      {/* High-Contrast Navigation */}
      <nav className="sticky top-0 z-50 border-b-4 border-[#A3432B] bg-white px-4 py-6 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A3432B] text-white">
              <Accessibility size={32} />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">Fair Go Adaptive</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#vision" className="text-lg font-bold hover:text-[#A3432B]">Our Vision</a>
            <a href="#products" className="text-lg font-bold hover:text-[#A3432B]">Products</a>
            <button className="rounded-xl bg-[#333333] px-6 py-3 text-lg font-bold text-white transition-all hover:bg-black">
              Call Support
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - High Readability */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-8 text-5xl font-black leading-tight text-[#1A1A1A] lg:text-7xl">
                Independence, <span className="text-[#A3432B]">Simplified.</span>
              </h1>
              <p className="mb-12 text-2xl font-medium leading-relaxed text-neutral-600 lg:text-3xl">
                Dignified clothing and smart mobility aids designed for a Fair Go. 
                Built for comfort, security, and everyday empowerment.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a href="#products" className="inline-flex items-center gap-2 rounded-2xl bg-[#A3432B] px-10 py-5 text-2xl font-black text-white shadow-xl transition-all hover:scale-105 hover:bg-[#8a3824]">
                  Shop the Collection <ArrowRight size={28} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Care */}
      <section id="vision" className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="mb-6 text-4xl font-black">A Fair Go for Everyone</h2>
            <p className="mx-auto max-w-3xl text-xl text-neutral-700">
              We believe technology should serve people, not the other way around. 
              Our products are hand-picked to restore autonomy to those who value their independence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { icon: <Heart />, title: "Empowering", desc: "Regain the ability to dress and cook independently." },
              { icon: <ShieldCheck />, title: "Secure", desc: "Integrated safety features like fall detection and GPS." },
              { icon: <Info />, title: "Intuitive", desc: "No complex manuals. Just simple, life-changing design." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-white p-6 text-[#A3432B] shadow-lg">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 40 })}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="text-lg text-neutral-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-4xl font-black">Featured Adaptive Gear</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-neutral-200"
              >
                <div className="flex h-64 items-center justify-center bg-neutral-100">
                  {React.cloneElement(product.icon as React.ReactElement, { size: 80, strokeWidth: 1.5 })}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-4 text-2xl font-black leading-tight">{product.title}</h3>
                  <p className="mb-8 flex-1 text-lg text-neutral-600">{product.desc}</p>
                  <div className="mt-auto border-t border-neutral-100 pt-8">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-3xl font-black text-[#A3432B]">${product.price.toFixed(2)}</span>
                      <span className="rounded-lg bg-[#4F7942]/10 px-3 py-1 text-sm font-bold text-[#4F7942]">In Stock</span>
                    </div>
                    
                    {/* Stripe Buy Button */}
                    <div 
                      className="w-full"
                      dangerouslySetInnerHTML={{
                        __html: `<stripe-buy-button 
                          buy-button-id="${product.buyButtonId}" 
                          publishable-key="${product.publishableKey}"
                        ></stripe-buy-button>`
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Sovereignty */}
      <section className="bg-[#333333] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-3xl font-bold">Your Privacy is Sovereign</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-white/70">
            Our smart aids use Local AI processing. Your GPS location and health data never leave your device without your explicit permission.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest bg-white/5">
              <CheckCircle2 size={16} className="text-[#4F7942]" /> 30-Day Money Back
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest bg-white/5">
              <CheckCircle2 size={16} className="text-[#4F7942]" /> AU-Wide Shipping
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest bg-white/5">
              <CheckCircle2 size={16} className="text-[#4F7942]" /> Secure Checkout
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 text-center">
        <p className="text-lg font-bold text-neutral-400">Fair Go Adaptive — A Fair Dinkum Publishing Vertical</p>
      </footer>
    </div>
  );
}
