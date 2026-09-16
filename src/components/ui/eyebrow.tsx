import type { HTMLAttributes } from "react";
import styles from "./eyebrow.module.css";
export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={[styles.eyebrow, className].filter(Boolean).join(" ")} {...props} />
  );
}
