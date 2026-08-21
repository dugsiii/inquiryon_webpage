"use client";
import React from "react";
import Image from "next/image";
//import { scrollToEmail } from "@/lib/utils";
import Section from "@/components/section";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import { motion } from "framer-motion";
import Pop from "@/components/ui/pop";
import EmailSignup from './components/emailSignup';
export default function Hero() {
  return (
    <Section id="early-access" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-center py-20 md:py-30 lg:py-40 gap-10">
        <FadeInOnScroll>
          <div className="flex flex-col my-auto max-w-2xl gap-6">
            <p className="font-sans-header text-sm font-semibold uppercase tracking-[0.18em] text-dark-grey">
              Post-launch governance for AI agents
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-20">
              The control layer for AI agent <Pop>autonomy</Pop>
            </h1>
            <p className="text-[1.075rem] max-w-xl">
              AMP sits between your agents and consequential actions—enforcing
              policy, escalating exceptions, and turning proven performance
              into progressively greater autonomy.
            </p>
            <p className="text-sm font-semibold text-dark-grey">
              Control infrastructure for AI agents in production.
            </p>
            <section className="your-section-style">
              <EmailSignup />
            </section>
          </div>
        </FadeInOnScroll>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[540px] h-[480px] hidden lg:block">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
