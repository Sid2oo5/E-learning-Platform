"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { FloatingDockDemo } from "./FloatingDockDemo";
// import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
 
export function BackgroundBeamsDemo() {
  return (
    <>
      <TypewriterEffectSmoothDemo />
      <FeaturesSectionDemo />
      <FloatingDockDemo />
    <div className="h-[90rem] w-full rounded-md flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
    </>
  );
}