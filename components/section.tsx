// Purpose: full width color background without sacrificing responsive padding
import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id = "",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
