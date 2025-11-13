// features/layout/navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { BsFillSendFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { MapPin, Phone, Mail, ChevronRight, X, Plus } from "lucide-react";

import { SocialLinks } from "../feedback/social-link";
import { ButtonLink } from "../feedback/button-link";
import { Logo } from "../feedback/logo";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Types & data                                                       */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = {
  address: "168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh",
  phones: ["+880 566 1111 985", "+880 657 1111 576"],
  emails: ["info@example.com", "info@support.com"],
} as const;

type NavLeaf = {
  label: string;
  href: string;
};

type NavNode = {
  label: string;
  items?: NavLeaf[];
  href?: string;
};

type NavMap = Record<string, NavNode[]>;

const NAV: NavMap = {
  Home: [
    { label: "Home 01", href: "/" },
    { label: "Home 02", href: "/home-02" },
    { label: "Home 03", href: "/home-03" },
  ],
  About: [{ label: "About", href: "/about" }],
  Service: [
    { label: "Service 01", href: "/service-01" },
    { label: "Service 02", href: "/service-02" },
    { label: "Service 03", href: "/service-03" },
    { label: "Service 04", href: "/service-04" },
    { label: "Service Details", href: "/service-details" },
  ],
  Project: [
    { label: "Project Grid", href: "/projects" },
    { label: "Project List", href: "/projects/list" },
    { label: "Project Details", href: "/project/details" },
  ],
  Pages: [
    {
      label: "Team",
      items: [
        { label: "Team 01", href: "/team-01" },
        { label: "Team 02", href: "/team-02" },
        { label: "Team 03", href: "/team-03" },
      ],
    },
    {
      label: "Pricing",
      items: [
        { label: "Pricing 01", href: "/pricing-01" },
        { label: "Pricing 02", href: "/pricing-02" },
      ],
    },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Error 404", href: "/404" },
  ],
  "Case Study": [
    { label: "All Case Studies", href: "/case-studies" },
    { label: "By Industry", href: "/case-studies/industry" },
    { label: "Case Study Details", href: "/case-study/details" },
  ],
  Blog: [
    { label: "Blog Grid", href: "/blog" },
    { label: "Blog List", href: "/blog/list" },
    { label: "Tags", href: "/blog/tags" },
    { label: "Post Details", href: "/blog/post" },
  ],
};

/* convenience re-exports for readability */
const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

/* ------------------------------------------------------------------ */
/* Hook: breakpoint                                                   */
/* ------------------------------------------------------------------ */

