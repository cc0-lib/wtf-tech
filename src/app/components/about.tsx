import React from "react";

export default function About() {
  return (
    <div className="grid min-h-screen w-full snap-start grid-cols-2 items-center justify-center">
      <div className="flex h-full flex-col items-start justify-between pb-24 pl-32 pr-96 pt-40 text-secondary">
        <p className="text-justify text-6xl font-normal uppercase leading-[5rem]">
          a virtual build-hack where we fund top 5 projects rm2000 each
        </p>
        <div className="flex flex-col items-center justify-center rounded-full border-[3px] px-7 pb-1 pt-3">
          <p className="text-4xl">FUNDING</p>
        </div>

        <div className="inline-flex items-end justify-end pb-1 pt-2 text-2xl tracking-wide">
          <span className="mr-1 inline-flex items-end justify-end pt-1 leading-none">*</span>REGISTRATION LIMITED TO 10
          PROJECTS
        </div>

        <div className="text-2xl">
          <p>PUBLIC GOODS</p>
          <div className="flex items-center gap-2">
            TECH <span className="mb-1 inline-flex h-1 w-full bg-secondary"></span>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col items-start justify-between bg-secondary px-40 pb-24 pt-40 text-primary">
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
        <p className="text-justify text-6xl font-normal uppercase leading-[5rem]">
          Project must be open-source + provide solutions as a public good initiative.
        </p>
        <div className="flex flex-col items-center justify-center rounded-full border-[3px] border-primary px-7 pb-1 pt-3">
          <p className="text-4xl">CRITERIA</p>
        </div>
      </div>
    </div>
  );
}
