"use client";
import React from "react";
import { Button } from "./ui/button";
import { scrollToEmail } from "@/lib/utils";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-background shadow-sm border-b border-mid-grey">
      <div className="flex flex-row justify-between items-center py-2 px-4 lg:px-8">
        <a className="text-3xl font-sans-logo">Inquiryon</a>
        <div className="hidden lg:flex flex-row gap-8 text-lg font-semibold font-sans-header ">
          {[
            { name: "Home", href: "#" },
            { name: "Features", href: "#features" },
            { name: "About", href: "#about" },
            { name: "FAQ", href: "#faq" },
          ].map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <Button onClick={scrollToEmail}>Join Waitlist</Button>
      </div>
    </div>
  );
}
