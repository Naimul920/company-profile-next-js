"use client";

import { ButtonLink } from "../feedback/button-link";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// TODO: replace these imports with your real project images
import project1 from "@/assets/img/home-3/home3-suc-sto-01.png";
import project2 from "@/assets/img/home-3/home3-suc-sto-02.png";
import project3 from "@/assets/img/home-3/home3-suc-sto-03.png";
import project4 from "@/assets/img/home-3/home3-suc-sto-04.png";
import project5 from "@/assets/img/home-3/home3-suc-sto-05.png";
import project6 from "@/assets/img/home-3/home3-suc-sto-05.png";

type Project = {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Streamlining IT Infrastructure",
    category: "Web Development",
    image: project1,
  },
  {
    id: 2,
    title: "Transforming Customer Experience",
    category: "Web Development",
    image: project2,
  },
  {
    id: 3,
    title: "Scaling Agile Development",
    category: "Web Development",
    image: project3,
  },
  {
    id: 4,
    title: "Cloud Migration Strategy",
    category: "Cloud Solutions",
    image: project4,
  },
  {
    id: 5,
    title: "Secure Data Management",
    category: "Security",
    image: project5,
  },
  {
    id: 6,
    title: "Secure Data Management",
    category: "Security",
    image: project6,
  },
];

export default function CompletedProjects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#1f2329] py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] ">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center mb-16 px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Complited Projects
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services can
              range from your budget.
            </p>
          </div>
          <ButtonLink>View All Project</ButtonLink>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1.15}
            centeredSlides={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 2.5, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  project={project}
                  isActive={index === activeIndex}
                  isZigZag={index % 2 === 1} // even/odd = zig-zag
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-12">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperInstance?.slideToLoop(i)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  i === activeIndex
                    ? "h-2.5 w-2.5 bg-emerald-400 ring-4 ring-emerald-400/20"
                    : "h-2.5 w-2.5 bg-transparent border-2 border-gray-600 hover:border-emerald-400/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Project card - Exact match to design */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
  isActive,
  isZigZag,
}: {
  project: Project;
  isActive: boolean;
  isZigZag: boolean;
}) {
  return (
    <article
      className={cn(
        "relative group  h-full cursor-pointer overflow-hidden transform transition-transform duration-300",
        isActive ? "scale-[1.02]" : "scale-100",
        // zig-zag: push some cards down a bit
        isZigZag ? "mt-0" : "mt-6"
      )}
    >
      {/* Image */}
      <div className="relative w-full h-[420px] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
        object-cover 
        transition-transform 
        duration-700 
        ease-out
        group-hover:scale-110 
        group-hover:-translate-y-1
      "
          sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 40vw, 100vw"
        />
      </div>

      {/* Bottom panel like your design */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
        <div className="relative flex items-center gap-4 rounded-sm bg-[#111319]/95 py-8">
          <div className="px-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              {project.category}
            </p>
            <h3 className="mt-2 text-base md:text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            aria-label="View project"
            className="group absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-emerald-400 text-black transition-transform duration-300 hover:bg-emerald-500 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111319]"
          >
            <GoArrowDownRight className="text-lg transition-transform duration-200 group-hover:-rotate-45" />
          </button>
        </div>
      </div>
    </article>
  );
}
