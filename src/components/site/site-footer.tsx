import Link from "next/link";

import { publicActions, publicNavigation } from "@/config/navigation";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <Link className={styles.wordmark} href="/">
            KLYP STUDIOS®
          </Link>
          <p>Editing studio and talent ecosystem.</p>
          <span>India + worldwide</span>
        </div>
        <nav aria-label="Footer navigation">
          <p>Explore</p>
          {publicNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Footer actions">
          <p>Start here</p>
          <Link className={styles.actionLink} href={publicActions.creator.href}>
            {publicActions.creator.label}
          </Link>
          <Link className={styles.actionLink} href={publicActions.editor.href}>
            {publicActions.editor.label}
          </Link>
          <span>Online enquiries and applications are opening soon.</span>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} KLYP STUDIOS</p>
        <p>Editing studio · Talent ecosystem</p>
      </div>
    </footer>
  );
}
