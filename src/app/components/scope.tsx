import React, { Fragment } from "react";
import { ScopeShape } from "./icons";

const scopes = [
  "economy & financial inclusion",
  "public health & safety",
  "education & knowledge sharing",
  "civic & governance",
  "environment & sustainability",
  "community development",
];

export default function Scope() {
  return (
    <Fragment>
      <div className="hidden h-[50vh] items-center justify-center gap-20 py-24 text-xl font-light text-secondary md:flex lg:py-20 xl:px-40 xl:py-28 xl:text-4xl 2xl:gap-80">
        <div className="flex h-full flex-col items-start justify-center gap-2 xl:gap-8">
          <ScopeShape className="size-20 lg:size-28 xl:size-20" />
          <div className="text-2xl underline decoration-2 underline-offset-4">
            <div>CHOOSE</div>
            <div>YOUR</div>
            <div>SCOPE</div>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center text-2xl lg:text-3xl xl:text-4xl">
          {scopes.map((item, index) => (
            <div key={index} className="inline-flex gap-x-4">
              <span>[ ]</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-[50vh] flex-col items-center justify-center px-10 text-secondary sm:my-4 sm:px-20 md:hidden">
        <div className="inline-flex w-full items-center justify-start gap-2 sm:gap-4">
          <ScopeShape className="mt-2 inline-flex size-10 self-start sm:size-20" />
          <div className="underline underline-offset-4 sm:text-2xl">
            <div>CHOOSE</div>
            <div>YOUR</div>
            <div>SCOPE</div>
          </div>
        </div>
        <div className="mt-4 grid w-full text-sm font-light sm:mt-8 sm:text-xl">
          {scopes.map((item, index) => (
            <div key={index} className="flex">
              <div>[ ]</div>
              <div className="ml-4 inline-flex items-start sm:ml-8">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
