"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { scrollToEmail } from "@/lib/utils";
import Section from "@/components/section";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-center py-30 lg:py-40 gap-10">
        <div className="flex flex-col my-auto max-w-lg gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl">
            AI That Knows What to Ask
          </h1>
          <p>
            Turn vague prompts into precise answers by
            <b> asking smart questions.</b> This clarifies user intent, so your
            LLM delivers the best response to your customers, every time.{" "}
            <b>Secure your spot* </b>to get early access!
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <Input id="email-input" type="email" placeholder="Email"></Input>
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
        <Image
          src="/spell-book.png"
          alt="book hero image"
          className="hidden lg:block"
          width={511}
          height={408}
        />
      </div>
    </Section>
  );
}
