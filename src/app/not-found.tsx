"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F1F8F4] px-4">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          404 – Page Not Found
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Oops! We couldn’t find that page.
        </h1>

        <p className="mt-4 text-sm md:text-base text-slate-600">
          The page you’re looking for may have been moved, deleted, or never
          existed. Please check the URL or go back to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand px-6 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Go back home
          </Link>

          <Link
            href="/contact-us"
            className="rounded-full border border-brand/40 bg-white px-6 py-2.5 text-sm md:text-base font-semibold text-brand transition hover:-translate-y-0.5 hover:border-brand hover:shadow-sm"
          >
            Contact support
          </Link>
        </div>

        <p className="mt-6 text-xs md:text-sm text-slate-500">
          Error code: <span className="font-semibold text-slate-700">404</span>
        </p>
      </div>
    </main>
  );
}
