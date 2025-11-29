"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    id: 1,
    title: "Step 01",
    content:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex.",
  },
  {
    id: 2,
    title: "Step 02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci sed justo auctor blandit non vitae urna.",
  },
  {
    id: 3,
    title: "Step 03",
    content:
      "Suspendisse potenti. Nullam vitae magna a lacus cursus feugiat. Vivamus euismod erat in sem ultrices, vitae facilisis nibh semper.",
  },
];

export default function Contact() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between">
        {/* LEFT SIDE */}
        <div className="text-gray-300 w-full  p-10">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md">
            We&apos;re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          {/* Call box */}
          <div className="mb-10">
            <div className="inline-flex items-center border border-brand bg-transparent px-6 py-3 rounded-sm shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              <span className="text-sm font-semibold text-white mr-2">
                Call Us Now:
              </span>
              <span className="text-sm font-semibold text-brand">
                +880 123 345 6789
              </span>
            </div>
          </div>

          {/* Steps / accordion */}
          <div className="space-y-2 border-t border-white/10 pt-2 ">
            {STEPS.map((step) => {
              const isOpen = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  className={`border-b border-white/10 pb-3 last:border-b-0`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((prev) => (prev === step.id ? null : step.id))
                    }
                    className="flex w-full items-center justify-between py-3 text-left"
                  >
                    <span
                      className={`text-sm font-semibold ${
                        isOpen ? "text-brand" : "text-white"
                      }`}
                    >
                      {step.title}
                    </span>
                    {isOpen ? (
                      <FiMinus className="text-brand" />
                    ) : (
                      <FiPlus className="text-gray-400" />
                    )}
                  </button>

                  {isOpen && (
                    <p className="text-xs leading-relaxed text-gray-400 pr-6">
                      {step.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="w-full">
          <div className="rounded-2xl bg-linear-to-b from-[#101827] to-[#050812] px-8 py-8 shadow-xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Make a Free Consulting
            </h3>

            <form className="space-y-4">
              {/* First / Last name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-xs  mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs  mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-sm bg-transparent border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand/90 text-black font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
