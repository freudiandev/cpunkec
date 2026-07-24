"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(root.querySelectorAll("[data-reveal], [data-hero-item]"), {
          clearProps: "all",
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.7,
        })
        .from(
          "[data-hero-item]",
          {
            autoAlpha: 0,
            y: 28,
            duration: 0.8,
            stagger: 0.09,
          },
          "-=0.35",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 52,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "clamp(top 86%)",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.to("[data-parallax]", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.fromTo(
        "[data-scroll-progress]",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className="home-experience">
      <div className="scroll-signal" aria-hidden="true">
        <span>SCROLL</span>
        <i data-scroll-progress />
      </div>
      {children}
    </div>
  );
}
