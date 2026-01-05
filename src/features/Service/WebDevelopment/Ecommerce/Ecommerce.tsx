import Header from "@/features/feedback/Header";

const FEATURES = [
  {
    title: "Custom Storefront",
    points: [
      "Modern UI with fast performance",
      "Category, product, and search pages",
      "Product variants (size, color), wishlist, reviews",
    ],
  },
  {
    title: "Cart & Checkout",
    points: [
      "Add to cart, coupon/discount support",
      "Shipping rules + tax calculation",
      "Secure checkout flow with order confirmation",
    ],
  },
  {
    title: "Payment Integration",
    points: [
      "Stripe / PayPal / Razorpay (as needed)",
      "Refunds & partial refunds support",
      "Payment status + webhook handling",
    ],
  },
  {
    title: "Admin Dashboard",
    points: [
      "Product, inventory, and category management",
      "Order management (status, tracking, invoices)",
      "Customer management + analytics reports",
    ],
  },
  {
    title: "Marketing & SEO",
    points: [
      "SEO-friendly pages + meta tags",
      "Email marketing integrations",
      "Abandoned cart + promo campaigns",
    ],
  },
  {
    title: "Security & Scalability",
    points: [
      "Role-based access for admin panel",
      "Secure auth + rate limiting",
      "Optimized images + CDN support",
    ],
  },
];

const STACK = [
  "Next.js / React",
  "Node.js / Express or Next API",
  "MongoDB / PostgreSQL",
  "Stripe / PayPal",
  "Cloud deployment (Vercel / AWS)",
];

export default function Ecommerce() {
  return (
    <div>
      <Header>Ecommerce</Header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ecommerce Web Development
          </h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">
            We build high-performance ecommerce websites with smooth user experience,
            secure payments, and an admin dashboard to manage products, orders, and customers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 border border-zinc-800">
              Fast & SEO Friendly
            </span>
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 border border-zinc-800">
              Secure Checkout
            </span>
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 border border-zinc-800">
              Admin Dashboard
            </span>
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 border border-zinc-800">
              Scalable Architecture
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 hover:border-emerald-500/60 transition"
            >
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
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
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 border border-zinc-800"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-950 to-zinc-900 p-8">
          <h3 className="text-2xl font-semibold text-white">Ready to launch your store?</h3>
          <p className="mt-2 text-zinc-400 max-w-2xl">
            Tell us about your products and goals — we’ll suggest the best ecommerce setup
            and a roadmap to go live.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact-us"
              className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Get a Quote
            </a>
            <a
              href="/project"
              className="rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition"
            >
              See Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
