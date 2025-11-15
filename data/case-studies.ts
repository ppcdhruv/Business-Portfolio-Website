export const industries = ["SaaS", "Ed-Tech", "Developer Tools", "Consulting"];

export interface CaseStudy {
  company: string;
  industry: string;
  budgetContext: string;
  problem: string;
  solution: string;
  kpis: string;
  screenshots: string[];
  outcome: string;
  quote: string;
}

const GITHUB_IMAGE_PATH = "https://raw.githubusercontent.com/ppcdhruv/Business-Portfolio-Website/main/data/screenshots/";

export const caseStudies: CaseStudy[] = [
  {
    company: "Large-Scale Acquisition System",
    industry: "Ed-Tech",
    budgetContext: "High-Growth Multi-Channel Spend",
    problem: "The company was running heavy Meta and Google budgets, but campaigns were fragmented, CPLs unstable, and the funnel leaked after click. Meta lacked discipline, Search was under-utilized, and tracking was unreliable.",
    solution: `**Solution**
• Consolidated Meta ad sets into intent-aligned flows
• Shifted budget to high-intent Search keywords (branded + non-branded)
• Fixed post-click mismatch & rebuilt TY-page retargeting
• Put tracking + attribution sanity in place
• Rolled out a structured scaling plan for winning funnels`,
    kpis: `Search CPL: ₹1769 → ₹455
Meta CPL: Unstable → ₹322
Conv. Rate: 0.22% → 1.92%
CTR: 1.8% → 3.3%`,
    screenshots: [
      `${GITHUB_IMAGE_PATH}ed-tech-dashboard.png`,
      `https://raw.githubusercontent.com/ppcdhruv/Business-Portfolio-Website/b09da1d395b0a29c98c446f917adf885630db2ce/data/Time_series(2025.03.01-2025.06.30_compared_to_2022.03.01-2022.06.30).png`
    ],
    outcome: "The same spend now delivers 5–7× more conversions. Search became the most efficient channel, Meta stabilized, and the full system moved from “chaotic scale” to predictable acquisition.",
    quote: "We were burning money on fragmented campaigns. Dhruv gave us a clear playbook to scale efficiently on both Meta and Google — performance flipped overnight.",
  },
  {
    company: "Search Overhaul",
    industry: "B2B SaaS",
    budgetContext: "Mid-Range Search Spend",
    problem: "Impression share was <10%. CPCs spiked unpredictably. Budget leaked into low-intent broad-match traffic, leading to a massive ₹47.7K CPL. The funnel was basically blind.",
    solution: `**Solution**
• Locked match types + added aggressive negatives
• Reallocated spend into high-intent SERPs
• Tightened scent (ads → landing page)
• Added remarketing funnel to recover assisted conversions`,
    kpis: `Qual. Clicks: 0 → 2,230
Avg. CPC: ₹250 → ₹107
CPL: ₹47.7K → <₹10K
Imp. Share: <10% → 45%`,
    screenshots: [
      `${GITHUB_IMAGE_PATH}b2b-search-cpc.png`,
      `https://raw.githubusercontent.com/ppcdhruv/Business-Portfolio-Website/b09da1d395b0a29c98c446f917adf885630db2ce/data/Time_series(2025.02.01-2025.08.30).png`
    ],
    outcome: "Search stopped burning cash. The new structure exposed the real leak (impression share + keyword mismatch) and created a stable plan to rebuild profitable acquisition.",
    quote: "Our search campaigns were a black box of wasted spend. Dhruv identified the exact leakage points — we finally have a path to dominate our niche.",
  },
  {
    company: "CPA Stabilization",
    industry: "D2C E-commerce",
    budgetContext: "~$3.8K Meta Budget",
    problem: "Dozens of micro ad-sets caused a chaotic CPA range. Winners were buried inside losing experiments. Scaling was impossible.",
    solution: `**Solution**
• Eliminated all ad-sets above the $25 CPA threshold
• Consolidated audiences + creatives
• Built dynamic retargeting (ATC → VC → Purchase)
• Implemented value-based bidding for quality control`,
    kpis: `CPA: $120 → $23
Scale: Impossible → Predictable
Efficiency: Low → High`,
    screenshots: [
      `${GITHUB_IMAGE_PATH}d2c-ecommerce-roas.png`,
      `${GITHUB_IMAGE_PATH}shopify-analytics.png`
    ],
    outcome: "The brand moved from “testing hell” to predictable growth. A repeatable acquisition engine replaced guesswork.",
    quote: "We were stuck testing endlessly. Dhruv cut the noise and scaled the winners. Our CPA is finally stable and predictable.",
  },
    {
    company: "Full-Funnel Acquisition",
    industry: "Tech Events",
    budgetContext: "₹2.43L Spend",
    problem: "Mass reach with no structured path to conversion. High CPMs, fragmented attribution, and no measurable ROI pipeline.",
    solution: `**Solution**
• Grouped campaigns by objective (Awareness → Consideration → Conversion)
• Built sequential retargeting
• Scaled efficient lead-gen sets
• Controlled frequency + improved audience match`,
    kpis: `Reach: 0 → 9.4M
Leads: 0 → 331
Lead CPL: >₹500 → ₹148
Retargeting: 0 → 1,467`,
    screenshots: [
      `${GITHUB_IMAGE_PATH}tech-events-leads.png`,
      `https://raw.githubusercontent.com/ppcdhruv/Business-Portfolio-Website/b09da1d395b0a29c98c446f917adf885630db2ce/data/Time_series_chart(2024.01.26-2024.02.28).png`
    ],
    outcome: "Mass awareness was turned into directly measurable leads with a clear ROI path.",
    quote: "We were great at getting eyeballs but terrible at converting them. Dhruv connected the entire funnel — finally a clear ROI.",
  },
  {
    company: "Automated Qualification Engine",
    industry: "MarTech",
    budgetContext: "High-Volume Messaging Spend",
    problem: "Tens of thousands of conversations, but no qualification or tracking. Sales team overwhelmed with noise.",
    solution: `**Solution**
• Built a 3-question automated qualifier
• Deployed landing page for high-intent capture
• Synced everything into CRM with clean data
• Shifted to value-based bidding`,
    kpis: `Qual. Rate: 0% → 85%
Leads: 0 → 140
Lead CPL: N/A → ₹59
CRM Sync: Manual → Auto`,
    screenshots: [
      `${GITHUB_IMAGE_PATH}martech-crm-qualified.png`,
      `${GITHUB_IMAGE_PATH}automation-flowchart.png`
    ],
    outcome: "A qualification bridge filtered noise into a prioritized pipeline.",
    quote: "Our messaging campaigns generated noise, not leads. Dhruv’s system filtered everything. Game-changing.",
  },
  {
    company: "Google Ads Turnaround",
    industry: "Ed-Tech",
    budgetContext: "Scale-Up Google Ads Spend",
    problem: "Low CTR, extremely low conversion rates (~0.2%), and high CPL (~₹1,200–₹1,700). Search was expensive and inefficient.",
    solution: `**Solution**
• Rebuilt Search architecture from scratch
• Tightened intent matching
• Fixed scent between ads → landing pages
• Enforced tracking discipline`,
    kpis: `CTR: 1.6% → 2.8%
Conv. Rate: 0.2% → 1.4%
CPL: ₹1500 → ₹350
Efficiency: 1x → 6x`,
    screenshots: [
        `${GITHUB_IMAGE_PATH}google-ads-turnaround-ctr.png`,
        `${GITHUB_IMAGE_PATH}ed-tech-conversion-rate.png`
    ],
    outcome: "Search performance flipped from loss-making to high-ROI with predictable growth.",
    quote: "Traffic wasn’t the problem — conversions were. After Dhruv rebuilt our funnel, costs collapsed and results skyrocketed.",
  },
  {
    company: "B2B Search Rebuild",
    industry: "B2B SaaS",
    budgetContext: "High-Intent Enterprise Search",
    problem: "High-friction search funnel, unclear targeting, no tracking clarity. Zero conversions for weeks.",
    solution: `**Solution**
• Rebuilt high-intent keyword groups
• Simplified landing page for one job: booked calls
• Implemented proper tracking focusing on pipeline metrics`,
    kpis: `Qual. Clicks: 0 → 2,230
Avg. CPC: ₹200 → ₹107
Lead Flow: Stagnant → Active
Tracking: None → Clear`,
    screenshots: [
        `${GITHUB_IMAGE_PATH}b2b-search-rebuild-keywords.png`,
        `${GITHUB_IMAGE_PATH}b2b-pipeline-dashboard.png`
    ],
    outcome: "The campaign finally produced measurable pipeline and a path to profitable scale.",
    quote: "We finally understood which keywords brought real sales conversations. Before this, it was guesswork.",
  },
];