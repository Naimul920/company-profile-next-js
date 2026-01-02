"use client";

import React from "react";
import { ContactItem } from "../feedback/ContactItem";
import { SocialLinks } from "../feedback/social-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "../feedback/Header";

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-widest text-emerald-400">
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl">
      {children}
    </h1>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-xl text-white/70">{children}</p>;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-white/90">{label}</label>
      {children}
    </div>
  );
}

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClass =
    "border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-emerald-500";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-8">
      <h3 className="text-center text-2xl font-bold text-white">
        Make a Free Consulting
      </h3>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="First Name">
            <Input className={inputClass} />
          </Field>

          <Field label="Last Name">
            <Input className={inputClass} />
          </Field>
        </div>

        <Field label="Company/Organization">
          <Input className={inputClass} />
        </Field>

        <Field label="Email">
          <Input type="email" className={inputClass} />
        </Field>

        <Field label="Phone">
          <Input className={inputClass} />
        </Field>

        <Field label="Message">
          <Textarea rows={6} className={inputClass} />
        </Field>

        <div className="pt-3">
          <Button
            type="submit"
            className="h-12 w-44 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

function GoogleMap() {
  return (
    <section className="w-full">
      <div className="h-80 w-full md:h-[450px] lg:h-[520px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4331.644873624857!2d90.43973907589722!3d23.75789663848742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3755b977bd477dc7%3A0x5d4fc427086d61d6!2s10%20Tola%20Market%20%7C%20South%20Banasree%2C%20Dacca!3m2!1d23.7580074!2d90.441222!4m5!1s0x3755b98908d5211d%3A0x81dfd390f8a2aa4b!2sPlot%20%23%2033%2C%20Swarnali%20Tower%2C%2035%20Rd%20No.%2011%2C%20Dhaka%201212!3m2!1d23.757818399999998!2d90.44340559999999!5e1!3m2!1sen!2sbd!4v1765951904745!5m2!1sen!2sbd"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default function ContactUs() {
  return (
    <div className="bg-[#020617]">
      {/* Header */}
      {/* <div className="bg-[#0b1220] py-16 text-center">
        <h2 className="text-4xl font-extrabold text-white">Contact Us</h2>
      </div> */}

      <Header>Contact Us</Header>

      {/* Content */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div className="space-y-10">
              <div>
                <SectionTag>CONTACT WITH US</SectionTag>
                <Title>LET’S WORK TOGETHER?</Title>
                <Muted>
                  I have world-class, flexible support via live chat, email and
                  phone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours.
                </Muted>
              </div>

              <div className="space-y-6">
                <ContactItem type="address" />
                <ContactItem type="phone" />
                <ContactItem type="email" />
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-white">Follow Us</h3>
                <p className="mt-1 text-sm text-white/70">
                  Follow us on Social Network
                </p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:pl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <GoogleMap />
    </div>
  );
}
