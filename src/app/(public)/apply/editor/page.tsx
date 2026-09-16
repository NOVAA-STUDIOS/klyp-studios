import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  CheckboxField,
  FormFoundation,
  FormSection,
  PageHero,
  ProcessSteps,
  SelectField,
  TextareaField,
  TextField,
  publicPageStyles as styles,
} from "@/features/public-pages/page-elements";
import {
  contentTypes,
  editorExperienceLevels,
} from "@/features/public-pages/form-config";

export const metadata: Metadata = {
  title: "Editor Application",
  description: "The application path for the selective KLYP editor programme.",
};
const journey = [
  "Apply",
  "Initial review",
  "Skill test",
  "Selection",
  "Free training",
  "Real work opportunities",
] as const;
export default function EditorApplicationPage() {
  return (
    <main className={styles.page} id="main-content">
      <PageHero
        eyebrow="Editor application"
        marker="E—02"
        title={
          <>
            Show the work.
            <br />
            <em>Start the path.</em>
          </>
        }
        description="This application is for editors interested in KLYP's selective development path. Online applications are opening soon."
      />
      <Section className={styles.darkBand}>
        <Container size="wide">
          <div className={styles.chapter}>
            <Eyebrow>01 / Before applying</Eyebrow>
            <span>Review comes first</span>
          </div>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>
              Selection before
              <br />
              <em>training.</em>
            </h2>
            <p>
              Applications are reviewed before a skill test or selection decision. Free
              training is intended only for selected editors and does not guarantee
              work, hiring, or income.
            </p>
          </div>
          <ProcessSteps
            items={journey}
            label="Editor application and selection journey"
          />
        </Container>
      </Section>
      <Section className={styles.formBand}>
        <Container size="wide">
          <FormFoundation
            title="Editor application"
            note="These details will form the application when online submissions open. Nothing entered here is submitted, reviewed, or stored."
            submitLabel="Applications opening soon"
          >
            <FormSection index="01" legend="About you">
              <TextField
                label="Full name"
                name="fullName"
                autoComplete="name"
                placeholder="Your full name"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
              <TextField
                label="Location / timezone"
                name="locationTimezone"
                autoComplete="address-level2"
                placeholder="City, country, or UTC offset"
                optional
              />
            </FormSection>
            <FormSection index="02" legend="Editing practice">
              <SelectField
                label="Editing experience level"
                name="experienceLevel"
                options={editorExperienceLevels}
              />
              <SelectField
                label="Primary editing category"
                name="primaryCategory"
                options={contentTypes}
              />
              <TextField
                label="Portfolio link"
                name="portfolioUrl"
                type="url"
                inputMode="url"
                placeholder="https://"
                hint="A public link to work that represents your current ability."
              />
              <TextField
                label="Software / tools"
                name="softwareTools"
                placeholder="Your primary editing tools"
              />
              <TextField
                label="Weekly availability"
                name="weeklyAvailability"
                placeholder="Hours or working windows"
              />
            </FormSection>
            <FormSection index="03" legend="Intent and acknowledgement">
              <TextareaField
                label="Why KLYP"
                name="whyKlyp"
                placeholder="What do you want to develop, and why does this path fit?"
              />
              <CheckboxField
                name="acknowledgesSelection"
                required
                label="I understand that every application is reviewed, selection is required before free training, and applying does not guarantee training, work, hiring, salary, or income."
                hint="This acknowledgement will be required when applications become active."
              />
            </FormSection>
          </FormFoundation>
          <aside className={styles.applicationNote}>
            <Eyebrow>Review note</Eyebrow>
            <p>
              Accuracy matters more than polish. When applications open, share work and
              experience that represent your current ability honestly.
            </p>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
