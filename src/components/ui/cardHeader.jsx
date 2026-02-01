// components/ui/CardHeader.jsx
"use client";

import React from "react";
import clsx from "clsx";

export const CardHeader = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "p-4 border-b border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};
