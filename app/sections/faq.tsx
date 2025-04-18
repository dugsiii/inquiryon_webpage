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
    question: "Who is this built for?",
    answer:
      `Whether you're already building with LLMs or just starting to explore AI, this is for you. 
      For technical teams, it boosts performance by improving context and reducing vague inputs. 
      For newcomers, it helps you integrate AI into your workflow with clarity, structure, and confidence.`,
  },
  {
    question: "Does this work with any AI model?",
    answer:
      `Yes, it's model-agnostic. The software sits within your workflow as an intermediary, guiding a 
      question-and-answer process to enhance prompt quality. While it can work with any LLM, performance 
      may vary depending on the model. `,
  },
  {
    question: "How is this different from a regular chatbot or AI model?",
    answer:
      `In any given LLM interaction, there is a constant struggle to provide relevent context to the model. 
      There are methods we use to help such as RAG (Retrieval Augmented Generation) and Chain-of-Thoughts (CoT) 
      to aid the model in generation. However, these methods fail to take the human into account. 
      We provide a way to keep the human in the loop, always allowing the LLM to gather the context necessary to 
      generate a response.`,
  },
  {
    question: "When will this come out?",
    answer:
      `We’re working diligently to roll this product out as soon as possible. But as you know, it’s difficult to
       give an exact release date. The best way to stay updated is to sign up for our waitlist.`,
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
