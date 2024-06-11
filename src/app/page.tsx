import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Scope from "./components/scope";
import Criteria from "./components/criteria";
import Ticker from "./components/ticker";
import Partners from "./components/partners";
import Flow from "./components/flow";
import Fund from "./components/fund";
import Advisor from "./components/advisor";

// TODO Smooth fullpage scroll
export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden font-supply">
      <Hero />
      <About />
      <Scope />
      <Ticker variant="secondary" />
      <Criteria />
      <Flow />
      <Fund />
      <Ticker variant="primary" text="nouns" />
      <Advisor />
      <Partners />
    </main>
  );
}
