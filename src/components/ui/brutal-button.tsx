"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  textColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  hasShadow?: boolean;
  shadowColor?: string;
  radius?: number;
  href?: string;
  target?: string;
  rel?: string;
}

export const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  (
    {
      className,
      color,
      textColor,
      hasBorder = true,
      borderColor,
      hasShadow = true,
      shadowColor,
      radius = 0,
      children,
      style,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const customStyles = {
      "--btn-bg": color || "var(--background, #ffffff)",
      "--btn-text": textColor || "var(--foreground, #000000)",
      "--btn-border": hasBorder ? borderColor || "var(--foreground, #000000)" : "transparent",
      "--btn-shadow": shadowColor || "var(--foreground, #000000)",
      "--btn-radius": `${radius}px`,
      ...style,
    } as React.CSSProperties;

    const baseClasses = cn(
      "inline-flex items-center justify-center font-bold transition-all duration-200 ease-in-out cursor-pointer select-none",
      hasBorder ? "border-2" : "border-0",
      hasShadow
        ? "shadow-[4px_4px_0px_var(--btn-shadow)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--btn-shadow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        : "active:scale-95",
      className
    );

    const inlineStyles = {
      backgroundColor: "var(--btn-bg)",
      color: "var(--btn-text)",
      borderColor: "var(--btn-border)",
      borderRadius: "var(--btn-radius)",
      ...customStyles,
    };

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          style={inlineStyles}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        style={inlineStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BrutalButton.displayName = "BrutalButton";

export default BrutalButton;
