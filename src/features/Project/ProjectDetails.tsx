"use client";

import Image from "next/image";
import Header from "../feedback/Header";

import Project01 from "@/assets/img/home-4/work-01.png";

const PROJECT = {
  title: "Terminal Workspace",
  category: "Developing",
  image: Project01,
  description:
    "A modern developer workspace designed for productivity, performance, and scalability. This project focuses on clean UI, optimized layouts, and a developer-friendly experience.",
  features: [
    "Clean UI with dark mode",
    "Fast performance & optimized layout",
    "Customizable workspace components",
    "Responsive design for all devices",
    "Scalable architecture",
  ],
};

export default function ProjectDetails() {
  return (
    <div>
      <Header>{PROJECT.title}</Header>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src={PROJECT.image}
            alt={PROJECT.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">
              Project Overview
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              {PROJECT.description}
            </p>

            <h3 className="mt-8 text-xl font-semibold text-white">
              Key Features
            </h3>
            <ul className="mt-4 space-y-3">
              {PROJECT.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-zinc-400">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-lg font-semibold text-white">Project Info</h3>

            <div className="mt-4 space-y-3 text-sm">
              <p className="flex justify-between text-zinc-400">
                <span>Category</span>
                <span className="text-white">{PROJECT.category}</span>
              </p>
              <p className="flex justify-between text-zinc-400">
                <span>Status</span>
                <span className="text-white">Completed</span>
              </p>
              <p className="flex justify-between text-zinc-400">
                <span>Type</span>
                <span className="text-white">Client Project</span>
              </p>
            </div>

            <a
              href="/contact-us"
              className="mt-6 block w-full rounded-xl bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Start Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
