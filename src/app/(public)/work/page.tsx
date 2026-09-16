import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MediaFrame } from "@/components/media/media-frame";
import { Eyebrow } from "@/components/ui/eyebrow";
import { portfolioCategories, portfolioItems } from "@/config/portfolio";
import {
  PageCta,
  PageHero,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected KLYP work cleared for public portfolio display.",
};

export default function WorkPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="Work / Portfolio"
        marker="W-01"
        title={
          <>
            The work
            <br />
            <em>lives in motion.</em>
          </>
        }
        description="Selected work is published here only when project details and public media are approved."
      />
      <Section className={styles.darkBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / Selected work</Eyebrow>
            <span>Approved media only</span>
          </div>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              A considered frame
              <br />
              for every format.
            </h2>
            <p>
              Seven approved edits, presented with their original project thumbnails and
              direct video links.
            </p>
          </div>
          <ul className={styles.filters} aria-label="Portfolio categories">
            {["All", ...portfolioCategories].map((category, index) => (
              <li
                className={index === 0 ? styles.filterActive : undefined}
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className={styles.workGrid}>
            {portfolioItems.map((item, index) => (
              <article
                className={`${styles.projectCard} ${
                  index === 0 ? styles.projectCardFeatured : ""
                }`}
                key={item.id}
              >
                <a
                  aria-label={`Open video: ${item.title}`}
                  className={styles.projectLink}
                  href={item.videoUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MediaFrame
                    className={styles.projectMedia}
                    ratio="cinematic"
                    thumbnailAlt={item.title}
                    thumbnailSrc={item.thumbnailSrc}
                  >
                    <span className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </MediaFrame>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectMeta}>
                      <span>{item.creatorName}</span>
                      <span>{item.category}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <div className={styles.projectFooter}>
                      <span>{item.role}</span>
                      <span>Watch on YouTube ↗</span>
                    </div>
                  </div>
                </a>
              </article>
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
