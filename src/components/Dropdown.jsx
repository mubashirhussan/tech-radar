"use client";

import { useEffect, useRef, useState } from "react";

export default function Dropdown({ label, placeholder, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function select(next) {
    onChange(next);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {label ? (
        <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-10 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 text-sm text-foreground transition-colors hover:border-muted focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <span className={value ? "truncate" : "truncate text-muted"}>
          {value || placeholder}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute z-20 mt-1.5 max-h-64 w-full overflow-auto rounded-md border border-border bg-background py-1 shadow-popover"
        >
          <Option selected={!value} onClick={() => select("")}>
            {placeholder}
          </Option>
          {options.map((option) => (
            <Option
              key={option}
              selected={option === value}
              onClick={() => select(option)}
            >
              {option}
            </Option>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Option({ children, selected, onClick }) {
  return (
    <li role="option" aria-selected={selected}>
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-subtle ${
          selected ? "font-medium text-primary" : "text-foreground"
        }`}
      >
        <span className="truncate">{children}</span>
        {selected ? <CheckIcon /> : null}
      </button>
    </li>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`size-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4 shrink-0 text-primary" aria-hidden="true">
      <path d="m5 10 3.5 3.5L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
