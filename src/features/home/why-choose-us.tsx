"use client";

import Image from "next/image";
import { Logo } from "../feedback/logo";
import ChooseImageOne from "@/assets/img/home-6/choose-img-1.png";
import ChooseVTopR from "@/assets/img/home-6/choose-vec-top-r.svg";
import ChooseVecBtmL from "@/assets/img/home-6/choose-vec-btm-l.svg";
import { MouseMoveImage } from "../feedback/mouse-move-image";
import { GoArrowUpRight } from "react-icons/go";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Button } from "@/components/ui/button";

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

export default function WhyChooseUs() {
  return (
    <section
      className="pt-5 pb-20 bg-brand-two"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Top heading + image */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
          <div className="w-full">
            <div className="text-brand text-sm tracking-[0.25em] uppercase mb-3 flex flex-row items-center justify-start gap-2">
              <TfiLayoutLineSolid />
              Why Choose Us
            </div>
            <h2
              id="why-choose-us-heading"
              className="text-white text-2xl lg:text-4xl font-semibold leading-tight"
            >
              Unlock The Potential
              <br />
              Of Your Business.
            </h2>
          </div>
          <MouseMoveImage movingImage={ChooseImageOne} />
        </div>

        <div className="mt-14 lg:mt-0 flex flex-col lg:flex-row gap-8 justify-center lg:items-center w-full ">
          <div className="relative overflow-hidden  w-full lg:w-7/12 ">
            <Image
              src={ChooseVecBtmL}
              alt="Decor Top Right"
              width={120}
              height={120}
              className="pointer-events-none select-none absolute top-0 right-0 w-20"
            />

            <Image
              src={ChooseVTopR}
              alt="Decor Bottom Left"
              width={120}
              height={120}
              className="pointer-events-none select-none absolute bottom-0 w-20"
            />

            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10b98115,transparent_55%)] pointer-events-none" /> */}
            <div className="relative space-y-6 p-10 bg-gray-600/20">
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
                <Button
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
                </Button>
              </div>
            </div>
          </div>

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
