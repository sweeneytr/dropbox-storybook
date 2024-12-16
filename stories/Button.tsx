import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
};

export const Button = ({
  primary = false,
  backgroundColor,
  size = "medium",
  label,
}: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        "rounded-full",
        primary && "text-white bg-blue-500",
        !primary &&
          "text-gray-600 shadow-inner border border-gray-300 border-solid",
        size == "small" && "text-xs px-4 py-2",
        size == "medium" && "text-md px-4 py-2",
        size == "large" && "text-2xl px-6 py-4"
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {label}
    </button>
  );
};
