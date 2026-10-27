import { jobDetails } from "../../data/jobs.js"
import "./index.css"

const FindJob = () => {
  return (
    <div className="find-jobs-page">
      <div className="find-jobs-header">
        <div>
          <h1>Find Jobs</h1>
          <p>Explore opportunities and find your next role.</p>
        </div>

        <div className="jobs-count">
          <span>{jobDetails.length}</span>
          <p>Available Jobs</p>
        </div>
      </div>

      <div className="jobs-list">
        {jobDetails.map((eachJob) => (
          <div className="job-card" key={eachJob.id}>
            <div className="company-logo">
              {eachJob.company?.charAt(0).toUpperCase() || "J"}
            </div>

            <div className="job-details">
              <h3>{eachJob.role}</h3>
              <p className="company-name">{eachJob.company}</p>

              <div className="job-location">
                <span>📍</span>
                <span>{eachJob.location}</span>
              </div>
            </div>

            <button
              className="view-job-button"
              type="button"
              onClick={() =>
                alert(`${eachJob.role} at ${eachJob.company}`)
              }
            >
              View Job
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindJob