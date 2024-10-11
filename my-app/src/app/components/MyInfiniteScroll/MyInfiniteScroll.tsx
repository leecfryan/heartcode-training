"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import coke from "@/app/assets/cocaine.png";
import marijuana from "@/app/assets/marijuana.jpg";
import meth from "@/app/assets/meth.jpeg";
import heroin from "@/app/assets/heroin_powder.jpg";
import lsd from "@/app/assets/lsd.png";

export function MyInfiniteScroll() {
  return (
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    // </div>
  );
}

const testimonials = [
  {
    quote:
      "Cocaine is a powerful stimulant drug derived from the leaves of the coca plant. It can produce intense euphoria, increased energy, and heightened alertness. However, it also carries a high risk of addiction, physical health issues, and negative psychological effects. Cocaine is typically found in a white powder form or as a solid crystal known as 'crack.'' Its use is illegal in many countries due to its potential for abuse and harm.",
    name: "Stimulant",
    title: "Cocaine",
    image: coke,
  },
  {
    quote: `Marijuana, also known as cannabis, is a plant that contains
                  psychoactive compounds, primarily THC (tetrahydrocannabinol).
                  It is commonly used for recreational and medicinal purposes,
                  often consumed through smoking, vaping, or edibles. Marijuana
                  can produce effects such as relaxation, altered perception,
                  and euphoria, but it may also cause anxiety or impaired
                  coordination in some users. Its legal status varies widely
                  around the world, with some places allowing medicinal and
                  recreational use, while others prohibit it entirely.`,
    name: "Cannabis",
    title: "Marijuana",
    image: marijuana,
  },
  {
    quote: `Methamphetamine is a highly addictive stimulant that affects
                  the central nervous system. It is a synthetic drug that can be
                  found in a crystalline form (crystal meth) or as a powder.
                  Meth increases energy, focus, and euphoria, but it also
                  carries severe health risks, including addiction,
                  cardiovascular issues, and neurological damage. Its use can
                  lead to significant social and legal consequences, as it is
                  illegal in most countries. Long-term use can result in severe
                  physical and psychological problems.`,
    name: "Stimulant",
    title: "Methamphetamine",
    image: meth,
  },
  {
    quote: `Heroin is an opioid drug derived from morphine, which is
                  extracted from the opium poppy. It is typically found as a
                  white or brown powder or as a black sticky substance known as
                  "black tar." Heroin produces intense feelings of euphoria and
                  relaxation, but it is highly addictive and can lead to severe
                  health issues, including respiratory failure, infectious
                  diseases, and overdose. Its illegal status in most countries
                  reflects the significant risks associated with its use,
                  including the potential for addiction and dangerous withdrawal
                  symptoms.`,
    name: "Opiod",
    title: "Heroin",
    image: heroin,
  },
  {
    quote: `LSD (lysergic acid diethylamide) is a powerful hallucinogenic
                  drug that alters perception, mood, and cognitive processes. It
                  is derived from ergot, a fungus that grows on rye. Users often
                  experience vivid visual and auditory hallucinations, a
                  distorted sense of time, and profound changes in thought and
                  emotion. While LSD is not considered physically addictive, it
                  can lead to psychological effects and "bad trips," which can
                  cause anxiety or paranoia. Its legality varies by country,
                  with many places classifying it as an illegal substance.`,
    name: "Hallucinogenic",
    title: "Lysergic Acid Diethylamide (LSD)",
    image: lsd,
  },
];

export default MyInfiniteScroll;
