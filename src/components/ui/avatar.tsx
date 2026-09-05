"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full bg-slate-100",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string; src?: string }
>(({ className, alt = "Avatar", src, ...props }, ref) => {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex size-full items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700 uppercase select-none",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
