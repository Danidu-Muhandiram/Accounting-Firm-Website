const blogPosts = {
  "empowering-small-businesses": {
    title: "Empowering Small Businesses for Big Success",
    subtitle: "How a focused financial reset helped a growing startup unlock clarity, stability, and confidence.",
    category: "Case Study",
    date: "May 20, 2026",
    readTime: "7 min read",
    image: "images/blog1.jpg",
    highlights: [
      "Rebuilt monthly close routines for fast reporting",
      "Identified margin leaks across top services",
      "Improved cash visibility with weekly snapshots",
      "Created a simple owner dashboard for decisions",
      "Established a repeatable budgeting rhythm"
    ],
    cta: "We help small businesses stabilize the numbers so leaders can focus on growth with confidence.",
    body: [
      "The business had strong demand but uneven profitability. Revenue looked healthy, yet cash was tight and reporting always arrived too late to guide decisions. We began with a diagnostic review of the chart of accounts, bank activity, and project-level margins.",
      "Next, we standardized how income and expenses were categorized. This allowed us to compare like for like performance across months and understand which services created the best contribution margin. We built a weekly cash snapshot so the founder could see actual runway without waiting for month end.",
      "With clean data in place, we created a monthly close checklist and a simple dashboard that highlighted revenue trends, overhead ratios, and cash coverage. The leadership team could finally align operations with the numbers instead of reacting to surprises.",
      "Within one quarter the company had a reliable reporting rhythm, a clearer pricing strategy, and a predictable cash plan. That shift made it easier to hire, invest in marketing, and scale responsibly."
    ]
  },
  "tax-efficiency": {
    title: "Breaking Barriers with Tax Efficiency",
    subtitle: "A manufacturing firm reduced tax pressure by aligning records, timing, and compliance planning.",
    category: "Tax Strategy",
    date: "May 24, 2026",
    readTime: "6 min read",
    image: "images/blog2.jpg",
    highlights: [
      "Mapped expenses to eligible incentives",
      "Aligned inventory records with tax filings",
      "Reduced year end adjustments through monthly reviews",
      "Created a compliance calendar with owner sign offs",
      "Improved documentation for future assessments"
    ],
    cta: "Our tax preparation process keeps documentation clean and filings consistent year round.",
    body: [
      "The company had grown quickly and tax filings became a stressful, last minute effort. We started by reviewing expense classifications and discovered several categories that were misaligned with available incentives and statutory rules.",
      "By restructuring how costs were captured during the year, we minimized adjustments at filing time. We also synchronized inventory records with financial statements, which removed discrepancies that previously triggered corrections.",
      "Monthly reviews were added to reduce surprises. This gave the leadership team visibility into tax exposure ahead of deadlines and helped them time purchases and operational changes appropriately.",
      "The result was a smoother filing cycle, more predictable liabilities, and documentation that stood up confidently to review."
    ]
  },
  "turning-challenges": {
    title: "Turning Challenges into Opportunities",
    subtitle: "A retail business rebalanced operations to grow revenue by focusing on the right levers.",
    category: "Growth Story",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: "images/blog3.jpg",
    highlights: [
      "Reworked category level profitability tracking",
      "Introduced rolling 12 week cash planning",
      "Reduced dead stock with tighter purchasing",
      "Mapped promotional spend to real returns",
      "Improved monthly decision cadence"
    ],
    cta: "We translate retail performance data into actions that protect cash and grow profit.",
    body: [
      "Foot traffic was steady, yet profit was inconsistent. The business needed a clearer picture of which product categories and promotions were truly effective.",
      "We introduced category level reporting and paired it with a rolling cash plan. That made it obvious where inventory was tying up cash without delivering margin.",
      "The team then adjusted purchasing schedules, tightened promotional budgets, and focused on top performing product lines. This reduced waste and improved cash flow without sacrificing revenue.",
      "By aligning operations with financial signals, the business regained momentum and built a more resilient growth plan."
    ]
  },
  "profitability-planning": {
    title: "Maximizing Profitability Through Financial Planning",
    subtitle: "A structured forecasting process helped a retailer lift profit without adding complexity.",
    category: "Planning",
    date: "April 27, 2026",
    readTime: "5 min read",
    image: "images/blog1.jpg",
    highlights: [
      "Created a simple forecast tied to sales cycles",
      "Aligned staffing costs with revenue patterns",
      "Repriced low margin offerings",
      "Built a monthly variance review rhythm",
      "Improved leadership reporting clarity"
    ],
    cta: "Our advisory service brings structure to planning and keeps your forecasts realistic.",
    body: [
      "The team had strong intuition but lacked a consistent forecasting process. We built a lightweight model tied to their sales cycles so targets were grounded in real demand.",
      "Once the forecast was stable, we matched staffing and operating costs to the periods that created the most revenue. This prevented over hiring during slow periods and reduced cash strain.",
      "We also reviewed pricing across key offerings and adjusted the ones that consistently underperformed. The combination of pricing clarity and cost alignment improved margins almost immediately.",
      "Regular variance reviews kept leadership focused on the most impactful metrics, which made planning more proactive and less reactive."
    ]
  },
  "cash-flow-clarity": {
    title: "Cash Flow Clarity for Seasonal Retailers",
    subtitle: "Seasonal swings became predictable after building a cash flow playbook.",
    category: "Cash Flow",
    date: "April 10, 2026",
    readTime: "5 min read",
    image: "images/blog3.jpg",
    highlights: [
      "Built a seasonal cash flow calendar",
      "Smoothed supplier payments with planning",
      "Identified peak risk weeks in advance",
      "Aligned marketing spend to cash windows",
      "Improved cash coverage ratios"
    ],
    cta: "We help businesses plan seasonal cycles with confidence and control.",
    body: [
      "Seasonal peaks delivered strong sales, but the weeks leading up to them created heavy cash pressure. Inventory purchases and marketing spend were rising before revenue arrived.",
      "We created a cash flow calendar that mapped incoming and outgoing cash across the season. This highlighted the most sensitive weeks and allowed leadership to plan ahead.",
      "With the calendar in place, the business adjusted payment timing with key suppliers and staged marketing spend around available cash windows. That reduced short term strain and avoided emergency decisions.",
      "The new visibility helped the team prepare for each season with a clear plan, keeping growth steady without unnecessary risk."
    ]
  },
  "payroll-precision": {
    title: "Scaling with Payroll Precision",
    subtitle: "A growing team needed a payroll system that stayed accurate as headcount increased.",
    category: "Operations",
    date: "March 22, 2026",
    readTime: "5 min read",
    image: "images/blog2.jpg",
    highlights: [
      "Standardized payroll inputs and approvals",
      "Streamlined onboarding and offboarding steps",
      "Improved compliance documentation",
      "Reduced payroll processing time",
      "Delivered clean year end reports"
    ],
    cta: "Our payroll services keep every pay run accurate, documented, and compliant.",
    body: [
      "Rapid hiring created payroll complexity. Approvals were inconsistent and documentation was spread across multiple systems, which increased the risk of errors.",
      "We built a structured input process, clarified approval ownership, and centralized payroll data. This reduced rework and improved confidence for both employees and management.",
      "Clear onboarding and offboarding steps ensured each employee record stayed accurate. This also created cleaner compliance files when it was time to review statutory obligations.",
      "With the new process in place, payroll became a reliable operational rhythm rather than a monthly scramble."
    ]
  }
};

