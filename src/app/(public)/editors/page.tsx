import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  PageCta,
  PageHero,
  ProcessSteps,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";

export const metadata: Metadata = {
  title: "For Editors",
  description: "The selective KLYP development path for ambitious video editors.",
};
const journey = [
  "Apply",
  "Initial review",
  "Skill test",
  "Selection",
  "Free training",
  "Real work opportunities",
] as const;
const expectations = [
  ["Craft", "Care about every cut, transition, and detail."],
  ["Consistency", "Bring the same standard to every stage of the work."],
  ["Communication", "Keep context clear and respond with professionalism."],
  ["Deadlines", "Plan responsibly and communicate risks early."],
  ["Growth", "Stay open to feedback, practice, and continuous learning."],
] as const;

export default function EditorsPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="For editors"
        marker="E—01"
        title={
          <>
            Build the craft.
            <br />
            <em>Prepare for the work.</em>
          </>
        }
        description="KLYP is developing a selective path for ambitious editors: demonstrate your ability, earn selection, train within the ecosystem, and prepare for real creator work opportunities."
      />
      <Section className={styles.darkBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / The path</Eyebrow>
            <span>Selection required</span>
          </div>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              Progress is earned
              <br />
              one stage at a time.
            </h2>
            <p>
              Applications are reviewed before testing or training. Free training is
              intended for selected editors; applying does not guarantee selection,
              work, or income.
            </p>
          </div>
          <ProcessSteps items={journey} label="KLYP editor selection path" />
          <div className={styles.selectionNote}>
            <strong>Important</strong>
            <p>
              Real work opportunities may follow development and selection, but
              placement is not guaranteed.
            </p>
          </div>
        </Container>
      </Section>
      <Section className={styles.warmBand}>
        <Container size="wide">
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              What the work
              <br />
              <em>asks of you.</em>
            </h2>
            <p>Software matters. The habits behind the work matter more.</p>
          </div>
          <div className={styles.expectations}>
            {expectations.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <PageCta
        eyebrow="Editor applications"
        title={
          <>
            Ready to show
            <br />
            <em>how you edit?</em>
          </>
        }
        description="Review the application foundation and prepare accurate information about your experience and work."
        href="/apply/editor"
        label="Apply as an editor"
      />
    </main>
  );
}
