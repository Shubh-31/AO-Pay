import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 ${className}`}
    >
      {children}
    </div>
  );
}
