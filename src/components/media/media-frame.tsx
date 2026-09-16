import type { HTMLAttributes } from "react";
import styles from "./media-frame.module.css";
type MediaFrameProps = HTMLAttributes<HTMLDivElement> & {
  ratio?: "landscape" | "cinematic" | "portrait";
};
export function MediaFrame({
  className,
  ratio = "landscape",
  ...props
}: MediaFrameProps) {
  return (
    <div
      className={[styles.frame, styles[ratio], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
