"use client";

import React from "react";
import { Box } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-slate-900/70 to-slate-600/60 blur-sm" />
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-black text-white shadow-md">
                <Box className="w-5 h-5" />
              </div>
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              LockerSpace
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#features"
              className="text-slate-600 hover:text-black transition-colors"
            >
              Features
            </a>
            <a
              href="#clients"
              className="text-slate-600 hover:text-black transition-colors"
            >
              Clients
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#team"
              className="text-slate-600 hover:text-black transition-colors"
            >
              Team
            </a>
            <a
              href="#demo"
              className="text-slate-600 hover:text-black transition-colors"
            >
              3D Demo
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex text-xs font-medium text-slate-500 hover:text-black transition-colors">
              Book a walkthrough
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium shadow-lg shadow-black/20 hover:bg-slate-900 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
