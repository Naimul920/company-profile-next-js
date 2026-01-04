"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BsFillSendFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { Mail, ChevronRight, X, Plus } from "lucide-react";

import { SocialLinks } from "../feedback/social-link";
import { ButtonLink } from "../feedback/button-link";
import { Logo } from "../feedback/logo";
import { ContactItem } from "../feedback/ContactItem";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type NavItem = {
  label: string;
  href?: string; // present when it's a clickable link
  children?: NavItem[]; // present when it has a submenu
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Service",
    children: [
      {
        label: "Web Development",
        href: "/service/web-development",
        children: [
          { label: "Ecommerce", href: "/service/web-development/ecommerce" },
          { label: "Accounting", href: "/service/web-development/accounting" },
          { label: "POS", href: "/service/web-development/pos" },
        ],
      },
      {
        label: "Web Development 2",
        href: "/service/web-development-2",
        children: [
          {
            label: "Ecommerce 2",
            href: "/service/web-development-2/ecommerce-2",
          },
          {
            label: "Accounting 2",
            href: "/service/web-development-2/accounting-2",
          },
          { label: "POS 2", href: "/service/web-development-2/pos-2" },
        ],
      },
      {
        label: "Web Development 3",
        href: "/service/web-development-3",
        children: [
          {
            label: "Ecommerce 3",
            href: "/service/web-development-3/ecommerce-3",
          },
          {
            label: "Accounting 3",
            href: "/service/web-development-3/accounting-3",
          },
          { label: "POS 3", href: "/service/web-development-3/pos-3" },
        ],
      },
    ],
  },
  { label: "Project", href: "/project" },
  { label: "About Us", href: "/about-us" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

/* ------------------------------------------------------------------ */
/* Radix re-exports                                                   */
/* ------------------------------------------------------------------ */

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

/* ------------------------------------------------------------------ */
/* Hooks                                                              */
/* ------------------------------------------------------------------ */

// function useIsDesktop(min = 1024) {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const mql = window.matchMedia(`(min-width: ${min}px)`);
//     const onChange = () => setIsDesktop(mql.matches);
//     onChange();
//     mql.addEventListener?.("change", onChange);
//     return () => mql.removeEventListener?.("change", onChange);
//   }, [min]);

//   return isDesktop;
// }

function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function findFirstLink(item?: NavItem): string | undefined {
  if (!item) return undefined;
  if (item.href) return item.href;
  if (!item.children?.length) return undefined;
  for (const c of item.children) {
    const found = findFirstLink(c);
    if (found) return found;
  }
  return undefined;
}

/* ------------------------------------------------------------------ */
/* Navbar                                                             */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  // const isDesktop = useIsDesktop();
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-gray-700/50 backdrop-blur-lg transition-colors duration-500",
        scrolled && "bg-black/90"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1500px] px-4 py-2 lg:max-w-[calc(100%-8rem)] lg:border-x lg:border-gray-700/50 lg:px-10",
          scrolled && "lg:border-transparent"
        )}
      >
        <header className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:block">
            <DesktopNav items={NAV_ITEMS} />
          </nav>

          <div className="flex items-center gap-3">
            <InfoSheet />
            <div className="lg:hidden">
              <MobileMenu items={NAV_ITEMS} />
            </div>

            {/* {!isDesktop && <MobileMenu items={NAV_ITEMS} />} */}
          </div>
        </header>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Right info sheet                                                   */
/* ------------------------------------------------------------------ */

