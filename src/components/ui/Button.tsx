import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg transition",
        variant === "primary" && "bg-(--color-primary) text-white",
        variant === "outline" && "border border-gray-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
