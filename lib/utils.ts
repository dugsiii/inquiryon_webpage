import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToEmail(e?: React.MouseEvent) {
  e?.preventDefault();
  
  if (typeof window !== "undefined" && window.location.pathname !== "/") {
    window.location.href = "/";
    return;
  }

  const input = document.getElementById("email-input");
  if (input) {
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus({ preventScroll: true });
  }
}