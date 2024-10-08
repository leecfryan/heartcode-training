import Image from "next/image";
import coke from "./assets/cocaine.png";
import Heroin from "./assets/heroin_powder.jpg";
import meth from "./assets/meth.jpeg";
import marijuana from "./assets/marijuana.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    // <div className="flex flex-col justify-center h-dvh bg-[url('/pac-man.jpg')] bg-cover">
    <div className="flex flex-col justify-center">
      <p className="font-bold text-center text-5xl">Don't do drugs</p>
      <p className="text-small text-center italic">Drugs are harmful</p>
      <hr className="my-5" />
      <div className="flex flex-col justify-center px-7">
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
              therapeutic effects, helping to treat or manage health conditions,
              but they can also lead to addiction, misuse, and negative health
              consequences. The impact of drugs varies widely based on factors
              such as dosage, method of use, and individual differences in
              biology and environment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="font-bold text-center text-4xl italic mt-4">
          Types of Drugs
        </p>
        <div className="flex flex-row max-w-1/2 p-2 m-2">
          <Card className="w-1/2 m-2">
            <CardHeader>
              <CardTitle>Cocaine</CardTitle>
              <CardDescription>Stimulant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={coke} alt="Cocaine" />
              <p className="mt-3">
                Cocaine is a potent stimulant derived from coca leaves, commonly
                found as a white powder or crystal. It increases dopamine
                levels, causing euphoria and heightened energy, but also carries
                serious risks like addiction, cardiovascular problems, and
                anxiety. Its illegal status is due to these dangers and its
                potential for abuse.
              </p>
            </CardContent>
          </Card>

          <Card className="w-1/2 m-2">
            <CardHeader>
              <CardTitle>Heroin</CardTitle>
              <CardDescription>Depressants</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={Heroin} alt="heroin" />
              <p className="mt-3">
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
              </p>
            </CardContent>
          </Card>

          <Card className="w-1/2 m-2">
            <CardHeader>
              <CardTitle>Marijuana</CardTitle>
              <CardDescription>Cannabis</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={marijuana} alt="Marijuana" />
              <p className="mt-3">
                Marijuana, also known as cannabis, is a plant that contains
                psychoactive compounds, primarily THC (tetrahydrocannabinol). It
                is often used for recreational and medicinal purposes, producing
                effects like relaxation, euphoria, and altered perception. While
                marijuana is legal in some regions, it remains illegal in
                others, and its use can have potential risks, including impaired
                cognitive function and dependency in some users.
              </p>
            </CardContent>
          </Card>

          <Card className="w-1/2 m-2">
            <CardHeader>
              <CardTitle>Meth (Methamphetamine)</CardTitle>
              <CardDescription>stimulant</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={meth} alt="Meth" />
              <p className="mt-3">
                Methamphetamine is a powerful and highly addictive stimulant
                that affects the central nervous system. It appears as a white,
                odorless, bitter-tasting crystalline powder or in crystal form
                (commonly called "crystal meth"). Methamphetamine increases
                dopamine levels in the brain, leading to heightened energy,
                euphoria, and increased focus. However, it also poses severe
                risks, including addiction, cardiovascular problems, dental
                issues (often referred to as "meth mouth"), and neurotoxicity.
                Its illegal status in many places reflects its potential for
                abuse and significant health hazards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
