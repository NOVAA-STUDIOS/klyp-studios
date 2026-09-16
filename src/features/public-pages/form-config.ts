export const contactInquiryTypes = [
  "Start a creator project",
  "Find editing support",
  "Explore editors",
  "General inquiry",
] as const;

export const contentTypes = [
  "Long-form YouTube",
  "Shorts/Reels",
  "Gaming/Esports",
  "Documentary/Storytelling",
  "Motion graphics",
  "Other",
] as const;

export const editorExperienceLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Professional",
] as const;

export type ContactInquiryDraft = {
  name: string;
  email: string;
  roleCompanyChannel: string;
  inquiryType: (typeof contactInquiryTypes)[number];
  contentType: (typeof contentTypes)[number];
  expectedTimeline: string;
  budgetRange?: string;
  message: string;
};

export type EditorApplicationDraft = {
  fullName: string;
  email: string;
  locationTimezone?: string;
  experienceLevel: (typeof editorExperienceLevels)[number];
  primaryCategory: (typeof contentTypes)[number];
  portfolioUrl: string;
  softwareTools: string;
  weeklyAvailability: string;
  whyKlyp: string;
  acknowledgesSelection: boolean;
};
