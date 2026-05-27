const modules = [
  {
    tag: "Hear — Module 01",
    name: "civisense",
    suffix: ".resolve",
    color: "ai" as const,
    borderColor: "border-t-ai",
    tagColor: "text-ai",
    suffixColor: "text-ai",
    features: [
      "Voice & text grievance intake — no app install needed",
      "AI classification in under 30 seconds",
      "Smart department routing & SLA tracking",
      "Auto-escalation on SLA breach",
      "Malayalam / English / Hindi",
    ],
  },
  {
    tag: "Understand — Module 02",
    name: "civisense",
    suffix: ".pulse",
    color: "gold" as const,
    borderColor: "border-t-gold",
    tagColor: "text-gold",
    suffixColor: "text-gold",
    features: [
      "Real-time citizen sentiment analysis",
      "Geographic hotspot mapping by ward & block",
      "Issue clustering across complaint categories",
      "Anomaly alerts before crises emerge",
      "Live situational dashboard for administrators",
    ],
  },
  {
    tag: "Act — Module 03 · Phase 2",
    name: "civisense",
    suffix: ".insight",
    color: "slate" as const,
    borderColor: "border-t-slate",
    tagColor: "text-slate",
    suffixColor: "text-slate",
    features: [
      "AI-driven policy recommendations",
      "Predictive governance analytics",
      "Executive KPI dashboards",
      "Evidence base for budget & resource decisions",
      "Cross-institution benchmarking",
    ],
  },
];

export default function Modules() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px w-10 bg-ai" />
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
            The Platform
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-head)] text-3xl md:text-4xl font-bold text-navy mb-10">
          From Complaint to Resolution to Policy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.suffix}
              className={`relative border border-[#D1DCE8] rounded-sm p-6 bg-white border-t-2 ${mod.borderColor} overflow-hidden`}
            >
              <div className={`font-[family-name:var(--font-mono)] text-xs font-bold tracking-wide mb-2 ${mod.tagColor}`}>
                {mod.tag}
              </div>
              <div className="font-[family-name:var(--font-head)] text-xl font-bold text-navy mb-4">
                {mod.name}
                <span className={mod.suffixColor}>{mod.suffix}</span>
              </div>
              <ul className="space-y-1.5">
                {mod.features.map((f) => (
                  <li
                    key={f}
                    className="relative pl-4 text-sm text-[#3D4F65] leading-snug before:content-['›'] before:absolute before:left-0 before:text-ai before:font-bold"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
