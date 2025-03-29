import React from "react";

export default function Pop({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-sans-header text-accent-foreground"
      style={{ textShadow: "0 0 2px rgba(59, 130, 246, 0.4)" }}
    >
      {children}
    </span>
  );
}
