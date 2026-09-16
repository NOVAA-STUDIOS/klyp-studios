import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MediaFrame } from "@/components/media/media-frame";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";
import { publicActions } from "@/config/navigation";

import { editorJourney, portfolioSlots } from "./content";
import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <main className={styles.page} id="main-content">
      <Section className={styles.hero} spacing="none">
        <Container className={styles.heroInner} size="wide">
          <div className={styles.heroContent}>
            <Eyebrow className={styles.heroLabel}>
              Editing studio / talent ecosystem
            </Eyebrow>
            <h1>
              <span>Stories,</span>
              <span>shaped in</span>
              <span className={styles.heroLast}>the edit.</span>
            </h1>
            <p className={styles.heroCopy}>
              Editing support for creators. A selective path for editors to train, grow,
              and access real work opportunities.
            </p>
            <div className={styles.heroActions}>
              <Button href={publicActions.creator.href}>
                {publicActions.creator.label}
              </Button>
              <Button href={publicActions.editor.href} variant="secondary">
                {publicActions.editor.label}
              </Button>
            </div>
          </div>
          <MediaFrame className={styles.heroFrame} ratio="cinematic">
            <div className={styles.heroFrameLight} aria-hidden="true" />
            <p>
              Showreel reserved
              <br />
              <span>Approved production media to follow</span>
            </p>
            <div className={styles.frameMeta}>
              <span>00:00:00:00</span>
              <span>2.39 : 1 / MASTER</span>
            </div>
          </MediaFrame>
        </Container>
      </Section>

      <Section className={styles.introduction}>
        <Container size="wide">
          <div className={styles.sectionMarker}>
            <Eyebrow>01 / The ecosystem</Eyebrow>
            <span>KLYP STUDIOS®</span>
          </div>
          <div className={styles.introGrid}>
            <h2>
              One studio.
              <br />
              <em>Two ways forward.</em>
            </h2>
            <p className={styles.introLead}>
              Creators need thoughtful editing support. Editors need the structure to
              sharpen their craft and reach meaningful opportunities.
            </p>
            <p className={styles.introBody}>
              KLYP is being built around both sides: a studio experience for creator-led
              work, and a development path for ambitious editors.
            </p>
          </div>
          <div className={styles.audienceGrid}>
            <article>
              <span>For creators / 01</span>
              <h3>Editing support shaped around the work.</h3>
              <p>
                Start a project with KLYP. The option to explore editors directly is
                planned for a later release.
              </p>
              <TextLink href="/creators">Explore the creator path</TextLink>
            </article>
            <article>
              <span>For editors / 02</span>
              <h3>Develop the craft. Prepare for real work.</h3>
              <p>
                Apply for review, demonstrate your skill, train for free if selected,
                and prepare for real work opportunities.
              </p>
              <TextLink href="/editors">Explore the editor path</TextLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section className={styles.creatorSection}>
        <Container className={styles.creatorGrid} size="wide">
          <div>
            <Eyebrow>02 / For creators</Eyebrow>
            <p className={styles.largeIndex}>C—01</p>
          </div>
          <div className={styles.creatorMain}>
            <h2>
              Need the right
              <br />
              editor <em>or team?</em>
            </h2>
            <p>
              Start with KLYP and let the studio shape the right editing support around
              your project.
            </p>
            <Button href={publicActions.creator.href}>Start a creator project</Button>
          </div>
          <div className={styles.creatorOptions}>
            <Link href="/contact?intent=creator">
              <span>01</span>
              <div>
                <strong>Let KLYP find the fit</strong>
                <p>Share the project direction and begin a conversation.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href="/editors">
              <span>02</span>
              <div>
                <strong>Explore editors</strong>
                <p>A future route for discovering available editorial talent.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className={styles.editorSection}>
        <Container size="wide">
          <div className={styles.editorHeading}>
            <Eyebrow>03 / For editors</Eyebrow>
            <h2>
              A path built
              <br />
              around <em>progress.</em>
            </h2>
            <p>
              The process is selective and designed to connect skill development with
              the standards of real creator work.
            </p>
          </div>
          <ol className={styles.journey}>
            {editorJourney.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <Button href={publicActions.editor.href} variant="secondary">
            Begin an editor application
          </Button>
        </Container>
      </Section>

      <Section className={styles.workSection}>
        <Container size="wide">
          <div className={styles.workHeading}>
            <Eyebrow>04 / Work</Eyebrow>
            <h2>
              Proof belongs
              <br />
              in the frame.
            </h2>
            <p>
              Portfolio media will live here once projects and public permissions are
              confirmed.
            </p>
            <TextLink href="/work">View work structure</TextLink>
          </div>
          <div className={styles.portfolioGrid}>
            {portfolioSlots.map((slot, index) => (
              <MediaFrame
                className={`${styles.portfolioFrame} ${styles[slot.ratio]}`}
                ratio={
                  slot.ratio === "portrait"
                    ? "portrait"
                    : slot.ratio === "wide"
                      ? "cinematic"
                      : "landscape"
                }
                key={`${slot.label}-${slot.format}`}
              >
                <span className={styles.slotNumber}>0{index + 1}</span>
                <span className={styles.slotStatus}>Media reserved</span>
                <div className={styles.slotLabel}>
                  <p>{slot.label}</p>
                  <span>{slot.format}</span>
                </div>
              </MediaFrame>
            ))}
          </div>
        </Container>
      </Section>

      <Section className={styles.visionSection}>
        <Container className={styles.visionGrid} size="wide">
          <Eyebrow>05 / Founder vision</Eyebrow>
          <p className={styles.visionGhost} aria-hidden="true">
            WHY
          </p>
          <h2>
            The story behind
            <br />
            the studio comes next.
          </h2>
          <div>
            <p>
              This space is reserved for the confirmed founder perspective and the
              reason KLYP exists, once the final story and media are ready.
            </p>
            <span>Reserved content boundary / no placeholder claims</span>
          </div>
        </Container>
      </Section>

      <Section className={styles.finalCta}>
        <Container size="wide">
          <Eyebrow>06 / Start here</Eyebrow>
          <h2>
            Choose your
            <br />
            <em>next frame.</em>
          </h2>
          <div className={styles.splitActions}>
            <Link href={publicActions.creator.href}>
              <span>For creators</span>
              <strong>Start a project</strong>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href={publicActions.editor.href}>
              <span>For editors</span>
              <strong>Apply to KLYP</strong>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
