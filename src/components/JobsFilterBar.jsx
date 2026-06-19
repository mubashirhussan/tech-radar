"use client";

import Dropdown from "./Dropdown";
import { SearchIcon } from "./icons";

export default function JobsFilterBar({
  search,
  city,
  company,
  workplace,
  cities,
  companies,
  workplaces,
  onSearchChange,
  onCityChange,
  onCompanyChange,
  onWorkplaceChange,
  onReset,
}) {
  const hasFilters = search || city || company || workplace;

  return (
    <div className="rounded-lg border border-border bg-background p-4 shadow-card">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        <label className="block w-full lg:flex-1">
          <span className="mb-1.5 block text-xs font-medium text-muted">Search</span>
          <span className="relative block">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search job title or keyword"
              className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted transition-colors hover:border-muted focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </span>
        </label>

        <div className="w-full lg:w-52">
          <Dropdown
            label="City"
            placeholder="All cities"
            value={city}
            options={cities}
            onChange={onCityChange}
          />
        </div>

        <div className="w-full lg:w-52">
          <Dropdown
            label="Company"
            placeholder="All companies"
            value={company}
            options={companies}
            onChange={onCompanyChange}
          />
        </div>

        <div className="w-full lg:w-48">
          <Dropdown
            label="Workplace"
            placeholder="All types"
            value={workplace}
            options={workplaces}
            onChange={onWorkplaceChange}
          />
        </div>

        {hasFilters ? (
          <button
            type="button"
            onClick={onReset}
            className="h-10 shrink-0 rounded-md px-3 text-sm font-medium text-muted transition-colors hover:bg-subtle hover:text-foreground"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
