"use client";

import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState, type MouseEvent } from "react";

type Offset = { x: number; y: number };
interface mouseMoveImageType {
  movingImage: StaticImageData | string;
  className?: string;
}
export function MouseMoveImage({ movingImage, className }: mouseMoveImageType) {
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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative z-30 w-full  mx-auto lg:mx-0 top-0 lg:top-12",
        className
      )}
    >
      <div
        className="transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate(calc(${offset.x}px), calc(${offset.y}px ))`,
        }}
      >
        <Image
          src={movingImage}
          alt="Team collaborating in modern office"
          className="w-full h-auto"
          quality={90}
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
