import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";
import {
  PageCta,
  PageHero,
  ProcessSteps,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";

export const metadata: Metadata = {
  title: "For Creators",
  description: "Editing support and production workflow for creators.",
};
const process = ["Brief", "Match", "Edit", "Review", "Deliver"] as const;

export default function CreatorsPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="For creators"
        marker="C—01"
        title={
          <>
            Build the story.
            <br />
            <em>Find the right edit.</em>
          </>
        }
        description="KLYP helps creators find editing support and establish a clear production workflow—from the first brief through delivery."
      >
        <TextLink href="/contact?intent=creator">Start a creator project</TextLink>
      </PageHero>
      <Section className={styles.warmBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / Two routes</Eyebrow>
            <span>Creator support</span>
          </div>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              Start with the way
              <br />
              you want to work.
            </h2>
            <p>
              The studio-led path is the current point of entry. Direct editor
              exploration is prepared as a future public route.
            </p>
          </div>
          <div className={styles.splitCards}>
            <article>
              <span>Available foundation / 01</span>
              <h3>Let KLYP find the right editor or team.</h3>
              <p>
                Share the direction, format, timing, and support you need. KLYP can use
                that context to shape the right approach.
              </p>
              <TextLink href="/contact?intent=creator">Start with a brief</TextLink>
            </article>
            <article>
              <span>Future route / 02</span>
              <h3>Explore editors directly.</h3>
              <p>
                A future discovery experience for reviewing available editorial talent
                and finding a suitable fit.
              </p>
              <Link className={styles.quietLink} href="/editors">
                See the editor ecosystem <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </Container>
      </Section>
      <Section className={styles.darkBand}>
        <Container size="wide">
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              A clear workflow.
              <br />
              <em>Room for the craft.</em>
            </h2>
            <p>
              Each engagement will be shaped around the project. This sequence
              establishes the working foundation without promising a fixed service
              model.
            </p>
          </div>
          <ProcessSteps items={process} label="Creator project process" />
          <div className={styles.processNote}>
            <span>Review is collaborative</span>
            <p>
              Project details, review rounds, timelines, and delivery expectations will
              be confirmed before work begins.
            </p>
          </div>
        </Container>
      </Section>
      <PageCta
        eyebrow="Creator enquiries"
        title={
          <>
            Bring us
            <br />
            <em>the brief.</em>
          </>
        }
        description="Tell KLYP what you are making and where editing support is needed."
        href="/contact?intent=creator"
        label="Start a creator project"
        secondary={{ href: "/work", label: "View work structure" }}
      />
    </main>
  );
}
