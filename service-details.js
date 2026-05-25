const services = {
  bookkeeping: {
    title: "Bookkeeping",
    tagline: "Clean, timely records so you always know where your business stands.",
    image: "images/service1.jpg",
    body: [
      "Strong bookkeeping is the foundation for every financial decision. We organize transactions, keep your chart of accounts consistent, and make sure your books stay aligned with your actual business activity.",
      "Our team handles bank and credit card reconciliations, tracks vendor and customer balances, and prepares a structured monthly close. This creates reliable numbers you can use for planning, reporting, and internal reviews.",
      "You get visibility into trends such as spending patterns, margin movement, and cash position without having to dig through spreadsheets. We also flag anomalies early so issues are resolved before they grow."
    ],
    deliverables: [
      "Categorized transactions with clear account mapping",
      "Monthly profit and loss and balance sheet reports",
      "Bank and credit card reconciliation packages",
      "Accounts receivable and payable summaries",
      "Expense policy alignment and cleanup notes"
    ],
    timeline: "Setup typically takes 1 to 2 weeks. Ongoing processing follows your volume, with monthly closes delivered within 5 to 7 business days."
  },
  "tax-preparation": {
    title: "Tax Preparation",
    tagline: "Organized filings with accurate documentation and year-round readiness.",
    image: "images/service2.jpg",
    body: [
      "We prepare returns with a focus on accuracy, documentation quality, and deadline reliability. Your records are reviewed, categorized, and validated so filings match the underlying books.",
      "Our process includes a structured checklist, a review meeting, and a final confirmation so you understand what is filed and why. We also maintain a compliance calendar to keep key dates visible.",
      "Throughout the year we capture changes that affect filings, such as new revenue streams or expense categories. That keeps year end work smooth and reduces last minute surprises."
    ],
    deliverables: [
      "Tax document organizer and intake checklist",
      "Review-ready summaries aligned with your books",
      "Draft return walkthrough and clarification notes",
      "Filing confirmation and submission receipts",
      "Compliance calendar for upcoming deadlines"
    ],
    timeline: "Initial review and preparation starts within a week of receiving documents. Filing timing follows statutory deadlines and your approval schedule."
  },
  "audit-support": {
    title: "Audit Support",
    tagline: "Audit readiness with organized evidence and responsive coordination.",
    image: "images/service3.jpg",
    body: [
      "Audits can be disruptive without a clean trail of documentation. We prepare a clear set of schedules, reconciliations, and supporting files so auditors can move quickly through their requests.",
      "We help you manage the PBC list, gather evidence, and keep communications consistent. This reduces back and forth and shortens the overall audit timeline.",
      "Our support focuses on transparency and traceability, giving your team confidence that every figure can be explained. We stay involved until all open items are closed."
    ],
    deliverables: [
      "Prepared-by-client list management and tracking",
      "Reconciliation schedules with source support",
      "Document index with clear naming conventions",
      "Audit request response coordination",
      "Issue log and resolution follow ups"
    ],
    timeline: "Preparation begins 2 to 4 weeks before the audit start. Support continues throughout fieldwork until final sign off."
  },
  "payroll-services": {
    title: "Payroll Services",
    tagline: "Reliable pay runs with compliant filings and organized records.",
    image: "images/service6.jpg",
    body: [
      "Payroll requires precision because it touches every employee and every deadline. We run payroll on your preferred schedule and make sure calculations, deductions, and remittances are documented.",
      "We maintain employee records, track changes in compensation, and coordinate with your policies on leave and benefits. This keeps your payroll history clean and easy to review.",
      "Each pay cycle results in clear reports and payslips, so employees have consistent information and leadership has audit-ready records."
    ],
    deliverables: [
      "Scheduled payroll processing and approval runs",
      "Employee payslips and payroll summaries",
      "Statutory deduction tracking and records",
      "New hire and offboarding updates",
      "Year end payroll reports and reconciliations"
    ],
    timeline: "Setup is usually completed within one week. Each pay run is processed within 1 to 2 business days after inputs are approved."
  },
  "financial-advisory": {
    title: "Financial Advisory",
    tagline: "Clear insights for smarter planning and sustainable growth.",
    image: "images/service5.jpg",
    body: [
      "Advisory work turns your financial data into decisions you can act on. We review performance drivers, refine KPIs, and help you build forecasts that reflect your real operating model.",
      "Our guidance supports budgeting, pricing reviews, and cash flow planning so leaders can move with confidence. We focus on practical steps and track the impact over time.",
      "You get structured analysis and a repeatable planning rhythm, not just one time reports. This keeps your strategy grounded in current numbers."
    ],
    deliverables: [
      "KPI framework and monthly performance dashboard",
      "Cash flow forecast with sensitivity scenarios",
      "Budget planning support and variance review",
      "Quarterly strategy check ins",
      "Decision memos for major changes"
    ],
    timeline: "Initial analysis takes 2 to 3 weeks. Advisory cycles typically run monthly or quarterly depending on your needs."
  },
  "business-compliance": {
    title: "Business Compliance",
    tagline: "Keep filings, renewals, and governance on track all year.",
    image: "images/service4.jpg",
    body: [
      "Compliance work protects your business from missed deadlines and incomplete filings. We maintain a structured calendar and prepare the documents you need for ongoing statutory requirements.",
      "From registrations to renewals, our process keeps your records consistent and easy to access. You can rely on a single source of truth for required documents and submissions.",
      "We also provide reminders and status updates so leadership always knows what is pending and what has been completed."
    ],
    deliverables: [
      "Compliance calendar with key dates and owners",
      "Document templates for statutory filings",
      "Submission checklists and filing records",
      "Renewal tracking and reminder workflow",
      "Centralized compliance document archive"
    ],
    timeline: "Initial setup takes 1 to 2 weeks, with ongoing monitoring and filings tied to your regulatory calendar."
  }
};

function renderService(serviceKey) {
  const service = services[serviceKey] || services.bookkeeping;
  const titleEl = document.getElementById("service-title");
  const taglineEl = document.getElementById("service-tagline");
  const imageEl = document.getElementById("service-image");
  const bodyEl = document.getElementById("service-body");
  const deliverablesEl = document.getElementById("service-deliverables");
  const timelineEl = document.getElementById("service-timeline");

  titleEl.textContent = service.title;
  taglineEl.textContent = service.tagline;
  imageEl.src = service.image;
  imageEl.alt = service.title;
  document.title = service.title + " - Palo Accounting";

  bodyEl.innerHTML = service.body.map((text) => `<p>${text}</p>`).join("");
  deliverablesEl.innerHTML = service.deliverables.map((item) => `<li>${item}</li>`).join("");
  timelineEl.textContent = service.timeline;
}

const params = new URLSearchParams(window.location.search);
const serviceKey = params.get("service");
renderService(serviceKey);
