"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll the window to top immediately on navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also reset scroll position for any internal scrollable main containers
    const scrollables = document.querySelectorAll("main, [data-scroll-container]");
    scrollables.forEach((el) => {
      if (el.scrollTop > 0) {
        el.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
  }, [pathname]);

  return null;
}
