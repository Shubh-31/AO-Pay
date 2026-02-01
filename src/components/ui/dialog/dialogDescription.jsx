import React from "react";

export function DialogDescription({ children, className = "" }) {
  return (
    <p
      className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}
    >
      {children}
    </p>
  );
}