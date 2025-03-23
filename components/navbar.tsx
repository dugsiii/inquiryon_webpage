"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { scrollToEmail } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-background shadow-sm border-b border-mid-grey transition-colors duration-700 ${
        scrolled ? "bg-primary text-secondary" : true
      }`}
    >
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
              <a href={item.href} className="hover:text-accent">
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <Button
          onClick={scrollToEmail}
          variant={`${scrolled ? "blue" : "default"}`}
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
}
