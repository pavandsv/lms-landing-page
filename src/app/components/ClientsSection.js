"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Prime Secure Bank",
    logo: "/images/logos/prime-secure-bank.svg",
  },
  {
    name: "Crestline Vaults",
    logo: "/images/logos/crestline-vaults.svg",
  },
  {
    name: "Northbridge Finance",
    logo: "/images/logos/northbridge-finance.svg",
  },
  {
    name: "Axis Wealth Safe",
    logo: "/images/logos/axis-wealth-safe.svg",
  },
  {
    name: "Centurion Lockers",
    logo: "/images/logos/centurion-lockers.svg",
  },
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-2">
            Trusted by teams who care about detail
          </p>
          <p className="text-sm text-slate-500">
            Designed for banks, vault operators and high-touch facilities.
          </p>
        </div>

        {/* Logos grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative flex items-center justify-center px-6 py-5 rounded-2xl border border-slate-200 bg-white/80 shadow-sm hover:shadow-md transition-all"
            >
              {/* subtle inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-slate-100/40 blur-xl" />

              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="relative max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
                />
              ) : (
                <span className="relative text-xs font-medium text-slate-600 text-center">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
