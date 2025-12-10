"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 bg-slate-700 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-slate-800 rounded-full opacity-30 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-white mb-3 text-center">
              Talk to our team
            </h2>
            <p className="text-slate-300 text-center mb-10 text-sm">
              Share a few details and we’ll schedule a walkthrough tailored to your
              locker layout and processes.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/20 border border-emerald-500/60 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Message sent
                </h3>
                <p className="text-slate-200 text-sm">
                  We’ll get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-6 text-xs text-slate-100 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">
                      First name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-100/60 transition-all"
                      placeholder="Ananya"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">
                      Last name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-100/60 transition-all"
                      placeholder="Rao"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">
                    Work email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-100/60 transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">
                    How are you managing lockers today?
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-100/60 transition-all"
                    placeholder="Briefly describe your current process..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-white hover:bg-slate-100 text-slate-950 font-semibold py-3.5 rounded-full text-sm transition-all shadow-lg shadow-black/40 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Request a walkthrough"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
