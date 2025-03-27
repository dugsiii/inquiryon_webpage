import About from "./sections/about";
import CTA from "./sections/cta";
import FAQ from "./sections/faq";
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
      <FAQ />
      <CTA />
    </div>
  );
}
