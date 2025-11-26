"use client";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { Logo } from "../feedback/logo";
import { SocialLinks } from "../feedback/social-link";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-brand-two px-5">
      <div className="py-10 max-w-7xl mx-auto">
        {/* Top: Logo + Phone */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10 py-5">
          <Logo />
          <div className="flex gap-3 sm:gap-4 justify-start sm:justify-center items-center">
            <FiPhoneCall className="text-brand size-8 sm:size-10" />
            <div className="text-sm sm:text-base">
              <p>Call Any Time</p>
              <p>2-965-871-8617</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle block with border */}
      <div className="border-y border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div className="space-y-10">
              <div>
                <div className="flex flex-row justify-start items-center gap-2 mb-2">
                  <FaLocationDot className="text-brand size-5" />
                  <h1 className="text-xl font-semibold">Address</h1>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-400 hover:text-brand cursor-pointer">
                  House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh
                </p>
              </div>

              <div>
                <div className="flex flex-row justify-start items-center gap-2 mb-2">
                  <BsFillSendFill className="text-brand size-5" />
                  <h1 className="text-xl font-semibold">Say Hello</h1>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-400 hover:text-brand cursor-pointer">
                  ifo@example.com
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-400 hover:text-brand cursor-pointer">
                  ifo@example.com
                </p>
              </div>

              <div>
                <h1 className="text-xl font-semibold mb-2">
                  See Our New updates
                </h1>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full items-stretch overflow-hidden rounded-md border border-white/10 bg-[#0B1018]"
                >
                  <Input
                    type="email"
                    placeholder="Email here..."
                    className="flex-1 h-11 border-0 bg-transparent text-sm text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button
                    type="submit"
                    className="flex h-11 w-11 items-center justify-center bg-emerald-400 text-black transition-colors hover:bg-emerald-300 rounded-l-none"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start lg:items-center">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-5">
                  Our Solutions
                </h1>
                <div className="flex flex-col space-y-2 text-sm sm:text-base">
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Mobile Development
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Cloud Services
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Network Connectivity
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Data analytics
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Software Development
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-start lg:items-center">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-5">
                  Company
                </h1>
                <div className="flex flex-col space-y-2 text-sm sm:text-base">
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Case Study
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    News & Article
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    All Portfolio
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Pricing Plan
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-start lg:items-center">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-5">
                  Resources
                </h1>
                <div className="flex flex-col space-y-2 text-sm sm:text-base">
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Support Area
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Support Policy
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Career
                  </Link>
                  <Link
                    href="/"
                    className="text-neutral-400 hover:text-brand cursor-pointer"
                  >
                    Pricing Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-0 sm:px-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 py-5">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            ©Copyright 2025 <b>Softconic</b> | Design By <b>Naimul</b>
          </p>
          <SocialLinks classNameButton="border-none bg-black w-5 h-7" />
        </div>
      </div>
    </div>
  );
}
