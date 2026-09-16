export const publicNavigation = [
  { href: "/work", label: "Work" },
  { href: "/creators", label: "For creators" },
  { href: "/editors", label: "For editors" },
  { href: "/about", label: "About" },
] as const;

export const publicActions = {
  creator: { href: "/contact?intent=creator", label: "Start a project" },
  editor: { href: "/apply/editor", label: "Apply as editor" },
} as const;
