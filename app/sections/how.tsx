"use client";
import Section from "@/components/section";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import AgentsDisplay from "./components/agents/agentsDisplay";

export default function How() {
  // const [selectedStage, setSelectedStage] = useState(0);

  // const stepsText = [
  //   {
  //     stage: "Q&A",
  //     title: "Local Context",
  //     text: "Integrate lightweight Q&A capabilities  into your AI agent or Web application, allowing it to ask simple follow-up questions based solely on the current conversation.",
  //   },
  //   {
  //     stage: "Context",
  //     title: "Context-aware intelligence",
  //     text: "Go beyond single-session prompts. Leverage environmental context to help your agent or Web application understands users better and respond with greater precision.",
  //   },
  //   {
  //     stage: "CAPE",
  //     title: "Domain-Specific Knowledge",
  //     text: "Understand more than just the context, understand the problem space. Tap into domain knowledge and group context, ask expert level questions and give amazing results.",
  //   },
  // ];

  return (
    <>
      <Section className="bg-primary relative pb-64 sm:pb-96">
        <div className="flex flex-col items-center text-primary-foreground py-20 gap-4 sm:gap-16">
          <FadeInOnScroll>
            <h2 className="text-4xl sm:text-5xl text-center mb-1">
              Safe Agents for All You Needs
            </h2>
            <p className="text-md font-semibold text-center mb-8">
              Click on an Agent to find out more!
            </p>
          </FadeInOnScroll>
          <AgentsDisplay />
        </div>
        <div className="absolute -bottom-32 sm:-bottom-48 w-full px-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3fHBW1esH98"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              /> */}
            <div className="w-full aspect-[3/2] bg-secondary z-10 rounded-md shadow-lg outline overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl font-sans-header text-secondary-foreground">Demo Video</h3>
                <p className="text-lg text-secondary-foreground/60 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
