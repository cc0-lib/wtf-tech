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
      <div className="hidden h-[50vh] items-center justify-center gap-80 px-40 py-28 text-4xl font-light text-secondary md:flex">
        <div className="flex h-full flex-col items-start justify-between">
          <ScopeShape />
          <div className="underline decoration-2 underline-offset-2">
            <div>CHOOSE</div>
            <div>YOUR</div>
            <div>SCOPE</div>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          {scopes.map((item, index) => (
            <div key={index} className="inline-flex gap-x-4">
              <span>[ ]</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-[50vh] flex-col items-center justify-center px-10 text-secondary md:hidden">
        <div className="inline-flex w-full items-center justify-start gap-2">
          <ScopeShape className="mt-2 inline-flex size-10 self-start" />
          <div className="underline underline-offset-2">
            <div>CHOOSE</div>
            <div>YOUR</div>
            <div>SCOPE</div>
          </div>
        </div>
        <div className="mt-4 grid w-full text-sm font-light">
          {scopes.map((item, index) => (
            <div key={index} className="flex">
              <div>[ ]</div>
              <div className="ml-4 inline-flex items-start">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
