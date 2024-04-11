import JobCard from "@/components/shared/JobCard";
import { getJobs } from "@/lib/services/api/jobs";
import { Job } from "@/types/job";
import { useState, useEffect } from "react";

function JobPostsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data as Job[]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-8">
      <h2>Current Job Postings</h2>
      <div className="mt-4 flex flex-col gap-y-4">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              type={job.type}
              location={job.location}
              _id={job._id}
              isAdmin={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobPostsSection;