import type { HTMLAttributes } from "react";
import styles from "./media-frame.module.css";
type MediaFrameProps = HTMLAttributes<HTMLDivElement> & {
  ratio?: "landscape" | "cinematic" | "portrait";
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  showPlayButton?: boolean;
};
export function MediaFrame({
  className,
  ratio = "landscape",
  showPlayButton = true,
  thumbnailAlt = "",
  thumbnailSrc,
  style,
  ...props
}: MediaFrameProps) {
  return (
    <div
      className={[
        styles.frame,
        thumbnailSrc && styles.hasThumbnail,
        !showPlayButton && styles.withoutPlayButton,
        styles[ratio],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      {...props}
    >
      {thumbnailSrc ? (
        <span
          aria-label={thumbnailAlt || undefined}
          className={styles.thumbnail}
          role={thumbnailAlt ? "img" : undefined}
          style={{ backgroundImage: `url("${thumbnailSrc}")` }}
        />
      ) : null}
      {props.children}
    </div>
  );
}
