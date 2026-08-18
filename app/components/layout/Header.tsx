"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 px-0 sm:w-[calc(100%-2rem)] md:px-8">
      <div
        className={`overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 ${isMobileMenuOpen ? "shadow-[0_22px_60px_rgba(15,23,42,0.12)]" : ""
          }`}
      >
        <div className="mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <Image src="/spanna-logo.svg" alt="Spanna Trades logo" height={40} width={25} />
            <p className="text-2xl font-bold text-blue sm:text-3xl">Spanna</p>
          </a>

          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="cursor-pointer text-sm font-medium text-grey transition-colors hover:text-blue active:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              className="font-semibold text-grey transition-colors hover:text-blue active:text-ink"
              href="https://thatguysaccount.github.io/Spanna/Demo"
              target="_blank"
              rel="noreferrer"
            >
              Try the demo
            </a>
            <a
              className="rounded-full bg-blue px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-90"
              href="#interest"
            >
              Get notified
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-blue transition hover:opacity-90 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-blue transition-all duration-200 ${isMobileMenuOpen ? "translate-y-1.75 rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-1.75 block h-0.5 w-5 rounded-full bg-blue transition-all duration-200 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 top-3.5 block h-0.5 w-5 rounded-full bg-blue transition-all duration-200 ${isMobileMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-slate-200 px-4 pb-4 pt-3">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-grey transition-colors hover:bg-slate-50 hover:text-blue"
                >
                  {label}
                </a>
              ))}

              <a
                className="rounded-xl px-3 py-2 text-sm font-semibold text-blue transition-colors hover:bg-blue-soft"
                href="https://thatguysaccount.github.io/Spanna/Demo"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try the demo
              </a>

              <a
                className="mt-1 rounded-full bg-blue px-3 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                href="#interest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get notified
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;