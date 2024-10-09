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
import Image from "next/image";
import coke from "../../assets/cocaine.jpg";
import Heroin from "../../assets/heroin_powder.jpg";
import meth from "../../assets/meth.jpeg";
import marijuana from "../../assets/marijuana.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";

const MyCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Cocaine</CardTitle>
              <CardDescription>Stimulant</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Image src={coke} alt="Cocaine" className="h-[200px]" />
              <ScrollArea className="h-[200px] rounded-md border p-4">
                Cocaine is a potent stimulant derived from coca leaves, commonly
                found as a white powder or crystal. It increases dopamine
                levels, causing euphoria and heightened energy, but also carries
                serious risks like addiction, cardiovascular problems, and
                anxiety. Its illegal status is due to these dangers and its
                potential for abuse.
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Heroin</CardTitle>
              <CardDescription>Depressants</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Image src={Heroin} alt="Heroin" className="h-[200px]" />
              <ScrollArea className="h-[200px] rounded-md border p-4">
                Heroin is an opioid drug synthesized from morphine, which is
                derived from the opium poppy. It typically appears as a white or
                brown powder or as a black sticky substance known as "black
                tar." Heroin is highly addictive and produces intense feelings
                of euphoria, relaxation, and pain relief. However, it also
                carries significant risks, including respiratory depression,
                overdose, and a high potential for dependence and addiction.
                Long-term use can lead to severe health complications and social
                issues. Due to these dangers, heroin is illegal in many
                countries.
              </ScrollArea>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
