import type { AnchorHTMLAttributes } from "react";
import styles from "./text-link.module.css";
export function TextLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={[styles.link, className].filter(Boolean).join(" ")} {...props} />
  );
}
