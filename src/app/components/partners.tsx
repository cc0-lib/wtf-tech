import Image from "next/image";
import React from "react";
import { CC0Lib, DevTalk, KarbonKore, NounsBeyondScreen } from "./icons";
import { Noggles } from "./fund";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="flex flex-col items-center justify-center text-5xl uppercase text-secondary">
      <div className="flex h-screen w-full flex-col">
        <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
          <div className="flex w-full justify-between">
            <div className="h-full text-4xl font-medium">
              <div className="w-[400px] text-justify">What are you waiting for?</div>
            </div>
            <Link
              href="https://karbon.wtf/tech-s01-reg"
              target="_blank"
              className="inline-flex h-full items-center rounded-full bg-primary px-8 py-2 uppercase text-secondary"
            >
              Register here
            </Link>
          </div>
          <p className="mt-4 inline-flex w-full text-base">p/s: registration is limited to first 10 projects</p>
        </div>

        <div className="flex h-[50vh] w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
          <h1 className="inline-flex w-full text-5xl">Supported By</h1>
          <div className="my-20 inline-flex h-20 w-full items-center justify-between px-40">
            <NounsBeyondScreen className="size-[400px]" />
            <CC0Lib className="size-full text-primary" />
            <DevTalk className="size-full text-primary" />
          </div>
        </div>
      </div>

      <div className="flex h-[50vh] w-full flex-col items-center justify-between px-40 py-24 text-secondary">
        <h1 className="inline-flex w-full text-5xl">Funded By</h1>
        <div className="flex size-full items-center justify-center">
          <Noggles className="size-36 text-secondary" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between bg-secondary px-40 py-20 text-primary">
        <div className="flex w-full justify-between text-2xl">
          <div>A Project By</div>
          <KarbonKore className="mt-4 size-24" />
        </div>
        <div className="mt-10 flex w-full justify-between text-2xl">
          <div className="flex w-full flex-col">
            <div>KARBON KORE SDN BHD</div>
            <div>[1559675-X]</div>
          </div>
          <div className="flex w-full flex-col items-end">
            <div>KARBONKO.RE </div>
            <div>HELLO@KARBONKO.RE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
