import React from "react";
import { cn } from "../lib/utils";
import { TICKER_TEXT } from "../lib/config";

export default function Ticker({
  variant,
  text = TICKER_TEXT,
  className,
}: {
  variant: "primary" | "secondary";
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex p-1 text-sm sm:text-xl md:py-2 md:text-2xl lg:text-3xl xl:text-4xl",
        className,
        variant === "primary" && "bg-primary text-secondary",
        variant === "secondary" && "bg-secondary text-primary",
      )}>
      {Array(5)
        .fill(null)
        .map((index) => (
          <div key={index} className="flex shrink-0 animate-scroll-text flex-row justify-around gap-6 font-light">
            {(" - " + text).repeat(10)}
          </div>
        ))}
    </div>
  );
}
