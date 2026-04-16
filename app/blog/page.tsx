"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Tag, 
  ArrowLeft,
  HardHat
} from "lucide-react";

const posts = [
  {
    slug: "5-ways-to-maintain-independence-2026",
    title: "5 Simple Ways to Maintain Independence at Home in 2026",
    excerpt: "Growing older shouldn't mean giving up the home you love. Discover how modern adaptive gear is changing the game.",
    date: "April 16, 2026",
    readTime: "5 min read",
    category: "Adaptive Gear",
    image: "bg-[#A3432B]/10"
  }
];

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="border-b border-neutral-100 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/fair-dinkum" className="flex items-center gap-2 text-neutral-500 hover:text-[#A3432B]">
            <ArrowLeft size={20} />
            <span className="font-medium">Back Home</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A3432B] text-white">
              <HardHat size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#333333]">Fair Dinkum Blog</span>
          </div>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h1 className="mb-6 text-5xl font-black text-[#333333]">The Sovereign Dispatch</h1>
          <p className="text-xl text-neutral-600">Insights, guides, and fair dinkum advice for the modern Aussie merchant and craftsman.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {posts.map((post) => (
            <motion.a 
              key={post.slug}
              href={`/blog/${post.slug}`}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white transition-all hover:shadow-2xl"
            >
              <div className={`aspect-video w-full ${post.image} flex items-center justify-center`}>
                <BookOpen size={64} className="text-[#A3432B] opacity-40" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-neutral-400">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-bold leading-tight group-hover:text-[#A3432B]">
                  {post.title}
                </h2>
                <p className="mb-8 flex-1 text-lg text-neutral-600">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-bold text-[#A3432B]">
                  Read the Article <ArrowRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Get the Dispatch in Your Inbox</h2>
          <p className="mb-8 text-lg text-neutral-600">No spam. Just one high-value email per week on sovereign business and adaptive living.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 rounded-2xl border-2 border-neutral-200 bg-white px-6 py-4 text-lg outline-none focus:border-[#A3432B]"
            />
            <button className="rounded-2xl bg-[#A3432B] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#8a3824]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-neutral-400">
        <p>© 2026 Fair Dinkum Publishing</p>
      </footer>
    </div>
  );
}
