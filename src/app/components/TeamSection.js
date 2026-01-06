"use client";

import React from "react";
import { motion } from "framer-motion";
import nishant from "../images/team/nishant.webp";
import paras from "../images/team/paras.webp";
import pratik from "../images/team/pratikmodi.webp";
import Image from "next/image";

const people = [
  { name: "Pratik Modi", role: "CEO", image: pratik },
  { name: "Paras Shah", role: "CTO", image: paras },
  { name: "Nishant Modi", role: "OPERATIONS MANAGER", image: nishant },
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
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-[#0f172a]/[0.03] to-white"
    >
      {/* subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-36 -right-24 h-80 w-80 bg-[#0f172a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 h-60 w-60 bg-[#0f172a]/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[44rem] h-[16rem] bg-gradient-to-r from-transparent via-[#0f172a]/[0.05] to-transparent blur-2xl" />
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
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#0f172a]/60 mb-2">
              Product · Engineering · Operations
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-3">
              A senior team built for secure operations.
            </h2>

            <p className="text-sm md:text-[15px] text-[#0f172a]/70 max-w-xl leading-relaxed">
              10+ years of combined experience across enterprise software,
              access control workflows, and operational rollouts—focused on
              accuracy, auditability, and reliability.
            </p>
          </div>

          <div className="max-w-xs">
            <p className="text-xs md:text-sm text-[#0f172a]/60 leading-relaxed">
              Work directly with the decision-makers—from product design to
              deployment and continuous improvement.
            </p>

            {/* small credibility chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-[#0f172a]/10 bg-white/70 text-[#0f172a]/70">
                Enterprise delivery
              </span>
              <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-[#0f172a]/10 bg-white/70 text-[#0f172a]/70">
                Security-first
              </span>
              <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-[#0f172a]/10 bg-white/70 text-[#0f172a]/70">
                On-ground rollout
              </span>
            </div>
          </div>
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
              className="group relative overflow-hidden rounded-3xl px-8 py-10
                         border border-[#0f172a]/10 bg-white/70 backdrop-blur-xl
                         shadow-sm shadow-[#0f172a]/5
                         hover:shadow-lg hover:shadow-[#0f172a]/10
                         hover:border-[#0f172a]/20 transition-all
                         flex flex-col items-center text-center"
            >
              {/* soft glow + highlight sweep */}
              <div className="pointer-events-none absolute -inset-10 bg-[#0f172a]/10 blur-2xl opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              </div>

              <div className="relative mb-6">
                <div className="absolute -inset-4 rounded-[34px] bg-[#0f172a]/10 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={192}
                    height={192}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-[32px] object-cover
               border border-[#0f172a]/10 shadow-md shadow-[#0f172a]/10
               ring-1 ring-white/40"
                  />
                ) : (
                  <div
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-[32px] bg-[#0f172a]
                  flex items-center justify-center text-white text-4xl font-semibold
                  border border-white/10 shadow-md shadow-[#0f172a]/20 ring-1 ring-white/15"
                  >
                    {initials(person.name)}
                  </div>
                )}
              </div>

              <div className="relative">
                <p className="text-base md:text-lg font-semibold text-[#0f172a]">
                  {person.name}
                </p>
                <p className="text-xs md:text-sm text-[#0f172a]/60 mt-1 tracking-wide uppercase">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-center text-xs text-[#0f172a]/45">
          Built for high-trust environments — banks, vaults, and regulated
          facilities.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
