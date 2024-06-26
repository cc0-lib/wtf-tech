import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Scope from "../components/scope";
import Criteria from "../components/criteria";
import Ticker from "../components/ticker";
import Partners from "../components/partners";
import Flow from "../components/flow";
import Fund from "../components/fund";
import Advisor from "../components/advisor";
import FundAdvisorsMobile from "../components/funding-advisor";

// TODO Smooth fullpage scroll
export default function Home() {
  return (
    <main className="overflow-x-hidden font-supply uppercase">
      <Hero />
      <About />
      <Scope />
      <Ticker variant="secondary" className="hidden sm:flex" />
      <Criteria />
      <Flow />
      <Fund />
      <Ticker variant="primary" className="hidden sm:flex" />
      <Advisor />
      <FundAdvisorsMobile />
      <Partners />
    </main>
  );
}
