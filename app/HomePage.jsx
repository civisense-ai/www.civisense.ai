"use client";

import { useEffect } from "react";

// Markup extracted from the original civisense.ai single-file HTML.
// Inline onclick="..." handlers and class names are preserved as-is.
const BODY_HTML = String.raw`

<!-- ══ NAV ══════════════════════════════════════════ -->
<!-- ══ TOP NOTICE BAR ════════════════════════════════ -->
<div class="topbar" id="top">
  <div class="topbar-inner">
    <div class="topbar-left">
      <div class="topbar-pip"></div>
      <p class="topbar-msg">civisense.ai is actively seeking <strong>mentors, investors &amp; co-builders</strong> — India's first AI-native governance platform is taking shape.</p>
    </div>
    <a href="#build" class="topbar-cta">Get involved ↓</a>
  </div>
</div>

<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      civisense<span class="domain">.ai</span>
    </a>
    <ul class="nav-links">
      <li><a href="#solution">Platform</a></li>
      <li><a href="#how">How it works</a></li>
      <li><a href="#market">Market</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#build" style="color:#00D4A8">Build with us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav-cta">
      <a href="#contact" class="btn btn-ghost">Request demo</a>
      <a href="#contact" class="btn btn-primary">Get early access ↗</a>
    </div>
  </div>
</nav>

<!-- ══ HERO ══════════════════════════════════════════ -->
<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-glow-1"></div>
  <div class="hero-glow-2"></div>

  <div class="container">
    <div class="hero-inner">
      <div class="hero-badge">
        <span class="star">★</span>
        Hackathon Winners — DARPG, Government of India
      </div>

      <div class="hero-wordmark">
        civisense<span class="dot-ai">.ai</span>
      </div>

      <div class="hero-headline">
        Making <strong>sense</strong> of citizen governance.<br>
        In <strong>real time</strong>.
      </div>

      <p class="hero-desc">
        India's first AI-native governance intelligence platform. Transform citizen grievances into actionable insights — and reactive administration into proactive governance.
      </p>

      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary btn-lg">Request early access ↗</a>
        <a href="#solution" class="btn btn-ghost btn-lg">See the platform</a>
        <span class="live-pill">
          <span class="live-dot"></span>
          MVP in development
        </span>
      </div>

      <div class="hero-stats">
        <div>
          <div class="hero-stat-num"><span class="ai">2.5L</span>+</div>
          <div class="hero-stat-label">Governance bodies in India</div>
        </div>
        <div>
          <div class="hero-stat-num">₹<span class="ai">900</span>Cr</div>
          <div class="hero-stat-label">Total addressable market</div>
        </div>
        <div>
          <div class="hero-stat-num"><span class="ai">0</span></div>
          <div class="hero-stat-label">AI-native competitors today</div>
        </div>
        <div>
          <div class="hero-stat-num"><span class="ai">6–7</span></div>
          <div class="hero-stat-label">Months to live pilot</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ MARQUEE ════════════════════════════════════════ -->
<div class="marquee-strip">
  <div class="marquee-track">
    <span class="marquee-item"><span class="dot"></span>AI Grievance Automation</span>
    <span class="marquee-item"><span class="dot"></span>Citizen Sentiment Analysis</span>
    <span class="marquee-item"><span class="dot"></span>Real-time Issue Detection</span>
    <span class="marquee-item"><span class="dot"></span>Multilingual NLP</span>
    <span class="marquee-item"><span class="dot"></span>Voice-enabled Complaints</span>
    <span class="marquee-item"><span class="dot"></span>Predictive Governance Analytics</span>
    <span class="marquee-item"><span class="dot"></span>SLA Tracking</span>
    <span class="marquee-item"><span class="dot"></span>Geographic Hotspot Mapping</span>
    <span class="marquee-item"><span class="dot"></span>Policy Decision Support</span>
    <span class="marquee-item"><span class="dot"></span>DPDP Act Compliant</span>
    <span class="marquee-item"><span class="dot"></span>AI Grievance Automation</span>
    <span class="marquee-item"><span class="dot"></span>Citizen Sentiment Analysis</span>
    <span class="marquee-item"><span class="dot"></span>Real-time Issue Detection</span>
    <span class="marquee-item"><span class="dot"></span>Multilingual NLP</span>
    <span class="marquee-item"><span class="dot"></span>Voice-enabled Complaints</span>
    <span class="marquee-item"><span class="dot"></span>Predictive Governance Analytics</span>
    <span class="marquee-item"><span class="dot"></span>SLA Tracking</span>
    <span class="marquee-item"><span class="dot"></span>Geographic Hotspot Mapping</span>
    <span class="marquee-item"><span class="dot"></span>Policy Decision Support</span>
    <span class="marquee-item"><span class="dot"></span>DPDP Act Compliant</span>
  </div>
</div>

<!-- ══ PROBLEM ════════════════════════════════════════ -->

<section class="section problem" id="problem">
  <div class="container">
    <div class="problem-grid">
      <div class="problem-text reveal">
        <div class="section-label">The Problem</div>
        <h2 class="h2">Governance is <span class="ai-accent">flying blind.</span></h2>
        <p>India's 2.5 lakh+ local governance bodies generate millions of citizen grievances every year. Yet no intelligent system exists to classify, route, or act on them in real time.</p>
        <p>The result is an administration that reacts to crises instead of preventing them — and citizens who lose faith in government.</p>
      </div>
      <div class="problem-cards">
        <div class="problem-card reveal reveal-delay-1">
          <div class="problem-icon red">⚡</div>
          <div>
            <div class="problem-card-title">Fragmented grievance handling</div>
            <div class="problem-card-desc">Complaints scattered across WhatsApp groups, email, walk-ins, and portals — no unified intelligence layer.</div>
          </div>
        </div>
        <div class="problem-card reveal reveal-delay-2">
          <div class="problem-icon amber">⏳</div>
          <div>
            <div class="problem-card-title">Manual classification delays</div>
            <div class="problem-card-desc">Weeks pass before a complaint reaches the right department. Citizens lose trust in the process entirely.</div>
          </div>
        </div>
        <div class="problem-card reveal reveal-delay-3">
          <div class="problem-icon slate">📊</div>
          <div>
            <div class="problem-card-title">No real-time visibility</div>
            <div class="problem-card-desc">Administrators only discover emerging crises after they become public — no early warning system exists.</div>
          </div>
        </div>
        <div class="problem-card reveal reveal-delay-4">
          <div class="problem-icon purple">🧠</div>
          <div>
            <div class="problem-card-title">Decisions made without data</div>
            <div class="problem-card-desc">Policy priorities set by intuition rather than evidence, leading to misallocated resources and missed impact.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SOLUTION ═══════════════════════════════════════ -->
<section class="section" id="solution">
  <div class="container">
    <div class="modules-intro reveal">
      <div class="section-label">The Platform</div>
      <h2 class="h2">Three modules.<br>One <span class="ai-accent">closed-loop</span> system.</h2>
    </div>

    <div class="grid-3">
      <div class="module-card m1 reveal reveal-delay-1">
        <div class="module-tag">Module 01 — Resolve</div>
        <div class="module-name">civisense<span class="suffix">.resolve</span></div>
        <div class="module-desc">Automated grievance intake, classification, and routing. Every complaint reaches the right desk — in minutes, not weeks.</div>
        <ul class="module-features">
          <li>Voice & text complaint intake</li>
          <li>NLP-based classification & smart routing</li>
          <li>SLA tracking & auto-escalation</li>
          <li>Malayalam / English / Hindi</li>
          <li>Mobile-first PWA, works offline</li>
        </ul>
      </div>
      <div class="module-card m2 reveal reveal-delay-2">
        <div class="module-tag">Module 02 — Pulse</div>
        <div class="module-name">civisense<span class="suffix">.pulse</span></div>
        <div class="module-desc">Real-time intelligence on what citizens are feeling, where tensions are rising, and what issues are trending before they escalate.</div>
        <ul class="module-features">
          <li>Real-time citizen sentiment analysis</li>
          <li>Issue clustering & trend detection</li>
          <li>Geographic hotspot mapping</li>
          <li>Anomaly alerts before crises emerge</li>
          <li>Multi-source data aggregation</li>
        </ul>
      </div>
      <div class="module-card m3 reveal reveal-delay-3">
        <div class="module-tag">Module 03 — Insight · Phase 2</div>
        <div class="module-name">civisense<span class="suffix">.insight</span></div>
        <div class="module-desc">AI-driven recommendations that help policymakers prioritise resources, anticipate demand, and measure impact over time.</div>
        <ul class="module-features">
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

<!-- ══ HOW IT WORKS ═══════════════════════════════════ -->
<section class="section how" id="how">
  <div class="container">
    <div class="text-center reveal">
      <div class="section-label">How It Works</div>
      <h2 class="h2">A closed loop from complaint<br>to <span class="ai-accent">policy action</span>.</h2>
    </div>

    <div class="flow">
      <div class="flow-step reveal reveal-delay-1">
        <div class="flow-num">Step 01</div>
        <div class="flow-title">Citizen submits</div>
        <div class="flow-desc">Voice note, text, or form — in any language. Works on a basic smartphone, no app install needed.</div>
      </div>
      <div class="flow-step reveal reveal-delay-2">
        <div class="flow-num">Step 02</div>
        <div class="flow-title">AI classifies</div>
        <div class="flow-desc">NLP engine tags the issue, assigns priority, and routes it to the correct department — in under 30 seconds.</div>
      </div>
      <div class="flow-step reveal reveal-delay-3">
        <div class="flow-num">Step 03</div>
        <div class="flow-title">Admin acts</div>
        <div class="flow-desc">Department receives a structured task with SLA. Escalation triggers automatically if deadlines are missed.</div>
      </div>
      <div class="flow-step reveal reveal-delay-4">
        <div class="flow-num">Step 04</div>
        <div class="flow-title">Intelligence surfaces</div>
        <div class="flow-desc">Patterns, hotspots, and sentiment trends feed the Pulse dashboard — giving leadership real-time situational awareness.</div>
      </div>
      <div class="flow-step reveal" style="transition-delay:0.5s">
        <div class="flow-num">Step 05</div>
        <div class="flow-title">Policy improves</div>
        <div class="flow-desc">Insight module turns aggregate data into prioritised recommendations — closing the loop from citizen voice to government action.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ MARKET STATS ═══════════════════════════════════ -->
<section class="section" id="market">
  <div class="container">
    <div class="text-center reveal">
      <div class="section-label">Market Opportunity</div>
      <h2 class="h2">A massive, <span class="ai-accent">underserved</span> market.</h2>
    </div>

    <div class="stats-grid reveal">
      <div class="stat-block">
        <div class="stat-num"><span class="ai">2.5L</span>+</div>
        <div class="stat-label">Local governance bodies in India — none with AI-native platforms</div>
      </div>
      <div class="stat-block">
        <div class="stat-num"><span class="gold">18%</span></div>
        <div class="stat-label">CAGR in Indian GovTech spending — the fastest growing segment</div>
      </div>
      <div class="stat-block">
        <div class="stat-num">₹<span class="ai">900</span>Cr</div>
        <div class="stat-label">Total addressable market across Urban Local Bodies in India</div>
      </div>
      <div class="stat-block">
        <div class="stat-num"><span class="ai">0</span></div>
        <div class="stat-label">Direct AI-native competitors operating in this category today</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ AI STACK ═══════════════════════════════════════ -->
<section class="section-sm" style="background: var(--navy-2);">
  <div class="container">
    <div class="reveal">
      <div class="section-label">AI Architecture</div>
      <h2 class="h2">Built on <span class="ai-accent">proven</span> open-source foundations.</h2>
    </div>
    <div class="stack-grid">
      <div class="stack-item reveal reveal-delay-1">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Multilingual NLP</div>
          <div class="stack-tech">IndicBERT / MuRIL</div>
          <div class="stack-desc">Fine-tuned on governance domain data across Malayalam, English, and Hindi.</div>
        </div>
      </div>
      <div class="stack-item reveal reveal-delay-2">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Voice to Text</div>
          <div class="stack-tech">OpenAI Whisper</div>
          <div class="stack-desc">Self-hosted for data sovereignty. Optimised for low-bandwidth rural connectivity.</div>
        </div>
      </div>
      <div class="stack-item reveal reveal-delay-3">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Issue Clustering</div>
          <div class="stack-tech">BERTopic / HDBSCAN</div>
          <div class="stack-desc">Unsupervised discovery of emerging issue themes in real time.</div>
        </div>
      </div>
      <div class="stack-item reveal reveal-delay-1">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Sentiment Analysis</div>
          <div class="stack-tech">IndicSentiment</div>
          <div class="stack-desc">Domain-adapted for formal complaint language across three languages.</div>
        </div>
      </div>
      <div class="stack-item reveal reveal-delay-2">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Infrastructure</div>
          <div class="stack-tech">AWS Mumbai Region</div>
          <div class="stack-desc">Data residency in India. DPDP Act 2023 compliant from day one.</div>
        </div>
      </div>
      <div class="stack-item reveal reveal-delay-3">
        <div class="stack-dot"></div>
        <div>
          <div class="stack-label">Frontend</div>
          <div class="stack-tech">PWA — React / Next.js</div>
          <div class="stack-desc">Offline-capable. Works on any device. No app store dependency.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ COMPETITIVE TABLE ══════════════════════════════ -->
<section class="section compare">
  <div class="container">
    <div class="reveal">
      <div class="section-label">Competitive Landscape</div>
      <h2 class="h2">Not a better portal.<br>A completely <span class="ai-accent">different category.</span></h2>
    </div>
    <div class="compare-table-wrap reveal">
      <table class="compare-tbl">
        <thead>
          <tr>
            <th>Capability</th>
            <th>CPGRAMS</th>
            <th>Sevana (Kerala)</th>
            <th>NIC Portals</th>
            <th class="us">civisense.ai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature">AI-native architecture</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="yes us-col">✓ Yes</td>
          </tr>
          <tr>
            <td class="feature">Multilingual NLP</td>
            <td class="part">~ Limited</td>
            <td class="part">~ Partial</td>
            <td class="no">✕ No</td>
            <td class="yes us-col">✓ ML / EN / HI</td>
          </tr>
          <tr>
            <td class="feature">Voice complaint input</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="yes us-col">✓ Yes</td>
          </tr>
          <tr>
            <td class="feature">Real-time sentiment analysis</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="yes us-col">✓ Yes</td>
          </tr>
          <tr>
            <td class="feature">Predictive governance analytics</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="part us-col">~ Phase 2</td>
          </tr>
          <tr>
            <td class="feature">SaaS / scalable model</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="no">✕ No</td>
            <td class="yes us-col">✓ Yes</td>
          </tr>
          <tr>
            <td class="feature">DPDP Act compliance</td>
            <td class="part">~ Partial</td>
            <td class="part">~ Partial</td>
            <td class="part">~ Partial</td>
            <td class="yes us-col">✓ By design</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ══ RECOGNITION ════════════════════════════════════ -->
<section class="section-sm" style="background: var(--navy-2);">
  <div class="container">
    <div class="text-center reveal">
      <div class="section-label">Recognition & Traction</div>
      <h2 class="h2">Validated at the <span class="gold-accent">highest level.</span></h2>
    </div>
    <div class="recognition-grid">
      <div class="rec-card reveal reveal-delay-1">
        <div class="rec-icon">🏆</div>
        <div class="rec-title">DARPG Hackathon Winners</div>
        <div class="rec-desc">Winners of the hackathon organised by the Department of Administrative Reforms and Public Grievances (DARPG), Government of India — India's apex body for public grievance reform. Independent validation that the problem is real and the approach is credible.</div>
      </div>
      <div class="rec-card reveal reveal-delay-2">
        <div class="rec-icon">✅</div>
        <div class="rec-title">Concept Validated</div>
        <div class="rec-desc">The civisense.ai platform concept has been stress-tested through competitive evaluation, demonstrating both the depth of the governance problem and the technical feasibility of an AI-native solution.</div>
      </div>
      <div class="rec-card reveal reveal-delay-3">
        <div class="rec-icon">🤝</div>
        <div class="rec-title">Pilot LOIs in Progress</div>
        <div class="rec-desc">Active discussions with Kerala Panchayat bodies for pilot deployment. Leveraging co-founder's institutional networks for direct government access.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ TEAM ═══════════════════════════════════════════ -->
<section class="section team" id="team">
  <div class="container">
    <div class="text-center reveal">
      <div class="section-label">Founding Team</div>
      <h2 class="h2">The rare combination of<br><span class="ai-accent">tech depth</span> and <span class="gold-accent">institutional access.</span></h2>
    </div>
    <div class="team-grid">
      <div class="team-card reveal reveal-delay-1">
        <div class="team-avatar">AK</div>
        <div class="team-name">Ajay Kumar S</div>
        <div class="team-role">// Founder & CEO</div>
        <div class="team-bio">24+ years in technology leadership across enterprise software, AI products, and scalable systems. Founder & CEO of StratZian. Deep expertise in product development, AI architecture, and GovTech implementation.</div>
        <span class="team-tag">AI · Product · Scale</span>
      </div>
      <div class="team-card reveal reveal-delay-2">
        <div class="team-avatar">Dr</div>
        <div class="team-name">Dr. Ajitha</div>
        <div class="team-role">// Co-Founder &amp; Domain Advisor</div>
        <div class="team-bio">Professor of Public Administration with deep domain authority in governance systems, public policy, and institutional design. Direct access to Kerala's Panchayat and municipal governance networks — turning a hard sales problem into a relationship problem.</div>
        <span class="team-tag">Policy · Governance · Access</span>
      </div>
    </div>
  </div>
</section>

<!-- ══ CTA ════════════════════════════════════════════ -->

<!-- BUILD WITH US -->
<section class="build-section" id="build">
  <div class="build-glow-l"></div>
  <div class="build-glow-r"></div>
  <div class="container build-inner">

    <div class="build-eyebrow reveal">
      <div class="build-eyebrow-line"></div>
      <div class="build-eyebrow-label">Build with us</div>
      <div class="build-eyebrow-line"></div>
    </div>

    <h2 class="build-headline reveal">
      Help shape governance<br>for <em>a billion citizens.</em>
    </h2>
    <p class="build-subhead reveal">
      We are at the most exciting moment — early enough to truly shape what this becomes, with enough validation to know it is real. We are looking for a small, high-conviction group of collaborators to build with us.
    </p>

    <div class="build-lanes reveal">

      <div class="build-lane lane-teal" onclick="window.location='mailto:ajay@civisense.ai?subject=Governance Mentor Enquiry'">
        <div class="build-lane-num">01</div>
        <div class="build-lane-top">
          <div class="build-lane-icon">&#127963;&#65039;</div>
          <div>
            <div class="build-lane-kicker">Governance Mentor</div>
            <div class="build-lane-title">GovTech &amp; Public Sector Leaders</div>
          </div>
        </div>
        <p class="build-lane-body">Have you led digital transformation in government, shaped public policy, or navigated India's administrative corridors? Your experience is the rarest ingredient — and exactly what separates a product that looks good from one that actually works inside a Panchayat.</p>
        <ul class="build-lane-list">
          <li>Strategic input on product, policy &amp; GTM</li>
          <li>Introductions to pilot institutions &amp; state bodies</li>
          <li>Advisor equity + flexible monthly commitment</li>
          <li>GovTech, IAS/IPS, KILA, Smart Cities backgrounds welcome</li>
        </ul>
        <span class="build-lane-action">Become an advisor &#8594;</span>
      </div>

      <div class="build-lane lane-gold" onclick="window.location='mailto:ajay@civisense.ai?subject=Investor Deck Request'">
        <div class="build-lane-num">02</div>
        <div class="build-lane-top">
          <div class="build-lane-icon">&#128200;</div>
          <div>
            <div class="build-lane-kicker">Investor</div>
            <div class="build-lane-title">Seed &amp; Impact Investors</div>
          </div>
        </div>
        <p class="build-lane-body">A &#8377;900Cr+ TAM. Zero AI-native competitors. Winners of the DARPG Hackathon, Government of India. A founding team with direct institutional access to Kerala's 941 Panchayats. Raising our seed round to take a live MVP to pilot in 6–7 months.</p>
        <ul class="build-lane-list">
          <li>Raising &#8377;31&#8211;42 Lakhs seed round</li>
          <li>GovTech / DeepTech / Impact thesis fit</li>
          <li>Clear milestone-gated deployment plan</li>
          <li>Deck &amp; financial model available on request</li>
        </ul>
        <span class="build-lane-action">Request investor deck &#8594;</span>
      </div>

      <div class="build-lane lane-purple" onclick="window.location='mailto:ajay@civisense.ai?subject=Joining the Team'">
        <div class="build-lane-num">03</div>
        <div class="build-lane-top">
          <div class="build-lane-icon">&#9881;&#65039;</div>
          <div>
            <div class="build-lane-kicker">Core Team</div>
            <div class="build-lane-title">Founding Engineers &amp; Designers</div>
          </div>
        </div>
        <p class="build-lane-body">We are looking for builders who want to solve a genuinely hard problem — multilingual NLP, voice interfaces for rural India, and AI that helps governments make better decisions. This is founding-team level work, with the equity to match.</p>
        <ul class="build-lane-list">
          <li>Full-stack engineer (FastAPI / React / Next.js)</li>
          <li>ML / NLP engineer (IndicBERT, Whisper, BERTopic)</li>
          <li>UI/UX designer — accessibility &amp; Gov design focus</li>
          <li>Equity-first; salary from seed funding</li>
        </ul>
        <span class="build-lane-action">See open roles &#8594;</span>
      </div>

      <div class="build-lane lane-coral" onclick="window.location='mailto:ajay@civisense.ai?subject=Pilot Programme Enquiry'">
        <div class="build-lane-num">04</div>
        <div class="build-lane-top">
          <div class="build-lane-icon">&#129309;</div>
          <div>
            <div class="build-lane-kicker">Government Partner</div>
            <div class="build-lane-title">Panchayats &amp; Municipalities</div>
          </div>
        </div>
        <p class="build-lane-body">Are you a Panchayat President, Municipal Commissioner, or administrator who wants to resolve citizen grievances faster? We are onboarding our first 2&#8211;3 pilot institutions right now — at zero cost, with full hands-on support from our team.</p>
        <ul class="build-lane-list">
          <li>Completely free 90-day pilot programme</li>
          <li>Full onboarding, training &amp; implementation support</li>
          <li>Co-design the platform with our team</li>
          <li>Kerala institutions given priority access</li>
        </ul>
        <span class="build-lane-action">Apply for pilot &#8594;</span>
      </div>

    </div>

    <div class="build-bottom reveal">
      <a href="mailto:ajay@civisense.ai" class="btn btn-primary btn-lg">Get in touch &#8599;</a>
      <div style="display:flex;flex-direction:column;gap:0.4rem;text-align:center;">
        <span class="build-bottom-tag">ajay@civisense.ai</span>
        <span class="build-bottom-tag">Response within 48 hours, always</span>
      </div>
    </div>

  </div>
</section>

<section class="section cta-section" id="contact">
  <div class="cta-glow"></div>
  <div class="container">
    <div class="cta-inner reveal">
      <div class="section-label">Get Early Access</div>
      <h2 class="h2">Ready to make sense of your governance data?</h2>
      <p>We're onboarding select Panchayats and Municipalities for our pilot program. Request early access and we'll be in touch within 48 hours.</p>
      <div class="demo-form">
        <input type="email" placeholder="your@email.gov.in" />
        <button class="btn btn-primary">Request access ↗</button>
      </div>
      <p class="demo-note">Or email us directly at <a href="mailto:ajay@civisense.ai" style="color: var(--ai);">ajay@civisense.ai</a></p>
    </div>
  </div>
</section>

<!-- ══ FOOTER ═════════════════════════════════════════ -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-mark">civisense<span class="dot-ai">.ai</span></div>
        <div class="footer-desc">Making sense of citizen governance. AI-powered intelligence platform for local government bodies across India.</div>
      </div>
      <div>
        <div class="footer-col-title">Platform</div>
        <ul class="footer-links">
          <li><a href="#solution">civisense.resolve</a></li>
          <li><a href="#solution">civisense.pulse</a></li>
          <li><a href="#solution">civisense.insight</a></li>
          <li><a href="#how">How it works</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="#team">Team</a></li>
          <li><a href="#market">Market</a></li>
          <li><a href="mailto:ajay@civisense.ai">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-brand">
        <span style="color: var(--muted);">© 2026</span>
        <span style="font-family: var(--ff-head); font-weight: 600; color: var(--white);">civisense<span style="font-family: var(--ff-mono); color: var(--ai);">.ai</span></span>
        <span style="color: var(--muted);">· Thiruvananthapuram, Kerala, India</span>
      </div>
      <div style="color: var(--muted);">DARPG Hackathon Winners · DPDP Act Compliant · Seed Stage</div>
    </div>
  </div>
</footer>

<!-- ══ SCRIPTS ════════════════════════════════════════ -->
`;

