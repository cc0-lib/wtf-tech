import Image from "next/image";
import React from "react";
import Ticker from "./ticker";
import { FundArt } from "./icons";

export default function FundAdvisorsMobile() {
  return (
    <div className="flex flex-col bg-secondary text-primary md:hidden">
      <div className="relative h-[300px] w-full">
        <h1 className="mt-4 pr-10 text-end text-2xl underline underline-offset-2">Funding</h1>
        <div className="flex w-full justify-start">
          <FundArt className="ml-4 inline-flex size-44" />
        </div>

        <div className="relative">
          <div className="absolute -top-6 right-0 flex flex-col justify-end px-10">
            <div className="flex flex-col">
              <div className="">Top 5</div>
              <ul className="list-inside list-disc">
                <li>RM 2000 Each</li>
                <li>Certificate</li>
                <li>Goodies</li>
              </ul>
            </div>
            <div className="mt-2 flex flex-col">
              <div className="">Remaining</div>
              <ul className="list-inside list-disc">
                <li>Certificate</li>
                <li>Goodies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="debug relative flex h-[30rem] w-full">
        <div className="absolute -left-10 flex h-[16.875rem] w-[11.25rem] flex-col items-start justify-end rounded-r-lg bg-primary pb-3 pl-2 text-secondary sm:-left-5 sm:h-[19rem] sm:w-[13rem]">
          <div className="relative left-5">
            <div className="text-lg sm:text-xl">
              <div>KARBON</div>
              <div>KORE</div>
            </div>
            <div className="mt-4 text-xxs sm:text-xs">
              <div>Team</div>
              <div>Karbon Kore</div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[270px] w-[180px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-end rounded-lg border border-primary bg-secondary p-4 text-primary sm:h-[19rem] sm:w-[13rem]">
          <div className="text-lg sm:text-xl">
            <div>TEKONG</div>
          </div>

          <div className="mt-4 text-xxs sm:text-xs">
            <div>CEO</div>
            <div>AMANZ</div>
          </div>
        </div>

        <div className="absolute -right-5 bottom-0 flex h-[270px] w-[180px] flex-col items-start justify-end rounded-l-lg bg-primary p-3 pl-3 text-secondary sm:-right-5 sm:h-[19rem] sm:w-[13rem]">
          <div className="text-lg sm:text-xl">
            <div>HISHAM</div>
          </div>
          <div className="mt-4 text-xxs sm:text-xs">
            <div className="w-28">SR. Product Manager</div>
            <div>XSolla</div>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 text-2xl text-primary underline">Advisor</div>
      </div>
    </div>
  );
}
