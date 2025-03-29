"use client";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import Section from "@/components/section";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer flex-row justify-between group transition-colors items-center border-b-1 p-4"
      >
        <h6 className="text-xl group-hover:text-hover">{question}</h6>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
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

const faqText: FAQItemProps[] = [
  {
    question: "Does this work with any AI model?",
    answer:
      "Yes! We’re compatible with any LLM, enhancing your conversations regardless of the underlying LLM you decide to use.",
  },
  {
    question: "How is this different from a regular chatbot or AI model?",
    answer:
      "Most AI models give answers directly, regardless if there’s imperfect or vague context given. In order to help your tools give the best customer experience, we sit between you and the user to clarify intent and give your model more context.",
  },
  {
    question: "When will this come out?",
    answer:
      "We’re working diligently to roll this produce out as soon as possible. But as you know, it’s difficult to give an exact release date. The best way to stay updated is to sign up for our newsletter.",
  },
  {
    question: "How can I get early access?",
    answer:
      "To maintain quality, we’re limiting our Beta to the first 300 businesses to sign up. To see if we’re still have space for your business, sign up here.",
  },
];

export default function FAQ() {
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
              />
            ))}
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}
