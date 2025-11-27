import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
// import CompanyLogo from "@/assets/img/logo.svg";
import CompanyLogo from "@/assets/img/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        width={192}
        height={48}
        priority
        className={cn("h-10 w-48", className)}
      />
    </Link>
  );
}
