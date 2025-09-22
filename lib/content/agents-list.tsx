import {
  FaEnvelope,
  FaSearch,
  FaCalendarAlt,
  FaBullhorn,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaUserTie,
  FaHeadset,
  FaMailBulk,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

export type Agent = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: React.ReactNode; // optional icon (e.g., <FaEnvelope /> or SVG)
  imageSrc: string;
  link?: string; // optional URL for a details page or external link
  highlight?: boolean;
};

export const highlightedAgents: Agent = {
  id: "hitl-safety",
  // name: "Keep your AI Safe",
  // category: "HITL Safety",
  name: "Human in the Loop (HITL) Agent",
  category: "Keep your AI safe",
  description:
    "Ensures safe AI operations by deciding when, who, how, and what human involvement is required.",
  icon: <FaShieldAlt />,
  imageSrc: "/icons/gem.png",
  link: "https://inquiryon.com",
  highlight: true,
};

export const agents: Agent[] = [
  {
    id: "newsletter-research",
    name: "Send Engaging Newsletters",
    category: "Newsletter and Research",
    description:
      "Researches topics, designs newsletters, and sends them to recipient lists, streamlining content creation and delivery.",
    icon: <FaEnvelope />,
    imageSrc: "/icons/newsletter.png",
    link: "https://inquiryon.com",
  },
  {
    id: "research-planning",
    name: "Plan and Research Smarter",
    category: "Research and Planning",
    description:
      "Creates research plans with human input, performs web research, and delivers final reports to recipients.",
    icon: <FaSearch />,
    imageSrc: "/icons/microscope.png",
    link: "https://inquiryon.com",
  },
  {
    id: "event-planning",
    name: "Organize Events",
    category: "Event Planning",
    description:
      "Plans in-person, online, or hybrid events, evaluates real-time options, and generates tailored event plans.",
    icon: <FaCalendarAlt />,
    imageSrc: "/icons/calendar.png",
    link: "https://inquiryon.com",
  },
  {
    id: "press-release",
    name: "Launch Press Announcements",
    category: "Press Release",
    description:
      "Develops PR announcements, recommends outlets, and distributes through a wire service with human approval.",
    icon: <FaBullhorn />,
    imageSrc: "/icons/megaphone.png",
    link: "https://inquiryon.com",
  },
  {
    id: "collection-letter",
    name: "Recover Payments",
    category: "Collection Letters",
    description:
      "Automates AR payment reminders, tailoring tone to delay periods, encouraging debtors to pay.",
    icon: <FaFileInvoiceDollar />,
    imageSrc: "/icons/coins.png",
    link: "https://inquiryon.com",
  },
  {
    id: "invoice-payment",
    name: "Process Invoices",
    category: "Invoice Payment",
    description:
      "Automates AP invoice handling by retrieving, routing, and seeking human approval before processing.",
    icon: <FaMoneyCheckAlt />,
    imageSrc: "/icons/invoice.png",
    link: "https://inquiryon.com",
  },
  {
    id: "sales-dev-rep",
    name: "Boost Sales Outreach",
    category: "Sales Development Rep",
    description:
      "Equips sales reps with lead insights, researching background, pain points, and product fit to suggest conversation angles.",
    icon: <FaUserTie />,
    imageSrc: "/icons/handshake.png",
    link: "https://inquiryon.com",
  },
  {
    id: "customer-support",
    name: "Deliver Helpful Customer Support",
    category: "Customer Support",
    description:
      "Delivers customer support using RAG for accurate answers, handling inquiries across channels, and escalating when needed.",
    icon: <FaHeadset />,
    imageSrc: "/icons/headset.png",
    link: "https://inquiryon.com",
  },
  {
    id: "email-management",
    name: "Streamline Email Responses",
    category: "Email Management Automation",
    description:
      "Optimizes email workflows by drafting responses, analyzing past replies, and seeking human input before sending.",
    icon: <FaMailBulk />,
    imageSrc: "/icons/email.png",
    link: "https://inquiryon.com",
  },
  {
    id: "rag",
    name: "Build Knowledge Bases",
    category: "RAG Models",
    description:
      "Transforms folders into RAG knowledge bases with chunking and embedding, refreshing automatically each day.",
    icon: <FaDatabase />,
    imageSrc: "/icons/library.png",
    link: "https://inquiryon.com",
  },
];
