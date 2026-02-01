// components/ui/CardTitle.jsx
"use client";

import React from "react";
import clsx from "clsx";

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "text-xl font-semibold text-gray-900 dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};
