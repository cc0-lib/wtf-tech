import React from "react";
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
    <div className="flex h-[50vh] snap-start items-center justify-center gap-80 px-40 py-28 text-4xl font-light uppercase text-secondary">
      <div className="flex h-full flex-col items-start justify-between">
        <div className="underline decoration-2 underline-offset-2">
          <ScopeShape />
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
  );
}
