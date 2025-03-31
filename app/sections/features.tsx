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
      className="pt-64 sm:pt-96 pb-48 sm:pb-64 scroll-mt-neg-20"
      id="features"
    >
      <div className="flex flex-col items-center gap-48">
        <SingleFeature
          title={
            <>
              <Pop>Bridge </Pop>
              The Gap
            </>
          }
          image="/1.webp"
          imageAlt="Cleaving the Raw Gemstone"
        >
          <p>
            AI is powerful, but only when it has the <b>right context</b>. When
            users provide vague or incomplete prompts, the model is left
            guessing. <br />
            <br />
            Our system acts as a buffer between the user and your LLM. It
            automatically <b>detects missing information</b>, asks clarifying
            questions, and injects the context needed to produce accurate and
            useful results.
            <br />
            <br /> No prompt engineering required.{" "}
            <b>Just better answers, every time.</b>
          </p>
        </SingleFeature>
        <SingleFeature
          title={
            <>
              <Pop>Specialized </Pop>
              By Design
            </>
          }
          image="/2.webp"
          imageAlt="Blueprint Diagram of final Gemstone"
          className="xl:flex-row-reverse"
        >
          <p>
            Generic AI struggles in specialized domains. We’re building tools to
            help you create a context-aware agent{" "}
            <b>tailored to your environment.</b>
            <br />
            <br />
            It’s designed to learn your domain and <b>improve over time</b> by
            adapting to real user interactions.
            <br />
            <br /> The result is an AI that knows what to ask, how to help, and
            gets <b>smarter the more it’s used.</b>
          </p>
          {/* <div className="w-full flex justify-center lg:block">
            <Button className="w-fit" onClick={scrollToEmail}>Wassup</Button>
          </div> */}
        </SingleFeature>
        <SingleFeature
          title={
            <>
              Unlock The
              <Pop> Full Potential </Pop>
            </>
          }
          image="/3.webp"
          imageAlt="Necklace with Final Gemstones set in the shape of the Inquiryon Logo."
        >
          <p>
            When your AI has the right context and knows the right questions to
            ask, it becomes more than just responsive.{" "}
            <b>It becomes truly intelligent.</b>
            <br />
            <br />
            Our system <b>expands what’s possible</b> by enabling smarter
            interactions, broader accessibility, and better results across a
            wide range of use cases.
          </p>
        </SingleFeature>
      </div>
    </Section>
  );
}
