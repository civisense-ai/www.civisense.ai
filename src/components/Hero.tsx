export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex flex-col justify-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,168,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,168,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-ai/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-gold/10 border border-gold/22 font-[family-name:var(--font-mono)] text-gold text-xs font-bold tracking-wide">
            🏆 DARPG Hackathon Winners · Govt of India
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-ai/10 border border-ai/22 font-[family-name:var(--font-mono)] text-ai text-xs font-bold tracking-wide">
            GovTech · Kerala, India · 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-head)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
          Making sense of{" "}
          <span className="text-ai">citizen governance</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-[family-name:var(--font-body)] font-light leading-relaxed">
          India&apos;s first AI-native governance intelligence platform — enabling local
          governments to listen, understand, and act in real time.
        </p>
        <p className="text-white/40 text-sm font-[family-name:var(--font-mono)] tracking-wider uppercase mb-10">
          From Kerala&apos;s 941 Panchayats to every local body in India
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-ai text-navy font-semibold font-[family-name:var(--font-head)] text-sm transition-all hover:bg-ai/90 hover:shadow-[0_0_30px_rgba(0,212,168,0.4)]"
          >
            Explore Advisory &amp; Collaboration →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gold/40 text-gold font-semibold font-[family-name:var(--font-head)] text-sm transition-all hover:border-gold hover:bg-gold/5"
          >
            Investment &amp; Incubation →
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
