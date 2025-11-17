"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import ChooseImageOne from "@/assets/img/home-6/choose-img-1.png";
import { Logo } from "../feedback/logo";
import { GoArrowUpRight } from "react-icons/go";

const stats = [
  {
    value: "70%",
    title: "Strategy",
    desc: "Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus at. Aliquam one cursus nunc arcu.",
  },
  {
    value: "95%",
    title: "Audience",
    desc: "Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus at. Aliquam one cursus nunc arcu.",
  },
  {
    value: "34%",
    title: "Keyword",
    desc: "Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus at. Aliquam one cursus nunc arcu.",
  },
];

type Offset = { x: number; y: number };

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    const maxOffset = 20;

    let newX = 0;
    let newY = 0;

    // Decide main direction: left/right/top/bottom
    if (Math.abs(dx) > Math.abs(dy)) {
      newX = dx > 0 ? maxOffset : -maxOffset;
      newY = 0;
    } else {
      newY = dy > 0 ? maxOffset : -maxOffset;
      newX = 0;
    }

    setOffset({ x: newX, y: newY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section className="py-20" aria-labelledby="why-choose-us-heading">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Top heading + image */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-5/12">
            <p className="text-brand text-sm tracking-[0.25em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2
              id="why-choose-us-heading"
              className="text-white text-2xl lg:text-4xl font-semibold leading-tight"
            >
              Unlock The Potential
              <br />
              Of Your Business.
            </h2>
          </div>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-30 w-full lg:w-7/12 mx-auto lg:mx-0"
          >
            <div
              className="transition-transform duration-200 ease-out will-change-transform translate-x-5 translate-y-5"
              style={{
                transform: `translate(calc(${offset.x}px + 1.25rem), calc(${offset.y}px + 1.25rem))`,
              }}
            >
              <Image
                src={ChooseImageOne}
                alt="Team collaborating in modern office"
                className="w-full h-auto"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 justify-center lg:items-end w-full">
          {/* Left card */}
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 shadow-2xl shadow-gray-800 w-full lg:w-7/12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10b98115,transparent_55%)] pointer-events-none" />
            <div className="relative space-y-6">
              <Logo />

              <h3 className="text-2xl sm:text-3xl text-white font-medium">
                Best Creative IT Agency And Solutions
                <br />
                <span className="text-brand">Since 2005.</span>
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Morbi interdum pellentesque nunc, luctus pretium nullagoneq
                luctus at. Aliquam cursus nunc arcu, condimentum efficiturunt
                tellus iaculis faucibus Quisque gravida.
              </p>

              <div className="mt-20 flex items-start justify-between gap-6 flex-wrap">
                <p className="text-5xl sm:text-6xl font-extrabold text-gray-500/40">
                  #1
                </p>

                <button
                  type="button"
                  className="
                    group relative inline-flex items-center justify-center
                    w-32 h-32 sm:w-36 sm:h-36
                    rounded-full border border-gray-400 hover:border-none bg-brand
                    overflow-hidden
                  "
                >
                  <span
                    className="
                      absolute inset-0 rounded-full bg-brand-dark
                      scale-100 group-hover:scale-0
                      transition-transform duration-500 ease-out
                    "
                  />
                  <span
                    className="
                      relative z-10 flex items-center gap-2
                      text-[11px] sm:text-xs font-medium tracking-[0.18em]
                      uppercase text-white
                    "
                  >
                    <GoArrowUpRight className="text-lg transition-transform duration-300 group-hover:rotate-45" />
                    <span>About More</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right stats column */}
          <div className="space-y-10 p-2 sm:p-5 w-full lg:w-5/12">
            {stats.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-6 rounded-2xl w-full"
              >
                <div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-white/10">
                    <span className="text-white text-xl sm:text-2xl font-semibold">
                      {item.value}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-base font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
