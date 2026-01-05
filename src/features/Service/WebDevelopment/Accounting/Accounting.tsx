import Header from "@/features/feedback/Header";

const FEATURES = [
  {
    title: "Accounting Dashboard",
    points: [
      "Real-time financial overview",
      "Income, expenses, and balance tracking",
      "Multi-currency and tax support",
    ],
  },
  {
    title: "Invoicing & Billing",
    points: [
      "Create and manage invoices",
      "Recurring invoices & subscriptions",
      "PDF export and email delivery",
    ],
  },
  {
    title: "Expense Management",
    points: [
      "Track expenses by category",
      "Upload receipts & documents",
      "Approval workflows",
    ],
  },
  {
    title: "Reports & Analytics",
    points: [
      "Profit & loss statements",
      "Cash flow and balance sheets",
      "Custom date-range reports",
    ],
  },
  {
    title: "User & Role Management",
    points: [
      "Admin, accountant, staff roles",
      "Permission-based access",
      "Audit logs for activity tracking",
    ],
  },
  {
    title: "Security & Compliance",
    points: [
      "Secure authentication & encryption",
      "Data backups & recovery",
      "Compliance-ready architecture",
    ],
  },
];

const STACK = [
  "Next.js / React",
  "Node.js / API Routes",
  "PostgreSQL / MySQL",
  "Role-based Authentication",
  "Cloud Deployment (Vercel / AWS)",
];

export default function Accounting() {
  return (
    <div>
      <Header>Accounting</Header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Accounting Web Application Development
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            We build secure and scalable accounting systems that help businesses
            manage finances, track expenses, generate reports, and stay compliant
            with financial standards.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Financial Reporting
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Invoicing & Billing
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Expense Tracking
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Secure & Compliant
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-emerald-500/60"
            >
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-950 to-zinc-900 p-8">
          <h3 className="text-2xl font-semibold text-white">
            Need a custom accounting system?
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Whether you need invoicing, expense tracking, or full financial
            management software, we can build a solution tailored to your business.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact-us"
              className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Get a Quote
            </a>
            <a
              href="/project"
              className="rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
