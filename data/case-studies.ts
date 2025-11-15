import React from 'react';
import ReformLogo from '../components/logos/ReformLogo';
import SavvyCalLogo from '../components/logos/SavvyCalLogo';
import FramerLogo from '../components/logos/FramerLogo';
import LinearLogo from '../components/logos/LinearLogo';

export const industries = ["SaaS", "Ed-Tech", "Developer Tools", "Consulting"];

export interface CaseStudy {
  company: string;
  logo: React.ReactElement;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  screenshots: string[];
  outcome: string;
  quote: string;
  author: string;
  title: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: "LearnSphere",
    logo: React.createElement(SavvyCalLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "Ed-Tech",
    problem: "Heavy ad spend without consistent, scalable conversions. Meta campaigns were fragmented, search was under-leveraged, and the post-click funnel was leaking.",
    solution: `Consolidated fragmented Meta campaigns into intent-aligned funnels and shifted budget into high-intent Google Search keywords.
    
**What We Executed**
• Consolidated Meta campaigns & enforced budget discipline.
• Built TY-page retargeting to create low-CPL flows.
• Shifted budget to high-intent Google Search keywords.
• Fixed landing-page mismatch and tracking.
• Implemented a controlled scaling plan for winning campaigns.`,
    results: `The campaign was completely stabilized, turning search into the most efficient channel and creating a scalable acquisition model.

**Key Results**
• **Search:** Became the most efficient channel at ₹455/conversion.
• **Meta:** Stabilized acquisition with winning funnels at ₹322 CPL.
• **Overall:** Reduced wasted spend and established predictable lead flow.`,
    screenshots: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "Realigned media to performance-first and delivered a playbook for a conversion-first campaign structure, a TY retarget stack, and a repeatable scaling routine.",
    quote: "We were burning money on fragmented campaigns. The new system gave us a clear playbook to scale efficiently on both Meta and Google. Search became our most efficient channel overnight.",
    author: "Emily Carter",
    title: "Marketing Director, LearnSphere",
  },
  {
    company: "Impressionly",
    logo: React.createElement(LinearLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "B2B SaaS",
    problem: "Extremely low impression share (<10%) and spiky, expensive conversions. Budget was leaking into low-intent clicks due to poor keyword matching.",
    solution: `Paused low-intent and broad-match leakage and reallocated budget to high-intent keywords with aggressive competitor SERP copy.

**What We Executed**
• Tightened keyword match types and added negatives.
• Reallocated budget to high-intent keyword sets.
• Fixed post-click experience to match intent.
• Implemented remarketing to recover assisted conversions.`,
    results: `Exposed the root cause of high costs: a combination of low impression share and high CPC bursts on irrelevant keywords.
    
**Key Results**
• **Clicks:** 2,230 high-intent clicks at an avg. CPC of ₹107.
• **Impression Share:** Established a roadmap to recover share from <10%.
• **CPL:** Uncovered the reason for the high ₹47.7K CPL and built a plan to fix it.`,
    screenshots: [
        "https://storage.googleapis.com/aistudio-hosting/2024-08-01/image.png",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "Stopped burning search budget by fixing impression-share and match-type leaks, then rebuilt an efficient search funnel.",
    quote: "Our search campaigns were a black box of wasted spend. The audit immediately identified the impression share issue and keyword leakage. Now we have a clear path to dominate our niche.",
    author: "David Lee",
    title: "Founder, Impressionly",
  },
  {
    company: "LuxeCart",
    logo: React.createElement(FramerLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "E-commerce",
    problem: "Extreme CPA variance across dozens of micro ad-sets made it impossible to scale. Winning campaigns were buried in the noise of unprofitable experiments.",
    solution: `Killed single-purchase, high-CPA ad-sets and consolidated creative and audiences into a streamlined campaign structure.
    
**What We Executed**
• Pruned all ad-sets with a CPA above the $25 threshold.
• Scaled winners via duplication and gradual budget ramps.
• Built dynamic retargeting flows (ATC → VC → Purchase).
• Implemented value-based conversion tracking.`,
    results: `The campaign was transformed from chaotic to predictable, with a clear path to scale profitable acquisition.

**Key Results**
• **Stabilized CPA:** Established a repeatable CPA band around ~$23.
• **Identified Winners:** Scaled sub-$25 CPA winners.
• **Efficient Spend:** $3.85K spend produced a scale-ready pipeline.`,
    screenshots: [
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "Pruned the noise and scaled the $5–$25 CPA winners — stabilised CPA and created a repeatable e-commerce acquisition engine.",
    quote: "We were stuck in a cycle of testing without scaling. The new strategy helped us ruthlessly cut the losers and pour fuel on the winners. Our CPA is finally stable and predictable.",
    author: "Sophia Rodriguez",
    title: "Head of E-commerce, LuxeCart",
  },
  {
    company: "DevConnect",
    logo: React.createElement(ReformLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "Tech Events",
    problem: "Massive reach and impressions, but conversions were fragmented across too many micro-campaigns. High CPMs and inconsistent attribution made it hard to prove ROI.",
    solution: `Re-grouped campaigns by objective (Awareness, Consideration, Conversion) and built sequential retargeting from landing page viewers to form submitters.

**What We Executed**
• Consolidated campaigns by funnel stage.
• Scaled the most efficient lead-gen ad-sets.
• Built sequential retargeting flows to capture intent.
• Tightened creative frequency and audience matching to lower CPMs.`,
    results: `The new structure turned broad awareness into a measurable conversion runway with a clear ROI.

**Key Results**
• **Reach:** 18M impressions from ₹2.43L spend.
• **Leads:** Generated 331 qualified leads at an efficient ₹148 CPL.
• **Efficiency:** Created a retargeting audience of 1,467 LP viewers at just ₹11.08 each.`,
    screenshots: [
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "Turned mass reach into measurable leads: ₹2.43L spend led to 9.4M reach and 331 high-quality leads at an efficient ₹148 CPL.",
    quote: "We were great at getting eyeballs but terrible at turning them into leads. The new funnel structure connected our awareness efforts directly to conversions. We finally had a clear ROI to show for our budget.",
    author: "Michael B.",
    title: "Event Organizer, DevConnect",
  },
  {
    company: "ChatSell",
    logo: React.createElement(SavvyCalLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "MarTech",
    problem: "High-volume messaging conversations weren't being qualified or tracked, leading to a flooded sales team and no visibility into what was actually driving revenue.",
    solution: `Inserted an automated qualification flow inside Messenger and reallocated a portion of the budget to a dedicated landing page to capture high-intent leads.

**What We Executed**
• Built a 3-question automated qualification chatbot.
• Created a lead capture landing page for retargeting.
• Mapped conversations to tracked leads in the CRM.
• Shifted to value-based bidding to prioritize quality.`,
    results: `A qualification bridge was built between low-cost conversations and high-value leads, giving the sales team a filtered, prioritized pipeline.
    
**Key Results**
• **Volume:** ~30,000 messaging conversations initiated at ~₹14 each.
• **Quality:** Converted high-intent chats into 140 tracked leads at ₹59/lead.
• **Visibility:** Created a clear connection between messaging ads and CRM data.`,
    screenshots: [
      "https://images.unsplash.com/photo-1589792942483-ba4d5d1a49f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "Built a qualification bridge that turned ~30K low-cost conversations into 140 tracked, high-intent leads by automating qualification and sequencing retargeting.",
    quote: "Our messaging campaigns generated tons of chats, but our sales team was drowning in unqualified conversations. The automated qualification flow was a game-changer. It filters the noise and surfaces the real opportunities.",
    author: "Jessica Wu",
    title: "VP of Sales, ChatSell",
  },
  {
    company: "Ed-Tech Platform (21K School)",
    logo: React.createElement(SavvyCalLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "Ed-Tech",
    problem: "High ad spend with low efficiency. Paying ₹1,200–₹1,700 per conversion with rates at a mere 0.16–0.22%.",
    solution: `A complete overhaul of the Google Ads strategy, including rebuilding campaign architecture and tightening audience intent alignment.

**What I Changed**
• Rebuilt campaign and keyword architecture
• Tightened audience intent alignment
• Fixed scent between ads → landing page
• Added conversion tracking discipline
    `,
    results: `**Key Results (Mar–Jun 2025 vs. 2022)**
• CTR doubled (from ~1.4–1.8% → 2.3–3.3%)
• Cost per conversion dropped 5–7x (from ₹1,227–₹1,769 → ₹235–₹471)
• Conversion rate increased 4–9x (from 0.16–0.22% → 0.84–1.92%)
• Spend efficiency improved massively
    `,
    screenshots: [
        "https://images.unsplash.com/photo-1588349483481-224332850020?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "The same budget now produces significantly more conversions at a fraction of the cost. Predictable growth replaced chaotic scale.",
    quote: "We had traffic, but no conversions. After Dhruv rebuilt our ad strategy and fixed our landing experience, our acquisition costs collapsed. This was our highest-ROI marketing cycle.",
    author: "Founder",
    title: "21K School",
  },
  {
    company: "Pipeline CRM",
    logo: React.createElement(ReformLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "B2B SaaS",
    problem: "Complex enterprise offer, high-friction search funnel, unclear intent targeting, and no meaningful data for optimization.",
    solution: `Restructured campaigns from the ground up to align with high-intent keywords and a clear user journey.

**What I Did**
• Rebuilt targeting and keyword intent groups.
• Launched a simplified landing experience.
• Fixed tracking to measure pipeline signals, not just clicks.
    `,
    results: `**Key Outcomes**
• 2,230 qualified clicks from high-intent search terms.
• ₹107 avg. CPC in a competitive B2B category (vs. ₹150–₹250 benchmarks).
• Re-activated lead flow after weeks of zero conversions.
• Gained clear visibility into which keywords drove sales conversations.
    `,
    screenshots: [
        "https://storage.googleapis.com/aistudio-hosting/2024-08-01/image.png",
        "https://images.unsplash.com/photo-1560415755-bd80d06eda60?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "The campaign went from 'flying blind' to having a clear, data-driven path to acquiring high-value enterprise customers.",
    quote: "We finally saw which campaigns moved the needle. Before this, we were flying blind.",
    author: "Jane Doe",
    title: "Head of Growth, Pipeline CRM",
  },
  {
    company: "GrowthAd Analytics",
    logo: React.createElement(LinearLogo, { className: "h-8 text-zinc-900 dark:text-white" }),
    industry: "SaaS",
    problem: "A beautiful site that looked great but failed to convert visitors into booked demos, resulting in wasted ad spend and a stagnant sales pipeline.",
    solution: `Refactored the conversion tracking system and deployed a new high-intent landing page focused on a single call-to-action.

**What I Changed**
• Implemented end-to-end conversion tracking via GTM.
• Wrote new, direct-response landing page copy.
• Simplified the user flow to a single conversion point.
    `,
    results: `**Key Results**
• +187% increase in demo bookings in the first 30 days.
• -45% reduction in cost-per-qualified-lead.
• 3.2x ROI on the project cost within the first month.
    `,
    screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=1200&auto=format&fit=crop",
    ],
    outcome: "The new system provided immediate ROI and created a predictable source of qualified leads for the sales team.",
    quote: "Our site looked great but didn't perform. The sprint pinpointed the leaks. We went from guessing to having a predictable growth engine.",
    author: "Marcus Chen",
    title: "CEO, GrowthAd Analytics",
  },
];