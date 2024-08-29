"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background,";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ThreeDCardDemo } from "./CardDemo";

export function Hero() {
  return (
    <div>
      <WavyBackground className="max-w-7xl mx-auto text-5xl">
        <TextGenerateEffect words="MARTINGROVE"/>

        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
          {/* Main logo or text can be added here if needed */}
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          {/* Additional text or description can be added here if needed */}
        </p>
        
        {/* Content above the cards */}
        <div className="mt-8">
          {/* Add any additional content or components here if needed */}
        </div>

        {/* Container for the cards, positioned below all other content */}
     
      </WavyBackground>
      
    </div>
  );
}
