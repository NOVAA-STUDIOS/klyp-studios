import type { Metadata } from "next";

import { HomePage } from "@/features/home/home-page";

export const metadata: Metadata = {
  title: "KLYP STUDIOS — Video Editing Studio",
  description: "A video-editing studio and editor development ecosystem for creators.",
};

export default function Page() {
  return <HomePage />;
}
