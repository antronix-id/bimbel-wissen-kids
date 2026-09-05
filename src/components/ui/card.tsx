"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Tiles, TilesProps } from "@/components/ui/tiles";

export function CardBackground({
  rows = 14,
  cols = 8,
  tileSize = "md",
  className,
  tileClassName,
}: {
  rows?: number;
  cols?: number;
  tileSize?: "sm" | "md" | "lg";
  className?: string;
  tileClassName?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-auto z-0 select-none opacity-55 blur-[0.4px]",
        className
      )}
      aria-hidden="true"
    >
      <Tiles rows={rows} cols={cols} tileSize={tileSize} tileClassName={tileClassName} />
    </div>
  );
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  enableTiles?: boolean;
  tileRows?: number;
  tileCols?: number;
  tileSize?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  enableTiles = true,
  tileRows = 14,
  tileCols = 8,
  tileSize = "md",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "card-elevation card-elevation-hover relative overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {enableTiles && (
        <CardBackground rows={tileRows} cols={tileCols} tileSize={tileSize} />
      )}
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>
    </div>
  );
}

export default Card;
