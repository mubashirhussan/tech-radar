import JobCard from "./JobCard";

export default function JobList({ jobs, selectedId, onSelect }) {
  if (jobs.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-border p-8 text-center">
        <p className="text-sm font-medium text-foreground">No jobs found</p>
        <p className="mt-1 text-sm text-muted">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard
            job={job}
            selected={job.id === selectedId}
            onSelect={() => onSelect(job.id)}
          />
        </li>
      ))}
    </ul>
  );
}
