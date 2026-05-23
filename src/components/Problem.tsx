export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-ai" />
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
            The Problem
          </span>
        </div>

        <div className="bg-[#F0F7FB] border-l-2 border-ai rounded-r-sm px-8 py-7 max-w-4xl">
          <p className="text-[#1A2A3A] text-lg leading-relaxed font-[family-name:var(--font-body)]">
            India&apos;s 2.5 lakh+ local governance bodies generate millions of citizen
            grievances annually — yet{" "}
            <strong className="text-navy font-semibold">
              no intelligent system exists to classify, route, or act on them in real time.
            </strong>{" "}
            Manual reading, fragmented channels, invisible SLA breaches, and zero trend
            intelligence mean that systemic issues become crises before administrators can
            see them. Existing platforms like CPGRAMS and Sevana are workflow tools, not
            intelligence platforms.{" "}
            <strong className="text-navy font-semibold">The missing layer is AI.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
