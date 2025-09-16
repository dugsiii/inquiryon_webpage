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
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-center py-20 md:py-30 lg:py-40 gap-10">
        <FadeInOnScroll>
          <div className="flex flex-col my-auto max-w-lg gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-20">
            AI That Earns Your <Pop>Trust</Pop>
            </h1>
          <p className="text-[1.075rem]">
            AI shouldn’t run unchecked. <br />
            Our human-in-the-loop agent <b>keeps you involved and in control</b>, adding the oversight needed for safe, trustworthy results.  
            Join the waitlist* for early access and start building AI you can trust today!
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
          <div className=" relative w-[600px] h-[480px] hidden lg:block">
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
