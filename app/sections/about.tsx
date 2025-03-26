import Section from "@/components/section";
import React from "react";

export default function About() {
  return (
    <Section className="bg-primary">
      <div className="flex flex-col py-16 items-center text-primary-foreground">
        <div className="flex flex-col items-center gap-4">
          <h2>About</h2>
          <p className="max-w-lg">
            We exist to help everyday people connect with technology in order to
            unlock it’s potential. In doing so, we bridge gaps in understanding
            and build a more inclusive, innovative tomorrow.
          </p>
        </div>
      </div>
    </Section>
  );
}
