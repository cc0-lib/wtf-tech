import Image from "next/image";
import React, { Fragment } from "react";

type FlowStep = {
  title: string;
  date: string;
};
const flowSteps: FlowStep[] = [
  {
    title: "Briefing",
    date: "Start of week 1",
  },
  {
    title: "Registration",
    date: "Start of week 1 - End of week 1",
  },
  {
    title: "Submission",
    date: "Start of week 2 - End of week 3",
  },
  {
    title: "Pitching",
    date: "Start of week 4",
  },
  {
    title: "Winner Announcment",
    date: "Mid week 4",
  },
  {
    title: "Funding",
    date: "End of week 4",
  },
  {
    title: "Progress Tracking",
    date: "Every month for 3 months",
  },
];

export default function Flow() {
  return (
    <Fragment>
      <div className="hidden flex-col items-center text-secondary md:flex">
        <div className="mt-5 flex w-full justify-end lg:mt-10">
          <div className="mr-10 inline-flex flex-col gap-2 py-2">
            <div className="rounded-sm bg-secondary px-3 py-1 text-sm text-primary">Flow</div>
            <div className="rounded-sm border border-secondary px-3 py-1 text-sm">Prcs</div>
          </div>
        </div>
        <h1 className="text-7xl underline decoration-4 underline-offset-8 lg:text-9xl">Flow</h1>

        <div className="relative -top-10 lg:-top-14">
          <div className="size-full px-10 lg:px-36">
            <Image src="./flow-diagram.svg" alt="" width={400} height={400} className="size-full object-contain" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex min-h-screen flex-col items-center py-16 text-secondary md:hidden">
        <div className="inline-flex w-full justify-end px-10">
          <h1 className="text-4xl underline decoration-2 underline-offset-4">Flow</h1>
        </div>

        <div className="flex flex-1 px-6">
          <Image src="./flow-diagram-mobile.svg" alt="" width={700} height={1000} className="object-contain" />
        </div>
      </div>
    </Fragment>
  );
}
