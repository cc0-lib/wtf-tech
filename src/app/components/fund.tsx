import React, { SVGProps } from "react";
import Image from "next/image";
import { FundArt, Nouns } from "./icons";

export default function Fund() {
  return (
    <div className="hidden h-[50vh] flex-col items-center justify-center bg-secondary px-20 pb-16 pt-24 font-light text-primary md:flex xl:h-[80vh] xl:px-32">
      <div className="inline-flex self-end text-2xl font-normal underline underline-offset-2 lg:text-4xl 2xl:text-5xl">
        FUNDING
      </div>

      <div className="relative flex size-full items-center justify-center">
        <div className="absolute left-0 top-0 text-2xl lg:text-3xl 2xl:left-20 2xl:text-5xl">
          <div>TOP 5</div>
          <ul className="list-inside list-disc xl:mt-4 xl:pl-10">
            <li>RM 2000 EACH</li>
            <li>CERTIFIED</li>
            <li>GOODIES</li>
          </ul>
        </div>

        <FundArt className="size-60 xl:size-[400px] 2xl:size-[500px]" />

        <div className="absolute bottom-0 right-0 flex flex-col justify-between text-2xl lg:text-3xl 2xl:right-20 2xl:text-5xl">
          <div className="pl-20">
            <div>Remaining</div>
            <ul className="list-inside list-disc">
              <li>Certified</li>
              <li>Goodies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mb-4 flex items-center justify-center self-start">
        <div className="inline-flex h-8 items-center gap-4 rounded-full border-2 border-primary bg-secondary px-6 text-xl text-primary lg:text-3xl xl:h-14 xl:px-8">
          Funded By
          <span>
            <Nouns className="size-10 xl:size-16" />
          </span>
        </div>
      </div>
    </div>
  );
}
