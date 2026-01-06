"use client";

import React from "react";
import Image from "next/image";
import logo from "../images/image.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* top glass bar */}
      <div className="bg-white/60 backdrop-blur-xl border-b border-slate-200/60">
        {/* subtle navy tint overlay */}
        <div className="bg-[#0f172a]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* soft glow */}
                  <div className="absolute -inset-2 rounded-2xl bg-[#0f172a]/10 blur-lg" />
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/70 ring-1 ring-[#0f172a]/10 shadow-sm overflow-hidden">
                    <Image
                      src={logo}
                      alt="DSV Locker Management System Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="text-[15px] sm:text-base font-semibold tracking-tight text-[#0f172a]">
                    DSV Locker Management System
                  </span>
                  <span className="hidden sm:block text-xs text-[#0f172a]/60">
                    Secure • Trackable • Smart
                  </span>
                </div>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-1 text-sm font-medium">
                {[
                  { label: "Features", href: "#features" },
                  { label: "Clients", href: "#clients" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Team", href: "#team" },
                  { label: "3D Demo", href: "#demo" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 rounded-lg text-[#0f172a]/70 hover:text-[#0f172a] transition-colors group"
                  >
                    {item.label}
                    {/* animated underline */}
                    <span className="absolute left-3 right-3 -bottom-[2px] h-[2px] bg-[#0f172a]/80 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="hidden sm:inline-flex items-center px-3 py-2 rounded-full text-xs font-medium text-[#0f172a]/70 hover:text-[#0f172a] hover:bg-[#0f172a]/5 ring-1 ring-transparent hover:ring-[#0f172a]/10 transition-all">
                  Book a walkthrough
                </button>

                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all"
                >
                  {/* glow */}
                  <span className="absolute inset-0 rounded-full bg-[#0f172a]/25 blur-lg" />
                  {/* button surface */}
                  <span className="relative rounded-full px-5 py-2.5 bg-[#0f172a] hover:bg-[#0f172a]/95 shadow-md shadow-[#0f172a]/20 ring-1 ring-white/20">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
