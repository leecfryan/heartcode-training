import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import pacMan from "@/app/assets/pac-man.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function About() {
  return (
    <div className="flex flex-col">
      About Page!
      <div className="flex flex-row">
        <Card className="w-1/2 m-2">
          <CardHeader>
            <CardTitle>Hello, I am Ryan</CardTitle>
            <CardDescription>I like to sleep</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={pacMan} />
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

        <Card className="w-1/2 m-2">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
