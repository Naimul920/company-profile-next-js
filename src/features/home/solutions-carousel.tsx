"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles (needed!)
import "swiper/css";
import "swiper/css/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// demo images – you can replace these
import hero1 from "@/assets/img/home-3/home3-banner-img.png";
import hero2 from "@/assets/img/home-3/home3-banner-img2.png";
import hero3 from "@/assets/img/home-3/home3-banner-img3.png";

type Solution = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData; // demo icon/image
};

const SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: "Data Analytics",
    description:
      "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
    bullets: ["Full-stack development", "Responsive web design"],
    image: hero1,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    bullets: ["Full-stack development", "Responsive web design"],
    image: hero2,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
    bullets: ["Web application development", "Game development"],
    image: hero3,
  },
  {
    id: 4,
    title: "Data Analytics",
    description:
      "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
    bullets: ["Full-stack development", "Responsive web design"],
    image: hero1,
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    bullets: ["Full-stack development", "Responsive web design"],
    image: hero2,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
    bullets: ["Web application development", "Game development"],
    image: hero3,
  },
  // You can add more slides here if you want
];

export default function SolutionsCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative  py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Solutions
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services can
              range from your budget.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              ref={prevRef}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-emerald-400 bg-transparent text-emerald-400 hover:bg-emerald-500/10"
              aria-label="Previous solution"
            >
              <FaArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              ref={nextRef}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-emerald-400 bg-transparent text-emerald-400 hover:bg-emerald-500/10"
              aria-label="Next solution"
            >
              <FaArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore – Swiper types are a bit loose here
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {SOLUTIONS.map((solution) => (
            <SwiperSlide key={solution.id}>
              <SolutionCard solution={solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article
      className={cn(
        "group relative h-full rounded-2xl border border-white/5 bg-linear-to-br from-[#050814] via-[#050814] to-[#020617] p-8 text-left text-white shadow-[0_0_40px_rgba(0,0,0,0.45)]",
        "transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-500/60"
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-emerald-400/50 bg-emerald-500/5">
          <div className="relative h-10 w-10">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="40px"
              className="object-cover"
              quality={90}
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">
            {solution.title}
          </h3>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/70">
            {solution.description}
          </p>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          {solution.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-medium text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
