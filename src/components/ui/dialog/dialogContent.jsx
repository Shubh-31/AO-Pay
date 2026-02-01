import React from "react";

export function DialogContent({ className = "", children }) {
  return (
    <div
      className={`bg-white dark:bg-neutral-900 rounded-lg shadow-lg ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
