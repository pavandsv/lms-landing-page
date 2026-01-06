"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Update these paths based on your folder location
import axisFinance from "../images/clients/axisFinance.png";
import shaktiFinance from "../images//clients/shaktiFinance.png";

const clients = [
  { name: "Axis Finance", logo: axisFinance },
  { name: "Shaki finance", logo: shaktiFinance },
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-white via-[#0f172a]/[0.03] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0f172a]/60 mb-2">
            Trusted by teams who care about detail
          </p>
          <p className="text-sm text-[#0f172a]/60">
            Designed for banks, vault operators and high-touch facilities.
          </p>
        </div>

        {/* Logos grid */}
        <motion.div
          className="grid grid-cols-2 gap-6 items-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative flex items-center justify-center px-6 py-6 rounded-2xl
                         border border-[#0f172a]/10 bg-white/70 backdrop-blur-xl
                         shadow-sm shadow-[#0f172a]/5
                         hover:shadow-lg hover:shadow-[#0f172a]/10
                         hover:border-[#0f172a]/20
                         transition-all overflow-hidden"
            >
              {/* soft navy glow */}
              <div className="pointer-events-none absolute -inset-10 rounded-3xl bg-[#0f172a]/10 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

              {/* subtle highlight sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>

              <div className="relative h-16 w-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={64}
                  className="object-contain grayscale opacity-80
                             group-hover:grayscale-0 group-hover:opacity-100
                             transition-all duration-200"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-[#0f172a]/45">
          Enterprise-grade security, audit trails, and deployment flexibility.
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
