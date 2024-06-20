import React, { SVGProps } from "react";
import Image from "next/image";
import { Noggles } from "./icons";

export default function Fund() {
  return (
    <div className="hidden h-[80vh] flex-col items-center justify-center bg-secondary px-16 pb-16 pt-24 text-5xl font-light text-primary sm:flex">
      <div className="flex h-full justify-center">
        <div className="pl-16 pt-20">
          <div>TOP 5</div>
          <div className="mt-4 pl-10">
            <li>RM 2000 EACH</li>
            <li>CERTIFIED</li>
            <li>GOODIES</li>
          </div>
        </div>
        <div className="flex size-[500px] h-full items-center justify-center">
          <Image src="./fund-art.svg" alt="" className="size-full" width={1000} height={1000} draggable={false} />
        </div>
        <div className="flex h-full w-[400px] flex-col justify-between">
          <div className="inline-flex self-end font-normal underline">FUNDING</div>
          <div className="pl-20">
            <div>Remaining</div>
            <li>Certified</li>
            <li>Goodies</li>
          </div>
        </div>
      </div>

      <div className="relative left-20 mb-4 flex items-center justify-center self-start">
        <div className="text-primar inline-flex h-14 items-center gap-4 rounded-full border-2 bg-secondary px-8 text-3xl">
          Funded By
          <span>
            <Noggles className="size-16" />
          </span>
        </div>
      </div>
    </div>
  );
}
