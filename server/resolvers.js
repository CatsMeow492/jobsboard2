import { getCompany } from './db/companies.js';
import { getJobs, getJob } from './db/jobs.js';

export const resolvers = {
  Query: {
    job: (_root, { id }) => getJobs(id), 
    jobs: () => getJobs(),
  },
  
  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function toIsoDate(value) {
  return value.slice(0, 'yyyy-mm-dd'.length);
}
