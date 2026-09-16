"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !Object.hasOwn(window, "IntersectionObserver")) {
      sections.forEach((section) => section.setAttribute("data-reveal-visible", ""));
      return;
    }

    sections.forEach((section) => {
      section.querySelectorAll<HTMLElement>("article, li").forEach((item, index) => {
        item.style.setProperty("--reveal-order", String(Math.min(index, 7)));
      });

      if (section.getBoundingClientRect().top < window.innerHeight * 0.92) {
        section.setAttribute("data-reveal-visible", "");
      }
    });

    root.setAttribute("data-motion", "ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal-visible", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    sections
      .filter((section) => !section.hasAttribute("data-reveal-visible"))
      .forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      root.removeAttribute("data-motion");
    };
  }, [pathname]);

  return null;
}