function renderBlogPost(postKey) {
  const post = blogPosts[postKey] || blogPosts["empowering-small-businesses"];
  const titleEl = document.getElementById("blog-title");
  const subtitleEl = document.getElementById("blog-subtitle");
  const categoryEl = document.getElementById("blog-category");
  const dateEl = document.getElementById("blog-date");
  const readTimeEl = document.getElementById("blog-readtime");
  const imageEl = document.getElementById("blog-image");
  const contentEl = document.getElementById("blog-content");
  const highlightsEl = document.getElementById("blog-highlights");
  const ctaEl = document.getElementById("blog-cta");

  titleEl.textContent = post.title;
  subtitleEl.textContent = post.subtitle;
  categoryEl.textContent = post.category;
  dateEl.textContent = post.date;
  readTimeEl.textContent = post.readTime;
  imageEl.src = post.image;
  imageEl.alt = post.title;
  document.title = post.title + " - Palo Accounting";

  contentEl.innerHTML = post.body.map((text) => `<p>${text}</p>`).join("");
  highlightsEl.innerHTML = post.highlights.map((item) => `<li>${item}</li>`).join("");
  ctaEl.textContent = post.cta;
}

const params = new URLSearchParams(window.location.search);
const postKey = params.get("post");
renderBlogPost(postKey);
