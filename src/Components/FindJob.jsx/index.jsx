import { jobDetails } from "../../data/jobs.js";

const FindJob = () => {
  
  return(
    <div>
      <h1>Find Jobs</h1>
      <p>Total jobs:{jobDetails.length}</p>
      <ul>
        {jobDetails.map(eachJob => (
          
          <li key={eachJob.id}>
         <h3>{eachJob.company}</h3>
         <h3>{eachJob.role}</h3>
         <h3>{eachJob.location}</h3>
         </li>
         
        
        ))}
      </ul>
    </div>
  )
}
export default FindJob;