function useIsDesktop(min = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${min}px)`);
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [min]);

  return isDesktop;
}

/* ------------------------------------------------------------------ */
/* Navbar root                                                        */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const isDesktop = useIsDesktop();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-gray-700/50  backdrop-blur-lg transition-colors duration-500",
        scrolled && "bg-black/90"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1500px] px-4 lg:px-0 lg:max-w-[calc(100%-8rem)] lg:border-x lg:border-gray-700/50",
          scrolled && "lg:border-transparent"
        )}
      >
        <header className="flex items-center justify-between py-4">
          <div className="px-2">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <DesktopNav />
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <InfoSheet />
            {!isDesktop && <MobileMenu />}
          </div>
        </header>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Info sheet (right drawer icon)                                     */
/* ------------------------------------------------------------------ */

function InfoSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="info"
          size="lg"
          className="h-10 w-10 rounded-2xl p-0"
          aria-label="Open contact info"
        >
          <BsFillSendFill className="text-white" size={14} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-gray-700 bg-[#020617] text-white overflow-y-auto pb-10"
      >
        <div className="flex items-center justify-between px-6 pt-20">
          <div className="flex w-full items-center justify-between gap-3">
            <Logo />

            <SheetClose asChild>
              <Button
                variant="info"
                size="lg"
                aria-label="Close"
                className="h-8 w-8 rounded-full p-0"
              >
                <X className="size-5" />
              </Button>
            </SheetClose>
          </div>
        </div>

        <div className="space-y-10 px-6 pt-8">
          <SheetTitle className="sr-only">Contact Information</SheetTitle>

          <SheetDescription className="text-pretty text-lg text-white/80">
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </SheetDescription>

          <div className="space-y-6">
            <ContactItem icon={<MapPin />} content={CONTACT_INFO.address} />
            <ContactItem
              icon={<Phone />}
              content={
                <>
                  {CONTACT_INFO.phones[0]}
                  <br />
                  {CONTACT_INFO.phones[1]}
                </>
              }
            />
            <ContactItem
              icon={<Mail />}
              content={
                <>
                  {CONTACT_INFO.emails[0]}
                  <br />
                  {CONTACT_INFO.emails[1]}
                </>
              }
            />
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <p className="text-sm text-white/70">
              Follow us on Social Network
            </p>
            <SocialLinks />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ContactItem({
  icon,
  content,
  className,
}: {
  icon: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row gap-3", className)}>
      <Button
        variant="info"
        size="lg"
        className="mr-1 h-10 w-10 rounded-full border border-emerald-400/60 bg-transparent text-emerald-400 hover:bg-emerald-500/10"
      >
        {icon}
      </Button>
      <div className="cursor-pointer text-sm text-white/80 hover:text-emerald-400">
        {content}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile menu                                                        */
/* ------------------------------------------------------------------ */

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const handleToggleGroup = (group: string) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="info"
          size="lg"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="h-10 w-10 border-none p-0 lg:hidden"
        >
          {isOpen ? (
            <X className="size-7 text-white" />
          ) : (
            <BiMenuAltRight className="size-7 text-white" />
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[280px] max-w-[85vw] border-0 bg-[#020617] p-0 text-white overflow-y-auto"
      >
        <div className="px-6 pt-8 pb-4">
          <Logo />
        </div>

        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
          <SheetDescription>Navigate through the website sections</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col">
          <div className="flex-1 py-2">
            {Object.entries(NAV).map(([group, nodes]) => (
              <MobileNavGroup
                key={group}
                group={group}
                nodes={nodes}
                isOpen={openGroup === group}
                onToggle={() => handleToggleGroup(group)}
                onNavigate={() => setIsOpen(false)}
              />
            ))}
          </div>

          {/* bottom info */}
          <div className="space-y-2 border-t border-gray-800 py-4">
            <div className="flex items-center gap-3 px-4 text-emerald-400">
              <MdPhoneInTalk className="size-6" />
              <p className="text-sm">
                Call Us Now <br />
                <span className="text-white hover:text-emerald-400">
                  2-965-871-8617
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 text-emerald-400">
              <Mail className="size-6" />
              <p className="text-sm">
                Email Now <br />
                <span className="text-white hover:text-emerald-400">
                  example@gmail.com
                </span>
              </p>
            </div>
          </div>

          <div className="px-4 pb-5">
            <ButtonLink>Get A Quote</ButtonLink>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavGroup({
  group,
  nodes,
  isOpen,
  onToggle,
  onNavigate,
}: {
  group: string;
  nodes: NavNode[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const [openSub, setOpenSub] = useState<string | null>(null);

  const hasChildren =
    nodes.some((n) => n.items && n.items.length > 0) || nodes.length > 1;

  const isSingleWithoutChildren =
    nodes.length === 1 && !nodes[0].items?.length && !!nodes[0].href;

  // single, simple link (e.g. About)
  if (isSingleWithoutChildren) {
    return (
      <Link
        href={nodes[0].href!}
        onClick={onNavigate}
        className={cn(
          "flex w-full items-center justify-between px-6 py-3 text-left text-[15px] font-medium transition-colors",
          group === "Home"
            ? "text-emerald-400"
            : "text-white hover:text-emerald-400"
        )}
      >
        <span>{group}</span>
      </Link>
    );
  }

  return (
    <div>
      {/* main group row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between px-6 py-3 text-left text-[15px] font-medium transition-colors",
          group === "Home"
            ? "text-emerald-400"
            : "text-white hover:text-emerald-400"
        )}
      >
        <span>{group}</span>
        {hasChildren && (
          <Plus
            className={cn(
              "h-5 w-5 transition-transform",
              isOpen && "rotate-45"
            )}
          />
        )}
      </button>

      {/* submenu */}
      {hasChildren && isOpen && (
        <div className="bg-[#020617] pb-2">
          {nodes.map((node) =>
            node.items?.length ? (
              <div key={node.label}>
                <button
                  onClick={() =>
                    setOpenSub((prev) =>
                      prev === node.label ? null : node.label
                    )
                  }
                  aria-expanded={openSub === node.label}
                  className="flex w-full items-center justify-between px-6 py-2 text-left text-[14px] text-white/80 transition-colors hover:text-emerald-400"
                >
                  <span>{node.label}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSub === node.label && "rotate-45"
                    )}
                  />
                </button>

                {openSub === node.label && (
                  <div className="bg-[#050816]">
                    {node.items.map((leaf) => (
                      <Link
                        key={leaf.label}
                        href={leaf.href}
                        className="block px-8 py-2.5 text-[13px] text-white/70 transition-colors hover:text-emerald-400"
                        onClick={onNavigate}
                      >
                        {leaf.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={node.label}
                href={node.href ?? "#"}
                className="block px-6 py-2 text-[14px] text-white/80 transition-colors hover:text-emerald-400"
                onClick={onNavigate}
              >
                {node.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop nav (Radix NavigationMenu)                                 */
/* ------------------------------------------------------------------ */

function DesktopNav() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="flex items-center gap-6 text-sm font-medium">
        {Object.entries(NAV).map(([group, nodes]) => {
          const isSimpleLink =
            nodes.length === 1 && !nodes[0].items?.length && !!nodes[0].href;

          if (isSimpleLink) {
            const href = nodes[0].href!;
            return (
              <NavigationMenuItem key={group}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      group === "Home"
                        ? "text-emerald-400"
                        : "text-white/90 hover:text-emerald-400"
                    )}
                  >
                    {group}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={group} className="relative">
              <NavigationMenuTrigger
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  group === "Home"
                    ? "text-emerald-400"
                    : "text-white/90 hover:text-emerald-400 data-[state=open]:text-emerald-400"
                )}
              >
                {group}
                <span className="ml-1">▾</span>
              </NavigationMenuTrigger>

              {/* IMPORTANT FIX: no asChild around NestedPanel / SimplePanel */}
              <NavigationMenuContent className="absolute left-0 top-full mt-4">
                {group === "Pages" ? (
                  <NestedPanel nodes={nodes} />
                ) : (
                  <SimplePanel nodes={nodes} />
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function SimplePanel({ nodes }: { nodes: NavNode[] }) {
  return (
    <div className="w-64 rounded-md border border-gray-200 bg-white text-gray-900 shadow-xl">
      <ul className="p-2">
        {nodes.map((node) => (
          <li key={node.label}>
            <NavigationMenuLink asChild>
              <Link
                href={node.href ?? "#"}
                className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-emerald-500"
              >
                {node.label}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NestedPanel({ nodes }: { nodes: NavNode[] }) {
  const firstWithChildren = nodes.find((n) => n.items && n.items.length);
  const [active, setActive] = useState(
    firstWithChildren?.label ?? nodes[0].label
  );
  const activeItems = nodes.find((n) => n.label === active)?.items ?? [];

  return (
    <div className="flex rounded-md border border-gray-200 bg-white text-gray-900 shadow-xl">
      {/* left column: categories */}
      <ul className="w-56 divide-y divide-gray-100">
        {nodes.map((item) => {
          const isActive = item.label === active;
          const hasChildren = !!item.items?.length;

          return (
            <li key={item.label}>
              {hasChildren ? (
                <button
                  onMouseEnter={() => setActive(item.label)}
                  onFocus={() => setActive(item.label)}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-gray-50",
                    isActive &&
                      "border-l-2 border-emerald-400 bg-emerald-50 text-emerald-600"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-emerald-500" : "text-gray-400"
                    )}
                  />
                </button>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href ?? "#"}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-gray-50"
                  >
                    <span>{item.label}</span>
                  </Link>
                </NavigationMenuLink>
              )}
            </li>
          );
        })}
      </ul>

      {/* right column: children */}
      {activeItems.length > 0 && (
        <ul className="w-56 divide-y divide-gray-100 border-l border-gray-100 bg-white">
          {activeItems.map((leaf) => (
            <li key={leaf.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={leaf.href}
                  className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-emerald-500"
                >
                  {leaf.label}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
