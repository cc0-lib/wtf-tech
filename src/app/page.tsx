import Hero from "./components/hero";
import About from "./components/about";
import Scope from "./components/scope";

// TODO Smooth fullpage scroll
export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll font-supply">
      <Hero />
      <About />
      <div className="flex bg-secondary pb-5 pt-6 text-4xl uppercase text-primary">
        {Array(5)
          .fill(null)
          .map((index) => (
            <div key={index} className="animate-scroll-text flex shrink-0 flex-row justify-around gap-6">
              registration is now open - registration is now open - registration is now open - registration is now open
              - registration is now open - registration is now open - registration is now open -
            </div>
          ))}
      </div>
      <Scope />
    </main>
  );
}
