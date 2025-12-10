"use client";

import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSecion";
import DemoSection from "./components/DemoSection";
import ClientsSection from "./components/ClientsSection";
import PricingSection from "./components/PricingSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
