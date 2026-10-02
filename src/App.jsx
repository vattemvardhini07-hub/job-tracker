import { useState } from "react";
import JobCard from "./Components/Jobcard";

const ApplicationsList =  [
  {
    uniqueNo :1,
    Company : "Zomato",
    Role:"Frontend Dev",
    Status:"Interview",
  },

   {
    uniqueNo :2,
    Company : "Wipro",
    Role:"Ai Engineer",
    Status:"Rejected",
  },

   {
    uniqueNo :3,
    Company : "TCS",
    Role:"SRE",
    Status:"Selected",
  },
]







function App() {
  const[SearchInput , setSearchInput] = useState('')
  const onSearchInput = (event)=> {
    setSearchInput(event.target.value)
  }
  const SearchResults = ApplicationsList.filter(eachCompany => 
    eachCompany.Company.includes(SearchInput)
  )
  return (
     <div className="app">
      <h1>Job Tracker</h1>
      <p className="subtitle">Track your job applications</p>
      <input type="search" className="search-box" onChange={onSearchInput}  placeholder="Search company..."/>

    
    <ul className="job-list">
      {SearchResults.map((eachCompany) => (
        <JobCard key = {eachCompany.uniqueNo} Applications={eachCompany}/>
      ))}

    </ul>
    </div>

  );
}

export default App;