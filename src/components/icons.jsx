function Icon({ children, className }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <circle cx="9" cy="9" r="6" />
      <path d="m17 17-3.5-3.5" />
    </Icon>
  );
}

export function LocationIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <path d="M10 17s5-4.2 5-8a5 5 0 0 0-10 0c0 3.8 5 8 5 8Z" />
      <circle cx="10" cy="9" r="1.75" />
    </Icon>
  );
}

export function BriefcaseIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <rect x="3" y="6.5" width="14" height="9.5" rx="1.5" />
      <path d="M7 6.5V5.5A1.5 1.5 0 0 1 8.5 4h3A1.5 1.5 0 0 1 13 5.5v1" />
    </Icon>
  );
}

export function BuildingIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <rect x="4.5" y="3.5" width="11" height="13" rx="1" />
      <path d="M8 7h1m2 0h1M8 10h1m2 0h1M8 16v-2.5h4V16" />
    </Icon>
  );
}

export function SalaryIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M10 6.5v7M11.75 8a1.75 1.5 0 0 0-1.75-1.25c-1 0-1.75.6-1.75 1.4 0 2 3.5 1.1 3.5 3.1 0 .8-.8 1.5-1.75 1.5A1.85 1.5 0 0 1 8.25 12" />
    </Icon>
  );
}

export function ClockIcon({ className = "size-4" }) {
  return (
    <Icon className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M10 6.5V10l2.5 1.5" />
    </Icon>
  );
}
