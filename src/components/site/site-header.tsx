import Link from "next/link";

import { publicActions, publicNavigation } from "@/config/navigation";

import styles from "./site-header.module.css";

function NavigationLinks() {
  return publicNavigation.map((item) => (
    <Link href={item.href} key={item.href}>
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.wordmark} href="/" aria-label="KLYP Studios home">
          KLYP<span>®</span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <NavigationLinks />
        </nav>
        <Link className={styles.headerCta} href={publicActions.creator.href}>
          {publicActions.creator.label}
          <span aria-hidden="true">↗</span>
        </Link>
        <details className={styles.mobileMenu}>
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
            <Link href={publicActions.creator.href}>{publicActions.creator.label}</Link>
            <Link href={publicActions.editor.href}>{publicActions.editor.label}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
