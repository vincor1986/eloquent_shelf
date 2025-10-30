import science from "@/public/images/icons/natural-sciences.png";
import psychology from "@/public/images/icons/psychology.png";
import philosophy from "@/public/images/icons/philosophy.png";
import history from "@/public/images/icons/history.png";
import ai from "@/public/images/icons/ai.png";
import selfhelp from "@/public/images/icons/selfhelp.png";
import commentary from "@/public/images/icons/commentary.png";
import economics from "@/public/images/icons/economics.png";
import { slug } from "@/local_ops/db/example-book";

const topics = [
  {
    topic: "Artificial Intelligence",
    description:
      "Understand the advancements and implications of AI technology.",
    bg: "bg-primary",
    image: ai,
    invert: true,
    slug: "artificial-intelligence",
  },
  {
    topic: "Natural Science",
    description:
      "Explore the wonders of the natural world and scientific discoveries.",
    bg: "bg-dark-forest",
    image: science,
    invert: true,
    slug: "natural-science",
  },
  {
    topic: "Psychology and Mind",
    description: "Delve into the complexities of the human mind and behaviour.",
    bg: "bg-light-gold",
    image: psychology,
    slug: "psychology",
  },
  {
    topic: "Philosophy",
    description:
      "Traverse the fundamental nature of knowledge, reality, and existence.",
    bg: "bg-light-forest",
    image: philosophy,
    slug: "philosophy",
  },
  {
    topic: "Self-Improvement",
    description:
      "Discover strategies and insights for personal growth and development.",
    bg: "bg-light-forest",
    image: selfhelp,
    slug: "self-improvement",
  },
  {
    topic: "History",
    description:
      "Ride the ups and downs of human civilization and uncover the impact of the past on the present and future.",
    bg: "bg-light-gold",
    image: history,
    slug: "history",
  },
  {
    topic: "Economics",
    description:
      "Join the exploration of economic theories and their real-world applications.",
    bg: "bg-dark-forest",
    image: economics,
    invert: true,
    slug: "economics",
  },
  {
    topic: "Big Ideas",
    description:
      "Engage with contemporary analyses on current events and societal trends.",
    bg: "bg-primary",
    image: commentary,
    invert: true,
    slug: "big-ideas",
  },
];

export default topics;
