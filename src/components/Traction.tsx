export default function Traction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-gold">
            Validation &amp; Traction
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-head)] text-3xl md:text-4xl font-bold text-navy mb-8">
          Recognised. Validated. Moving.
        </h2>

        <div className="bg-[#FFFBF0] border border-[#E8D8A0] border-l-2 border-l-gold rounded-r-sm px-8 py-6 max-w-3xl">
          <ul className="space-y-3">
            {[
              { bold: "DARPG Hackathon Winners", rest: " — Government of India recognition for excellence in grievance management system design" },
              { bold: null, rest: "Concept validated through competitive national evaluation against institutional peers" },
              { bold: null, rest: "Pilot LOIs in active discussion with Kerala Panchayat bodies" },
              { bold: null, rest: "DPDP Act 2023 compliant from day one; AWS Mumbai for full data sovereignty" },
            ].map((item, i) => (
              <li key={i} className="relative pl-6 text-sm text-[#3D4F65] leading-relaxed">
                <span className="absolute left-0 text-gold text-xs top-0.5">★</span>
                {item.bold && <strong className="text-navy font-semibold">{item.bold}</strong>}
                {item.rest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
