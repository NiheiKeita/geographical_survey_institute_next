"use client"

import { Community } from "@/views/HomeView/components/Community";
import { FeatureSection } from "@/views/HomeView/components/FeatureSection";
import { HeroSection } from "@/views/HomeView/components/HeroSection";
import { HowItWorks } from "@/views/HomeView/components/HowItWorks";
import { Testimonials } from "@/views/HomeView/components/Testimonials";
import React from "react"

export const HomeView = React.memo(function HomeView() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <HowItWorks />
      <Community />
    </>
  );
})
