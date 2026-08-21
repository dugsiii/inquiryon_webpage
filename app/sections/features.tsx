"use client";
import Section from "@/components/section";
import React from "react";
import Image from "next/image";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import Pop from "@/components/ui/pop";

function SingleFeature({
  title,
  image,
  imageAlt,
  className = "xl:flex-row",
  children,
}: {
  title: React.ReactNode;
  image: string;
  imageAlt: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <FadeInOnScroll>
      <div
        className={`flex flex-col ${className} gap-16 lg:gap-32 items-center`}
      >
        <Image
          src={image}
          alt={imageAlt}
          className=""
          width={500}
          height={400}
          loading="lazy"
        />
        <div className="flex flex-col max-w-md gap-4">
          <span className="text-4xl lg:text-5xl leading-tight tracking-[-0.01em] font-sans-header">
            {title}
          </span>
          {children}
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default function Features() {
  return (
    <Section
      className="py-24 sm:py-36 scroll-mt-neg-20"
      id="features"
    >
      <div className="flex flex-col items-center gap-48">
        <SingleFeature
          title={
            <>
              Govern actions <Pop>in real time</Pop>
            </>
          }
          image="/1.webp"
          imageAlt="A raw gemstone being precisely shaped"
        >
          <p>
            AMP sits between the agent and the systems it can change. Each
            proposed action is checked against <b>policy, permissions, risk, and context</b>
            before it proceeds.
            <br />
            <br />
            Allow safe actions automatically, block prohibited ones, and keep a
            complete record of what was requested, decided, and executed.
            <br />
            <br /> No guesswork required.{" "}
            <b>Operational control at the moment it matters.</b>
          </p>
        </SingleFeature>
        <SingleFeature
          title={
            <>
              Escalate with <Pop>context</Pop>
            </>
          }
          image="/2.webp"
          imageAlt="A blueprint used to review a gemstone design"
          className="xl:flex-row-reverse"
        >
          <p>
            Human review is not the default for every action. It is a targeted
            response when <b>risk, uncertainty, or policy requires judgment.</b>
            <br />
            <br />
            AMP routes exceptions to the right reviewer with the evidence they
            need to approve, reject, modify, or roll back an action quickly.
            <br />
            <br /> The result is an AI that operates with{" "}
            <b>Less review overhead. Better decisions.</b>
          </p>
        </SingleFeature>
        <SingleFeature
          title={
            <>
              Expand <Pop>autonomy safely</Pop>
            </>
          }
          image="/3.webp"
          imageAlt="Finished gemstones arranged in the Inquiryon mark"
        >
          <p>
            Every decision creates evidence: agent performance, policy outcomes,
            reviewer choices, overrides, and rollbacks. AMP turns that history
            into a basis for <b>earned autonomy.</b>
            <br />
            <br />
            Expand permissions where performance is proven. Tighten controls
            where it is not. Give each agent exactly as much freedom as the
            evidence supports.
          </p>
        </SingleFeature>
      </div>
    </Section>
  );
}
