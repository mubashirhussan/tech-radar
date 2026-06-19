import { BuildingIcon } from "./icons";

export default function CompanyAbout({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="rounded-lg border border-border bg-background p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-subtle text-lg font-semibold text-foreground">
          {company.name.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-foreground">{company.name}</h3>
            <span className="rounded-full bg-subtle px-2.5 py-0.5 text-xs font-medium text-foreground">
              {company.niche}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-muted">{company.tagline}</p>
        </div>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-subtle sm:inline-block"
        >
          Visit website
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{company.description}</p>

      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Founded" value={company.founded} />
        <Stat label="Team size" value={company.size} />
        <Stat label="Headquarters" value={company.headquarters} />
      </dl>

      <div className="mt-5 border-t border-border pt-4">
        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <BuildingIcon className="size-4" />
          Why join {company.name}
        </h4>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {company.strengths.map((strength) => (
            <li
              key={strength}
              className="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-subtle px-3 py-2">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}
