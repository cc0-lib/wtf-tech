import Image from "next/image";
import React from "react";

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
    <div className="flex h-screen snap-center flex-col items-center uppercase text-secondary">
      <div className="mt-10 flex w-full justify-end">
        <div className="mr-10 inline-flex flex-col gap-2 py-2">
          <div className="rounded-sm bg-secondary px-3 py-1 text-sm text-primary">Flow</div>
          <div className="rounded-sm border border-secondary px-3 py-1 text-sm">Prcs</div>
        </div>
      </div>
      <h1 className="text-9xl underline decoration-4 underline-offset-8">Flow</h1>

      <div className="relative -top-14">
        <div className="size-full px-36">
          <Image src="./flow-diagram.svg" alt="" width={400} height={400} className="size-full object-contain" />
        </div>
      </div>
    </div>
  );
}
