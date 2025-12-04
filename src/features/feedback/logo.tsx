import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
// import CompanyLogo from "@/assets/img/logo.svg";
import CompanyLogo from "@/assets/img/logo.png";
// import CompanyLogo from "@/assets/img/1968x36 (1).png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        width={192}
        height={40}
        priority
        className={cn("", className)}
      />
    </Link>
  );
}
