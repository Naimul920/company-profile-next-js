import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ButtonLink = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Link href="/contact" className="block">
      <Button
        variant="info"
        size="lg"
        // onClick={() => setIsOpen(false)}
        className="
        group relative w-full overflow-hidden 
        border-none bg-brand text-black text-xl py-7 
        rounded-md transition-all duration-500
      "
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-base md:text-xl">
          {children}
        </span>

        {/* Single overlay with 30° diagonal expanding vertically */}
        <span
          className="
          absolute inset-0 
          bg-black 
          rotate-30
          origin-center
          scale-y-0
          transition-transform duration-500 ease-out 
          group-hover:scale-y-150
        "
        />
      </Button>
    </Link>
  );
};
