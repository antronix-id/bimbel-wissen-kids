"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  direction = "horizontal",
  speed = 30,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const isVertical = direction === "vertical";
  const [isHovered, setIsHovered] = useState(false);

  const duration = isHovered && speedOnHover ? speedOnHover : speed;

  return (
    <div
      className={cn(
        "overflow-hidden flex select-none",
        isVertical ? "flex-col h-full" : "flex-row w-full",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6 will-change-transform",
          isVertical ? "flex-col" : "flex-row"
        )}
        style={{
          animationName: isVertical ? "infinite-scroll-vertical" : "infinite-scroll-horizontal",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export default InfiniteSlider;
