import React, { Fragment } from "react";

export default function About() {
  return (
    <div className="flex h-dvh min-h-screen w-full snap-start grid-rows-2 flex-col md:grid md:grid-cols-2 md:items-center md:justify-center">
      <div className="flex h-1/2 flex-col items-start justify-between space-y-5 p-10 text-secondary md:h-full lg:pb-14 lg:pl-14 lg:pr-20 lg:pt-20 xl:pb-24 xl:pl-40 xl:pr-60 xl:pt-40">
        <p className="text-justify text-3xl font-light uppercase md:text-6xl md:leading-[5rem]">
          A virtual build - hack where we fund top 5 projects rm2000 each
        </p>
        <div className="flex flex-col items-center justify-center rounded-full border-2 px-2 md:px-7 md:py-2">
          <p className="text-sm md:text-4xl">FUNDING</p>
        </div>

        <div className="flex w-[34rem] items-end justify-start pb-1 pt-2 text-xs font-light md:text-2xl">
          * REGISTRATION LIMITED TO 10 PROJECTS
        </div>

        <div className="text-xs md:text-2xl">
          <p>PUBLIC GOODS</p>
          <div className="flex items-center gap-2">
            TECH <span className="inline-flex h-1 w-full bg-secondary"></span>
          </div>
        </div>
      </div>

      <div className="flex h-1/2 flex-col items-start justify-between bg-secondary p-10 text-primary md:h-full lg:px-20 lg:pb-16 lg:pt-20 xl:px-40 xl:pb-24 xl:pt-40">
        <div className="self-end">
          <svg width="330" height="5" viewBox="0 0 330 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="27" height="5" fill="#001EBE" />
            <rect x="167" width="84" height="5" fill="#001EBE" />
            <rect x="258" width="48" height="5" fill="#001EBE" />
            <rect x="57" width="5" height="5" fill="#001EBE" />
            <rect x="48" width="5" height="5" fill="#001EBE" />
            <rect x="39" width="5" height="5" fill="#001EBE" />
            <rect x="30" width="5" height="5" fill="#001EBE" />
            <rect x="136" width="28" height="5" fill="#001EBE" />
            <rect x="66" width="46" height="5" fill="#001EBE" />
            <rect x="116" width="17" height="5" fill="#001EBE" />
            <rect x="311" width="7" height="5" fill="#001EBE" />
            <rect x="323" width="7" height="5" fill="#001EBE" />
          </svg>
        </div>
        <p className="text-justify text-3xl font-light uppercase md:text-6xl md:leading-[5rem]">
          Project must be open-source + provide solutions as a public good initiative.
        </p>
        <div className="flex flex-col items-center justify-center rounded-full border-2 border-primary px-2 md:px-7 md:py-2">
          <p className="text-base md:text-4xl">CRITERIA</p>
        </div>
      </div>
    </div>
  );
}
