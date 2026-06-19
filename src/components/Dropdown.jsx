"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SearchIcon } from "./icons";

export default function Dropdown({
  label,
  placeholder,
  value,
  options,
  onChange,
  searchable = false,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (open && searchable) {
      searchRef.current?.focus();
    }
    if (!open) {
      setQuery("");
    }
  }, [open, searchable]);

  const visibleOptions = useMemo(() => {
    if (!searchable || !query.trim()) {
      return options;
    }
    const term = query.trim().toLowerCase();
    return options.filter((option) => option.toLowerCase().includes(term));
  }, [options, query, searchable]);

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
        className="flex h-10 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 text-sm text-foreground transition-colors hover:border-muted focus:outline-none"
      >
        <span className={value ? "truncate" : "truncate text-muted"}>
          {value || placeholder}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <div className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-md border border-border bg-background shadow-popover">
          {searchable ? (
            <div className="border-b border-border p-2">
              <span className="relative block">
                <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-muted">
                  <SearchIcon className="size-4" />
                </span>
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search..."
                  className="h-9 w-full rounded-md border border-border bg-background pl-8 pr-3 text-sm text-foreground placeholder:text-muted focus:outline-none"
                />
              </span>
            </div>
          ) : null}

          <ul role="listbox" className="max-h-64 overflow-auto py-1">
            <Option selected={!value} onClick={() => select("")}>
              {placeholder}
            </Option>
            {visibleOptions.map((option) => (
              <Option
                key={option}
                selected={option === value}
                onClick={() => select(option)}
              >
                {option}
              </Option>
            ))}
            {visibleOptions.length === 0 ? (
              <li className="px-3 py-2 text-sm text-muted">No matches</li>
            ) : null}
          </ul>
        </div>
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
