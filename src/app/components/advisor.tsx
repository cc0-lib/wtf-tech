import React from "react";

export default function Advisor() {
  return (
    <div className="hidden h-screen flex-col items-center justify-center bg-secondary md:flex">
      <h1 className="text-4xl text-primary underline decoration-primary decoration-2 underline-offset-2 xl:text-5xl 2xl:text-6xl">
        Advisor
      </h1>

      <div className="mt-20 flex w-full justify-center gap-4 text-secondary lg:gap-8 xl:gap-10">
        <div className="flex h-[21.875rem] w-[13.75rem] flex-col items-start justify-end rounded-xl bg-primary p-8 lg:h-[28.125rem] lg:w-[17.5rem] xl:h-[38.25rem] xl:w-[27.75rem] xl:p-12">
          <div className="flex h-3/5 w-full flex-col justify-between">
            <div className="text-3xl xl:text-5xl">
              <div>KARBON</div>
              <div>KORE</div>
            </div>
            <div className="text-sm xl:mt-20 xl:text-xl">
              <div>Team</div>
              <div>Karbon Kore</div>
            </div>
          </div>
        </div>
        <div className="flex h-[21.875rem] w-[13.75rem] flex-col items-start justify-end rounded-xl border border-primary p-8 text-primary lg:h-[28.125rem] lg:w-[17.5rem] xl:h-[38.25rem] xl:w-[27.75rem] xl:p-12">
          <div className="flex h-3/5 w-full flex-col justify-between">
            <div className="text-3xl xl:text-5xl">
              <div>TEKONG</div>
            </div>

            <div className="text-sm xl:mt-20 xl:text-xl">
              <div>CEO</div>
              <div>AMANZ</div>
            </div>
          </div>
        </div>
        <div className="flex h-[21.875rem] w-[13.75rem] flex-col items-start justify-end rounded-xl bg-primary p-8 lg:h-[28.125rem] lg:w-[17.5rem] xl:h-[38.25rem] xl:w-[27.75rem] xl:p-12">
          <div className="flex h-3/5 w-full flex-col justify-between">
            <div className="text-3xl xl:text-5xl">
              <div>HISHAM</div>
            </div>

            <div className="text-sm xl:mt-20 xl:text-xl">
              <div>SR. Product Manager</div>
              <div>XSolla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
