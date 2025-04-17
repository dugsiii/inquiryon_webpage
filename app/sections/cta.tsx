"use client";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CTA() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  return (
    <Section>
      <FadeInOnScroll>
        <div className="max-w-4xl mx-auto flex-col items-center py-32">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center md:items-start w-full md:flex-row gap-4 md:gap-12">
              <h1 className="w-fit text-left max-w-sm md:text-right text-4xl md:text-5xl lg:text-7xl">
                Got Some Inquiries For Us?
              </h1>
              <div className="flex flex-col gap-4 w-full h-full max-w-sm">
                {/* <p className="max-w-lg pt-8">
                Improve accuracy and engagement without any extra effort from
                your team. Secure a spot for early access now, as access is
                limited to maintain quality.
              </p> */}
                <div className="flex flex-col w-full gap-2">
                  <Input type="email" placeholder="Email"></Input>
                  <Textarea
                    placeholder="Questions?"
                    className="h-32"
                  ></Textarea>
                </div>
                <Button
                  variant="blue"
                  size="lg"
                  className="w-fit text-lg font-semibold"
                >
                  Inquire!
                </Button>
                <p>
                  Or shoot us an email:{" "}
                  <button
                    type="button"
                    className="w-fit cursor-pointer text-primary hover:text-hover"
                    onClick={() => {
                      navigator.clipboard.writeText("team@inquiryon.com");
                      setCopiedEmail(true);
                      setTimeout(() => setCopiedEmail(false), 2000);
                    }}
                  >
                    {copiedEmail ? "Email Copied!" : "Copy Email"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}
