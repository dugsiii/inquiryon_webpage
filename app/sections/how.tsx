"use client";
import Section from "@/components/section";
import FadeInOnScroll from "@/components/fadeInOnScroll";

const outcomes = [
  {
    number: "01",
    title: "Control",
    text: "Evaluate every consequential action against your policies, permissions, and operating context before it executes.",
  },
  {
    number: "02",
    title: "Oversight",
    text: "Let routine actions proceed. Route uncertain, high-risk, or exceptional decisions to the right human reviewer.",
  },
  {
    number: "03",
    title: "Earned autonomy",
    text: "Use outcomes and reviewer decisions as evidence to safely expand what each agent can do on its own.",
  },
];

export default function How() {
  return (
    <Section className="bg-primary">
      <div className="py-20 sm:py-28 text-primary-foreground">
        <FadeInOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-sans-header text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              One decision layer. Every agent action.
            </p>
            <h2 className="text-4xl sm:text-5xl">Autonomy should be earned</h2>
            <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/80">
              AMP governs what agents are allowed to do while they are running—not
              just how they were evaluated before launch.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <FadeInOnScroll key={outcome.number}>
              <div className="h-full rounded-xl border border-primary-foreground/20 bg-secondary/5 p-7">
                <span className="font-sans-header text-sm text-accent">{outcome.number}</span>
                <h3 className="mt-7 text-3xl">{outcome.title}</h3>
                <p className="mt-4 text-primary-foreground/75">{outcome.text}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
