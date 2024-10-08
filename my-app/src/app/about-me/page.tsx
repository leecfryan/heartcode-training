import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function About() {
    return (
      <div>
      About Page!
      <Card>
        <CardHeader>
          <CardTitle>Hello</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti omnis in nam dignissimos. Excepturi ipsum qui nostrum amet totam, optio aspernatur quisquam quasi debitis quo deleniti iure nulla placeat?</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Hello I am blah blah</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      </div>
    );
  }
  