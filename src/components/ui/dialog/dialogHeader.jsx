 import React from "react";

export function DialogHeader({ children, className = "" }) {
  return (
    <div
      className={`${className}`}
    >
      {children}
    </div>
  );
}
