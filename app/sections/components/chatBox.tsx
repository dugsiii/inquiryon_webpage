import React, { useEffect, useRef } from "react";
import { bubbleText } from "../../../lib/content/bubble-text";
import { motion, AnimatePresence } from "framer-motion";

function Bubble({
  children,
  isWhite = true,
  isLast = false,
}: {
  children: React.ReactNode;
  isWhite?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={`relative h-full w-fit max-w-sm px-4 py-2 rounded-lg text-primary ${
        isWhite ? "bg-secondary" : "bg-accent"
      }`}
    >
      {children}
      {isLast && (
        <div
          className={`absolute w-0 h-0 -bottom-3 ${
            isWhite
              ? "left-3 border-t-[15px] border-t-secondary border-r-[15px] border-r-transparent"
              : "right-3 border-t-[15px] border-t-accent border-l-[15px] border-l-transparent"
          }`}
        />
      )}
    </div>
  );
}

export function BubbleCluster({
  children,
  leftAligned = true,
}: {
  children: React.ReactNode;
  leftAligned?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1 ${
        leftAligned ? "items-start pr-4" : "items-end pl-4"
      }`}
    >
      {React.Children.map(children, (bubbleText, index) => {
        const isLast = index === React.Children.count(children) - 1;
        return (
          <div key={index}>
            <Bubble isWhite={leftAligned} isLast={isLast}>
              {bubbleText}
            </Bubble>
          </div>
        );
      })}
    </div>
  );
}

export default function ChatBox({ stage }: { stage: number }) {
  const bubbles = bubbleText[stage] ?? [];
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [stage]);
  return (
    <div className="w-full b-auto  py-8 md:py-12 px-4 md:px-8 flex flex-col rounded-lg gap-8 md:gap-6 bg-dark-grey transition-all">
      <div ref={scrollRef} className="max-h-200 overflow-y-auto">
        <AnimatePresence mode="wait">
          {bubbles.map((cluster, index) => (
            <motion.div
              key={`${stage}-${index}`}
              className="mb-2"
              initial={{ opacity: 0, y: 5 + 5 * index }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: index % 2 === 0 ? 20 : -20,
                transition: {
                  duration: 0.3,
                },
              }}
              transition={{ duration: 0.2 + 0.2 * index }}
            >
              <BubbleCluster leftAligned={index % 2 !== 0}>
                {React.Children.toArray(cluster)}
              </BubbleCluster>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
