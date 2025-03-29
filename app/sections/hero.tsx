"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { scrollToEmail } from "@/lib/utils";
import Section from "@/components/section";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import { motion } from "framer-motion";
import Pop from "@/components/ui/pop";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-center py-20 md:py-30 lg:py-40 gap-10">
        <FadeInOnScroll>
          <div className="flex flex-col my-auto max-w-lg gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-20">
              AI That Knows What to <Pop>Ask</Pop>
            </h1>
            <p className="text-[1.075rem]">
              Users are vague. Your AI doesn’t have to be. <br />
              We fill the context gap so{" "}
              <b>your LLM can respond with confidence</b>. Join the waitlist*
              for early access and start building context-aware AI today!
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
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
                  Start Building!
                </Button>
              </div>
              <p className="text-input-text px-2 text-xs">
                *Early access is limited—claim your spot now.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className=" relative w-[700px] h-[560px] hidden lg:block">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/hero-main-crystal.webp"
                alt="Crystal base"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/hero-bg-crystals.webp"
                alt="Crystal base"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
            <Image
              src="/hero-wisp.webp"
              alt="Crystal overlay"
              fill
              priority
              className="object-contain pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
