"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

type Item = {
  id: number;
  title: string;
  image: StaticImageData;
};

export default function ProjectCollage({ items }: { items: Item[] }) {
  // Expecting 7 images like your screenshot
  const pics = items.slice(0, 7);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Row 1 */}
      <CollageCard className="col-span-12 md:col-span-5 h-[260px]" item={pics[0]} />
      <CollageCard className="col-span-12 md:col-span-7 h-[260px]" item={pics[1]} />

      {/* Row 2 */}
      <CollageCard className="col-span-12 md:col-span-6 h-[240px]" item={pics[2]} />
      <CollageCard className="col-span-12 md:col-span-6 h-[240px]" item={pics[3]} />

      {/* Row 3 */}
      <CollageCard className="col-span-12 md:col-span-4 h-[210px]" item={pics[4]} />
      <CollageCard className="col-span-12 md:col-span-4 h-[210px]" item={pics[5]} />
      <CollageCard className="col-span-12 md:col-span-4 h-[210px]" item={pics[6]} />
    </div>
  );
}

function CollageCard({
  item,
  className,
}: {
  item?: Item;
  className: string;
}) {
  if (!item) return null;

  return (
    <div
      className={[
        "relative overflow-hidden rounded-xl bg-zinc-900",
        "border border-zinc-800",
        className,
      ].join(" ")}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-300 hover:scale-[1.03]"
        priority={item.id <= 2}
      />
    </div>
  );
}
