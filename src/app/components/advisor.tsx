import React from "react";

export default function Advisor() {
  return (
    <div className="flex h-screen snap-start flex-col items-center justify-center bg-secondary uppercase">
      <h1 className="text-6xl text-primary underline decoration-primary decoration-2 underline-offset-2">Advisor</h1>

      <div className="mt-20 flex gap-10 text-secondary">
        <div className="flex h-[612px] w-[444px] flex-col items-start justify-end rounded-xl bg-primary p-12">
          <div className="h-44 text-5xl">
            <div>KARBON</div>
            <div>KORE</div>
          </div>
          <div className="mt-20 text-xl">
            <div>Team</div>
            <div>Karbon Kore</div>
          </div>
        </div>
        <div className="flex h-[612px] w-[444px] flex-col items-start justify-end rounded-xl border border-primary p-12 text-primary">
          <div className="h-44 text-5xl">
            <div>TEKONG</div>
          </div>

          <div className="mt-20 text-xl">
            <div>CEO</div>
            <div>AMANZ</div>
          </div>
        </div>
        <div className="flex h-[612px] w-[444px] flex-col items-start justify-end rounded-xl bg-primary p-12 text-3xl">
          <div className="h-44 text-5xl">
            <div>HISHAM</div>
          </div>

          <div className="mt-20 text-xl">
            <div>SR. Product Manager</div>
            <div>XSolla</div>
          </div>
        </div>
      </div>
    </div>
  );
}
