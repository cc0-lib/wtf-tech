import Image from "next/image";
import React, { Fragment } from "react";

export default function Hero() {
  return (
    <div className="flex min-h-screen w-full snap-start flex-col items-center justify-between p-14 uppercase">
      {/* Header */}
      <div className="flex w-full items-center justify-between text-2xl text-secondary">
        <h1 className="inline-flex items-center text-3xl font-normal">
          [WTF TECH S01] <span className="ml-10 text-xl">By Karbon Kore</span>
        </h1>
        <div className="flex items-center justify-center gap-4 rounded-full border-2 border-secondary px-6 py-2">
          <span className="size-3 rounded-full bg-secondary"></span>
          <span className="inline-flex items-center justify-center font-normal">BRIEFING</span>
        </div>
      </div>

      {/* Main */}
      <div className="relative flex h-[600px] w-[1200px] flex-col items-center justify-center">
        <div className="absolute left-0 top-28 rotate-[-4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary">
          BUILD
        </div>
        <div className="absolute left-0 top-96 flex size-14 items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>

        <div className="absolute left-[36rem] top-[14.5rem] rotate-[-4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          PUBLIC GOODS
        </div>

        <div className="absolute right-24 top-0 flex size-14 rotate-[20deg] items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>

        <div className="absolute right-24 top-[28rem] rotate-[7.05deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          HACK
        </div>

        <Image src="/title.svg" alt="WTF-TECH Logo" width={800} height={400} priority />

        <div className="mt-14 rounded-full bg-white px-8 py-2 text-3xl text-primary">
          <h1>LISTEN TO BRIEFING</h1>
        </div>
      </div>

      <section className="flex w-full flex-col gap-4 font-light">
        <div className="grid w-full grid-cols-3 text-secondary">
          <div className="flex justify-between">
            <div>SUPPORTED BY</div>
            <div className="mr-24">FUNDED BY</div>
          </div>
          <div className="col-span-2 flex items-center justify-end">&lt;/wtf&gt;</div>
        </div>

        <div className="grid w-full grid-cols-3 text-secondary">
          <div className="flex items-center justify-between gap-10">
            <div className="flex gap-4">
              <Image src="/nouns-beyond-screen.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
              <Image src="/cc0-lib.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
              <Image src="/devtalk.svg" alt="Nouns Beyond Screen Logo" width={130} height={150} />
            </div>
            <div className="mr-24 inline-flex justify-center">
              <Image src="/noggles.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center">MORE INFO BELOW</div>
          <h3 className="inline-flex justify-end">
            <div className="flex flex-col items-end justify-between">
              <div className="flex w-full items-center justify-end gap-x-6">
                <div className="flex gap-x-2">
                  <div className="size-5 rounded-full bg-secondary"></div>
                  <div className="bg-semi-grey size-5 rounded-full"></div>
                </div>
                <div className="inline-flex flex-col items-start justify-center">
                  <p>tech.karbon</p>
                  <p>.wtf/S01</p>
                </div>
                <Image src="/karbon-kore.svg" alt="Nouns Beyond Screen Logo" width={50} height={50} />
              </div>
            </div>
          </h3>
        </div>
      </section>
    </div>
  );
}
