"use client";

import Link from "next/link";
import Header from "@/features/feedback/Header";

type CardItem = {
  title: string;
  description: string;
  href: string;
};

const CARDS: CardItem[] = [
  {
    title: "Ecommerce 3",
    description: "Online store solutions, product management, payments, and checkout.",
    href: "/service/web-development-3/ecommerce-3",
  },
  {
    title: "Accounting 3",
    description: "Accounting systems, invoicing, reporting, and financial dashboards.",
    href: "/service/web-development-3/accounting-3",
  },
  {
    title: "POS 3",
    description: "Point of Sale systems for billing, inventory, and order management.",
    href: "/service/web-development-3/pos-3",
  },
];

export default function WebDevelopment3() {
  return (
    <div>
      <Header>Web Development 3</Header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-emerald-500/60 hover:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.description}</p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                View Details
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
