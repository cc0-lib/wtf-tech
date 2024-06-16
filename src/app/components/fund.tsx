import React, { SVGProps } from "react";
import Image from "next/image";

export default function Fund() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center bg-secondary px-16 pb-16 pt-24 text-5xl font-light uppercase text-primary">
      <div className="flex h-full justify-center">
        <div className="pl-16 pt-20">
          <div>TOP 5</div>
          <div className="mt-4 pl-10">
            <li>RM 2000 EACH</li>
            <li>CERTIFIED</li>
            <li>GOODIES</li>
          </div>
        </div>
        <div className="flex size-[500px] h-full items-center justify-center">
          <Image src="./fund-art.svg" alt="" className="size-full" width={1000} height={1000} draggable={false} />
        </div>
        <div className="flex h-full w-[400px] flex-col justify-between">
          <div className="inline-flex self-end font-normal underline">FUNDING</div>
          <div className="pl-20">
            <div>Remaining</div>
            <li>Certified</li>
            <li>Goodies</li>
          </div>
        </div>
      </div>

      <div className="relative left-20 mb-4 flex items-center justify-center self-start">
        <div className="text-primar inline-flex h-14 items-center gap-4 rounded-full border-2 bg-secondary px-8 text-3xl">
          Funded By
          <span>
            <Noggles className="size-16 text-primary" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Noggles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="262" height="98" viewBox="0 0 262 98" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_542_2952)">
        <path
          d="M163.749 0V32.6667H147.373V0H49.1257V32.6667H0V81.6667H16.3752V49H49.1257V98H147.377V49H163.752V98H262.004V0H163.752H163.749ZM65.501 81.6667V16.3333H98.2515V81.6667H65.501ZM180.124 81.6667V16.3333H212.874V81.6667H180.124Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_542_2952">
          <rect width="262" height="98" fill="" />
        </clipPath>
      </defs>
    </svg>
  );
}
