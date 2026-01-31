"use client";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import Section from "@/components/section";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full">
      <div
        onClick={onToggle}
        className="flex cursor-pointer flex-row justify-between group transition-colors duration-200 items-center border-b-1 border-border/40 p-4"
      >
        <h6 className="text-xl group-hover:text-hover select-none">
          {question}
        </h6>
        {/* <span className="text-2xl">{isOpen ? "-" : "+"}</span> */}
        <div className={`rotate-45 flex `}>
          <span
            className={`w-4 h-4 rounded-xs 
            transition-all duration-200 group-hover:bg-accent 
            ${isOpen ? "rotate-180 group-hover:rotate-192 bg-accent" : "group-hover:rotate-12 bg-primary "}`}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="p-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqText: { question: string; answer: string }[] = [
  {
    question: "Who is this built for?",
    answer: `Whether you're a team or an individual deploying AI agents, this is for you. If you need visibility into what your agents are doing, the ability to audit their decisions, and human oversight when it matters, our platform gives you the tools to deploy with confidence.`,
  },
  {
    question: "Does this work with any AI agent or model?",
    answer: `Yes, it's model-agnostic. Our platform sits as a layer on top of your existing agents, providing logging, auditing, and human-in-the-loop oversight regardless of the underlying model or framework.`,
  },
  {
    question: "How is this different from other AI safety tools?",
    answer: `Most safety tools focus on a single dimension — monitoring or guardrails. Our platform combines real-time logging, auditing, and human-in-the-loop intervention into one unified system, giving you full oversight without stitching together multiple solutions.`,
  },
  {
    question: "How do you define AI safety?",
    answer: `Our definition of AI safety comes from the Stanford consortium we're a part of, where we defined safety for AI agents as a three-pillar concept: Transparency, Accountability, and Trustworthiness. Our platform delivers on all three — our logging system provides transparency, our HITL workflows ensure accountability, and together they build the trustworthiness needed to deploy agents at scale.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <FadeInOnScroll>
        <div className="flex flex-col py-8 sm:py-32 mx-auto items-center max-w-3xl gap-12">
          <h2>FAQ</h2>
          <div className="flex flex-col gap-2 w-full">
            {faqText.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}
