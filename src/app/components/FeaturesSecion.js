"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, MapPin, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    variants={fadeIn}
    className="group relative overflow-hidden rounded-2xl
               border border-[#0f172a]/10 bg-white/70 backdrop-blur-xl
               shadow-sm shadow-[#0f172a]/5
               hover:shadow-lg hover:shadow-[#0f172a]/10
               hover:-translate-y-1 hover:border-[#0f172a]/20
               transition-all"
  >
    {/* soft inner glow */}
    <div className="pointer-events-none absolute -inset-10 bg-[#0f172a]/10 blur-2xl opacity-25 group-hover:opacity-40 transition-opacity" />

    {/* subtle highlight sweep */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
    </div>

    <div className="relative p-7">
      <div className="relative mb-5 inline-flex">
        <div className="absolute -inset-2 rounded-2xl bg-[#0f172a]/10 blur-lg opacity-60 group-hover:opacity-90 transition-opacity" />
        <div className="relative w-11 h-11 rounded-2xl bg-[#0f172a] flex items-center justify-center
                        shadow-md shadow-[#0f172a]/20 ring-1 ring-white/15
                        group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#0f172a] mb-2.5">
        {title}
      </h3>
      <p className="text-sm text-[#0f172a]/70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => (
  <section
    id="features"
    className="relative py-20 bg-gradient-to-b from-white via-[#0f172a]/[0.03] to-white overflow-hidden"
  >
    {/* background accents */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#0f172a]/[0.06] blur-3xl" />
      <div className="absolute -bottom-44 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#0f172a]/10 blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-[#0f172a] mb-2">
            Designed for real locker operations.
          </h2>
          <p className="text-sm text-[#0f172a]/70 max-w-xl">
            From small branches to large central vaults, LockerSpace keeps your
            allocation clean, auditable, and visually intuitive.
          </p>
        </div>

        <p className="text-xs text-[#0f172a]/55 max-w-sm">
          Built to mirror your actual cabinet layouts&mdash;not generic grids.
          Every bay, row, and size can be modeled in your digital twin.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <FeatureCard
          icon={Eye}
          title="True visual mapping"
          desc="See lockers exactly as they exist in-branch. No abstractions—just your cabinet mirrored in 3D."
        />
        <FeatureCard
          icon={MapPin}
          title="Precise position booking"
          desc="Allocate by exact bay, row, and size. Remove ambiguity for both front office and customers."
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Operational confidence"
          desc="Status-driven panels keep teams aligned: available, rented, reserved, maintenance—always up to date."
        />
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
