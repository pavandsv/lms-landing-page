"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

const THEME = "#0f172ae6"; // reference (tailwind uses hex below)

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const FloatingLocker = ({ delay, className }) => (
  <motion.div
    className={[
      "absolute rounded-2xl border border-[#0f172a]/10",
      "bg-white/70 shadow-lg shadow-[#0f172a]/10 backdrop-blur-xl",
      "ring-1 ring-white/50",
      className,
    ].join(" ")}
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [-10, 10, -10], opacity: 1 }}
    transition={{
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
  >
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="relative">
        <div className="absolute -inset-2 rounded-2xl bg-[#0f172a]/10 blur-lg" />
        <div className="relative w-9 h-9 rounded-2xl bg-[#0f172a] flex items-center justify-center shadow-md shadow-[#0f172a]/20 ring-1 ring-white/20">
          <Lock className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="text-[11px] leading-tight">
        <p className="font-semibold text-[#0f172a]">
          Locker #{Math.floor(100 + Math.random() * 900)}
        </p>
        <p className="text-[#0f172a]/60">Reserved • Ground Floor</p>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#0f172a]/[0.03] to-white pt-20 pb-28 lg:pt-28 lg:pb-36">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 -right-36 w-[28rem] h-[28rem] bg-[#0f172a]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-44 -left-36 w-[30rem] h-[30rem] bg-[#0f172a]/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[42rem] h-[18rem] bg-gradient-to-r from-transparent via-[#0f172a]/[0.05] to-transparent blur-2xl" />
      </div>

      {/* Floating lockers */}
      <FloatingLocker delay={0.2} className="top-24 right-10 hidden lg:block" />
      <FloatingLocker delay={1} className="bottom-16 right-40 hidden lg:block" />
      <FloatingLocker delay={1.6} className="top-44 left-10 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0f172a]/10 bg-white/70 text-xs font-medium text-[#0f172a]/70 mb-6 shadow-sm shadow-[#0f172a]/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Live locker availability · Enterprise ready
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-semibold text-[#0f172a] tracking-tight mb-6 leading-tight">
            A clean, visual way to
            <br />
            manage{" "}
            <span className="relative">
              <span className="relative z-10">every locker</span>
              <span className="absolute left-0 right-0 -bottom-1 h-[10px] bg-[#0f172a]/10 rounded-full -z-0" />
            </span>
            .
          </h1>

          {/* Sub copy */}
          <p className="text-base lg:text-lg text-[#0f172a]/70 mb-8 leading-relaxed max-w-xl">
            DSV Locker Management System brings your physical vault into a precise digital twin.
            Browse, allocate, and manage lockers in a minimal interface that
            matches your operation and compliance needs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all"
            >
              <span className="absolute inset-0 rounded-full bg-[#0f172a]/25 blur-lg" />
              <span className="relative inline-flex items-center gap-2 rounded-full px-7 py-3 bg-[#0f172a] hover:bg-[#0f172a]/95 shadow-lg shadow-[#0f172a]/20 ring-1 ring-white/15">
                Launch 3D Demo <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-[#0f172a]/20 bg-white/70 hover:bg-[#0f172a]/[0.04] text-[#0f172a] px-7 py-3 rounded-full text-sm font-semibold transition-colors backdrop-blur"
            >
              Talk to our team
            </a>
          </div>

          <p className="mt-4 text-xs text-[#0f172a]/55">
            No credit card required · Custom deployments for banks & wealth vaults
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
