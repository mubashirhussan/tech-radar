"use client";

import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import CompanyAbout from "@/components/CompanyAbout";
import { getCompany, getCompanyNames } from "@/lib/companies";

export default function AboutCompany() {
  const companyNames = getCompanyNames();
  const [selected, setSelected] = useState(companyNames[0] ?? "");

  const company = getCompany(selected);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-4">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            About Company
          </h1>
          <p className="mt-1 text-sm text-muted">
            Research a company before you apply — know their niche and strengths.
          </p>
        </header>

        <div className="w-full sm:w-72">
          <Dropdown
            label="Company"
            placeholder="Select a company"
            value={selected}
            options={companyNames}
            onChange={(next) => setSelected(next || companyNames[0] || "")}
            searchable
          />
        </div>

        <CompanyAbout company={company} />
      </div>
    </div>
  );
}
