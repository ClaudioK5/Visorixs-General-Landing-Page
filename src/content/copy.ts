export const whatIs = {
  title: "What is Visorix?",
  headline: "Understand any video without watching it again and again.",
  body: "Visorix gives you a second pair of eyes on your video. Ask what happened, find specific moments, summarize important parts, or get feedback based on the actual content.",
} as const;

export const howItWorks = [
  {
    step: "1",
    title: "Upload your video",
    body: "Upload a recording, podcast, Reel, interview or other video.",
  },
  {
    step: "2",
    title: "Ask what you need",
    body: "Ask questions, request timestamps, summaries, highlights or feedback.",
  },
  {
    step: "3",
    title: "Visorix answers",
    body: "Visorix watches the video and gives you answers grounded in the actual content.",
  },
] as const;

export const useCases = [
  {
    icon: "podcasters",
    title: "Podcasters",
    body: "Find discussions, timestamps, highlights, summaries and clip-worthy moments from long episodes.",
    cta: "For Podcasters",
    href: "https://podcasters.visorix.tech",
  },
  {
    icon: "creators",
    title: "Content Creators",
    body: "Get feedback on hooks, pacing, storytelling, retention, engagement and presentation.",
    cta: "For Creators",
    href: "https://creators.visorix.tech",
  },
  {
    icon: "teams",
    title: "Teams & Businesses",
    body: "Review video faster, locate information, summarize recordings and extract what matters.",
  },
] as const;

export const benefits = [
  {
    icon: "moments",
    title: "Find exact moments",
    body: "Get timestamps for specific discussions or events.",
  },
  {
    icon: "ask",
    title: "Ask anything about the video",
    body: "Get answers based on what Visorix actually sees and hears.",
  },
  {
    icon: "matters",
    title: "Know what matters",
    body: "Turn long recordings into useful information without manually reviewing everything.",
  },
] as const;

export const differentiator = {
  eyebrow: "Why Visorix",
  title: "Answers that could only come from watching the video.",
  body: "Generic AI can only work with the information you give it. Visorix watches the actual video — its dialogue, visuals, structure and context — so its answers are grounded in the content itself.",
  imageAlt: "Example Visorix answer based on an uploaded video",
} as const;

export const finalCta = {
  eyebrow: "Ready when you are",
  title: "See what Visorix can find in your video.",
  support: "Upload a video and start asking questions.",
} as const;
