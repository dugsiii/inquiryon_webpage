import Section from "@/components/section";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function SingleFeature({
  title,
  image,
  imageAlt,
  className = "flex-row",
  children,
}: {
  title: string;
  image: string;
  imageAlt: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex ${className} gap-16 items-center`}>
      <Image
        src={image}
        alt={imageAlt}
        className="hidden xl:block"
        width={511}
        height={408}
      />
      <div className="flex flex-col max-w-md gap-4">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <Section className="pt-128 pb-64">
      <div className="flex flex-col items-center gap-32">
        <SingleFeature
          title="Bridge The Gap"
          image="/spell-book.png"
          imageAlt="Hero Image"
        >
          <p>
            AI is powerful, but users struggle to communicate with it. Without
            enough context, AI guesses: leading to vague answers and frustrated
            customers.
            <br />
            <br /> We bridge that gap, making AI conversations smarter and more
            intuitive by guiding it to ask the right follow-ups. No extra effort
            from users, no lo st customers for you.
          </p>
        </SingleFeature>
        <SingleFeature
          title="Bridge The Gap"
          image="/spell-book.png"
          imageAlt="Hero Image"
          className="flex-row-reverse"
        >
          <p>
            AI is powerful, but users struggle to communicate with it. Without
            enough context, AI guesses: leading to vague answers and frustrated
            customers.
            <br />
            <br /> We bridge that gap, making AI conversations smarter and more
            intuitive by guiding it to ask the right follow-ups. No extra effort
            from users, no lo st customers for you.
          </p>
          <div>
            <Button className="w-fit">Wassup</Button>
          </div>
        </SingleFeature>
        <SingleFeature
          title="Bridge The Gap"
          image="/spell-book.png"
          imageAlt="Hero Image"
        >
          <p>
            AI is powerful, but users struggle to communicate with it. Without
            enough context, AI guesses: leading to vague answers and frustrated
            customers.
            <br />
            <br /> We bridge that gap, making AI conversations smarter and more
            intuitive by guiding it to ask the right follow-ups. No extra effort
            from users, no lo st customers for you.
          </p>
        </SingleFeature>
      </div>
    </Section>
  );
}
