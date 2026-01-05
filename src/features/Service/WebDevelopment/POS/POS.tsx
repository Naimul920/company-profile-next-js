import Header from "@/features/feedback/Header";

const FEATURES = [
  {
    title: "POS Dashboard",
    points: [
      "Real-time sales overview",
      "Daily, weekly, and monthly reports",
      "Multi-store & multi-terminal support",
    ],
  },
  {
    title: "Billing & Checkout",
    points: [
      "Fast billing with barcode support",
      "Discounts, taxes, and coupons",
      "Multiple payment methods (cash, card, UPI)",
    ],
  },
  {
    title: "Inventory Management",
    points: [
      "Stock in/out tracking",
      "Low-stock alerts",
      "Product variants & categories",
    ],
  },
  {
    title: "Customer Management",
    points: [
      "Customer profiles & purchase history",
      "Loyalty points & rewards",
      "Customer-wise discounts",
    ],
  },
  {
    title: "User & Staff Roles",
    points: [
      "Cashier, manager, admin roles",
      "Permission-based access",
      "Shift & activity tracking",
    ],
  },
  {
    title: "Security & Reliability",
    points: [
      "Offline mode with sync",
      "Secure authentication",
      "Data backup & recovery",
    ],
  },
];

const STACK = [
  "Next.js / React",
  "Node.js / API Services",
  "PostgreSQL / MongoDB",
  "Barcode Scanner Integration",
  "Cloud & Local Deployment",
];

export default function POS() {
  return (
    <div>
      <Header>POS System</Header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            POS (Point of Sale) System Development
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            We build fast, reliable, and scalable POS systems for retail stores,
            restaurants, and businesses — designed to streamline sales, inventory,
            and customer management.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Fast Billing
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Inventory Tracking
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Offline Support
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
              Secure & Scalable
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
            Need a custom POS solution?
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Whether you run a retail shop, restaurant, or multi-store business,
            we can build a POS system tailored to your workflow and growth.
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
