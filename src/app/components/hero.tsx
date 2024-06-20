import Image from "next/image";
import React, { Fragment } from "react";
import { CC0Lib, DevTalk, KarbonKore, NounsBeyondScreen } from "./icons";
import { Noggles } from "./icons";
import { BRIEFING_URL, STATUS, STATUS_TEXT } from "../lib/config";

export default function Hero() {
  return (
    <div className="flex h-dvh w-full snap-start flex-col items-center justify-between px-6 pb-6 pt-8 uppercase md:h-screen md:min-h-screen md:p-14">
      {/* Header */}
      <div className="b flex w-full items-center justify-between text-secondary">
        <div className="flex items-center text-sm font-normal md:text-3xl">
          [WTF TECH S01]<span className="ml-2 text-xs md:ml-10 md:text-xl">By Karbon Kore</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-full border border-secondary px-2 md:gap-4 md:border-2 md:px-6 md:py-2">
          <span className="size-1 rounded-full bg-secondary md:size-3"></span>
          <span className="inline-flex items-center justify-center text-xs md:text-2xl md:font-normal">{STATUS}</span>
        </div>
      </div>

      {/* Main */}
      <div className="relative mt-14 flex h-80 flex-col items-center justify-center md:mt-0 md:h-[600px] md:w-[1200px]">
        <div className="hidden-on-mobile absolute left-0 top-28 rotate-[-4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary md:block">
          BUILD
        </div>
        <div className="hidden-on-mobile absolute left-0 top-96 flex size-14 items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>
        <div className="hidden-on-mobile absolute left-[36rem] top-[14.5rem] rotate-[-4.83deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          PUBLIC GOODS
        </div>
        <div className="hidden-on-mobile absolute right-24 top-0 flex size-14 rotate-[20deg] items-center justify-center rounded-full bg-white/30 text-xl text-primary">
          <Image src="./bracket.svg" height={30} width={30} alt="Bracket" />
        </div>
        <div className="hidden-on-mobile absolute right-24 top-[28rem] rotate-[7.05deg] rounded-[4px] bg-white/30 px-4 py-2 text-xl text-primary backdrop-blur-lg">
          HACK
        </div>
        <Image
          className="size-[20rem] sm:size-[50rem]"
          src="/title-s01.svg"
          alt="WTF-TECH S01 Logo"
          width={1000}
          height={1000}
          priority
        />
        <a
          href={BRIEFING_URL}
          target="_blank"
          className="mt-8 rounded-full bg-white px-5 py-1 text-base text-primary md:mt-14 md:px-8 md:py-2 md:text-3xl">
          <h1>{STATUS_TEXT}</h1>
        </a>
      </div>

      <section className="hidden-on-mobile flex w-full flex-col gap-4 font-light">
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
                  <div className="size-5 rounded-full bg-semi-grey"></div>
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

      <section className="w-full items-center justify-between text-[8px] text-secondary md:hidden">
        <div className="inline-flex w-full justify-end">&lt;/wtf&gt;</div>
        <div className="mt-3 flex w-full items-center justify-between">
          <div className="flex flex-col items-start">
            <div>Supported By</div>
            <div className="flex items-center gap-2">
              <KarbonKore className="size-4" />
              <NounsBeyondScreen className="size-4" />
              <CC0Lib className="size-5" />
              <DevTalk className="w-14" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>Funded By</div>
            <Noggles className="size-5" />
          </div>
          <div className="flex flex-col items-end">
            <div className="flex flex-col items-end">
              <p>tech.karbon</p>
              <p>.wtf/S01</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
