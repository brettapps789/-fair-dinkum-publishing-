import React from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Calendar, User, HardHat } from "lucide-react";

const blogData: Record<string, any> = {
  "5-ways-to-maintain-independence-2026": {
    title: "5 Simple Ways to Maintain Independence at Home in 2026",
    date: "April 16, 2026",
    author: "Brett Sjoberg",
    readTime: "5 min read",
    content: `
## The New Era of Independent Living

Growing older shouldn't mean giving up the home you love. In 2026, technology has finally caught up with our desire to remain autonomous. Whether you’re a "Silver Tsunami" Baby Boomer or caring for an aging parent, these five simple upgrades can turn a home into a "Sovereign Sanctuary."

### 1. Ditch the Buttons
Dexterity issues like arthritis can make getting dressed the most frustrating part of the day. Modern adaptive apparel, like our **Easy-On Oxford**, uses hidden magnetic closures. You get the professional look of a crisp shirt without the manual struggle.

### 2. The Smart-Cane Revolution
A walking stick shouldn't just support your weight; it should support your safety. New carbon-fiber canes now come integrated with GPS and fall detection. If anything happens, an alert is sent to your family instantly—giving them peace of mind and you the freedom to roam.

### 3. Voice-Guided Cooking
The kitchen is the heart of the home, but it can also be the most dangerous. Voice-activated kitchen tools and AI assistants can now guide you through recipes, set timers, and even remind you if the stove is still on.

### 4. Lighting That Listens to Your Body
Falls often happen at night. Circadian lighting systems automatically adjust their brightness and tone based on the time of day, ensuring you have clear visibility during late-night trips to the kitchen without disrupting your sleep patterns.

### 5. Data Sovereignty in Health
As we use more smart aids, our data privacy becomes critical. Always look for "Sovereign" tech that processes data locally. Your location and health biometrics should stay on your device, not on a corporate server.

---
**Ready to upgrade your home?** Browse our latest collection of [Adaptive Gear here](/adaptive/).
    `
  }
};

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return <div className="p-20 text-center">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="border-b border-neutral-100 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/blog" className="flex items-center gap-2 text-neutral-500 hover:text-[#A3432B]">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Blog</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A3432B] text-white">
              <HardHat size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#333333]">The Sovereign Dispatch</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <header className="mb-12">
          <h1 className="mb-8 text-4xl font-black leading-tight text-[#333333] lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-black prose-headings:text-[#333333] prose-a:text-[#A3432B] prose-strong:text-[#333333]">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-16 border-t border-neutral-100 pt-12">
          <div className="rounded-3xl bg-neutral-50 p-8 text-center">
            <h3 className="mb-4 text-xl font-bold">Enjoyed this article?</h3>
            <p className="mb-6 text-neutral-600">Share it with someone who values their independence.</p>
            <button className="rounded-xl bg-[#333333] px-8 py-3 font-bold text-white transition-all hover:bg-black">
              Share Article
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}
