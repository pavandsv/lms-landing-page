"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, MapPin, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group"
  >
    <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2.5">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-2">
            Designed for real locker operations.
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            From small branches to large central vaults, LockerSpace keeps your
            allocation clean, auditable, and visually intuitive.
          </p>
        </div>
        <p className="text-xs text-slate-500 max-w-sm">
          Built to mirror your actual cabinet layouts&mdash;not generic grids. 
          Every bay, row, and size can be modeled in your digital twin.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
