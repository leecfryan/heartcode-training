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

import Card2 from '@/app/components/card/card'

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Card className=" m-2">
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
{/* 
        <Card2 
        title="Testing"
        image="@/app/assets/pac-man.jpg">
          <p>This is a test on my component</p>
          <p>This is another thing</p>
        </Card2> */}
      </div>
    </div>
  );
}