function InfoSheet() {
  return (
    <Sheet modal={false}>
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
        className="overflow-y-auto border-gray-700 bg-[#020617] p-5 pt-10 text-white"
      >
        <Logo />

        <div className="space-y-10 px-6 pt-8">
          <SheetTitle className="sr-only">Contact Information</SheetTitle>

          <SheetDescription className="text-pretty text-lg text-white/80">
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </SheetDescription>

          <div className="space-y-6">
            <ContactItem type="address" />
            <ContactItem type="phone" />
            <ContactItem type="email" />
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <p className="text-sm text-white/70">Follow us on Social Network</p>
            <SocialLinks />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile menu (recursive)                                            */
/* ------------------------------------------------------------------ */

function MobileMenu({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
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
        className="w-[280px] max-w-[85vw] overflow-y-auto border-0 bg-[#020617] p-0 text-white"
      >
        <div className="px-6 pb-4 pt-8">
          <Logo />
        </div>

        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate through the website sections
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col">
          <div className="flex-1 py-2">
            <MobileTree items={items} onNavigate={() => setIsOpen(false)} />
          </div>

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

function MobileTree({
  items,
  onNavigate,
  level = 0,
}: {
  items: NavItem[];
  onNavigate: () => void;
  level?: number;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const pad = level === 0 ? "px-6" : level === 1 ? "px-8" : "px-10";
  const text =
    level === 0
      ? "text-[15px] font-medium"
      : level === 1
      ? "text-[14px] text-white/80"
      : "text-[13px] text-white/70";

  return (
    <div className={cn(level > 0 && "bg-[#050816]")}>
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const href = item.href ?? findFirstLink(item);
        const active = isActivePath(pathname, item.href);

        if (!hasChildren && item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex w-full items-center justify-between py-3 transition-colors",
                pad,
                text,
                active
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-400"
              )}
            >
              <span>{item.label}</span>
            </Link>
          );
        }

        return (
          <div key={item.label}>
            <button
              onClick={() =>
                setOpen((prev) => ({
                  ...prev,
                  [item.label]: !prev[item.label],
                }))
              }
              aria-expanded={!!open[item.label]}
              className={cn(
                "flex w-full items-center justify-between py-3 transition-colors",
                pad,
                text,
                active
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-400"
              )}
            >
              <span>{item.label}</span>
              <Plus
                className={cn(
                  "h-5 w-5 transition-transform",
                  open[item.label] && "rotate-45"
                )}
              />
            </button>

            {open[item.label] && item.children && (
              <div className="pb-2">
                {/* Optional "View all" */}
                <MobileTree
                  items={item.children}
                  onNavigate={onNavigate}
                  level={level + 1}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop nav                                                        */
/* ------------------------------------------------------------------ */

function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="flex items-center gap-6 text-sm font-medium">
        {items.map((item) => {
          const hasChildren = !!item.children?.length;
          const active = isActivePath(pathname, item.href);

          if (!hasChildren && item.href) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      active
                        ? "text-emerald-400"
                        : "text-white/90 hover:text-emerald-400"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label} className="relative">
              <NavigationMenuTrigger
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-emerald-400"
                    : "text-white/90 hover:text-emerald-400 data-[state=open]:text-emerald-400"
                )}
              >
                {item.label}
                <span className="ml-1">▾</span>
              </NavigationMenuTrigger>

              <NavigationMenuContent className="absolute left-0 top-full mt-4">
                {item.label === "Service" ? (
                  <DesktopNestedPanel root={item} />
                ) : (
                  <DesktopSimplePanel root={item} />
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function DesktopSimplePanel({ root }: { root: NavItem }) {
  const nodes = root.children ?? [];
  return (
    <div className="w-64 rounded-md border border-gray-200 bg-white text-gray-900 shadow-xl">
      <ul className="p-2">
        {nodes.map((n) => {
          const href = n.href ?? findFirstLink(n) ?? "#";
          return (
            <li key={n.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-emerald-500"
                >
                  {n.label}
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DesktopNestedPanel({ root }: { root: NavItem }) {
  const groups = root.children ?? [];
  const first = groups[0];

  const [active, setActive] = useState<string>(first?.label ?? "");
  const activeGroup = groups.find((g) => g.label === active) ?? first;
  const children = activeGroup?.children ?? [];

  return (
    <div className="flex rounded-md border border-gray-200 bg-white text-gray-900 shadow-xl">
      {/* LEFT COLUMN (parents) */}
      <ul className="w-56 divide-y divide-gray-100">
        {groups.map((g) => {
          const isActive = g.label === active;
          const hasChildren = !!g.children?.length;

          // ✅ parent link fallback
          const parentHref = g.href ?? findFirstLink(g) ?? "#";

          return (
            <li key={g.label}>
              <div
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50",
                  isActive && "border-l-2 border-emerald-400 bg-emerald-50 text-emerald-600"
                )}
                // ✅ hover to open submenu
                onMouseEnter={() => setActive(g.label)}
                onFocus={() => setActive(g.label)}
              >
                {/* ✅ click to navigate */}
                <Link
                  href={parentHref}
                  className="flex-1 text-left"
                >
                  {g.label}
                </Link>

                {/* right arrow */}
                {hasChildren && (
                  <ChevronRight
                    className={cn(
                      "ml-2 h-4 w-4",
                      isActive ? "text-emerald-500" : "text-gray-400"
                    )}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* RIGHT COLUMN (children) */}
      {children.length > 0 && (
        <ul className="w-56 divide-y divide-gray-100 border-l border-gray-100 bg-white">
          {children.map((leaf) => {
            const href = leaf.href ?? findFirstLink(leaf) ?? "#";
            return (
              <li key={leaf.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-emerald-500"
                  >
                    {leaf.label}
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

