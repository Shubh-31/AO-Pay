import React from "react";

export function Label({ htmlFor, children, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      {children}
    </label>
  );
}