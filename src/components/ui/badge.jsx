// components/ui/Badge.jsx
"use client";

import React from "react";
import clsx from "clsx";

export const Badge = ({ children, variant = "default", className }) => {
  const baseStyles =
    "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full";

  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
    outline:
      "border border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-300",
    success:
      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    danger: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};
