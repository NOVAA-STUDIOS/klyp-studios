import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  PageCta,
  PageHero,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";

export const metadata: Metadata = {
  title: "About",
  description: "The purpose and principles behind KLYP STUDIOS.",
};
const principles = [
  ["Craft", "The edit should serve the story, not distract from it."],
  ["Timing", "Pacing gives images meaning and moments weight."],
  ["Trust", "Clear expectations and honest communication protect the work."],
  ["Growth", "Editors become stronger through practice, guidance, and feedback."],
  ["Consistency", "A premium standard depends on repeatable discipline."],
  [
    "Creator-first delivery",
    "The workflow should support the creator and the intent behind the content.",
  ],
] as const;

export default function AboutPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="About KLYP"
        marker="A—01"
        title={
          <>
            A studio built
            <br />
            <em>around the edit.</em>
          </>
        }
        description="KLYP is being built as both a video-editing studio for creators and a talent ecosystem for editors developing toward real work."
      />
      <Section className={styles.warmBand}>
        <Container size="wide">
          <div className={styles.aboutPurpose}>
            <Eyebrow>01 / Purpose</Eyebrow>
            <h2>
              Creators need strong editors.
              <br />
              Editors need a path to become stronger.
            </h2>
            <div>
              <p>
                KLYP connects those needs through a shared focus on craft, structure,
                and responsible delivery.
              </p>
              <p>
                The public studio and editor ecosystem will evolve together as final
                workflows, people, and content are confirmed.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className={styles.surfaceBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>02 / Principles</Eyebrow>
            <span>How the system should behave</span>
          </div>
          <div className={styles.principles}>
            {principles.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className={styles.founderBand}>
        <Container className={styles.founderGrid} size="wide">
          <Eyebrow>03 / Founder story</Eyebrow>
          <p className={styles.founderGhost} aria-hidden="true">
            ORIGIN
          </p>
          <div className={styles.founderMedia}>
            <span>Future founder film / portrait</span>
            <small>Confirmed media pending</small>
          </div>
          <h2>
            The origin deserves
            <br />
            the right telling.
          </h2>
          <div className={styles.founderCopy}>
            <p>
              The confirmed founder perspective, personal story, and media will be added
              here when they are ready for public release.
            </p>
            <span>
              No name, biography, timeline, or achievements have been assumed.
            </span>
          </div>
        </Container>
      </Section>
      <PageCta
        eyebrow="Two paths"
        title={
          <>
            Make the work.
            <br />
            <em>Build the craft.</em>
          </>
        }
        description="Choose the route that fits where you are entering the KLYP ecosystem."
        href="/contact?intent=creator"
        label="Start a creator project"
        secondary={{ href: "/apply/editor", label: "Apply as editor" }}
      />
    </main>
  );
}
