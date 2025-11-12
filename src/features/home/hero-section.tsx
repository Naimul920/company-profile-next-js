"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HeroCarousel from "./hero-carousel";
import Navbar from "./navbar";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full bg-brand-dark transition-colors duration-500 border-b border-gray-700/50", // <-- border-b here, not in inner div
          scrolled ? "bg-black " : ""
        )}
      >
        <div className={cn("lg:border-x lg:max-w-[calc(100%-8rem)] mx-auto border-gray-700/50", scrolled ? "border-none" : "" )}>
          <Navbar />
        </div>
      </div>
      <div className="">
          <HeroCarousel/>
        {/* <div className="lg:border-x px-5  lg:max-w-[calc(100%-8rem)] mx-auto border-gray-700/50 pt-24">
        </div> */}
      </div>
      {/* <Navbar/>
      <HeroCarousel/> */}
    </div>
  );
}
