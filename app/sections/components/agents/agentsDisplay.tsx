import React, { useState } from "react";
import Link from "next/link";
import { Agent, agents } from "../../../../lib/content/agents-list";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { chunkArray } from "@/lib/chunk-array";
import { AnimatePresence, motion } from "framer-motion";

function AgentsRow({
  items,
  expandedId,
  setExpandedId,
}: {
  items: Agent[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  // Check if any agent in this row is expanded
  const expandedAgent = items.find((a) => a.id === expandedId);

  return (
    <div className="mb-6">
      <div className="flex flex-row gap-6">
        {items.map((agent) => {
          const isExpanded = expandedId === agent.id;
          const isNotSelected = expandedId !== null && expandedId !== agent.id;

          return (
            <button
              key={agent.id}
              onClick={() => setExpandedId(isExpanded ? null : agent.id)}
              className={`
                flex-1 min-w-[45%] lg:min-w-[30%] flex flex-col items-center px-6 py-4 
                rounded-lg group transition cursor-pointer 
                ${
                  isExpanded
                    ? "bg-accent/30 drop-shadow-[0_0_2px_var(--accent)]" // selected
                    : isNotSelected
                      ? "bg-secondary/10 opacity-50 " // others when one is selected
                      : "bg-secondary/5 hover:bg-accent/20 hover:scale-102 hover:drop-shadow-[0_0_2px_var(--accent)]" // none selected
                }
                min-h-[164px]
              `}
              aria-label={`${agent.name}, category: ${agent.category}`}
              aria-expanded={isExpanded}
              role="button"
            >
              <div
                className={`
                text-5xl  transition mb-4 mt-4 
                group-hover:drop-shadow-[0_0_4px_var(--accent)] 
                ${isExpanded ? "drop-shadow-[0_0_8px_var(--accent)]" : ""}
              `}
              >
                {agent.icon}
              </div>

              <div className="self-center flex flex-col items-center flex-grow">
                <p className="text-xs opacity-80 font-bold">{agent.category}</p>
                <h4 className="font-medium text-lg md:text-2xl lg:text-2xl ">
                  {agent.name}
                </h4>
              </div>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {expandedAgent && (
          <motion.div
            // selecting against in different rows
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className=" rounded-md">
              <motion.div
                // selecting an agent in the same row
                key={expandedAgent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 mt-4 "
              >
                <p className="mb-2 font-semibold">
                  {expandedAgent.description}
                </p>
                {expandedAgent.link && (
                  <Link
                    href={expandedAgent.link}
                    className="text-primary underline"
                  >
                    Visit {expandedAgent.name}
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const MAX_ROWS = 6; // NOTE: for later if you have more agents and need to collapse/open them

export default function AgentsDisplay() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // decide chunk size based on screen size
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const chunkSize = isDesktop ? 3 : 2;

  const rows = chunkArray(agents, chunkSize);
  const visibleRows = showAll ? rows : rows.slice(0, MAX_ROWS);
  const remainingAgents = agents.length - MAX_ROWS * chunkSize;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {visibleRows.map((items, idx) => (
        <AgentsRow
          key={idx}
          items={items}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
        />
      ))}

      {rows.length > MAX_ROWS && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 text-sm font-medium bg-secondary/20 rounded-md hover:bg-secondary/30 transition"
          >
            {showAll ? "Show Less" : `Show More (${remainingAgents})`}
          </button>
        </div>
      )}
    </div>
  );
}
