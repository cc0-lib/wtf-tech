import React from "react";
import { HorizontalLineArt } from "./icons";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center md:h-screen lg:flex-row">
      <div className="flex h-[50vh] w-full flex-col items-start justify-center gap-6 px-16 py-12 text-secondary sm:px-24 sm:py-10 md:h-full md:p-0 md:px-20 lg:w-1/2 lg:px-20 lg:py-32 xl:gap-10 xl:px-24 xl:py-32 2xl:px-32">
        <div className="text-justify text-2xl font-light leading-8 sm:text-3xl sm:leading-[2.5rem] md:leading-[3rem] lg:text-4xl lg:leading-[3rem] xl:text-5xl xl:leading-[3.5rem]">
          A virtual build-hack where we fund top 5 projects Rm2000 each
        </div>
        <div className="flex flex-col items-center justify-center rounded-full border px-3 py-1 sm:border-2 sm:px-5 md:px-7 md:py-2">
          <div className="text-xs sm:text-2xl lg:text-2xl xl:text-3xl">FUNDING</div>
        </div>

        <div className="flex w-full max-w-xl items-end justify-start pb-1 pt-2 text-xs font-light sm:text-sm lg:text-base xl:text-xl">
          * REGISTRATION LIMITED TO 10 PROJECTS
        </div>

        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:mt-20 xl:text-2xl">
          <p>PUBLIC GOODS</p>
          <div className="flex items-center gap-2">
            TECH <span className="inline-flex h-[2px] w-full bg-secondary sm:h-[2px]"></span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex h-[50vh] w-full flex-col items-center justify-between bg-secondary px-16 py-12 text-primary sm:px-24 md:h-full md:px-16 md:py-20 lg:w-1/2 lg:justify-center lg:px-20 lg:py-32 xl:px-24 xl:py-32 2xl:px-32">
        <div className="flex w-full justify-end">
          <HorizontalLineArt className="w-40 sm:w-60 md:w-80" />
        </div>
        <div className="flex flex-col justify-between lg:mt-24 xl:mt-32">
          <div className="pb-20 text-justify text-2xl font-light sm:text-3xl sm:leading-[2.5rem] lg:text-4xl xl:text-5xl xl:leading-[3.5rem]">
            Project must be open-source + provide solutions as a public good initiative.
          </div>
          <div className="mt-5 flex w-full justify-start lg:mt-10 xl:mt-20">
            <div className="rounded-full border-2 border-primary px-3 py-1 text-xs sm:text-2xl lg:text-2xl xl:text-3xl">
              CRITERIA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
