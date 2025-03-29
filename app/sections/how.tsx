"use client";
import React, { useState } from "react";
import Section from "@/components/section";
import ChatBox from "./components/chatBox";
import FadeInOnScroll from "@/components/fadeInOnScroll";

export default function How() {
  const [selectedStage, setSelectedStage] = useState(0);

  const stepsText = [
    {
      stage: "Q&A",
      title: "Local Context",
      text: "Integrate lightweight Q&A capabilities into your LLM that allow it to ask simple follow-up questions based solely on the current conversation.",
    },
    {
      stage: "Context",
      title: "Context-aware intelligence",
      text: "Go beyond single-session prompts. Leverage environmental context to help your LLM understand users better and respond with greater precision.",
    },
    {
      stage: "CAPE",
      title: "Domain-Level Intelligence",
      text: "Understand more than just the context, understand the problem space. Tap into domain knowledge and group context, ask expert level questions and give amazing results.",
    },
  ];

  return (
    <>
      <Section className="bg-primary relative pb-64 sm:pb-96">
        <div className="flex flex-col items-center text-primary-foreground py-20 gap-4 sm:gap-16">
          <FadeInOnScroll>
            <h2 className="text-4xl sm:text-5xl text-center">
              From Prompt to Precision
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-col items-center gap-4 pb-4 sm:pb-0">
              <h6 className="text-lg">Select a Stage:</h6>
              <div className="flex flex-row px-8 items-center gap-12 sm:gap-16 ">
                {stepsText.map((step, i) => (
                  <a
                    key={i}
                    onClick={() => setSelectedStage(i)}
                    className={`cursor-pointer flex flex-row gap-4 items-center group`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xs rotate-45 flex justify-center transition-all items-center ${
                        selectedStage === i
                          ? "bg-accent"
                          : "bg-mid-grey group-hover:bg-secondary"
                      }`}
                    >
                      <div className="-rotate-45 text-center text-xl font-sans-header text-primary">
                        {i + 1}
                      </div>
                    </div>
                    <h5
                      className={`text-2xl hidden sm:block transition-all ${
                        selectedStage === i
                          ? "text-accent underline"
                          : "text-mid-grey group-hover:text-secondary"
                      }`}
                    >
                      {step.stage}
                    </h5>
                  </a>
                ))}
              </div>

              <div className="flex flex-col lg:hidden max-w-lg text-center">
                {stepsText.map((step, i) => (
                  <a
                    className={`flex flex-col cursor-pointer p-6 text-secondary transition-all duration-200 ${
                      selectedStage === i ? "" : "hidden"
                    }`}
                    onClick={() => setSelectedStage(i)}
                    key={i}
                  >
                    <h5 className="text-2xl">{step.title}</h5>
                    <p className="">{step.text}</p>
                  </a>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
          <div className="flex flex-row gap-8 w-full max-w-3xl lg:max-w-5xl h-full">
            <ChatBox stage={selectedStage} />

            <div className="hidden lg:flex flex-col max-w-xs">
              {stepsText.map((step, i) => (
                <a
                  className={`flex flex-col p-6 transition-all duration-200 ${
                    selectedStage === i ? "text-secondary" : "text-mid-grey"
                  }`}
                  onClick={() => setSelectedStage(i)}
                  key={i}
                >
                  <p className="text-sm">Stage {i + 1}:</p>
                  <h4>{step.title}</h4>
                  <p className="">{step.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 sm:-bottom-48 w-full px-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h3 className="text-secondary sm:text-transparent">Demo Video</h3>
            <div className="w-full aspect-[3/2] bg-secondary z-10 rounded-md shadow-lg outline" />
          </div>
        </div>
      </Section>
    </>
  );
}
