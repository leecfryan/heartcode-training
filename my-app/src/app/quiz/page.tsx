"use client";

import { boolean, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertOneUser } from "../server/user";
import Image from "next/image";
import background_quiz from "@/../../public/quiz_bg.jpeg";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(10, {
      message: "Username must be below 11 characters",
    }),
  question1: z.coerce.number({
    message: "You need to enter an amount",
  }),
  question2: z.enum(["True", "False"], {
    required_error: "You need to pick between true or false",
  }),
  question3: z.enum(
    ["addiction", "overdose", "infection", "all of the above"],
    {
      required_error: "Pick one of the options.",
    }
  ),
});

export default function Quiz() {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let incorrectQuestions: string[] = [];

    // Check each question and accumulate incorrect questions
    if (values.question1 !== 500) {
      incorrectQuestions.push("1");
    }

    if (values.question2 !== "True") {
      incorrectQuestions.push("2");
    }

    if (values.question3 !== "all of the above") {
      incorrectQuestions.push("3");
    }

    // If no incorrect questions, show the success toast
    if (incorrectQuestions.length === 0) {
      toast({
        title: `Congrats ${values.username}`,
        description: "You got all questions correct!",
      });
    } else {
      // Otherwise, show which questions were wrong
      toast({
        title: `Sorry ${
          values.username
        }, you got question(s) ${incorrectQuestions.join(", ")} wrong`,
        description: "Try again",
      });
    }

    // const isDrugDealer = values.question2 === "True" ? true : false;
    const isDrugDealer = incorrectQuestions.length === 0 ? true : false;

    await insertOneUser(values.username, isDrugDealer);

    console.log(values.question3);
  }

  return (
    <div className="relative h-screen w-full">
      <Image
        src={background_quiz}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="question1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question 1</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="answer" {...field} />
                  </FormControl>
                  <FormDescription>
                    What is the amount of marijuana you can carry before death
                    penalty? (in grams)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="question2"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Question 2</FormLabel>
                  <FormDescription>
                    True or False: Alcohol is considered a depressant.
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="True" />
                        </FormControl>
                        <FormLabel className="font-normal">True</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="False" />
                        </FormControl>
                        <FormLabel className="font-normal">False</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="question3"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Question 3</FormLabel>
                  <FormDescription>
                    What is the primary risk associated with injecting drugs?
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="addiction" />
                        </FormControl>
                        <FormLabel className="font-normal">Addiction</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="overdose" />
                        </FormControl>
                        <FormLabel className="font-normal">Overdose</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="infection" />
                        </FormControl>
                        <FormLabel className="font-normal">Infection</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all of the above" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All of the above
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
