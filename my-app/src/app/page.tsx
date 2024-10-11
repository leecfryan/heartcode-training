import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MyCarousel from "./components/MyCarousel/MyCarousel";
import MyInfiniteScroll from "./components/MyInfiniteScroll/MyInfiniteScroll";

export default function Home() {
  const words: string[] = ["Alcohol", "Drugs"];

  return (
    // <div className="flex flex-col justify-center h-dvh bg-[url('/pac-man.jpg')] bg-cover">
    <div>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center">
          <div className="font-bold text-center text-5xl">
            Don't do
            <FlipWords words={words} />
          </div>
          <div className="mt-5 hover:scale-150 transition ease-in-out">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
            >
              <Link href="#drug_types">Find out more</Link>
            </HoverBorderGradient>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      <div className="flex flex-col justify-center px-7 h-full bg-gradient-to-t from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
        <div className="flex flex-col h-full" id="drug_types">
          <p className="font-bold text-center text-4xl mt-4">Types of Drugs</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                Brief description on drugs
              </AccordionTrigger>
              <AccordionContent>
                Drugs are substances that alter the body's normal functioning,
                affecting the central nervous system, mood, perception, or
                behavior. They can be classified into various categories,
                including legal (like prescription medications and alcohol) and
                illegal substances (like cocaine and heroin). Drugs can have
                therapeutic effects, helping to treat or manage health
                conditions, but they can also lead to addiction, misuse, and
                negative health consequences. The impact of drugs varies widely
                based on factors such as dosage, method of use, and individual
                differences in biology and environment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <MyInfiniteScroll />
        </div>
      </div>
    </div>
  );
}
