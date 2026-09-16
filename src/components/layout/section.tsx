import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./section.module.css";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "none";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  const classes = [styles.section, spacing !== "default" && styles[spacing], className]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