export default function HomePage() {
  useEffect(() => {
    // ============================================================
    // The interactive scripts from the original HTML, run after the
    // markup is mounted in the DOM.
    // ============================================================

    // Nav scroll effect
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));

    // Counter animation (kept for parity with the original file)
    function animateCounter(el, target, prefix = "", suffix = "") {
      const duration = 1800;
      const start = performance.now();
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = prefix + current.toLocaleString("en-IN") + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }

    // Trigger counters when hero is visible
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              document
                .querySelectorAll(".stat-block .stat-num")
                .forEach((el) => {
                  const text = el.textContent || "";
                  if (text.includes("2.5L")) {
                    el.innerHTML = '<span class="ai">2.5L</span>+';
                  }
                });
            }, 400);
            heroObserver.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsGrid = document.querySelector(".stats-grid");
    if (statsGrid) heroObserver.observe(statsGrid);

    // Smooth scroll for in-page anchor links
    const anchorClickHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const handler = (e) => {
        const href = a.getAttribute("href") || "";
        const id = href.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      a.addEventListener("click", handler);
      anchorClickHandlers.push({ a, handler });
    });

    // Demo form (defensive: only attach if present)
    const demoBtn = document.querySelector(".demo-form button");
    const demoInput = document.querySelector(".demo-form input");
    let demoBtnHandler = null;
    if (demoBtn && demoInput) {
      demoBtnHandler = () => {
        const val = demoInput.value.trim();
        if (val && val.includes("@")) {
          demoInput.value = "";
          demoInput.placeholder =
            "✓ Request received — we'll be in touch!";
          demoInput.style.color = "var(--ai)";
          demoInput.style.borderColor = "var(--border-ai)";
        } else {
          demoInput.style.borderColor = "rgba(239,68,68,0.5)";
          demoInput.placeholder = "Please enter a valid email";
          setTimeout(() => {
            demoInput.style.borderColor = "";
            demoInput.placeholder = "your@email.gov.in";
          }, 2000);
        }
      };
      demoBtn.addEventListener("click", demoBtnHandler);
    }

    // Cleanup on unmount (HMR-friendly)
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      heroObserver.disconnect();
      anchorClickHandlers.forEach(({ a, handler }) =>
        a.removeEventListener("click", handler)
      );
      if (demoBtn && demoBtnHandler) {
        demoBtn.removeEventListener("click", demoBtnHandler);
      }
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
