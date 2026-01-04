"use client";

import React, { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Header from "../feedback/Header";

import Project01 from "@/assets/img/home-4/work-01.png";
import Project02 from "@/assets/img/home-4/work-02.png";
import Project03 from "@/assets/img/home-4/work-03.png";
import Project04 from "@/assets/img/home-4/work-04.png";
import Project05 from "@/assets/img/home-4/work-05.png";
import Project06 from "@/assets/img/home-4/work-06.png";
import Project07 from "@/assets/img/home-4/work-07.png";

type Category = "All" | "UI/UX" | "Web Design" | "Developing" | "Graphic Design";

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: StaticImageData;
};

const CATEGORIES: Category[] = ["All", "UI/UX", "Web Design", "Developing", "Graphic Design"];

const PROJECTS: Project[] = [
  { id: 1, title: "Terminal Workspace", category: "Developing", image: Project01 },
  { id: 2, title: "Team Collaboration", category: "Developing", image: Project02 },
  { id: 3, title: "UI/UX Sketching", category: "UI/UX", image: Project03 },
  { id: 4, title: "Architecture Web Layout", category: "Web Design", image: Project04 },
  { id: 5, title: "Code & Coffee", category: "Developing", image: Project05 },
  { id: 6, title: "Product Presentation", category: "UI/UX", image: Project06 },
  { id: 7, title: "Minimal Poster", category: "Graphic Design", image: Project07 },
];

type TabProps = {
  label: Category;
  active: boolean;
  onClick: (label: Category) => void;
};

function Tab({ label, active, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={[
        "px-4 py-2 rounded-full text-sm font-medium transition",
        active ? "bg-emerald-500 text-black" : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ProjectCard({
  project,
  className,
  height = 260,
}: {
  project: Project;
  className?: string;
  height?: number;
}) {
  return (
    <article
      className={[
        "rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition",
        className ?? "",
      ].join(" ")}
      style={{ height }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 hover:scale-[1.03]"
          priority={project.id <= 2}
        />
      </div>
    </article>
  );
}

export default function Project() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Make sure we always have up to 7 items for the collage
  const items = filteredProjects.slice(0, 7);

  return (
    <div>
      <Header>Project</Header>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <Tab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        {/* Collage Grid */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Row 1 */}
          {items[0] && <ProjectCard project={items[0]} className="col-span-12 md:col-span-5" height={280} />}
          {items[1] && <ProjectCard project={items[1]} className="col-span-12 md:col-span-7" height={280} />}

          {/* Row 2 */}
          {items[2] && <ProjectCard project={items[2]} className="col-span-12 md:col-span-6" height={260} />}
          {items[3] && <ProjectCard project={items[3]} className="col-span-12 md:col-span-6" height={260} />}

          {/* Row 3 */}
          {items[4] && <ProjectCard project={items[4]} className="col-span-12 md:col-span-4" height={220} />}
          {items[5] && <ProjectCard project={items[5]} className="col-span-12 md:col-span-4" height={220} />}
          {items[6] && <ProjectCard project={items[6]} className="col-span-12 md:col-span-4" height={220} />}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-center text-zinc-500">No projects found.</p>
        )}
      </div>
    </div>
  );
}
