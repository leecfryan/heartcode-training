"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import pacMan from "@/app/assets/pac-man.jpg";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hi, there <br /> I'm Ryan
        </motion.h1>
        <div className="font-sm">
          <Link href="#me">Find out more</Link>
        </div>
      </LampContainer>
      <div className="flex flex-row">
        <Card className=" m-2" id="me">
          <CardHeader>
            <CardTitle>Hello, I am Ryan</CardTitle>
            <CardDescription>I like to sleep</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={pacMan} alt="Pacman" />
            <div className="flex flex-row gap-2">
              <p className="font-bold">Name:</p>
              Ryan
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Major:</p>Information Systems
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Hobbies:</p>Too many different hobbies.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
