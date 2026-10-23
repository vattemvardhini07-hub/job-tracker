
import './index.css'

const JobCard = (props) => {
  const {Applications,onDeleteApplication} = props ;
  const {Company , Role , Status , uniqueNo} = Applications;

  const initial = Company ? Company[0].toUpperCase() : "";

  const onDeletebutton=()=>{
    onDeleteApplication(uniqueNo)
  }

  
return (
  <li className="job-card">
    <div className="company-row">
      <div className="initial">{initial}</div>

      <div className="company-info">
        <h2 className="company-name">{Company}</h2>
        <p className="role">{Role}</p>
      </div>

      <div className="job-actions">
        <span className={`status status-${Status.toLowerCase()}`}>
          {Status}
        </span>

        <button
          type="button"
          className="delete-button"
          onClick={onDeletebutton}
        >
          🗑️
        </button>
      </div>
    </div>
  </li>
);

    
      
}
export default JobCard;