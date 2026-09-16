export const portfolioCategories = ["Gaming / Esports", "Long-form"] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  creatorName: string;
  category: PortfolioCategory;
  role: string;
  thumbnailSrc: string;
  videoUrl: string;
  featured: boolean;
  shortDescription: string;
};

// Titles and creator names were verified against the supplied YouTube videos.
// Every public entry must retain both its approved local thumbnail and exact video URL.
export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: "bulky-star-wither-storm",
    title: "I BUILD THE WITHER STORM in Minecraft Hardcore...",
    creatorName: "Bulky Star",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/bulky-star-wither-storm.png",
    videoUrl: "https://youtu.be/PHliG9iO_aQ?si=laQrl2BYsF1otFO8",
    featured: true,
    shortDescription: "Minecraft Hardcore edit shaped around a cinematic boss build.",
  },
  {
    id: "flame-playz-cut-any-block",
    title: "Minecraft, But You Can CUT Any Block!",
    creatorName: "Flame playz",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/minecraft-cut-any-block.png",
    videoUrl: "https://youtu.be/jLsCPlqmO5w?si=0XGEjPAqB3SejyXZ",
    featured: true,
    shortDescription:
      "Minecraft challenge edit built around discovery and progression.",
  },
  {
    id: "mortal-joker-rega",
    title: "Never Play BGMI with Joker & Rega 😂",
    creatorName: "MortaL",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/mortal-joker-rega.png",
    videoUrl: "https://youtu.be/oyinJEYW0kE?si=1jjfJ6S8vpTvGYSj",
    featured: true,
    shortDescription:
      "BGMI highlights edit focused on creator chemistry and reactions.",
  },
  {
    id: "mralpha-scary-entity",
    title: "How I Became a SCARY ENTITY In Minecraft",
    creatorName: "MrAlpha",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/minecraft-scary-entity.png",
    videoUrl: "https://youtu.be/KaAQA4Rp6xQ?si=tTVJ9KKfVh0pSnJU",
    featured: true,
    shortDescription: "Minecraft transformation edit with challenge-led story pacing.",
  },
  {
    id: "gaming-guru-most-finishes",
    title: "Most Finishes By Godlike Members | World Record 🤯 | Gaming Guru",
    creatorName: "Gaming Guru",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/gaming-guru-most-finishes.png",
    videoUrl: "https://youtu.be/im-c-d8ZZ1w?si=RmELqZ_tWfrsxwlO",
    featured: false,
    shortDescription:
      "Competitive BGMI highlights shaped around a single-match record.",
  },
  {
    id: "sarcastic-monk-moppy-meme-review",
    title: "Funniest Meme Review with MOPPY || WET CHALLENGE💦 😂😂",
    creatorName: "Sarcastic Monk",
    category: "Long-form",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/sarcastic-monk-meme-review.png",
    videoUrl: "https://youtu.be/JAeVBIOILf4?si=K7X9Qk4culoswrxE",
    featured: false,
    shortDescription: "Meme review edit built around reactions and comedic timing.",
  },
  {
    id: "mortal-among-us-investigator",
    title: "When Mortal Became the Investigator in Among Us 🕵️‍♂️",
    creatorName: "MortaL",
    category: "Gaming / Esports",
    role: "Video Editor",
    thumbnailSrc: "/portfolio/mortal-among-us.png",
    videoUrl: "https://youtu.be/WVhQVcJ-rzQ?si=u8BA7HtNeSMOKgbj",
    featured: false,
    shortDescription: "Among Us edit focused on timing, reactions, and story flow.",
  },
];

export const homepagePortfolioItems = portfolioItems
  .filter((item) => item.featured)
  .slice(0, 4);
