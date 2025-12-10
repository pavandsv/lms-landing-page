"use client";

import React from "react";
import { Box } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-950 text-slate-200 py-10 mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8 items-start">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-white text-slate-950 flex items-center justify-center">
            <Box className="w-4 h-4" />
          </div>
          <span className="text-base font-semibold">LockerSpace</span>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          A minimal, precise interface for serious locker operations across banking, 
          wealth, and enterprise storage.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 text-xs">
        <div className="space-y-2">
          <p className="font-semibold text-slate-100">Product</p>
          <a href="#features" className="block text-slate-400 hover:text-white">
            Features
          </a>
          <a href="#pricing" className="block text-slate-400 hover:text-white">
            Pricing
          </a>
          <a href="#demo" className="block text-slate-400 hover:text-white">
            3D Demo
          </a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-slate-100">Company</p>
          <a href="#team" className="block text-slate-400 hover:text-white">
            Team
          </a>
          <a href="#clients" className="block text-slate-400 hover:text-white">
            Clients
          </a>
          <a href="#contact" className="block text-slate-400 hover:text-white">
            Contact
          </a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-slate-100">Legal</p>
          <a href="#" className="block text-slate-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="block text-slate-400 hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </div>
    <div className="mt-6 border-t border-slate-800 pt-4 text-center text-[11px] text-slate-500">
      &copy; {new Date().getFullYear()} LockerSpace Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
