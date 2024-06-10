import Hero from "./components/hero";
import About from "./components/about";

// TODO Smooth fullpage scroll
export default function Home() {
  return (
    <main className="font-supply snap snap-y snap-mandatory">
      <Hero />
      <About />
    </main>
  );
}
