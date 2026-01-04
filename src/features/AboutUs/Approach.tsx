"use client";

import Image from "next/image";
import ApproachOne from "@/assets/img/home-3/home3-about-1.png";
import ApproachTwo from "@/assets/img/home-3/home3-about-2.png";

export default function Approach() {
  return (
    <section className="relative w-full bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Our Approach
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services can
              range from your budget.
            </p>

            <div className="mt-10">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <Image
                  src={ApproachOne}
                  alt="Team discussion"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-4 lg:pt-24">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Unlock The Potential
              <br />
              Of Your Business.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              We believe in delivering tailored solutions that are designed to
              address your unique requirements. We take the time to understand
              your business and provide personalized services that align with
              your goals.
            </p>

            {/* Features line */}
            <div className="mt-10">
              <div className="relative flex items-center">
                <div className="h-px w-full bg-white/15" />
                <span className="absolute left-[22%] flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.18)]" />
                <span className="absolute left-[68%] flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.18)]" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-base font-bold">Customized Solutions</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Services are professional offerings provided.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold">Quality Reliability</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Services are professional offerings provided.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:col-span-3 lg:pt-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <Image
                src={ApproachTwo}
                alt="Team collaboration"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Badge */}
            <div className="mt-10 flex justify-center lg:justify-end">
              <ExperienceBadge years={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceBadge({ years = 10 }: { years?: number }) {
  return (
    <div className="relative h-44 w-44">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full bg-emerald-400 shadow-[0_0_0_10px_rgba(52,211,153,0.10)]" />
      <div className="absolute inset-3 rounded-full bg-[#0b0b0b]/20" />

      {/* Text ring */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <text
          fill="rgba(0,0,0,0.55)"
          fontSize="12"
          fontWeight="700"
          letterSpacing="3"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            # PROVIDED SERVICE # PROVIDED SERVICE
          </textPath>
        </text>
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-5xl font-extrabold leading-none text-[#0b0b0b]">
          {years}
        </div>
        <div className="mt-1 text-lg font-medium text-[#0b0b0b]">Years</div>
      </div>
    </div>
  );
}
