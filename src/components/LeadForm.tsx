"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  role: string;
  interest: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  interest: "",
  message: "",
};

const interestOptions = [
  { value: "advisory", label: "Advisory / Domain Expert" },
  { value: "pilot-facilitator", label: "Pilot Facilitator" },
  { value: "advisory-board", label: "Advisory Board Member" },
  { value: "institutional-champion", label: "Institutional Champion" },
  { value: "investor", label: "Investor / Incubator" },
  { value: "partnership", label: "Technology / Research Partnership" },
  { value: "other", label: "Other" },
];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setState("success");
      setForm(initialForm);
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please email us directly at civisense.ai@gmail.com");
    }
  };

  const inputClass =
    "w-full bg-navy/60 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-ai/60 focus:ring-1 focus:ring-ai/30 transition-colors font-[family-name:var(--font-body)]";

  return (
    <section id="contact" className="py-24 bg-navy-2 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,168,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,168,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-ai" />
              <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em] uppercase text-ai">
                Get Involved
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-head)] text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Let&apos;s build this together
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              Whether you&apos;re a domain expert, institutional champion, or investor —
              there&apos;s a meaningful role for you in shaping India&apos;s first AI-native
              governance platform.
            </p>

            {/* Engagement roles */}
            <div className="space-y-4">
              {[
                { label: "Advisory & Domain Validation", desc: "Share where current systems fail. Shape what gets built before the market does." },
                { label: "Pilot Facilitation", desc: "Leverage your institutional relationships to open the door for a 3–5 Panchayat pilot." },
                { label: "Investment & Incubation", desc: "Seed round open: ₹31–42L for MVP + pilot deployment." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-ai shrink-0" />
                  <div>
                    <div className="text-white text-sm font-semibold mb-0.5 font-[family-name:var(--font-head)]">{item.label}</div>
                    <div className="text-white/40 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-white/25 text-xs font-[family-name:var(--font-mono)]">
              All conversations are confidential. Nothing shared without your explicit consent.
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-navy border border-white/8 rounded-sm p-8">
            {state === "success" ? (
              <div className="text-center py-8">
                <div className="text-ai text-4xl mb-4">✓</div>
                <h3 className="font-[family-name:var(--font-head)] text-xl font-bold text-white mb-3">
                  Thank you — we&apos;ll be in touch.
                </h3>
                <p className="text-white/50 text-sm">
                  We typically respond within 48 hours. In the meantime, feel free to reach out
                  directly at{" "}
                  <a href="mailto:civisense.ai@gmail.com" className="text-ai hover:underline">
                    civisense.ai@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-6 text-ai text-sm underline underline-offset-2 hover:text-ai/80"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                    Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Institution, company, or organisation"
                    value={form.organisation}
                    onChange={set("organisation")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                    Your Role / Designation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. District Collector, Professor, VC Associate"
                    value={form.role}
                    onChange={set("role")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                    I&apos;m interested in *
                  </label>
                  <select
                    required
                    value={form.interest}
                    onChange={set("interest")}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select your interest area</option>
                    {interestOptions.map((o) => (
                      <option key={o.value} value={o.value} className="bg-navy text-white">
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-wider uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a bit about your interest or what you'd like to explore..."
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-400 text-xs">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-3.5 rounded-sm bg-ai text-navy font-semibold font-[family-name:var(--font-head)] text-sm transition-all hover:bg-ai/90 hover:shadow-[0_0_24px_rgba(0,212,168,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "submitting" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
