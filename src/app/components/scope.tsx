import React from "react";

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
    <div className="flex h-[700px] snap-start items-center justify-start gap-[200px] py-20 text-4xl uppercase text-secondary">
      <div className="flex w-[800px] flex-col items-start justify-center pl-36">
        <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.5628 2.56285C50.7462 -0.253781 46.1796 -0.253781 43.3629 2.56285L30.613 15.3127C27.7964 18.1294 27.7964 22.696 30.613 25.5127L43.3629 38.2626C46.1796 41.0792 50.7462 41.0792 53.5628 38.2626L66.3127 25.5127C69.1294 22.696 69.1294 18.1294 66.3127 15.3127L53.5628 2.56285ZM48.4629 7.66281L61.2128 20.4127L48.4629 33.1626L35.713 20.4127L48.4629 7.66281ZM81.6129 30.6129C78.7963 27.7963 74.2296 27.7963 71.413 30.6129L58.6631 43.3628C55.8465 46.1794 55.8465 50.7461 58.6631 53.5627L71.413 66.3126C74.2296 69.1292 78.7963 69.1292 81.6129 66.3126L94.3628 53.5627C97.1794 50.7461 97.1794 46.1794 94.3628 43.3628L81.6129 30.6129ZM76.513 35.7129L89.2628 48.4628L76.513 61.2127L63.7631 48.4628L76.513 35.7129ZM43.3629 58.6636C46.1796 55.847 50.7462 55.847 53.5628 58.6636L66.3127 71.4135C69.1294 74.2301 69.1294 78.7968 66.3127 81.6134L53.5629 94.3633C50.7462 97.18 46.1796 97.18 43.3629 94.3633L30.613 81.6134C27.7964 78.7968 27.7964 74.2301 30.613 71.4135L43.3629 58.6636ZM61.2128 76.5135L48.4629 63.7636L35.713 76.5135L48.4629 89.2634L61.2128 76.5135ZM25.5128 30.6129C22.6962 27.7963 18.1295 27.7963 15.3129 30.6129L2.56297 43.3628C-0.253654 46.1794 -0.253657 50.7461 2.56297 53.5627L15.3129 66.3126C18.1295 69.1292 22.6962 69.1292 25.5128 66.3126L38.2627 53.5627C41.0793 50.7461 41.0793 46.1794 38.2627 43.3628L25.5128 30.6129ZM20.4128 35.7129L33.1627 48.4628L20.4128 61.2127L7.66293 48.4628L20.4128 35.7129Z"
            fill="#E2E2E2"
          />
        </svg>

        <div className="mt-24">
          <div>CHOOSE</div>
          <div>YOUR</div>
          <div>SCOPE</div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
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
