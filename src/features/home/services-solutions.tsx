"use client";

import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import {
  RiCodeBoxLine,
  RiCloudLine,
  RiShieldKeyholeLine,
  RiDatabase2Line,
  RiLayout3Line,
  RiMegaphoneLine,
} from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const services: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    icon: RiCodeBoxLine,
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
    icon: RiCloudLine,
  },
  {
    title: "Cyber Security",
    description:
      "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
    icon: RiShieldKeyholeLine,
  },
  {
    title: "Data Analytic",
    description:
      "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
    icon: RiDatabase2Line,
  },
  {
    title: "Software Development",
    description:
      "Software development is the process of creating computer software programs that perform specific functions or tasks.",
    icon: RiLayout3Line,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands.",
    icon: RiMegaphoneLine,
  },
];

export default function ServicesSolutions() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-[2px] border border-emerald-500/70 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Solutions We Offer</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>

          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Services & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
};

function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between",
        "rounded-[6px] border border-[#202327] bg-[#05070C] px-8 py-9",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
        "transition duration-300 hover:border-emerald-400/80 hover:bg-[#050b11] hover:shadow-[0_0_40px_rgba(6,216,137,0.25)]"
      )}
    >
      <div className="space-y-6">
        <div className="relative inline-flex h-16 w-16 items-center justify-center">
          <span className="pointer-events-none absolute h-16 w-16 rounded-full bg-emerald-500/25 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="pointer-events-none absolute h-12 w-12 rounded-full border border-emerald-400/60 bg-emerald-500/10" />
          <Icon className="relative z-10 h-7 w-7 text-emerald-400" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-400">{description}</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
      >
        <span className="inline-flex items-center justify-between gap-3 bg-[#181a20] px-4 py-2 text-[11px]">
          <span>Learn More</span>
          <IoIosArrowRoundForward className="size-5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>
    </article>
  );
}
