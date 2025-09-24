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
    answer: `Whether you're already building with LLMs or just starting to explore AI, this is for you. 
      For technical teams, it boosts performance by improving context and reducing vague inputs. 
      For newcomers, it helps you integrate AI into your workflow with clarity, structure, and confidence.`,
  },
  {
    question: "Does this work with any AI model?",
    answer: `Yes, it's model-agnostic. The CAPE software framework sits within your web application workflow as an 
      intermediary, guiding a structured question-and-answer process to enhance prompt quality and gather 
      necessary context. While it can work with any LLM, performance may vary depending on the model and the use case.`,
  },
  {
    question: "How is this different from a regular chatbot or AI model?",
    answer: `In typical LLM interactions, there's a constant struggle to provide relevant context. While techniques 
      like Retrieval-Augmented Generation (RAG) and Chain-of-Thought (CoT) prompting help guide responses, they 
      often overlook the human user as a dynamic source of context. We address this with CAPE: a structural 
      framework designed to support Human-in-the-Loop (HITL) interactions. CAPE enables the LLM to ask targeted 
      clarifying questions and adapt its prompts in real time, allowing it to actively gather the right context
       from the user. This results in more accurate, aligned, and context-aware responses, bridging the gap between 
       static prompts and dynamic human intent.`,
  },
  {
    question: "When will this come out?",
    answer: `We’re working diligently to roll this product out as soon as possible. But as you know, it’s difficult to
       give an exact release date. The best way to stay updated is to sign up for our waitlist.`,
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
