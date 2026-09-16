import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MediaFrame } from "@/components/media/media-frame";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  PageCta,
  PageHero,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";

export const metadata: Metadata = {
  title: "Work",
  description: "The future home of approved KLYP editing work and showreels.",
};

const categories = [
  "All",
  "Gaming",
  "Long-form",
  "Shorts",
  "Storytelling",
  "Motion",
  "Other",
] as const;
const slots = [
  "Cinematic master",
  "Vertical cut",
  "Long-form cut",
  "Motion study",
  "Story sequence",
  "Additional work",
] as const;

export default function WorkPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="Work / Portfolio"
        marker="W—01"
        title={
          <>
            The work
            <br />
            <em>lives in motion.</em>
          </>
        }
        description="This library is prepared for KLYP projects that are approved for public display. Until then, every frame below remains an explicit media reservation."
      />
      <Section className={styles.darkBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / Library structure</Eyebrow>
            <span>Approved media only</span>
          </div>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              A flexible frame
              <br />
              for every format.
            </h2>
            <p>
              Category and media structures are ready for future showreels, project
              films, and case-study context without inventing work that is not yet
              public.
            </p>
          </div>
          <ul className={styles.filters} aria-label="Future portfolio categories">
            {categories.map((category, index) => (
              <li
                className={index === 0 ? styles.filterActive : undefined}
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className={styles.workGrid}>
            {slots.map((slot, index) => (
              <MediaFrame
                className={styles.workFrame}
                ratio={
                  index === 0
                    ? "cinematic"
                    : index === 1 || index === 4
                      ? "portrait"
                      : "landscape"
                }
                key={slot}
              >
                <span className={styles.frameIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.frameStatus}>Coming soon</span>
                <div className={styles.frameFooter}>
                  <p>{slot}</p>
                  <span>Coming soon</span>
                </div>
              </MediaFrame>
            ))}
          </div>
        </Container>
      </Section>
      <PageCta
        eyebrow="For creators"
        title={
          <>
            Have a project
            <br />
            <em>to shape?</em>
          </>
        }
        description="Start a conversation about the editing support your project needs."
        href="/contact?intent=creator"
        label="Discuss a project"
      />
    </main>
  );
}
