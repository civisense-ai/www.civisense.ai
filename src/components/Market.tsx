const stats = [
  { value: "2.5L+", label: "Local governance bodies in India" },
  { value: "941", label: "Kerala Gram Panchayats — pilot target" },
  { value: "₹900Cr", label: "Estimated TAM across Indian ULBs" },
  { value: "18%", label: "GovTech CAGR in India" },
];

export default function Market() {
  return (
    <section id="market" className="py-20 bg-[#F5F9FC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px w-10 bg-ai" />
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
            Market Opportunity
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-head)] text-3xl md:text-4xl font-bold text-navy mb-10">
          A large market with no AI-native competitor
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.value} className="bg-white border border-[#D1DCE8] rounded-sm p-6 text-center">
              <div className="font-[family-name:var(--font-head)] text-4xl font-bold text-navy leading-none mb-2">
                {s.value}
              </div>
              <div className="text-slate text-xs leading-snug font-light">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Why now */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-ai" />
              <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
                Why Now
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "DPDP Act 2023 drives data governance urgency across all govt bodies",
                "Digital India & PM GatiShakti push AI adoption in governance",
                "Kerala: proven digital infrastructure, ideal first market",
                "Zero AI-native competitors in the citizen grievance intelligence space",
              ].map((item) => (
                <li key={item} className="relative pl-4 text-sm text-[#3D4F65] leading-relaxed before:content-['›'] before:absolute before:left-0 before:text-ai before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-ai" />
              <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
                Technology
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "NLP: Multilingual AI models fine-tuned for Indian governance context",
                "Voice: Self-hosted speech recognition — no third-party data exposure",
                "Intelligence: Unsupervised clustering & anomaly detection at scale",
                "Infra: India-hosted cloud — full data sovereignty & DPDP compliance",
              ].map((item) => (
                <li key={item} className="relative pl-4 text-sm text-[#3D4F65] leading-relaxed before:content-['›'] before:absolute before:left-0 before:text-ai before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
