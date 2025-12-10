"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const FloatingLocker = ({ delay, className }) => (
  <motion.div
    className={`absolute rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur ${className}`}
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
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="w-7 h-7 rounded-xl bg-black flex items-center justify-center">
        <Lock className="w-4 h-4 text-white" />
      </div>
      <div className="text-[11px] leading-tight">
        <p className="font-semibold text-slate-900">Locker #{Math.floor(100 + Math.random()*900)}</p>
        <p className="text-slate-500">Reserved • Ground Floor</p>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-20 pb-28 lg:pt-28 lg:pb-36">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/70 text-xs font-medium text-slate-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Live locker availability · Enterprise ready
          </div>

          <h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
            A clean, visual way to
            <br />
            manage <span className="underline decoration-slate-900/40">every locker</span>.
          </h1>

          <p className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            LockerSpace brings your physical vault into a precise digital twin. 
            Browse, allocate, and manage lockers in a minimal black-and-white interface that matches your operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg shadow-black/25 transition-colors"
            >
              Launch 3D Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 px-7 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Talk to our team
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            No credit card required · Custom deployments for banks & wealth vaults
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
