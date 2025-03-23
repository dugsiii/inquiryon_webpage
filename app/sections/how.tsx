import React from "react";

export default function How() {
  return (
    <>
      <div className="absolute inset-x-0 h-[800px] -z-10 bg-primary" />
      <div className="flex flex-col items-center text-primary-foreground py-20 gap-30">
        <div>
          <h2>How Does it Work?</h2>
          <div className="flex flex-row justify-between px-8 items-center">
            <a>For Education</a>
            <a>For Fintech</a>
            <a>For Personal</a>
          </div>
        </div>

        <div className="flex flex-row gap-30">
          <div className="flex flex-col">
            <h4>Step 1: Request </h4>
            <p className="max-w-60">
              A user asks your AI chatbot a question, like in a real
              conversation. We sit between you and your users, clarifying their
              intent in real time.
            </p>
          </div>
          <h1>bubble</h1>
        </div>
      </div>
    </>
  );
}
