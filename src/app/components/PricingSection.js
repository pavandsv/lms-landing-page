"use client";

import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Branch",
      price: "₹19,000",
      period: "/month",
      highlight: false,
      description: "For single-branch operations getting started with digital mapping.",
      features: [
        "Up to 3 cabinets per branch",
        "Basic 3D visualization",
        "Manual status updates",
        "Email support",
      ],
    },
    {
      name: "Vault",
      price: "₹39,000",
      period: "/month",
      highlight: true,
      description: "For banks and wealth firms centralizing locker management.",
      features: [
        "Unlimited cabinets per branch",
        "Advanced 3D twin & layouts",
        "Role-based access controls",
        "Priority support & onboarding",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      highlight: false,
      description: "For multi-country deployments and deep integrations.",
      features: [
        "Custom infrastructure options",
        "On-prem / VPC deployment",
        "Dedicated success manager",
        "SLA-backed uptime & support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-3">
            Simple plans for serious locker operations.
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Start small or roll out across your network—LockerSpace scales with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border ${
                plan.highlight
                  ? "border-black bg-slate-950 text-white shadow-xl shadow-black/25"
                  : "border-slate-200 bg-white shadow-sm"
              } p-7 flex flex-col gap-5`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-white text-[10px] font-semibold tracking-wide text-slate-900 shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    plan.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs ${
                    plan.highlight ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold">
                  {plan.price}
                </span>
                <span
                  className={`text-xs ${
                    plan.highlight ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="flex-1 space-y-2 text-xs">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${
                        plan.highlight ? "bg-white" : "bg-slate-900"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-slate-100" : "text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-3 w-full rounded-full border text-sm font-medium py-2.5 ${
                  plan.highlight
                    ? "bg-white text-slate-900 hover:bg-slate-100 border-transparent"
                    : "border-slate-300 text-slate-900 hover:bg-slate-100"
                } transition-colors`}
              >
                {plan.name === "Enterprise" ? "Talk to sales" : "Start with this plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
