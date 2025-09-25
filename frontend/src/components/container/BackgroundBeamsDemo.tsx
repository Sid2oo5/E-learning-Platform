"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import { TypewriterEffectSmoothDemo } from "../container/TypewriterEffectSmoothDemo";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo"; 
import Footer from "../Footer"; 
import Dashboard from "./Dashboard"
// import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
 
export function BackgroundBeamsDemo() {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      <FeaturesSectionDemo />
      <InfiniteMovingCardsDemo />
      <AppleCardsCarouselDemo />
      <StickyScrollRevealDemo/>
      <FloatingDockDemo />
      <hr />
      <Footer />
    <div className="h-[10rem] w-full rounded-md flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
    </>
  );
}