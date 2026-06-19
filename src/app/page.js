"use client";

import { useEffect, useMemo, useState } from "react";
import JobsFilterBar from "@/components/JobsFilterBar";
import JobList from "@/components/JobList";
import JobDetails from "@/components/JobDetails";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { getUniqueValues, jobs } from "@/lib/jobs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [selectedId, setSelectedId] = useState(jobs[0]?.id ?? null);

  const debouncedSearch = useDebouncedValue(search, 300);

  const cities = useMemo(() => getUniqueValues(jobs, "location"), []);
  const companies = useMemo(() => getUniqueValues(jobs, "company"), []);
  const workplaces = useMemo(() => getUniqueValues(jobs, "workplace"), []);

  const filteredJobs = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query));
      const matchesCity = !city || job.location === city;
      const matchesCompany = !company || job.company === company;
      const matchesWorkplace = !workplace || job.workplace === workplace;
      return matchesQuery && matchesCity && matchesCompany && matchesWorkplace;
    });
  }, [debouncedSearch, city, company, workplace]);

  useEffect(() => {
    setSelectedId(filteredJobs[0]?.id ?? null);
  }, [debouncedSearch, city, company, workplace]);

  const selectedJob =
    filteredJobs.find((job) => job.id === selectedId) ?? null;

  function resetFilters() {
    setSearch("");
    setCity("");
    setCompany("");
    setWorkplace("");
  }

  return (
    <div className="flex flex-1 flex-col p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-[1260px] flex-1 flex-col gap-4">
        <JobsFilterBar
          search={search}
          city={city}
          company={company}
          workplace={workplace}
          cities={cities}
          companies={companies}
          workplaces={workplaces}
          onSearchChange={setSearch}
          onCityChange={setCity}
          onCompanyChange={setCompany}
          onWorkplaceChange={setWorkplace}
          onReset={resetFilters}
        />

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[380px_1fr]">
          <div className="min-h-0 overflow-y-auto lg:pr-1">
            <JobList jobs={filteredJobs} selectedId={selectedJob?.id} onSelect={setSelectedId} />
          </div>

          <div className="min-h-0 overflow-hidden rounded-lg border border-border bg-background shadow-card">
            <JobDetails job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
}
