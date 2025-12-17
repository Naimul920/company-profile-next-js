"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";

const CONTACT_INFO = {
  address: "168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh",
  phones: ["+880 566 1111 985", "+880 657 1111 576"],
  emails: ["info@example.com", "info@support.com"],
} as const;

type ContactType = "address" | "phone" | "email";

const CONTACT_PRESETS: Record<
  ContactType,
  { icon: React.ReactNode; content: React.ReactNode }
> = {
  address: {
    icon: <MapPin className="h-4 w-4" />,
    content: CONTACT_INFO.address,
  },
  phone: {
    icon: <Phone className="h-4 w-4" />,
    content: (
      <>
        {CONTACT_INFO.phones[0]}
        <br />
        {CONTACT_INFO.phones[1]}
      </>
    ),
  },
  email: {
    icon: <Mail className="h-4 w-4" />,
    content: (
      <>
        {CONTACT_INFO.emails[0]}
        <br />
        {CONTACT_INFO.emails[1]}
      </>
    ),
  },
};

export function ContactItem({
  type,
  className,
}: {
  type: ContactType;
  className?: string;
}) {
  const { icon, content } = CONTACT_PRESETS[type];

  return (
    <div className={cn("flex flex-row gap-3", className)}>
      <Button
        variant="info"
        size="lg"
        className="mr-1 h-10 w-10 rounded-full border border-emerald-400/60 bg-transparent text-emerald-400 hover:bg-emerald-500/10"
        aria-hidden
        tabIndex={-1}
      >
        {icon}
      </Button>

      <div className="cursor-pointer text-sm text-white/80 hover:text-emerald-400">
        {content}
      </div>
    </div>
  );
}
