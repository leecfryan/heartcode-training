import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MyCarousel from "./components/MyCarousel/MyCarousel";

export default function Home() {
  const words: string[] = ["Alcohol", "Drugs"];

  return (
    // <div className="flex flex-col justify-center h-dvh bg-[url('/pac-man.jpg')] bg-cover">
    <div className="flex flex-col justify-center">
      <BackgroundBeamsWithCollision className="flex flex-col h-dvh align-middle justify-center">
        <p className="font-bold text-center text-5xl">
          Don't do
          <FlipWords words={words} />
        </p>
        <h1 className="font-bold text-4xl text-center"></h1>
      </BackgroundBeamsWithCollision>
      {/* <hr className="my-5" /> */}

      <BackgroundBeamsWithCollision  className="rotate-180 z-1">
        <div className="flex flex-col justify-center px-7 rotate-180">
          <div className="flex flex-col">
            <p className="font-bold text-center text-4xl italic mt-4">
              Types of Drugs
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold">
                  Brief description on drugs
                </AccordionTrigger>
                <AccordionContent>
                  Drugs are substances that alter the body's normal functioning,
                  affecting the central nervous system, mood, perception, or
                  behavior. They can be classified into various categories,
                  including legal (like prescription medications and alcohol)
                  and illegal substances (like cocaine and heroin). Drugs can
                  have therapeutic effects, helping to treat or manage health
                  conditions, but they can also lead to addiction, misuse, and
                  negative health consequences. The impact of drugs varies
                  widely based on factors such as dosage, method of use, and
                  individual differences in biology and environment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-row align-middle justify-center w-full p-5">
              <MyCarousel />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
