export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-ai/25 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-0 leading-none mb-1">
            <span className="font-[family-name:var(--font-head)] text-lg font-bold text-white">civisense</span>
            <span className="font-[family-name:var(--font-head)] text-lg font-bold text-ai">.</span>
            <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-ai tracking-tighter">ai</span>
          </div>
          <p className="text-white/25 text-xs">Confidential · Not for public circulation · 2026</p>
        </div>

        {/* Contact links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:civisense.ai@gmail.com"
            className="flex items-center gap-2 text-white/50 hover:text-ai transition-colors"
          >
            <span className="text-ai">✉</span>
            civisense.ai@gmail.com
          </a>
          <a
            href="https://civisense.ai"
            className="flex items-center gap-2 text-white/50 hover:text-ai transition-colors"
          >
            <span className="text-ai">⬡</span>
            civisense.ai
          </a>
          <span className="text-white/25 text-xs">Thiruvananthapuram, Kerala</span>
        </div>
      </div>
    </footer>
  );
}
