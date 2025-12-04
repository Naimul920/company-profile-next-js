"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { CiPlay1 } from "react-icons/ci";

import { ButtonLink } from "../feedback/button-link";
import { SocialLinks } from "../feedback/social-link";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import hero1 from "@/assets/img/home-3/home3-banner-img.png";
import hero2 from "@/assets/img/home-3/home3-banner-img3.png";
import hero3 from "@/assets/img/home-3/home3-banner-img2.png";

type Slide = {
  image: StaticImageData;
  title: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    image: hero1,
    title: "Grow Your Business With Innovative Ideas.",
    description:
      "Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis going leo.",
  },
  {
    image: hero2,
    title: "Turn Bold Visions Into Real Results.",
    description:
      "Phasellus at lacus at urna pretium porta. Integer sed lorem lectus. Suspendisse potenti. Vivamus vel laoreet neque et ornare.",
  },
  {
    image: hero3,
    title: "Build a Strong Digital Presence That Lasts.",
    description:
      "Sed sed nisl sit amet nisl faucibus varius. Curabitur efficitur metus nisi, sit amet bibendum nisi mattis ut. Mauris pellentesque sapien vel dui.",
  },
];

const YT_EMBED =
  "https://www.youtube.com/embed/LrjlW00kkws?autoplay=1&mute=1&rel=0&showinfo=0";

/* ------------------------------------------------------------------ */
/* Main */
/* ------------------------------------------------------------------ */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const currentSlide = SLIDES[index];

  // Auto-change slide every 5s
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % SLIDES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20">
      {/* Left dots (optional) */}
      {/* <div className="absolute left-6 top-1/2 z-30 -translate-y-1/2 space-y-6">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "block h-3 w-3 rounded-full border transition",
              i === index
                ? "bg-emerald-400 border-emerald-400"
                : "border-white/30 hover:bg-white/30"
            )}
          />
        ))}
      </div> */}

      {/* Main layout container */}
      <div className="mx-auto border-gray-700/50 lg:max-w-[calc(100%-8rem)] lg:border-x">
        {/* Right social icons */}
        <div className="absolute right-2 top-1/2 z-30 -translate-y-1/2">
          <SocialLinks
            classNameDiv="flex-col gap-4"
            classNameButton="border-none hover:bg-transparent hover:text-brand"
          />
        </div>

        <div className="relative flex flex-row justify-around gap-10 p-10">
          <LeftContent slide={currentSlide} />
          <RightImage index={index} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Left: content that now slides with RightImage */
/* ------------------------------------------------------------------ */
function LeftContent({ slide }: { slide: Slide }) {
  return (
    <div className="z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-0 ">
      <h1 className="text-4xl font-extrabold leading-tight md:text-6xl ">
        {slide.title}
      </h1>

      <p className="mt-2 text-sm leading-relaxed text-white/70 lg:mt-8">
        {slide.description}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between max-w-3xl  gap-6">
        <ButtonLink>Free Consultancy</ButtonLink>

        <Link
          href="#"
          className="group inline-flex items-center gap-3 font-semibold text-gray-200 transition-colors hover:text-brand"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-400 transition-all duration-300 group-hover:border-brand group-hover:rotate-45">
            <GoArrowUpRight className="text-base transition-all duration-300 group-hover:text-brand md:text-xl" />
          </div>
          <span className="text-base tracking-wide md:text-xl">
            Explore More
          </span>
        </Link>

        {/* Circular preview with image + play icon (opens video) */}
        <div className="h-min w-min">
          <Dialog modal={false}>
            <DialogTrigger asChild>
              <button
                className="group relative z-20 grid h-32 w-32 place-items-center overflow-hidden rounded-full border border-white/20 bg-transparent p-0 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 xl:h-44 xl:w-44"
                aria-label="Play video"
              >
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt="Video preview"
                    fill
                    sizes="180px"
                    className="object-cover opacity-80 transition duration-300 group-hover:opacity-100"
                    priority
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />

                <CiPlay1 className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110" />
              </button>
            </DialogTrigger>

            <DialogContent className="border-0 bg-transparent p-0">
              <DialogTitle className="sr-only">Hero Video</DialogTitle>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src={YT_EMBED}
                  title="YouTube video player"
                  className="h-full w-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Right: carousel image */
/* ------------------------------------------------------------------ */
export function RightImage({ index }: { index: number }) {
  return (
    <div className="hidden lg:block">
      <div className="relative gap-6">
        <div className="group relative z-10 h-[500px] w-[500px] shrink-0 overflow-hidden rounded-2xl">
          {SLIDES.map((slide, i) => (
            <Image
              key={i}
              src={slide.image}
              alt={`Hero ${i + 1}`}
              fill
              quality={100}
              sizes="(min-width: 1280px) 650px, 500px"
              className={cn(
                "absolute inset-0 object-cover transition-opacity duration-700 ease-in-out",
                index === i ? "opacity-100" : "opacity-0"
              )}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
