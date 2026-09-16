import type { InputHTMLAttributes, ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

import styles from "./public-pages.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  marker: string;
  children?: ReactNode;
};

export function PageHero({
  children,
  description,
  eyebrow,
  marker,
  title,
}: PageHeroProps) {
  return (
    <Section className={styles.pageHero} spacing="none">
      <Container className={styles.heroInner} size="wide">
        <div className={styles.heroRail} aria-hidden="true">
          <span>{marker}</span>
          <span>KLYP / STUDIO</span>
        </div>
        <Eyebrow className={styles.heroEyebrow}>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <div className={styles.heroAside}>
          <p>{description}</p>
          {children}
        </div>
      </Container>
    </Section>
  );
}

type ProcessStepsProps = { items: readonly string[]; label?: string };

export function ProcessSteps({ items, label = "Process" }: ProcessStepsProps) {
  return (
    <ol className={styles.process} aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ol>
  );
}

type PageCtaProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  href: string;
  label: string;
  secondary?: { href: string; label: string };
};

export function PageCta({
  description,
  eyebrow,
  href,
  label,
  secondary,
  title,
}: PageCtaProps) {
  return (
    <Section className={styles.pageCta}>
      <Container className={styles.ctaGrid} size="wide">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <div>
          <p>{description}</p>
          <div className={styles.ctaActions}>
            <Button href={href}>{label}</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type FieldBaseProps = {
  label: string;
  name: string;
  hint?: string;
  optional?: boolean;
};

type TextFieldProps = FieldBaseProps & {
  type?: "text" | "email" | "url";
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
};

function FieldLabel({ label, optional }: Pick<FieldBaseProps, "label" | "optional">) {
  return (
    <span className={styles.fieldLabel}>
      <span>{label}</span>
      <small>{optional ? "Optional" : "Required"}</small>
    </span>
  );
}

export function TextField({ hint, label, name, optional, ...props }: TextFieldProps) {
  const id = `field-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <label className={styles.field} htmlFor={id}>
      <FieldLabel label={label} optional={optional} />
      <input
        id={id}
        name={name}
        required={!optional}
        aria-describedby={hintId}
        {...props}
      />
      {hint ? <small id={hintId}>{hint}</small> : null}
    </label>
  );
}

type SelectFieldProps = FieldBaseProps & { options: readonly string[] };

export function SelectField({
  hint,
  label,
  name,
  optional,
  options,
}: SelectFieldProps) {
  const id = `field-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <label className={styles.field} htmlFor={id}>
      <FieldLabel label={label} optional={optional} />
      <select
        id={id}
        name={name}
        defaultValue=""
        required={!optional}
        aria-describedby={hintId}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {hint ? <small id={hintId}>{hint}</small> : null}
    </label>
  );
}

type TextareaFieldProps = FieldBaseProps & { placeholder?: string };

export function TextareaField({
  hint,
  label,
  name,
  optional,
  placeholder,
}: TextareaFieldProps) {
  const id = `field-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <label className={`${styles.field} ${styles.fieldWide}`} htmlFor={id}>
      <FieldLabel label={label} optional={optional} />
      <textarea
        id={id}
        name={name}
        rows={6}
        required={!optional}
        aria-describedby={hintId}
        placeholder={placeholder}
      />
      {hint ? <small id={hintId}>{hint}</small> : null}
    </label>
  );
}

type CheckboxFieldProps = {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
};

export function CheckboxField({ hint, label, name, required }: CheckboxFieldProps) {
  const id = `field-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div className={styles.checkboxField}>
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        aria-describedby={hintId}
      />
      <label htmlFor={id}>{label}</label>
      {hint ? <small id={hintId}>{hint}</small> : null}
    </div>
  );
}

type FormSectionProps = { index: string; legend: string; children: ReactNode };

export function FormSection({ children, index, legend }: FormSectionProps) {
  return (
    <fieldset className={styles.formSection}>
      <legend>
        <span>{index}</span>
        {legend}
      </legend>
      <div className={styles.formGrid}>{children}</div>
    </fieldset>
  );
}

type FormFoundationProps = {
  title: string;
  note: string;
  children: ReactNode;
  submitLabel: string;
};

export function FormFoundation({
  children,
  note,
  submitLabel,
  title,
}: FormFoundationProps) {
  const noteId = title.toLowerCase().replaceAll(" ", "-");
  return (
    <div className={styles.formShell}>
      <div className={styles.formHeading}>
        <span>Online submissions</span>
        <h2>{title}</h2>
        <p id={noteId}>{note}</p>
      </div>
      <form aria-describedby={noteId} data-status="inactive">
        <div className={styles.formNotice} role="note">
          <span aria-hidden="true" />
          Online submissions are opening soon.
        </div>
        {children}
        <div className={styles.formEnd}>
          <p>Nothing entered here is submitted or stored.</p>
          <button type="button" disabled>
            {submitLabel}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export { styles as publicPageStyles };
