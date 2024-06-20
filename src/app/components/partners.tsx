import Image from "next/image";
import React, { Fragment } from "react";
import { CC0Lib, DevTalk, KarbonKore, NounsBeyondScreen } from "./icons";
import { Noggles } from "./icons";
import Link from "next/link";
import Ticker from "./ticker";

export default function Partners() {
  return (
    <Fragment>
      <div className="hidden flex-col items-center justify-center text-5xl text-secondary sm:flex">
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
            <div className="flex w-full justify-between">
              <div className="h-full text-4xl font-medium">
                <div className="w-[400px] text-justify">What are you waiting for?</div>
              </div>
              <Link
                href="https://karbon.wtf/tech-s01-reg"
                target="_blank"
                className="inline-flex h-full items-center rounded-full bg-primary px-8 py-2 text-secondary">
                Register here
              </Link>
            </div>
            <p className="mt-4 inline-flex w-full text-base">p/s: registration is limited to first 10 projects</p>
          </div>

          <div className="flex h-[50vh] w-full flex-col items-center justify-center bg-secondary px-40 text-primary">
            <h1 className="inline-flex w-full text-5xl">Supported By</h1>
            <div className="my-20 inline-flex w-full items-center justify-between gap-20 px-96">
              <NounsBeyondScreen className="" width={150} height={200} />
              <CC0Lib className="" width={120} height={100} />
              <DevTalk className=" " width={300} height={100} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between px-40 py-24 text-secondary">
          <h1 className="inline-flex w-full text-5xl">Funded By</h1>
          <div className="flex size-full items-center justify-center">
            <Noggles className="size-36 text-secondary" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between bg-secondary px-40 py-24 text-primary">
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

      {/* Mobile */}
      <div className="flex h-screen flex-col justify-center gap-8 bg-secondary text-primary sm:hidden">
        <div className="flex flex-col items-start justify-between gap-4 px-10">
          <div className="min-w-[230px] text-justify text-2xl">What are you wating for?</div>
          <p className="inline-flex w-full text-xxs">p/s: registration is limited to first 10 projects</p>

          <Link
            href="https://karbon.wtf/tech-s01-reg"
            target="_blank"
            className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm text-secondary">
            Register here
          </Link>
        </div>

        <div className="mt-20 flex flex-col justify-start space-y-8 px-8">
          <div className="flex flex-col">
            <div className="text-xs">Supported By</div>
            <div className="mt-2 flex items-center justify-center gap-5">
              <NounsBeyondScreen className="size-8" />
              <CC0Lib className="size-8" />
              <DevTalk className="mt-1 h-6" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs">Funded By</div>
            <div className="flex items-center justify-center">
              <Noggles className="size-14" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start text-xs">
              <p>A Project By</p>
            </div>
            <div className="flex justify-end">
              <KarbonKore className="size-6" />
            </div>

            <div className="mt-2 flex w-full justify-between text-xxs">
              <div>
                <p>KARBON KORE SDN BHD</p>
                <p>[1559675-X]</p>
              </div>
              <div className="flex flex-col items-end">
                <p>karbonko.re</p>
                <p>
                  <a href="mailto:hello@karbonko.re">HELLO@KARBONKO.RE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
