import About from "./sections/about";
import Features from "./sections/features";
import Hero from "./sections/hero";
import How from "./sections/how";
import Updates from "./sections/updates";

export default function Home() {
  return (
    <div>
      <Hero />
      <How />
      <Features />
      <About />
      <Updates />
    </div>
  );
}
