import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import cocaine from "../../assets/cocaine.png";
import marijuana from "../../assets/marijuana.jpg";
import meth from "../../assets/meth.jpeg";
import heroin from "../../assets/heroin_powder.jpg";
import lsd from "../../assets/lsd.png";
import { ScrollArea } from "@/components/ui/scroll-area";

const MyCarousel = () => {
  return (
    <Carousel className="w-[80%]">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="backdrop-blur-sm bg-inherit/30 shadow-lg shadow-cyan-500/50 m-2">
            <CardHeader>
              <CardTitle>Cocaine</CardTitle>
              <CardDescription>Stimulant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={cocaine}
                width={500}
                height={500}
                alt="Cocaine"
                className="rounded-md h-[240px] object-cover"
              />
              <ScrollArea className="h-[100px] mt-3">
                <p>
                  Cocaine is a powerful stimulant drug derived from the leaves
                  of the coca plant. It can produce intense euphoria, increased
                  energy, and heightened alertness. However, it also carries a
                  high risk of addiction, physical health issues, and negative
                  psychological effects. Cocaine is typically found in a white
                  powder form or as a solid crystal known as "crack." Its use is
                  illegal in many countries due to its potential for abuse and
                  harm.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="backdrop-blur-sm bg-inherit/30 shadow-lg shadow-cyan-500/50 m-2">
            <CardHeader>
              <CardTitle>Marijuana</CardTitle>
              <CardDescription>Cannabis</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={marijuana}
                width={500}
                height={500}
                alt="Marijuana"
                className="rounded-md h-[240px] object-cover"
              />
              <ScrollArea className="h-[100px] mt-3">
                <p>
                  Marijuana, also known as cannabis, is a plant that contains
                  psychoactive compounds, primarily THC (tetrahydrocannabinol).
                  It is commonly used for recreational and medicinal purposes,
                  often consumed through smoking, vaping, or edibles. Marijuana
                  can produce effects such as relaxation, altered perception,
                  and euphoria, but it may also cause anxiety or impaired
                  coordination in some users. Its legal status varies widely
                  around the world, with some places allowing medicinal and
                  recreational use, while others prohibit it entirely.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="backdrop-blur-sm bg-inherit/30 shadow-lg shadow-cyan-500/50 m-2">
            <CardHeader>
              <CardTitle>Methamphetamine</CardTitle>
              <CardDescription>Stimulant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={meth}
                width={500}
                height={500}
                alt="Meth"
                className="rounded-md h-[240px] object-cover"
              />
              <ScrollArea className="h-[100px] mt-3">
                <p>
                  Methamphetamine is a highly addictive stimulant that affects
                  the central nervous system. It is a synthetic drug that can be
                  found in a crystalline form (crystal meth) or as a powder.
                  Meth increases energy, focus, and euphoria, but it also
                  carries severe health risks, including addiction,
                  cardiovascular issues, and neurological damage. Its use can
                  lead to significant social and legal consequences, as it is
                  illegal in most countries. Long-term use can result in severe
                  physical and psychological problems.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="backdrop-blur-sm bg-inherit/30 shadow-lg shadow-cyan-500/50 m-2">
            <CardHeader>
              <CardTitle>Heroin</CardTitle>
              <CardDescription>Depressant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={heroin}
                width={500}
                height={500}
                alt="Meth"
                className="rounded-md h-[240px] object-cover"
              />
              <ScrollArea className="h-[100px] mt-3">
                <p>
                  Heroin is an opioid drug derived from morphine, which is
                  extracted from the opium poppy. It is typically found as a
                  white or brown powder or as a black sticky substance known as
                  "black tar." Heroin produces intense feelings of euphoria and
                  relaxation, but it is highly addictive and can lead to severe
                  health issues, including respiratory failure, infectious
                  diseases, and overdose. Its illegal status in most countries
                  reflects the significant risks associated with its use,
                  including the potential for addiction and dangerous withdrawal
                  symptoms.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="backdrop-blur-sm bg-inherit/30 shadow-lg shadow-cyan-500/50 m-2">
            <CardHeader>
              <CardTitle>LSD</CardTitle>
              <CardDescription>Hallucinogens</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={lsd}
                width={500}
                height={500}
                alt="Meth"
                className="rounded-md h-[240px] object-cover"
              />
              <ScrollArea className="h-[100px] mt-3">
                <p>
                  LSD (lysergic acid diethylamide) is a powerful hallucinogenic
                  drug that alters perception, mood, and cognitive processes. It
                  is derived from ergot, a fungus that grows on rye. Users often
                  experience vivid visual and auditory hallucinations, a
                  distorted sense of time, and profound changes in thought and
                  emotion. While LSD is not considered physically addictive, it
                  can lead to psychological effects and "bad trips," which can
                  cause anxiety or paranoia. Its legality varies by country,
                  with many places classifying it as an illegal substance.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
