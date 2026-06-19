import {
  BriefcaseIcon,
  BuildingIcon,
  ClockIcon,
  LocationIcon,
  SalaryIcon,
} from "./icons";

export default function JobDetails({ job }) {
  if (!job) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-subtle text-muted">
          <BriefcaseIcon className="size-6" />
        </span>
        <p className="mt-4 text-sm font-medium text-foreground">Select a job</p>
        <p className="mt-1 max-w-xs text-sm text-muted">
          Choose a job from the list to view its full details.
        </p>
      </div>
    );
  }

  return (
    <article className="flex h-full flex-col">
      <header className="border-b border-border p-6">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-subtle text-lg font-semibold text-foreground">
            {job.company.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-semibold text-foreground">{job.title}</h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <BuildingIcon className="size-4" />
              {job.company}
            </p>
          </div>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Apply now
          </a>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Meta icon={<LocationIcon />} label="Location" value={job.location} />
          <Meta icon={<BriefcaseIcon />} label="Type" value={job.type} />
          <Meta icon={<SalaryIcon />} label="Salary" value={job.salary} />
          <Meta icon={<ClockIcon />} label="Posted" value={job.postedAt} />
        </dl>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <Section title="Overview">
          <p className="text-sm leading-relaxed text-muted">{job.summary}</p>
        </Section>

        <Section title="Responsibilities">
          <BulletList items={job.responsibilities} />
        </Section>

        <Section title="Requirements">
          <BulletList items={job.requirements} />
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-subtle px-3 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </article>
  );
}

function Meta({ icon, label, value }) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-xs text-muted">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-6 last:mb-0">
      <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
