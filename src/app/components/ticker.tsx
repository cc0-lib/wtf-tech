import React from "react";
import { cn } from "../lib/utils";

export default function Ticker({
  variant,
  text = "open for registration",
  className,
}: {
  variant: "primary" | "secondary";
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex p-1 text-sm sm:p-4 sm:text-4xl",
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
