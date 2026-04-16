"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ArrowLeft, 
  Zap, 
  Download,
  Star,
  HardHat,
  ChevronRight
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Sovereign Aussie Agent Workforce Workflows",
    price: 49.00,
    category: "Flagship Guide",
    desc: "The complete manual for automating your trade business. From quoting to bookkeeping.",
    color: "bg-[#4F7942]",
    tags: ["Best Seller", "PDF + EPUB"],
    buyButtonId: "buy_btn_123_flagship", // User: Replace with actual ID
    publishableKey: "pk_test_placeholder" // User: Replace with actual key
  },
  {
    id: 2,
    title: "The Tradie's Prompt Pack",
    price: 29.00,
    category: "Toolkit",
    desc: "100+ copy-paste prompts for ChatGPT, Claude, and Gemini designed for Australian trades.",
    color: "bg-[#A3432B]",
    tags: ["Time Saver"],
    buyButtonId: "buy_btn_456_prompts",
    publishableKey: "pk_test_placeholder"
  },
  {
    id: 3,
    title: "The Digital Ute Blueprint",
    price: 39.00,
    category: "Technical",
    desc: "Deep dive into setting up Local AI (Ollama/LM Studio) for 100% data sovereignty.",
    color: "bg-[#333333]",
    tags: ["Advanced"],
    buyButtonId: "buy_btn_789_ute",
    publishableKey: "pk_test_placeholder"
  }
];

export default function FairDinkumStore() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <a href="/fair-dinkum" className="flex items-center gap-2 text-neutral-500 hover:text-[#A3432B]">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Landing Page</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A3432B] text-white">
              <HardHat size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#333333]">Fair Dinkum Store</span>
          </div>
          <button className="relative flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 font-medium hover:bg-neutral-50">
            <ShoppingBag size={20} />
            <span>Cart</span>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A3432B] text-[10px] font-bold text-white">0</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-black text-[#333333]">Fair Dinkum Publishing Shelf</h1>
          <p className="text-lg text-neutral-600">Digital tools and guides built for the modern Aussie craftsman.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-xl"
            >
              {/* Product Visual */}
              <div className={`aspect-[4/5] ${product.color} relative p-8 text-white`}>
                <div className="flex h-full flex-col">
                  <div className="mb-4 inline-flex self-start rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                    {product.category}
                  </div>
                  <h3 className="mb-4 text-2xl font-black leading-tight">{product.title}</h3>
                  <div className="mt-auto flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm"></div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white/60">500+ Sold</span>
                  </div>
                </div>
                {/* Book Spine Detail */}
                <div className="absolute top-0 left-0 h-full w-2 bg-black/10"></div>
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.tags?.map((tag, i) => (
                    <span key={i} className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm text-neutral-600">{product.desc}</p>
                
                <div className="flex flex-col gap-4 border-t border-neutral-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase text-neutral-400">Price</span>
                      <div className="text-2xl font-black text-[#333333]">${product.price.toFixed(2)}</div>
                    </div>
                  </div>
                  
                  {/* Stripe Buy Button Integration */}
                  <div 
                    className="w-full overflow-hidden rounded-xl"
                    dangerouslySetInnerHTML={{
                      __html: `<stripe-buy-button 
                        buy-button-id="${product.buyButtonId}" 
                        publishable-key="${product.publishableKey}"
                      ></stripe-buy-button>`
                    }}
                  />
                  <p className="text-[10px] text-center text-neutral-400">
                    Secure checkout powered by Stripe.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-24 rounded-3xl bg-[#333333] p-12 text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white/10 p-4 text-[#FFC000]">
                <Download size={32} />
              </div>
              <h4 className="mb-2 font-bold">Instant Delivery</h4>
              <p className="text-sm text-white/60">Get your links immediately after checkout. PDF & EPUB included.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white/10 p-4 text-[#FFC000]">
                <Star size={32} />
              </div>
              <h4 className="mb-2 font-bold">Lifetime Updates</h4>
              <p className="text-sm text-white/60">AI moves fast. You'll get every new version for free, forever.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white/10 p-4 text-[#FFC000]">
                <Zap size={32} />
              </div>
              <h4 className="mb-2 font-bold">Pure Value</h4>
              <p className="text-sm text-white/60">No monthly fees. One-time payment for sovereign knowledge.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-neutral-500 font-medium">Fair Dinkum Publishing - Adelaide, South Australia</p>
        </div>
      </footer>
    </div>
  );
}
