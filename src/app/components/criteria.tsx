import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col justify-center bg-secondary px-40 pb-40 pt-32 text-4xl uppercase text-primary">
      <h4 className="pb-20 text-center text-5xl underline decoration-primary decoration-2 underline-offset-2">
        Criteria
      </h4>

      <div className="ml-24 flex items-center justify-center px-32">
        <div className="flex w-[24rem] flex-col items-start gap-6">
          {criterias.slice(0, 3).map((item, index) => (
            <div key={index} className="inline-flex items-center justify-center gap-3 font-light">
              <span className="flex w-14 justify-center">
                <Image src={item.icon} width={item.width ? item.width : 40} height={40} alt="pallete" />
              </span>
              <div className="col-span-3">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="flex w-[28rem] flex-col items-start gap-6">
          {criterias.slice(3).map((item, index) => (
            <div key={index} className="inline-flex items-center justify-center gap-3 font-light">
              <span className="flex w-14 justify-center">
                <Image src={item.icon} width={40} height={40} alt="pallete" />
              </span>
              <div className="col-span-3">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
