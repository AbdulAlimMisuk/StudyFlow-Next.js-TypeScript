import Link from "next/link";
import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/moving-border";

export default function HeroSectio() {
  return (
    <div
      className="h-auto md:h-[35rem] w-full rounded-md flex flex-col items-center
     justify-center relative overflow-hidden max-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center ">
         <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-96"
        fill="white"
      />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of class
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          {" "}
          Learn, grow, and achieve excellence with our structured courses and
          expert guidance. Turn your learning into mastery — anytime, anywhere.
        </p>
      </div>
      <div className="mt-4">

        <Link href={"/courser"}>
        <Button  borderRadius="1.75rem"
        
        >
          Explore Courses
        </Button>
        </Link>
      </div>
    </div>
  );
}
