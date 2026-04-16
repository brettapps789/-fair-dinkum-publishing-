"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  ArrowRight, 
  FileText, 
  Receipt, 
  Users,
  HardHat,
  Smartphone,
  CheckCircle2
} from "lucide-react";

export default function FairDinkumLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A3432B] text-white">
              <HardHat size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#333333]">Fair Dinkum Publishing</span>
          </div>
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#problem" className="text-sm font-medium text-neutral-600 hover:text-[#A3432B]">The Problem</a>
            <a href="#solution" className="text-sm font-medium text-neutral-600 hover:text-[#A3432B]">The Solution</a>
            <a href="/adaptive/" className="text-sm font-bold text-[#A3432B]">Adaptive Gear</a>
            <a href="/blog/" className="text-sm font-medium text-neutral-600 hover:text-[#A3432B]">Blog</a>
            <a href="/fair-dinkum/store" className="rounded-full bg-[#4F7942] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#3d5d33] hover:shadow-lg text-center">
              Snag the Ebook
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#FFC000] blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4F7942] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFC000]/20 px-4 py-1.5 text-sm font-bold text-[#A3432B]">
                <Zap size={16} />
                <span>FAIR DINKUM AI WORKFLOWS</span>
              </div>
              <h1 className="mb-6 text-5xl font-black leading-tight text-[#333333] lg:text-7xl">
                Get <span className="text-[#A3432B]">10 Hours</span> of Your Week Back.
              </h1>
              <p className="mb-8 text-xl text-neutral-600 lg:text-2xl">
                The complete guide to automating your Aussie trade business with AI. No fluff. Just the cordless drill of the 21st century.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="/fair-dinkum/store" className="flex items-center justify-center gap-2 rounded-xl bg-[#A3432B] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-[#8a3824] hover:shadow-xl">
                  Get the Ebook - $49 <ArrowRight size={20} />
                </a>
                <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 px-8 py-4 text-lg font-bold text-neutral-700 transition-all hover:bg-neutral-50">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-[#4F7942] shadow-2xl ring-12 ring-[#4F7942]/10">
                {/* Ebook Mockup */}
                <div className="flex h-full flex-col p-8 text-white">
                  <div className="mb-auto">
                    <span className="text-xs font-black uppercase tracking-widest text-white/60">Fair Dinkum Publishing</span>
                  </div>
                  <h2 className="mb-4 text-4xl font-black leading-none">
                    Sovereign Aussie Agent Workforce <br/> Workflows
                  </h2>
                  <p className="mb-12 text-lg text-white/80">
                    A Tradie's Guide to AI Automation & Data Sovereignty.
                  </p>
                  <div className="mt-auto border-t border-white/20 pt-6">
                    <span className="text-sm font-medium">By Brett Sjoberg</span>
                  </div>
                </div>
              </div>
              {/* Floating "Fair Dinkum" Stamp */}
              <div className="absolute -bottom-6 -right-6 rotate-12 rounded-full bg-[#FFC000] p-6 shadow-xl ring-4 ring-white">
                <span className="text-lg font-black text-[#A3432B]">FAIR DINKUM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#333333] lg:text-4xl">Sunday Night Spreadsheet Hell?</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              You didn't become a sparky, plumber, or chippie to be a data entry clerk. 
              Stop being a slave to the spreadsheet and start building.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: <Receipt />, title: "The Shoebox of Doom", desc: "Faded thermal receipts from Bunnings piled up in your glovebox." },
              { icon: <Clock />, title: "Quoting Lag", desc: "Taking three days to price a job and losing it to the bloke who did it in 15 mins." },
              { icon: <Smartphone />, title: "The Mental Drain", desc: "Handling client 'nags' and scheduling while you're on the tools." }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-[#A3432B]">{React.cloneElement(item.icon, { size: 32 })}</div>
                <h3 className="mb-2 text-xl font-bold text-[#333333]">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution: Digital Ute */}
      <section id="solution" className="py-24">
        {/* ... (existing content) */}
      </section>

      {/* Video Demo Section */}
      <section className="bg-neutral-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#FFC000] lg:text-4xl">Watch the Sovereign Workflow in Action</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              See how we use the 14-agent workforce to automate everything from research to revenue.
            </p>
          </div>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-8 border-white/5 bg-black shadow-2xl shadow-[#FFC000]/10">
            <video 
              controls 
              className="h-full w-full"
              poster="/-fair-dinkum-publishing-/media/videos/sovereign_1776306268588.mp4"
            >
              <source src="/-fair-dinkum-publishing-/media/videos/sovereign_1776306268588.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* The 14-Agent Pipeline */}
      <section id="pipeline" className="bg-[#4F7942] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black">The Sovereign Advantage</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              This book wasn't just written; it was built. Using a pipeline of 14 specialized AI agents, we automated the entire publishing process.
            </p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex min-w-[800px] justify-between gap-4">
              {[
                { name: "Research", icon: <Users /> },
                { name: "Writing", icon: <FileText /> },
                { name: "Design", icon: <Zap /> },
                { name: "Dev", icon: <Cpu /> },
                { name: "Deploy", icon: <ShieldCheck /> }
              ].map((agent, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-[#FFC000] backdrop-blur-md ring-1 ring-white/20">
                    {React.cloneElement(agent.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="font-bold uppercase tracking-widest text-white/60">{agent.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 rounded-2xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm">
            <p className="text-xl italic text-white/90">
              "We show you exactly how to build your own sovereign agent workforce. Your data, your rules, your empire."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#A3432B] px-8 py-16 text-center text-white shadow-2xl lg:px-16 lg:py-24">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#FFC000]/20 blur-3xl"></div>
            
            <h2 className="relative z-10 mb-6 text-4xl font-black lg:text-6xl">Ready to get your 10 hours back?</h2>
            <p className="relative z-10 mx-auto mb-10 max-w-2xl text-xl text-white/80">
              Join 500+ Aussie tradies who have ditched the shoebox and upgraded to the Digital Ute.
            </p>
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a href="/fair-dinkum/store" className="rounded-xl bg-white px-10 py-5 text-xl font-black text-[#A3432B] transition-all hover:scale-105 hover:shadow-xl">
                Get the Ebook - $49
              </a>
              <span className="text-lg font-bold text-white/60">Instant PDF + EPUB Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A3432B] text-white">
              <HardHat size={18} />
            </div>
            <span className="text-lg font-bold text-[#333333]">Fair Dinkum Publishing</span>
          </div>
          <p className="text-neutral-500">© 2026 Fair Dinkum Publishing. Built by Brett Sjoberg in Adelaide, SA.</p>
        </div>
      </footer>
    </div>
  );
}
