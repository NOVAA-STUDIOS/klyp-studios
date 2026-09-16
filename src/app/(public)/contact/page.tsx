import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  FormFoundation,
  FormSection,
  PageHero,
  SelectField,
  TextareaField,
  TextField,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";
import { contactInquiryTypes, contentTypes } from "@/features/public-pages/form-config";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Creator project and general enquiry foundation for KLYP STUDIOS.",
};
export default function ContactPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="Contact / Creators"
        marker="C—02"
        title={
          <>
            Start with
            <br />
            <em>the project.</em>
          </>
        }
        description="Share what you are making, the kind of editing support you need, and where you are in the process. This page is a UI foundation; enquiries are not submitted yet."
      />
      <Section className={styles.warmBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / Choose an intent</Eyebrow>
            <span>Conversation routing</span>
          </div>
          <div className={styles.intentGrid}>
            <article>
              <span>01</span>
              <h2>Start a creator project</h2>
              <p>
                For creators or teams looking for editing support around a specific
                piece of work.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>Discuss editor or talent support</h2>
              <p>
                For conversations about editorial capacity, team structure, or future
                talent access.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>General inquiry</h2>
              <p>
                For relevant questions that do not fit the project or editor-support
                paths.
              </p>
            </article>
          </div>
        </Container>
      </Section>
      <Section className={styles.formBand}>
        <Container size="wide">
          <FormFoundation
            title="Project enquiry"
            note="The fields establish the intended future enquiry structure. The submission backend is not connected."
            submitLabel="Submission unavailable"
          >
            <FormSection index="01" legend="About you">
              <TextField
                label="Name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
              <TextField
                label="Role / company / channel"
                name="roleCompanyChannel"
                autoComplete="organization"
                placeholder="Your role or creator context"
                hint="A channel or company name is enough where relevant."
              />
            </FormSection>
            <FormSection index="02" legend="Project context">
              <SelectField
                label="Inquiry type"
                name="inquiryType"
                options={contactInquiryTypes}
              />
              <SelectField
                label="Project / content type"
                name="contentType"
                options={contentTypes}
              />
              <TextField
                label="Expected timeline"
                name="expectedTimeline"
                placeholder="Target start or delivery window"
              />
              <TextField
                label="Budget range"
                name="budgetRange"
                placeholder="Optional range"
                hint="Useful context only; final pricing is not defined here."
                optional
              />
            </FormSection>
            <FormSection index="03" legend="The brief">
              <TextareaField
                label="Message"
                name="message"
                placeholder="Tell us about the project, its format, and the editing support you need."
                hint="Do not include confidential or sensitive information."
              />
            </FormSection>
          </FormFoundation>
        </Container>
      </Section>
    </main>
  );
}
