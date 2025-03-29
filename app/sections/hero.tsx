"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { scrollToEmail } from "@/lib/utils";
import Section from "@/components/section";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-center py-20 md:py-30 lg:py-40 gap-10">
        <FadeInOnScroll>
          <div className="flex flex-col my-auto max-w-lg gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl">
              AI That Knows What to Ask
            </h1>
            <p>
              Turn vague prompts into precise answers by
              <b> asking smart questions.</b> This clarifies user intent, so
              your LLM delivers the best response to your customers, every time.{" "}
              <b>Secure your spot* </b>to get early access!
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Email"
                ></Input>
                <Button
                  variant="blue"
                  size="lg"
                  className="text-lg font-semibold"
                  onClick={scrollToEmail}
                >
                  Secure Spot
                </Button>
              </div>
              <p className="text-input-text px-2 text-xs">
                *Limited to the first 300 businesses
              </p>
            </div>
          </div>
        </FadeInOnScroll>
        <div className=" relative w-[700px] h-[560px] hidden lg:block">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-main-crystal.png"
              alt="Crystal base"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-bg-crystals.png"
              alt="Crystal base"
              fill
              className="object-contain"
            />
          </motion.div>
          <Image
            src="/hero-wisp.png"
            alt="Crystal overlay"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    </Section>
  );
}
