import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/assets/img/logo.svg";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        width={160}
        height={160}
        className={cn("h-auto w-52", className)}
        priority
      />
    </Link>
  );
}
