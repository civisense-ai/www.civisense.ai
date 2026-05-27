const team = [
  {
    name: "Ajay Kumar S",
    role: "Founder & CEO",
    bio: "24+ years in technology leadership. Founder & CEO, StratZian. Former CTO/VP in global organisations. Deep expertise in AI, scalable platforms, and enterprise systems.",
  },
  {
    name: "Dr. Ajitha S",
    role: "Co-Founder & Domain Advisor",
    bio: "Professor of Public Administration, University of Kerala. PhD in governance systems. Direct institutional access to Kerala's Panchayati Raj & municipal governance networks.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#F5F9FC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px w-10 bg-ai" />
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
            Founding Team
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-head)] text-3xl md:text-4xl font-bold text-navy mb-10">
          Technology meets governance expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {team.map((member) => (
            <div key={member.name} className="bg-white border border-[#D1DCE8] rounded-sm p-6">
              <div className="font-[family-name:var(--font-head)] text-lg font-semibold text-navy mb-1">
                {member.name}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs text-ai mb-3">
                // {member.role}
              </div>
              <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
