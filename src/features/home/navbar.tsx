"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Root as NavigationMenu,
  List as NavigationMenuList,
  Item as NavigationMenuItem,
  Trigger as NavigationMenuTrigger,
  Content as NavigationMenuContent,
  Link as NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
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

// import { Logo } from "../feedback/Logo";
import { SocialLinks } from "../feedback/social-link";
import { ButtonLink } from "../feedback/button-link";
import { Logo } from "../feedback/logo";

const CONTACT_INFO = {
  address: "168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh",
  phones: ["+880 566 1111 985", "+880 657 1111 576"],
  emails: ["info@example.com", "info@support.com"],
} as const;

/* ==================== TYPES ==================== */
type NavLeaf = {
  label: string;
  href: string; // ensure always string to avoid Url type errors
};

type NavNode = {
  label: string;
  items?: NavLeaf[];
  href?: string; // for simple nodes without children
};

type NavMap = Record<string, NavNode[]>;

/* ==================== NAVIGATION DATA ==================== */
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
        { label: "Team 01", href: "/team-01" },
        { label: "Team 02", href: "/team-02" },
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

/* ==================== MAIN COMPONENT ==================== */
export default function Navbar() {
  const isDesktop = useIsDesktop();

   

  return (
    <header className="flex items-center justify-between py-5 px-2 max-w-[1500px] mx-auto">
      <div className="px-2">
        <Logo />
      </div>

      <nav className="hidden lg:block">
        <DesktopNav />
      </nav>

      <div className="flex items-center ">
        <InfoSheet />
        {!isDesktop ? <MobileMenu /> : null}
      </div>
    </header>
  );
}

/* ==================== INFO SHEET ==================== */
function InfoSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="info" size="lg" className="w-10 rounded-2xl">
          <BsFillSendFill className="text-white" size={14} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-gray-700 bg-brand-dark text-white overflow-y-auto overflow-x-hidden pb-10"
      >
        <div className="flex items-center justify-between px-6 pt-20">
          <div className="flex w-full items-center justify-between gap-3">
            <Logo />

            <SheetClose asChild>
              <Button
                variant="info"
                size="lg"
                aria-label="Close"
                className="h-8 w-8 rounded-full"
              >
                <X className="size-5" />
              </Button>
            </SheetClose>
          </div>
        </div>

        <div className="space-y-20 px-6">
          <SheetTitle className="sr-only">Contact Information</SheetTitle>

          <SheetDescription className="text-pretty text-lg text-white pt-10">
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </SheetDescription>

          <div className="space-y-8">
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
            <p className="text-sm text-white/70">Follow us on Social Network</p>
            <SocialLinks />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ==================== CONTACT ITEM ==================== */
