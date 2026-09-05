"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = 
  | "default" 
  | "secondary" 
  | "whatsapp" 
  | "outline" 
  | "ghost"
  | "navbar"
  | "tactile";

export type ButtonSize = 
  | "sm" 
  | "md" 
  | "lg" 
  | "xl" 
  | "icon" 
  | "icon-lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
}

export function buttonVariants({
  variant = "default",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  const baseStyles = 
    "inline-flex items-center justify-center gap-2 font-bold cursor-pointer select-none transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b9413] disabled:opacity-60 disabled:pointer-events-none";

  const variantStyles: Record<ButtonVariant, string> = {
    // Soft Glow Utama (User Custom Green #2b9413 with text-white)
    default:
      "bg-gradient-to-t from-[#228b0f] to-[#32a818] hover:from-[#299813] hover:to-[#3bc01e] text-white border-2 border-white/20 shadow-xl shadow-[#2b9413]/40 ring-4 ring-[#2b9413]/25 hover:brightness-110 hover:-translate-y-0.5 active:brightness-100 active:translate-y-0",
    
    // Soft Glow Sekunder (Deep Forest Green with text-white)
    secondary:
      "bg-gradient-to-t from-[#1b6b0c] to-[#258a12] hover:from-[#207a0e] hover:to-[#2d9e15] text-white border-2 border-white/20 shadow-lg shadow-[#1b6b0c]/35 ring-4 ring-[#1b6b0c]/20 hover:brightness-110 hover:-translate-y-0.5 active:brightness-100 active:translate-y-0",
    
    // Soft Glow WhatsApp (Vibrant Green matching user color with text-white)
    whatsapp:
      "bg-gradient-to-t from-[#1e800e] to-[#2ea014] hover:from-[#259412] hover:to-[#36b31a] text-white border-2 border-white/20 shadow-xl shadow-[#2b9413]/40 ring-4 ring-[#2b9413]/25 hover:brightness-110 hover:-translate-y-0.5 active:brightness-100 active:translate-y-0",
    
    // Soft Glow Outline (Translucent Green with text-white)
    outline:
      "bg-[#228b0f]/80 hover:bg-[#228b0f] text-white border-2 border-white/30 shadow-md shadow-[#2b9413]/20 ring-4 ring-[#2b9413]/20 hover:-translate-y-0.5 active:translate-y-0",
    
    // Ghost (Minimalist Green)
    ghost:
      "bg-transparent text-white hover:bg-[#228b0f]/20 border-2 border-transparent",

    // Tactile / Neo-brutalist Navbar Style from User (border-2 border-black, shadow-md, translate active)
    navbar:
      "shadow-md hover:shadow active:shadow-none bg-[#2b9413] hover:bg-[#22840d] text-white border-2 border-black transition hover:translate-y-0.5 active:translate-y-1.5 active:translate-x-0.5 rounded-xl font-bold",

    tactile:
      "shadow-md hover:shadow active:shadow-none bg-[#2b9413] hover:bg-[#22840d] text-white border-2 border-black transition hover:translate-y-0.5 active:translate-y-1.5 active:translate-x-0.5 rounded-xl font-bold",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-xs rounded-xl",
    md: "h-11 px-6 text-sm rounded-2xl",
    lg: "h-14 px-8 text-base rounded-2xl",
    xl: "h-16 px-12 text-lg sm:text-xl rounded-2xl",
    icon: "h-11 w-11 rounded-2xl p-0 flex items-center justify-center shrink-0",
    "icon-lg": "h-16 w-16 text-xl rounded-2xl p-0 flex items-center justify-center shrink-0",
  };

  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      href,
      target,
      rel,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const combinedClasses = buttonVariants({ variant, size, className });

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("//") || href.startsWith("https://wa.me");
      return (
        <Link
          href={href}
          target={target || (isExternal ? "_blank" : undefined)}
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          className={combinedClasses}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
