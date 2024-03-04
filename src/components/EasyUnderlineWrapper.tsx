import React from "react";
import { cn } from "../utils";

interface EasyUnderlineHoverProps extends React.HTMLAttributes<HTMLSpanElement> {
  show?: boolean | "auto";
}

export const EasyUnderlineHover = ({ show = "auto", className, ...props }: EasyUnderlineHoverProps) => {
  return (
    <span
      className={cn(`${show === "auto" && "bg-[length:0%_6px] hover:bg-[length:100%_6px]"}`, className)}
      style={{
        backgroundImage: "linear-gradient(rgba(35, 101, 228, 0.2), rgba(35, 101, 228, 0.2))",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        transition: "background-size .5s",
        ...(show !== "auto" ? { backgroundSize: show === true ? "100% 6px" : "0% 6px" } : {}),
      }}
      {...props}
    />
  );
};

interface EasyUnderlineAnimateProps extends React.HTMLAttributes<HTMLSpanElement> {
  delay?: number;
  duration?: number;
  size?: "sm" | "base";
}

export const EasyUnderlineAnimate = ({
  delay = 300,
  duration = 300,
  size = "base",
  className,
  ...props
}: EasyUnderlineAnimateProps) => {
  return (
    <span
      className={cn(`${size === "base" ? "animate-[label]" : "animate-[label-sm]"}`, className)}
      style={{
        backgroundSize: `0% ${size === "base" ? "6px" : "3px"}`,
        backgroundImage: "linear-gradient(rgba(35, 101, 228, 0.2), rgba(35, 101, 228, 0.2))",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
      {...props}
    />
  );
};
