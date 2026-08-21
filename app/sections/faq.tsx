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
    question: "What is AMP?",
    answer: `AMP is the control layer for AI agent autonomy. It sits between agents and consequential actions, applying policy at runtime, routing exceptions for human review, and preserving the evidence behind every decision.`,
  },
  {
    question: "Is AMP an AI agent governance platform?",
    answer: `Yes. AMP provides post-launch governance for AI agents in production. Unlike governance tools focused mainly on documentation, evaluations, or risk registers, AMP governs what agents are allowed to do while they are running.`,
  },
  {
    question: "Does every action require human approval?",
    answer: `No. AMP is the decision layer that determines when human intervention is needed. Routine, policy-compliant actions can proceed automatically, while uncertain, high-risk, or exceptional actions are escalated with the context a reviewer needs.`,
  },
  {
    question: "How does progressive autonomy work?",
    answer: `AMP records outcomes, policy decisions, reviewer approvals, overrides, and rollbacks. Teams can use that evidence to expand autonomy where an agent performs reliably and tighten controls where it does not.`,
  },
  {
    question: "Does AMP work with any agent or model?",
    answer: `AMP is designed as a model-agnostic control layer for existing agent systems, so governance is applied consistently even as the underlying models, tools, and frameworks change.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <FadeInOnScroll>
        <div className="flex flex-col py-8 sm:py-32 mx-auto items-center max-w-3xl gap-12">
          <div className="text-center">
            <p className="mb-3 font-sans-header text-sm font-semibold uppercase tracking-[0.18em] text-dark-grey">
              The operating layer
            </p>
            <h2>Questions about AMP</h2>
          </div>
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
