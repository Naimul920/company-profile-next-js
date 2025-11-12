import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: BsTwitterX, label: "Twitter / X" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
] as const;

type SocialLinksProps = {
  classNameDiv?: string;
  classNameButton?: string;
};

export const SocialLinks = ({
  classNameDiv,
  classNameButton,
}: SocialLinksProps) => {
  return (
    <div className={cn("mt-2 flex gap-4", classNameDiv)}>
      {SOCIAL_LINKS.map((social) => (
        <Link key={social.label} href={social.href} aria-label={social.label}>
          <Button
            variant="info"
            size="lg"
            className={cn("w-10", classNameButton)}
          >
            <social.icon className="text-lg" />
          </Button>
        </Link>
      ))}
    </div>
  );
};
