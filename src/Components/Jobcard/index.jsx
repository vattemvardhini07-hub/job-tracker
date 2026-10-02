import './index.css'

const JobCard = (props) => {
  const {Applications} = props ;
  const {Company , Role , Status} = Applications;

  const initial = Company ? Company[0].toUpperCase() : "";

  return (
    
      <li className="job-card">
      <div className="company-row">
      <div className="initial">{initial}</div>
      
      <h1 className="company-name">{Company}</h1>
      </div>
      <p className="role">{Role}</p>
      <p className="status">{Status}</p>

      </li>


    
  )
}
export default JobCard;