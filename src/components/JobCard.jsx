import { BriefcaseIcon, LocationIcon } from "./icons";

export default function JobCard({ job, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-lg border p-4 text-left transition-colors ${
        selected
          ? "border-primary bg-subtle"
          : "border-border bg-background hover:border-muted"
      }`}
    >
      <div className="flex items-start gap-3">
        <CompanyAvatar company={job.company} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-foreground">{job.title}</h3>
          <p className="mt-0.5 truncate text-sm text-muted">{job.company}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <LocationIcon className="size-3.5" />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <BriefcaseIcon className="size-3.5" />
          {job.type}
        </span>
        <span className="rounded-full bg-subtle px-2 py-0.5 font-medium text-foreground">
          {job.workplace}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm font-medium text-foreground">{job.salary}</span>
        <span className="text-xs text-muted">{job.postedAt}</span>
      </div>
    </button>
  );
}

function CompanyAvatar({ company }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-subtle text-sm font-semibold text-foreground">
      {company.charAt(0)}
    </span>
  );
}
