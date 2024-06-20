import Image from "next/image";
import React from "react";

export default function FundAdvisorsMobile() {
  return (
    <div className="flex flex-col bg-secondary text-primary md:hidden">
      <div className="w-full">
        <h1 className="text-end text-2xl underline underline-offset-2">Funding</h1>
        <div className="flex w-full items-center pl-10">
          <Image src="./fund-art.svg" alt="" className="size-48" width={1000} height={1000} draggable={false} />
        </div>

        <div className="flex w-full">
          <div className="relative right-0">
            <div>Top 5</div>
            <ul>
              <li>RM 2000 Each</li>
              <li>Certificate</li>
              <li>Goodies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex h-screen w-full border">
        <div className="flex h-full w-full">
          <div className="relative flex h-[300px] w-[13.5rem] flex-col items-start justify-end rounded-r-xl bg-primary p-3 text-secondary">
            <div className="text-xl">
              <div>KARBON KORE</div>
            </div>
            <div className="mt-4 text-xs">
              <div>Team</div>
              <div>Karbon Kore</div>
            </div>
          </div>

          <div className="relative z-20 flex h-[300px] w-[13.5rem] flex-col items-start justify-end rounded-xl border border-primary bg-secondary p-12 text-primary">
            <div className="text-xl">
              <div>TEKONG</div>
            </div>

            <div className="mt-4 text-xs">
              <div>CEO</div>
              <div>AMANZ</div>
            </div>
          </div>

          <div className="relative bottom-0 flex h-[300px] w-[13.5rem] flex-col items-start justify-end rounded-xl bg-primary p-3 pl-3 text-secondary">
            <div className="text-xl">
              <div>HISHAM</div>
            </div>
            <div className="mt-4 text-xs">
              <div>SR. Product Manager</div>
              <div>XSolla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