function ContactItem({
  icon,
  content,
  className,
}: {
  icon: React.ReactNode;
  content: React.ReactNode;
  className?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-2 px-2">
      <Button
        variant="info"
        size="lg"
        className="mr-2 w-10 rounded-full border-brand text-brand hover:border-brand! hover:bg-transparent! hover:text-brand! pointer-events-auto"
      >
        {icon}
      </Button>
      <div className="cursor-pointer hover:text-brand">{content}</div>
    </div>
  );
}

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
          className="border-none hover:bg-transparent! lg:hidden w-14"
        >
          {isOpen ? (
            <X className="size-12 text-white" />
          ) : (
            <BiMenuAltRight className="size-12 text-white " />
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[280px] max-w-[85vw] border-0 bg-[#0B1120] p-0 text-white overflow-y-auto overflow-x-hidden "
      >
        <div className="p-10 ">
          <Logo />
        </div>

        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate through the website sections
          </SheetDescription>
        </SheetHeader>

        {/* Scrollable Navigation */}
        <nav className="flex flex-col ">
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

          <div className="py-5">
            <div className="flex items-center  gap-3 px-4 py-4 text-brand ">
              <MdPhoneInTalk className="size-8" />
              <p className="text-sm">
                Call Us Now <br />
                <span className="text-white hover:text-brand">
                  2-965-871-8617
                </span>
              </p>
            </div>
            <div className="flex items-center  gap-3 px-4 py-4 text-brand ">
              <Mail className="size-8" />
              <p className="text-sm">
                Email Now <br />
                <span className="text-white hover:text-brand">
                  example@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div className="px-5">
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
  // within a group, allow only one sub-section open at a time
  const [openSub, setOpenSub] = useState<string | null>(null);

  const hasChildren =
    nodes.some((n) => n.items && n.items.length > 0) || nodes.length > 1;

  const isSingleWithoutChildren =
    nodes.length === 1 && !nodes[0].items?.length && !!nodes[0].href;

  return (
    <div className="">
      {/* Main Menu Item */}
      {isSingleWithoutChildren ? (
        <Link
          href={nodes[0].href!}
          onClick={onNavigate}
          className={`flex w-full items-center justify-between px-6 py-4 text-left text-[15px] font-medium transition-colors ${
            group === "Home" ? "text-brand" : "text-white hover:text-brand"
          }`}
        >
          <span>{group}</span>
        </Link>
      ) : (
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between px-6 py-4 text-left text-[15px] font-medium transition-colors ${
            group === "Home" ? "text-brand" : "text-white hover:text-brand"
          }`}
        >
          <span>{group}</span>
          {hasChildren && (
            <Plus
              className={`h-5 w-5 transition-transform ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          )}
        </button>
      )}

      {/* Submenu */}
      {hasChildren && isOpen && (
        <div className="bg-[#070B14] pb-2">
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
                  className="flex w-full items-center justify-between px-6 py-3 text-left text-[14px] text-white/80 transition-colors hover:text-brand"
                >
                  <span>{node.label}</span>
                  <Plus
                    className={`h-4 w-4 transition-transform ${
                      openSub === node.label ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {openSub === node.label && (
                  <div className="bg-[#05080F]">
                    {node.items.map((leaf) => (
                      <Link
                        key={leaf.label}
                        href={leaf.href} // leaf.href is always string
                        className="block px-8 py-2.5 text-[13px] text-white/70 transition-colors hover:text-brand"
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
                className="block px-6 py-3 text-[14px] text-white/80 transition-colors hover:text-brand"
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

function DesktopNav() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="flex items-center gap-6 text-sm font-medium">
        {Object.entries(NAV).map(([group, nodes]) => {
          const isSimpleLink =
            nodes.length === 1 && !nodes[0].items?.length && !!nodes[0].href;

          // Plain link (e.g., About)
          if (isSimpleLink) {
            const href = nodes[0].href!;
            return (
              <NavigationMenuItem key={group}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={`px-3 py-2 transition-colors ${
                      group === "Home"
                        ? "text-brand"
                        : "text-white/90 hover:text-brand"
                    }`}
                  >
                    {group}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          // Has dropdown (Home, Service, Project, Pages, Case Study, Blog, etc.)
          return (
            <NavigationMenuItem key={group} className="relative">
              <NavigationMenuTrigger
                className={`rounded-md px-3 py-2 transition-colors ${
                  group === "Home"
                    ? "text-brand"
                    : "text-white/90 hover:text-brand data-[state=open]:text-brand"
                }`}
              >
                {group} <span className="ml-1">▾</span>
              </NavigationMenuTrigger>

              <NavigationMenuContent className="absolute left-0 top-full mt-6">
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
    <div className="w-64 rounded-md border bg-white text-gray-900 shadow-xl">
      <ul className="p-2">
        {nodes.map((node) => (
          <li key={node.label}>
            <NavigationMenuLink asChild>
              <Link
                href={node.href ?? "#"}
                className="block rounded-md px-3 py-2 hover:bg-gray-100 hover:text-brand"
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
    <div className="flex rounded-md border bg-white text-gray-900 shadow-xl">
      <ul className="w-56 divide-y">
        {nodes.map((item) => {
          const isActive = item.label === active;
          const hasChildren = !!item.items?.length;

          return (
            <li key={item.label}>
              {hasChildren ? (
                <button
                  onMouseEnter={() => setActive(item.label)}
                  onFocus={() => setActive(item.label)}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 ${
                    isActive
                      ? "border-l-2 border-brand bg-emerald-50 text-brand"
                      : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`h-4 w-4 ${
                      isActive ? "text-brand" : "text-gray-400"
                    }`}
                  />
                </button>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href ?? "#"}
                    className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-50"
                  >
                    <span>{item.label}</span>
                  </Link>
                </NavigationMenuLink>
              )}
            </li>
          );
        })}
      </ul>

      {activeItems.length > 0 && (
        <ul className="w-56 divide-y border-l bg-white">
          {activeItems.map((leaf) => (
            <li key={leaf.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={leaf.href}
                  className="block px-4 py-3 hover:bg-gray-50"
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
