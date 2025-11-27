"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiCheck, FiX } from "react-icons/fi";
import { ButtonLink } from "../feedback/button-link";

type Billing = "monthly" | "yearly";

type PlanFeature = {
  label: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: number;
  featured?: boolean;
  features: PlanFeature[];
};

type BillingConfig = {
  priceSuffix: string;
  plans: Plan[];
};

const BILLING_CONFIG: Record<Billing, BillingConfig> = {
  monthly: {
    priceSuffix: "/month",
    plans: [
      {
        name: "Basic Plan",
        price: 29,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: false },
          { label: "Suitable For Small Businesses", included: false },
        ],
      },
      {
        name: "Premium Plan",
        price: 49,
        featured: true,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: true },
          { label: "Suitable For Small Businesses", included: true },
        ],
      },
      {
        name: "Enterprise Plan",
        price: 89,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: true },
          { label: "Suitable For Small Businesses", included: true },
        ],
      },
    ],
  },

  yearly: {
    priceSuffix: "/year",
    plans: [
      {
        name: "Basic Plan",
        price: 290,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: false },
          { label: "Suitable For Small Businesses", included: false },
        ],
      },
      {
        name: "Premium Plan",
        price: 490,
        featured: true,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: true },
          { label: "Suitable For Small Businesses", included: true },
        ],
      },
      {
        name: "Enterprise Plan",
        price: 890,
        features: [
          { label: "Email & Communication Services", included: true },
          { label: "Basic Data Backup And Storage", included: true },
          { label: "Standard Security Measuresing", included: true },
          { label: "Limited Software Support", included: true },
          { label: "Suitable For Small Businesses", included: true },
        ],
      },
    ],
  },
};

export default function ChoosePlan() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const { priceSuffix, plans } = BILLING_CONFIG[billing];

  return (
    <section className="bg-[#05070b] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading (same for both, you can also split per billing if you want) */}

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Choose Your Plan
        </h2>

        {/* Billing toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center rounded-full bg-[#05070b] p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
                billing === "monthly"
                  ? "bg-[#1f2933] text-white shadow"
                  : "text-gray-400"
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`relative px-6 py-2 text-sm font-semibold rounded-full transition ${
                billing === "yearly"
                  ? "bg-[#1f2933] text-white shadow"
                  : "text-gray-400"
              }`}
            >
              Billed Yearly
              <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-black">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl bg-linear-to-b from-[#111827] to-[#05070b] shadow-lg border border-white/5 overflow-hidden ${
                plan.featured ? "md:-mt-4 md:pb-8" : ""
              }`}
            >
              {/* Top content */}
              <div className="px-8 pt-8 pb-6 border-b border-white/5">
                <p className="text-center text-sm font-semibold text-brand mb-3">
                  {plan.name}
                </p>

                <div className="flex items-end justify-center gap-1 text-white mb-2">
                  <span className="text-2xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-sm text-brand">{priceSuffix}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 px-8 py-6 space-y-3 text-sm text-gray-200">
                {plan.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between border-b border-white/5 pb-2 last:border-b-0"
                  >
                    <span>{feature.label}</span>
                    {feature.included ? (
                      <FiCheck className="text-brand text-lg" />
                    ) : (
                      <FiX className="text-red-500 text-lg" />
                    )}
                  </div>
                ))}
              </div>
              <ButtonLink>Pay Now</ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
