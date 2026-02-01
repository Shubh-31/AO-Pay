import React from "react";
import { useState } from "react";

export function Switch({
  id,
  checked,
  onCheckedChange,
  disabled = false,
  className = "",
}) {
  const [internalChecked, setInternalChecked] = useState(!!checked);

  const toggle = () => {
    if (disabled) return;
    const newValue = !internalChecked;
    setInternalChecked(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={internalChecked}
      onClick={toggle}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        internalChecked ? "bg-primary" : "bg-neutral-300 dark:bg-neutral-700"
      } ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          internalChecked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
