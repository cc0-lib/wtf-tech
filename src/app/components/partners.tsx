import Image from "next/image";
import React, { Fragment } from "react";
import { CC0Lib, DevTalk, KarbonKore, NounsBeyondScreen } from "./icons";
import { Nouns } from "./icons";
import Link from "next/link";
import Ticker from "./ticker";

export default function Partners() {
  return (
    <Fragment>
      <div className="hidden flex-col items-center justify-center text-5xl text-secondary md:flex">
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-20 text-primary lg:px-40">
            <div className="flex w-full flex-col justify-between xl:flex-row">
              <div className="h-full text-4xl font-medium lg:text-5xl">
                <div className="w-[400px] text-justify lg:w-[500px]">What are you waiting for?</div>
              </div>
              <Link
                href="https://karbon.wtf/tech-s01-reg"
                target="_blank"
                className="hidden items-center rounded-full bg-primary px-8 py-2 text-xl text-secondary lg:h-full lg:text-4xl xl:inline-flex">
                Register here
              </Link>

              <div className="xl:hidden">
                <Link
                  href="https://karbon.wtf/tech-s01-reg"
                  target="_blank"
                  className="items-center rounded-full bg-primary px-8 py-3 text-2xl text-secondary lg:text-3xl">
                  Register here
                </Link>
              </div>
            </div>
            <p className="mt-4 inline-flex w-full text-base">p/s: registration is limited to first 10 projects</p>
          </div>

          <div className="flex h-1/2 w-full flex-col items-center justify-center bg-secondary px-20 text-primary lg:px-40">
            <div className="flex w-full text-4xl lg:text-5xl">Supported By</div>
            <div className="mt-10 flex w-full items-center justify-center gap-10 lg:hidden">
              <NounsBeyondScreen className="size-20" width={100} height={100} />
              <CC0Lib className="size-20" width={100} height={100} />
              <DevTalk className="w-52" width={100} height={100} />
            </div>
            <div className="my-20 hidden w-full items-center justify-between gap-4 px-20 lg:flex xl:gap-10 xl:px-40 2xl:gap-20 2xl:px-96">
              <NounsBeyondScreen className="size-52" />
              <CC0Lib className="size-32" />
              <DevTalk className="h-full w-96" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between px-20 py-16 text-secondary lg:px-40 lg:py-24">
          <h1 className="inline-flex w-full text-4xl lg:text-5xl">Funded By</h1>
          <div className="flex size-full items-center justify-center">
            <Nouns className="size-28 text-secondary xl:size-36" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between bg-secondary px-20 py-16 text-primary lg:px-40 lg:py-24">
          <div className="flex w-full justify-between text-2xl">
            <div>A Project By</div>
            <KarbonKore className="mt-4 size-20 lg:size-24" />
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
      <div className="flex h-screen flex-col justify-center gap-8 bg-secondary text-primary sm:h-auto sm:py-20 md:hidden">
        <div className="flex flex-col items-start justify-between gap-4 px-10 sm:px-16">
          <div className="min-w-[230px] text-justify text-2xl sm:text-3xl">What are you wating for?</div>
          <p className="inline-flex w-full text-xxs sm:text-xs">p/s: registration is limited to first 10 projects</p>

          <Link
            href="https://karbon.wtf/tech-s01-reg"
            target="_blank"
            className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm text-secondary sm:text-base">
            Register here
          </Link>
        </div>

        <div className="mt-20 flex flex-col justify-start space-y-8 px-10 sm:mt-10 sm:px-16">
          <div className="flex flex-col">
            <div className="text-xs sm:text-sm">Supported By</div>
            <div className="mt-2 flex items-center justify-center gap-5">
              <NounsBeyondScreen className="size-8 sm:size-10" />
              <CC0Lib className="size-8 sm:size-10" />
              <DevTalk className="mt-1 h-6 sm:h-8" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs sm:text-sm">Funded By</div>
            <div className="flex items-center justify-center">
              <Nouns className="size-14" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start text-xs sm:text-sm">
              <p>A Project By</p>
            </div>
            <div className="flex justify-end">
              <KarbonKore className="size-6 sm:size-8" />
            </div>

            <div className="mt-2 flex w-full justify-between text-xxs sm:text-xs">
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
