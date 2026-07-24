"use client";

import { useRef, type CSSProperties, type PropsWithChildren } from "react";

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  color?: string;
}>;

export default function SpotlightCard({
  children,
  className = "",
  color = "rgba(34, 211, 238, 0.16)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const updateSpotlight: React.PointerEventHandler<HTMLElement> = (event) => {
    if (!cardRef.current || event.pointerType === "touch") return;

    const bounds = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`,
    );
    cardRef.current.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`,
    );
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={updateSpotlight}
      className={`spotlight-card ${className}`}
      style={{ "--spotlight-color": color } as CSSProperties}
    >
      {children}
    </article>
  );
}
