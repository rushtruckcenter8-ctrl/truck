"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Client component that initialises AOS (Animate on Scroll).
 * Rendered once in the root layout so every page benefits.
 */
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return null;
}
