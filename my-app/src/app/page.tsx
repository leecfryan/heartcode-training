import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

import MyInfiniteScroll from "./components/MyInfiniteScroll/MyInfiniteScroll";

export default function Home() {
  const words: string[] = ["Alcohol", "Drugs"];

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center">
          <div className="font-bold text-center text-5xl uppercase">
            DON'T DO
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

      <div className="flex flex-col pt-20 justify-center px-7 h-full bg-gradient-to-t from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
        <div className="flex flex-col h-full" id="drug_types">
          <h1 className="font-sans antialiased text-center text-2xl font-bold">Drug Types</h1>
          <MyInfiniteScroll />
        </div>
      </div>
    </div>
  );
}
