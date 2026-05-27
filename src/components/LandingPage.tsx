"use client";

import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Smooth scroll for hash links
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", handleClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      anchors.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  const handleFormSubmit = async () => {
    const val = email.trim();
    if (!val || !val.includes("@")) {
      if (inputRef.current) {
        inputRef.current.style.borderColor = "rgba(239,68,68,0.5)";
        setTimeout(() => {
          if (inputRef.current) inputRef.current.style.borderColor = "";
        }, 2000);
      }
      return;
    }
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email: val, interest: "early-access", organisation: "", role: "", message: "" }),
      });
      setFormStatus("success");
      setEmail("");
    } catch {
      setFormStatus("error");
    }
  };

  const goto = (mailto: string) => { window.location.href = mailto; };

  return (
    <>
      {/* ══ TOP NOTICE BAR ══ */}
      <div className="topbar" id="top">
        <div className="topbar-inner">
          <div className="topbar-left">
            <div className="topbar-pip" />
            <p className="topbar-msg">
              civisense.ai is actively seeking <strong>mentors, investors &amp; co-builders</strong> — India&apos;s first AI-native governance platform is taking shape.
            </p>
          </div>
          <a href="#build" className="topbar-cta">Get involved ↓</a>
        </div>
      </div>

      {/* ══ NAV ══ */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            civisense<span className="domain">.ai</span>
          </a>
          <ul className="nav-links">
            <li><a href="#solution">Platform</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#market">Market</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#build" style={{ color: "#00D4A8" }}>Build with us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-ghost">Request demo</a>
            <a href="#contact" className="btn btn-primary">Get early access ↗</a>
          </div>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="star">★</span>
              Hackathon Winners — DARPG, Government of India
            </div>
            <div className="hero-wordmark">
              civisense<span className="dot-ai">.ai</span>
            </div>
            <div className="hero-headline">
              Making <strong>sense</strong> of citizen governance.<br />
              In <strong>real time</strong>.
            </div>
            <p className="hero-desc">
              India&apos;s first AI-native governance intelligence platform. Transform citizen grievances into actionable insights — and reactive administration into proactive governance.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-lg">Request early access ↗</a>
              <a href="#solution" className="btn btn-ghost btn-lg">See the platform</a>
              <span className="live-pill">
                <span className="live-dot" />
                MVP in development
              </span>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num"><span className="ai">2.5L</span>+</div>
                <div className="hero-stat-label">Governance bodies in India</div>
              </div>
              <div>
                <div className="hero-stat-num">₹<span className="ai">900</span>Cr</div>
                <div className="hero-stat-label">Total addressable market</div>
              </div>
              <div>
                <div className="hero-stat-num"><span className="ai">0</span></div>
                <div className="hero-stat-label">AI-native competitors today</div>
              </div>
              <div>
                <div className="hero-stat-num"><span className="ai">6–7</span></div>
                <div className="hero-stat-label">Months to live pilot</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[
            "AI Grievance Automation", "Citizen Sentiment Analysis", "Real-time Issue Detection",
            "Multilingual NLP", "Voice-enabled Complaints", "Predictive Governance Analytics",
            "SLA Tracking", "Geographic Hotspot Mapping", "Policy Decision Support", "DPDP Act Compliant",
            "AI Grievance Automation", "Citizen Sentiment Analysis", "Real-time Issue Detection",
            "Multilingual NLP", "Voice-enabled Complaints", "Predictive Governance Analytics",
            "SLA Tracking", "Geographic Hotspot Mapping", "Policy Decision Support", "DPDP Act Compliant",
          ].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ PROBLEM ══ */}
      <section className="section problem" id="problem">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-text reveal">
              <div className="section-label">The Problem</div>
              <h2 className="h2">Governance is <span className="ai-accent">flying blind.</span></h2>
              <p>India&apos;s 2.5 lakh+ local governance bodies generate millions of citizen grievances every year. Yet no intelligent system exists to classify, route, or act on them in real time.</p>
              <p>The result is an administration that reacts to crises instead of preventing them — and citizens who lose faith in government.</p>
            </div>
            <div className="problem-cards">
              <div className="problem-card reveal reveal-delay-1">
                <div className="problem-icon red">⚡</div>
                <div>
                  <div className="problem-card-title">Fragmented grievance handling</div>
                  <div className="problem-card-desc">Complaints scattered across WhatsApp groups, email, walk-ins, and portals — no unified intelligence layer.</div>
                </div>
              </div>
              <div className="problem-card reveal reveal-delay-2">
                <div className="problem-icon amber">⏳</div>
                <div>
                  <div className="problem-card-title">Manual classification delays</div>
                  <div className="problem-card-desc">Weeks pass before a complaint reaches the right department. Citizens lose trust in the process entirely.</div>
                </div>
              </div>
              <div className="problem-card reveal reveal-delay-3">
                <div className="problem-icon slate">📊</div>
                <div>
                  <div className="problem-card-title">No real-time visibility</div>
                  <div className="problem-card-desc">Administrators only discover emerging crises after they become public — no early warning system exists.</div>
                </div>
              </div>
              <div className="problem-card reveal reveal-delay-4">
                <div className="problem-icon purple">🧠</div>
                <div>
                  <div className="problem-card-title">Decisions made without data</div>
                  <div className="problem-card-desc">Policy priorities set by intuition rather than evidence, leading to misallocated resources and missed impact.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══ */}
      <section className="section" id="solution">
        <div className="container">
          <div className="modules-intro reveal">
            <div className="section-label">The Platform</div>
            <h2 className="h2">Three modules.<br />One <span className="ai-accent">closed-loop</span> system.</h2>
          </div>
          <div className="grid-3">
            <div className="module-card m1 reveal reveal-delay-1">
              <div className="module-tag">Module 01 — Resolve</div>
              <div className="module-name">civisense<span className="suffix">.resolve</span></div>
              <div className="module-desc">Automated grievance intake, classification, and routing. Every complaint reaches the right desk — in minutes, not weeks.</div>
              <ul className="module-features">
                <li>Voice &amp; text complaint intake</li>
                <li>NLP-based classification &amp; smart routing</li>
                <li>SLA tracking &amp; auto-escalation</li>
                <li>Malayalam / English / Hindi</li>
                <li>Mobile-first PWA, works offline</li>
              </ul>
            </div>
            <div className="module-card m2 reveal reveal-delay-2">
              <div className="module-tag">Module 02 — Pulse</div>
              <div className="module-name">civisense<span className="suffix">.pulse</span></div>
              <div className="module-desc">Real-time intelligence on what citizens are feeling, where tensions are rising, and what issues are trending before they escalate.</div>
              <ul className="module-features">
                <li>Real-time citizen sentiment analysis</li>
                <li>Issue clustering &amp; trend detection</li>
                <li>Geographic hotspot mapping</li>
                <li>Anomaly alerts before crises emerge</li>
                <li>Multi-source data aggregation</li>
              </ul>
            </div>
            <div className="module-card m3 reveal reveal-delay-3">
              <div className="module-tag">Module 03 — Insight · Phase 2</div>
              <div className="module-name">civisense<span className="suffix">.insight</span></div>
              <div className="module-desc">AI-driven recommendations that help policymakers prioritise resources, anticipate demand, and measure impact over time.</div>
              <ul className="module-features">
                <li>AI-driven policy recommendations</li>
                <li>Predictive governance analytics</li>
                <li>Executive KPI dashboards</li>
                <li>Policy intelligence reports</li>
                <li>Cross-department benchmarking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section how" id="how">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">How It Works</div>
            <h2 className="h2">A closed loop from complaint<br />to <span className="ai-accent">policy action</span>.</h2>
          </div>
          <div className="flow">
            <div className="flow-step reveal reveal-delay-1">
              <div className="flow-num">Step 01</div>
              <div className="flow-title">Citizen submits</div>
              <div className="flow-desc">Voice note, text, or form — in any language. Works on a basic smartphone, no app install needed.</div>
            </div>
            <div className="flow-step reveal reveal-delay-2">
              <div className="flow-num">Step 02</div>
              <div className="flow-title">AI classifies</div>
              <div className="flow-desc">NLP engine tags the issue, assigns priority, and routes it to the correct department — in under 30 seconds.</div>
            </div>
            <div className="flow-step reveal reveal-delay-3">
              <div className="flow-num">Step 03</div>
              <div className="flow-title">Admin acts</div>
              <div className="flow-desc">Department receives a structured task with SLA. Escalation triggers automatically if deadlines are missed.</div>
            </div>
            <div className="flow-step reveal reveal-delay-4">
              <div className="flow-num">Step 04</div>
              <div className="flow-title">Intelligence surfaces</div>
              <div className="flow-desc">Patterns, hotspots, and sentiment trends feed the Pulse dashboard — giving leadership real-time situational awareness.</div>
            </div>
            <div className="flow-step reveal" style={{ transitionDelay: "0.5s" }}>
              <div className="flow-num">Step 05</div>
              <div className="flow-title">Policy improves</div>
              <div className="flow-desc">Insight module turns aggregate data into prioritised recommendations — closing the loop from citizen voice to government action.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MARKET STATS ══ */}
      <section className="section" id="market">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Market Opportunity</div>
            <h2 className="h2">A massive, <span className="ai-accent">underserved</span> market.</h2>
          </div>
          <div className="stats-grid reveal">
            <div className="stat-block">
              <div className="stat-num"><span className="ai">2.5L</span>+</div>
              <div className="stat-label">Local governance bodies in India — none with AI-native platforms</div>
            </div>
            <div className="stat-block">
              <div className="stat-num"><span className="gold">18%</span></div>
              <div className="stat-label">CAGR in Indian GovTech spending — the fastest growing segment</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">₹<span className="ai">900</span>Cr</div>
              <div className="stat-label">Total addressable market across Urban Local Bodies in India</div>
            </div>
            <div className="stat-block">
              <div className="stat-num"><span className="ai">0</span></div>
              <div className="stat-label">Direct AI-native competitors operating in this category today</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AI STACK ══ */}
      <section className="section-sm" style={{ background: "var(--navy-2)" }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">AI Architecture</div>
            <h2 className="h2">Built on <span className="ai-accent">proven</span> open-source foundations.</h2>
          </div>
          <div className="stack-grid">
            {[
              { label: "Multilingual NLP", tech: "IndicBERT / MuRIL", desc: "Fine-tuned on governance domain data across Malayalam, English, and Hindi.", delay: "reveal-delay-1" },
              { label: "Voice to Text", tech: "OpenAI Whisper", desc: "Self-hosted for data sovereignty. Optimised for low-bandwidth rural connectivity.", delay: "reveal-delay-2" },
              { label: "Issue Clustering", tech: "BERTopic / HDBSCAN", desc: "Unsupervised discovery of emerging issue themes in real time.", delay: "reveal-delay-3" },
              { label: "Sentiment Analysis", tech: "IndicSentiment", desc: "Domain-adapted for formal complaint language across three languages.", delay: "reveal-delay-1" },
              { label: "Infrastructure", tech: "AWS Mumbai Region", desc: "Data residency in India. DPDP Act 2023 compliant from day one.", delay: "reveal-delay-2" },
              { label: "Frontend", tech: "PWA — React / Next.js", desc: "Offline-capable. Works on any device. No app store dependency.", delay: "reveal-delay-3" },
            ].map((s) => (
              <div key={s.tech} className={`stack-item reveal ${s.delay}`}>
                <div className="stack-dot" />
                <div>
                  <div className="stack-label">{s.label}</div>
                  <div className="stack-tech">{s.tech}</div>
                  <div className="stack-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPETITIVE TABLE ══ */}
      <section className="section compare">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Competitive Landscape</div>
            <h2 className="h2">Not a better portal.<br />A completely <span className="ai-accent">different category.</span></h2>
          </div>
          <div className="compare-table-wrap reveal">
            <table className="compare-tbl">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>CPGRAMS</th>
                  <th>Sevana (Kerala)</th>
                  <th>NIC Portals</th>
                  <th className="us">civisense.ai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI-native architecture",           "✕ No",      "✕ No",       "✕ No",      "✓ Yes",       "yes"],
                  ["Multilingual NLP",                 "~ Limited", "~ Partial",  "✕ No",      "✓ ML / EN / HI", "yes"],
                  ["Voice complaint input",            "✕ No",      "✕ No",       "✕ No",      "✓ Yes",       "yes"],
                  ["Real-time sentiment analysis",     "✕ No",      "✕ No",       "✕ No",      "✓ Yes",       "yes"],
                  ["Predictive governance analytics",  "✕ No",      "✕ No",       "✕ No",      "~ Phase 2",   "part"],
                  ["SaaS / scalable model",            "✕ No",      "✕ No",       "✕ No",      "✓ Yes",       "yes"],
                  ["DPDP Act compliance",              "~ Partial", "~ Partial",  "~ Partial", "✓ By design", "yes"],
                ].map(([feature, c1, c2, c3, us, usClass]) => (
                  <tr key={feature as string}>
                    <td className="feature">{feature as string}</td>
                    <td className={(c1 as string).startsWith("✕") ? "no" : "part"}>{c1 as string}</td>
                    <td className={(c2 as string).startsWith("✕") ? "no" : "part"}>{c2 as string}</td>
                    <td className={(c3 as string).startsWith("✕") ? "no" : "part"}>{c3 as string}</td>
                    <td className={`us-col ${usClass as string}`}>{us as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ RECOGNITION ══ */}
      <section className="section-sm" style={{ background: "var(--navy-2)" }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Recognition &amp; Traction</div>
            <h2 className="h2">Validated at the <span className="gold-accent">highest level.</span></h2>
          </div>
          <div className="recognition-grid">
            <div className="rec-card reveal reveal-delay-1">
              <div className="rec-icon">🏆</div>
              <div className="rec-title">DARPG Hackathon Winners</div>
              <div className="rec-desc">Winners of the hackathon organised by the Department of Administrative Reforms and Public Grievances (DARPG), Government of India — India&apos;s apex body for public grievance reform. Independent validation that the problem is real and the approach is credible.</div>
            </div>
            <div className="rec-card reveal reveal-delay-2">
              <div className="rec-icon">✅</div>
              <div className="rec-title">Concept Validated</div>
              <div className="rec-desc">The civisense.ai platform concept has been stress-tested through competitive evaluation, demonstrating both the depth of the governance problem and the technical feasibility of an AI-native solution.</div>
            </div>
            <div className="rec-card reveal reveal-delay-3">
              <div className="rec-icon">🤝</div>
              <div className="rec-title">Pilot LOIs in Progress</div>
              <div className="rec-desc">Active discussions with Kerala Panchayat bodies for pilot deployment. Leveraging co-founder&apos;s institutional networks for direct government access.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="section team" id="team">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Founding Team</div>
            <h2 className="h2">The rare combination of<br /><span className="ai-accent">tech depth</span> and <span className="gold-accent">institutional access.</span></h2>
          </div>
          <div className="team-grid">
            <div className="team-card reveal reveal-delay-1">
              <div className="team-avatar">AK</div>
              <div className="team-name">Ajay Kumar S</div>
              <div className="team-role">// Founder &amp; CEO</div>
              <div className="team-bio">24+ years in technology leadership across enterprise software, AI products, and scalable systems. Founder &amp; CEO of StratZian. Deep expertise in product development, AI architecture, and GovTech implementation.</div>
              <span className="team-tag">AI · Product · Scale</span>
            </div>
            <div className="team-card reveal reveal-delay-2">
              <div className="team-avatar">Dr</div>
              <div className="team-name">Dr. Ajitha</div>
              <div className="team-role">// Co-Founder &amp; Domain Advisor</div>
              <div className="team-bio">Professor of Public Administration with deep domain authority in governance systems, public policy, and institutional design. Direct access to Kerala&apos;s Panchayat and municipal governance networks — turning a hard sales problem into a relationship problem.</div>
              <span className="team-tag">Policy · Governance · Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BUILD WITH US ══ */}
      <section className="build-section" id="build">
        <div className="build-glow-l" />
        <div className="build-glow-r" />
        <div className="container build-inner">
          <div className="build-eyebrow reveal">
            <div className="build-eyebrow-line" />
            <div className="build-eyebrow-label">Build with us</div>
            <div className="build-eyebrow-line" />
          </div>
          <h2 className="build-headline reveal">
            Help shape governance<br />for <em>a billion citizens.</em>
          </h2>
          <p className="build-subhead reveal">
            We are at the most exciting moment — early enough to truly shape what this becomes, with enough validation to know it is real. We are looking for a small, high-conviction group of collaborators to build with us.
          </p>

          <div className="build-lanes reveal">
            <div className="build-lane lane-teal" onClick={() => goto("mailto:ajay@civisense.ai?subject=Governance Mentor Enquiry")}>
              <div className="build-lane-num">01</div>
              <div className="build-lane-top">
                <div className="build-lane-icon">🏛️</div>
                <div>
                  <div className="build-lane-kicker">Governance Mentor</div>
                  <div className="build-lane-title">GovTech &amp; Public Sector Leaders</div>
                </div>
              </div>
              <p className="build-lane-body">Have you led digital transformation in government, shaped public policy, or navigated India&apos;s administrative corridors? Your experience is the rarest ingredient — and exactly what separates a product that looks good from one that actually works inside a Panchayat.</p>
              <ul className="build-lane-list">
                <li>Strategic input on product, policy &amp; GTM</li>
                <li>Introductions to pilot institutions &amp; state bodies</li>
                <li>Advisor equity + flexible monthly commitment</li>
                <li>GovTech, IAS/IPS, KILA, Smart Cities backgrounds welcome</li>
              </ul>
              <span className="build-lane-action">Become an advisor →</span>
            </div>

            <div className="build-lane lane-gold" onClick={() => goto("mailto:ajay@civisense.ai?subject=Investor Deck Request")}>
              <div className="build-lane-num">02</div>
              <div className="build-lane-top">
                <div className="build-lane-icon">📈</div>
                <div>
                  <div className="build-lane-kicker">Investor</div>
                  <div className="build-lane-title">Seed &amp; Impact Investors</div>
                </div>
              </div>
              <p className="build-lane-body">A ₹900Cr+ TAM. Zero AI-native competitors. Winners of the DARPG Hackathon, Government of India. A founding team with direct institutional access to Kerala&apos;s 941 Panchayats. Raising our seed round to take a live MVP to pilot in 6–7 months.</p>
              <ul className="build-lane-list">
                <li>Raising ₹31–42 Lakhs seed round</li>
                <li>GovTech / DeepTech / Impact thesis fit</li>
                <li>Clear milestone-gated deployment plan</li>
                <li>Deck &amp; financial model available on request</li>
              </ul>
              <span className="build-lane-action">Request investor deck →</span>
            </div>

            <div className="build-lane lane-purple" onClick={() => goto("mailto:ajay@civisense.ai?subject=Joining the Team")}>
              <div className="build-lane-num">03</div>
              <div className="build-lane-top">
                <div className="build-lane-icon">⚙️</div>
                <div>
                  <div className="build-lane-kicker">Core Team</div>
                  <div className="build-lane-title">Founding Engineers &amp; Designers</div>
                </div>
              </div>
              <p className="build-lane-body">We are looking for builders who want to solve a genuinely hard problem — multilingual NLP, voice interfaces for rural India, and AI that helps governments make better decisions. This is founding-team level work, with the equity to match.</p>
              <ul className="build-lane-list">
                <li>Full-stack engineer (FastAPI / React / Next.js)</li>
                <li>ML / NLP engineer (IndicBERT, Whisper, BERTopic)</li>
                <li>UI/UX designer — accessibility &amp; Gov design focus</li>
                <li>Equity-first; salary from seed funding</li>
              </ul>
              <span className="build-lane-action">See open roles →</span>
            </div>

            <div className="build-lane lane-coral" onClick={() => goto("mailto:ajay@civisense.ai?subject=Pilot Programme Enquiry")}>
              <div className="build-lane-num">04</div>
              <div className="build-lane-top">
                <div className="build-lane-icon">🤝</div>
                <div>
                  <div className="build-lane-kicker">Government Partner</div>
                  <div className="build-lane-title">Panchayats &amp; Municipalities</div>
                </div>
              </div>
              <p className="build-lane-body">Are you a Panchayat President, Municipal Commissioner, or administrator who wants to resolve citizen grievances faster? We are onboarding our first 2–3 pilot institutions right now — at zero cost, with full hands-on support from our team.</p>
              <ul className="build-lane-list">
                <li>Completely free 90-day pilot programme</li>
                <li>Full onboarding, training &amp; implementation support</li>
                <li>Co-design the platform with our team</li>
                <li>Kerala institutions given priority access</li>
              </ul>
              <span className="build-lane-action">Apply for pilot →</span>
            </div>
          </div>

          <div className="build-bottom reveal">
            <a href="mailto:ajay@civisense.ai" className="btn btn-primary btn-lg">Get in touch ↗</a>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", textAlign: "center" }}>
              <span className="build-bottom-tag">ajay@civisense.ai</span>
              <span className="build-bottom-tag">Response within 48 hours, always</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT / EARLY ACCESS ══ */}
      <section className="section cta-section" id="contact">
        <div className="cta-glow" />
        <div className="container">
          <div className="cta-inner reveal">
            <div className="section-label">Get Early Access</div>
            <h2 className="h2">Ready to make sense of your governance data?</h2>
            <p>We&apos;re onboarding select Panchayats and Municipalities for our pilot program. Request early access and we&apos;ll be in touch within 48 hours.</p>
            {formStatus === "success" ? (
              <div style={{ color: "var(--ai)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                ✓ Request received — we&apos;ll be in touch!
              </div>
            ) : (
              <div className="demo-form">
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="your@email.gov.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleFormSubmit()}
                />
                <button className="btn btn-primary" onClick={handleFormSubmit}>
                  Request access ↗
                </button>
              </div>
            )}
            {formStatus === "error" && (
              <p style={{ color: "#f87171", fontSize: "0.78rem", marginBottom: "0.5rem" }}>
                Something went wrong. Please email us directly.
              </p>
            )}
            <p className="demo-note">
              Or email us directly at{" "}
              <a href="mailto:ajay@civisense.ai" style={{ color: "var(--ai)" }}>
                ajay@civisense.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-mark">civisense<span className="dot-ai">.ai</span></div>
              <div className="footer-desc">Making sense of citizen governance. AI-powered intelligence platform for local government bodies across India.</div>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <ul className="footer-links">
                <li><a href="#solution">civisense.resolve</a></li>
                <li><a href="#solution">civisense.pulse</a></li>
                <li><a href="#solution">civisense.insight</a></li>
                <li><a href="#how">How it works</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="#team">Team</a></li>
                <li><a href="#market">Market</a></li>
                <li><a href="mailto:ajay@civisense.ai">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-brand">
              <span style={{ color: "var(--muted)" }}>© 2026</span>
              <span style={{ fontFamily: "var(--ff-head)", fontWeight: 600, color: "var(--white)" }}>
                civisense<span style={{ fontFamily: "var(--ff-mono)", color: "var(--ai)" }}>.ai</span>
              </span>
              <span style={{ color: "var(--muted)" }}>· Thiruvananthapuram, Kerala, India</span>
            </div>
            <div style={{ color: "var(--muted)" }}>DARPG Hackathon Winners · DPDP Act Compliant · Seed Stage</div>
          </div>
        </div>
      </footer>
    </>
  );
}
