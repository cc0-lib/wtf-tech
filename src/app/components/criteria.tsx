import Image from "next/image";
import React, { Fragment } from "react";
import { cn } from "../lib/utils";

const criterias = [
  {
    name: "Great UX/UX",
    icon: "./pallete.svg",
  },
  {
    name: "Functional",
    icon: "./gear.svg",
  },
  {
    name: "Innovative",
    icon: "./bulb.svg",
    width: 28,
  },
  {
    name: "Practical",
    icon: "./pencil.svg",
  },
  {
    name: "Open Source",
    icon: "./star.svg",
  },
  {
    name: "Solving Problems",
    icon: "./magnifier.svg",
  },
];

export default function Criteria() {
  return (
    <Fragment>
      <div className="hidden flex-col justify-center bg-secondary p-20 text-primary md:flex lg:px-40 lg:pb-40 lg:pt-32">
        <h4 className="pb-10 text-center text-4xl underline decoration-primary decoration-2 underline-offset-2 lg:pb-20 lg:text-5xl">
          Criteria
        </h4>

        <div className="flex translate-x-3 items-center justify-center lg:translate-x-4 xl:translate-x-8 2xl:ml-24 2xl:px-32">
          <div className="flex w-96 flex-col items-start gap-3 2xl:gap-6">
            {criterias.slice(0, 3).map((item, index) => (
              <div key={index} className="inline-flex items-center justify-center gap-3 font-light">
                <span className="flex w-8 justify-center lg:w-10 2xl:w-14">
                  <Image src={item.icon} width={item.width ? item.width : 40} height={40} alt="pallete" />
                </span>
                <div className="text-2xl lg:text-3xl 2xl:text-4xl">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="flex w-[28rem] flex-col items-start gap-3 2xl:gap-6">
            {criterias.slice(3).map((item, index) => (
              <div key={index} className="inline-flex items-center justify-center gap-3 font-light">
                <span className="flex w-8 justify-center lg:w-10 2xl:w-14">
                  <Image src={item.icon} width={40} height={40} alt="pallete" />
                </span>
                <div className="text-2xl lg:text-3xl 2xl:text-4xl">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex h-[50vh] flex-col items-center justify-center bg-secondary px-10 text-primary md:hidden">
        <h1 className="inline-flex w-full justify-end text-xl underline underline-offset-2 sm:text-2xl">Criteria</h1>

        <div className="flex h-2/3 w-full flex-col justify-center gap-4">
          <div className="flex w-full justify-start">
            <div className="relative left-10 flex flex-col items-start font-light sm:left-20 sm:gap-1">
              {criterias.slice(0, 3).map((item, index) => (
                <div key={index} className="inline-flex items-center justify-center gap-3">
                  <span className="flex w-3 justify-center sm:size-6">
                    <Image src={item.icon} width={40} height={40} alt="pallete" />
                  </span>
                  <div className="sm:text-xl">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-end">
            <div className="relative right-10 flex flex-col items-start font-light sm:right-20 sm:gap-1">
              {criterias.slice(3).map((item, index) => (
                <div key={index} className="inline-flex items-center justify-center gap-3">
                  <span className="flex w-3 justify-center sm:size-6">
                    <Image src={item.icon} width={40} height={40} alt="pallete" />
                  </span>
                  <div className="sm:text-xl">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
