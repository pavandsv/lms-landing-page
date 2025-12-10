"use client";

import React from "react";
import { motion } from "framer-motion";

const people = [
  {
    name: "Ananya Rao",
    role: "Product Lead, LockerSpace",
    image: "/images/team/ananya.jpg", // update paths as needed
  },
  {
    name: "Rahul Menon",
    role: "Head of Engineering",
    image: "/images/team/rahul.jpg",
  },
  {
    name: "Sara Khan",
    role: "Customer Success",
    image: "/images/team/sara.jpg",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* subtle background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-16 h-72 w-72 bg-slate-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 h-52 w-52 bg-slate-200/40 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
              Product · Engineering · Ops
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              Meet the team behind the lockers.
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 max-w-xl leading-relaxed">
              The core team you&apos;ll work with from design to rollout.
            </p>
          </div>
          <p className="text-xs md:text-sm text-slate-500 max-w-xs leading-relaxed">
            Direct access to the people making product and engineering decisions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {people.map((person) => (
            <motion.div
              key={person.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-white border border-slate-200 rounded-3xl px-8 py-10 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                {/* glow behind avatar */}
                <div className="absolute inset-0 rounded-[32px] bg-slate-200/70 blur-2xl" />
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-[32px] object-cover border border-slate-200 shadow-md"
                  />
                ) : (
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[32px] bg-slate-900 flex items-center justify-center text-white text-4xl font-semibold border border-slate-700 shadow-md">
                    {initials(person.name)}
                  </div>
                )}
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-slate-900">
                  {person.name}
                </p>
                <p className="text-xs md:text-sm text-slate-500 mt-1 tracking-wide uppercase">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
