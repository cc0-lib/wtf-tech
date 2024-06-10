import Image from "next/image";
import React, { Fragment } from "react";

export default function Hero() {
  return (
    <div className="flex min-h-screen w-full snap-start flex-col items-center justify-between px-14 py-14">
      {/* Header */}
      <div className="flex w-full items-center justify-between text-2xl font-medium text-secondary">
        <h1 className="font-chakra text-3xl font-normal tracking-wide text-white">
          [WTF TECH S01] <span className="ml-10 font-supply text-xl uppercase">By Karbon Kore</span>
        </h1>
        <div className="flex items-center justify-center gap-4 rounded-full border-2 border-secondary px-4 py-3">
          <span className="mb-[1px] size-3 rounded-full bg-secondary"></span>
          <span className="inline-flex items-center justify-center leading-none">BRIEFING</span>
        </div>
      </div>

      {/* Main */}
      <div className="relative flex h-[600px] w-[1200px] flex-col items-center justify-center">
        <div className="absolute left-0 top-[7rem] -rotate-[4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary">
          BUILD
        </div>
        <div className="absolute left-0 top-[24rem] flex size-14 items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>

        <div className="absolute left-[36rem] top-[14.5rem] -rotate-[4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          PUBLIC GOODS
        </div>

        <div className="absolute right-[6rem] top-0 flex size-14 rotate-[20deg] items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>

        <div className="absolute right-[6rem] top-[28rem] rotate-[7.05deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          HACK
        </div>

        <Image src="/title.svg" alt="WTF-TECH Logo" width={800} height={400} priority />

        <div className="mt-14 rounded-full bg-white px-6 py-2 text-3xl font-medium leading-none text-primary">
          <h1 className="mt-1">LISTEN TO BRIEFING</h1>
        </div>
      </div>

      <section className="grid w-full grid-cols-3 font-normal text-secondary">
        {/* Right */}
        <div className="mr-32 flex justify-between">
          <div className="flex flex-col">
            <h3 className="tracking-wide">SUPPORTED BY</h3>
            <div className="mt-2 flex justify-start gap-10">
              <Image src="/nouns-beyond-screen.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
              <Image src="/cc0-lib.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
              <Image src="/devtalk.svg" alt="Nouns Beyond Screen Logo" width={130} height={150} />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="tracking-wide">FUNDED BY</h3>
            <div className="flex flex-1 gap-10">
              <Image src="/noggles.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center">
          <div>MORE INFO BELOW</div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div> &lt;/WTF&gt; </div>
          <div className="flex w-full items-center justify-end gap-x-4">
            <div className="flex gap-x-2">
              <div className="size-5 rounded-full bg-secondary"></div>
              <div className="size-5 rounded-full bg-hack-semi-grey"></div>
            </div>
            <div className="tracking-wide">
              <p>WTF.KARBONKO</p>
              <p>.RE/TECH-S01</p>
            </div>
            <Image src="/karbon-kore.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
          </div>
        </div>
      </section>
    </div>
  );
}
