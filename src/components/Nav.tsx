"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-baseline gap-0 leading-none">
          <span className="font-[family-name:var(--font-head)] text-2xl font-bold text-white tracking-tight">
            civisense
          </span>
          <span className="font-[family-name:var(--font-head)] text-2xl font-bold text-ai">.</span>
          <span className="font-[family-name:var(--font-mono)] text-lg font-bold text-ai tracking-tighter">
            ai
          </span>
        </a>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#solution" className="hover:text-ai transition-colors">Solution</a>
          <a href="#market" className="hover:text-ai transition-colors">Market</a>
          <a href="#team" className="hover:text-ai transition-colors">Team</a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-ai text-navy text-sm font-semibold font-[family-name:var(--font-head)] transition-all hover:bg-ai/90 hover:shadow-[0_0_20px_rgba(0,212,168,0.35)]"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
