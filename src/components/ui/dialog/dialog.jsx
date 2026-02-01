import React from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
}
