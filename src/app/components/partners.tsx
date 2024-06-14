import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-5xl uppercase text-secondary">
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
        <div className="flex w-full justify-between">
          <div className="h-full text-4xl font-medium">
            <div className="w-[400px] text-justify">What are you waiting for?</div>
          </div>
          <div className="flex items-center justify-center">
            <button className="h-full rounded-full bg-primary px-6 py-2 uppercase text-secondary">Register here</button>
          </div>
        </div>
        <p className="mt-4 inline-flex w-full text-base">p/s: registration is limited to first 10 projects</p>
      </div>

      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
        <h1 className="inline-flex w-full text-5xl">Supported By</h1>
        <div className="my-20 inline-flex w-full items-center justify-center gap-20">
          <div className="size-36">
            <Image src="./nouns-beyond-screen-blue.svg" width={200} height={400} alt="logo" className="text-primary" />
          </div>
          <div className="inline-flex h-full items-center">
            <Image src="./cc0-lib-blue.svg" width={120} height={200} alt="logo" className="text-primary" />
          </div>
          <div className="inline-flex h-full items-center">
            <Image src="./devtalk-blue.svg" width={300} height={200} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
