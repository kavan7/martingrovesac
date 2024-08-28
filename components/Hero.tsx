"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background,";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  return (
    <div>
     
    <WavyBackground className="max-w-7xl mx-auto text-5xl">
    <TextGenerateEffect words="MARTINGROVE SAC"/>


      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  ">
     

      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        
      </p>
    </WavyBackground>
    </div>
  );
}
