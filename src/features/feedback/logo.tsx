import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/assets/img/logo.svg";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        // Keep these close to the actual visual size you want
        width={192}
        height={48}
        // Critical element: load immediately to avoid layout jump
        priority
        className={cn("h-10 w-48", className)}
      />
    </Link>
  );
}
