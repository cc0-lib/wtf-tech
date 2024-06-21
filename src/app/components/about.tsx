import React from "react";
import { HorizontalLineArt } from "./icons";

export default function About() {
  return (
    <div className="flex h-screen flex-col items-center justify-center md:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-between border text-secondary sm:w-1/2 sm:px-14 sm:py-10 md:px-24 md:py-32 md:pl-32 md:pr-44">
        <p className="text-justify text-2xl font-light sm:text-5xl sm:leading-[4rem] md:pr-20 md:text-6xl md:leading-[5rem]">
          A virtual build - hack where we fund top 5 projects rm2000 each
        </p>
        <div className="flex flex-col items-center justify-center rounded-full border px-3 sm:border-2 sm:px-7 sm:py-2">
          <p className="text-xs sm:text-4xl">FUNDING</p>
        </div>

        <div className="flex w-full max-w-xl items-end justify-start pb-1 pt-2 text-xs font-light sm:text-2xl">
          * REGISTRATION LIMITED TO 10 PROJECTS
        </div>

        <div className="text-xs sm:text-2xl">
          <p>PUBLIC GOODS</p>
          <div className="flex items-center gap-2">
            TECH <span className="inline-flex h-[2px] w-full bg-secondary sm:h-1"></span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="relative flex h-full w-full items-center justify-between bg-secondary text-primary sm:w-1/2 md:px-32">
        <div className="absolute right-5 top-36 flex justify-end">
          <HorizontalLineArt className="w-40 sm:w-80" />
        </div>
        <div className="flex h-full flex-col justify-between p-10 pb-32 pt-72">
          <p className="text-justify text-2xl font-light sm:text-6xl sm:leading-[5rem]">
            Project must be open-source + provide solutions as a public good initiative.
          </p>
          <div className="flex w-full justify-start">
            <div className="rounded-full border-2 border-primary px-2 text-xl sm:px-7 sm:py-2 md:text-2xl lg:text-3xl xl:text-4xl">
              CRITERIA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
