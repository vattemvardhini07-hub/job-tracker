import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import JobCard from "./Jobcard";
import '../App.css';

import { Routes, Route, Link } from 'react-router-dom'

function MyApplications() {

  const [ApplicationsList, setApplicationsList] = useState(()=>{
    const saved = localStorage.getItem("jobApplications")
    if (saved !== null){
      return JSON.parse(saved);
    }


  
    return [
    {
      uniqueNo: uuidv4(),
      Company: "Zomato",
      Role: "Frontend Dev",
      Status: "Interview",
    },

    {
      uniqueNo: uuidv4(),
      Company: "Wipro",
      Role: "Ai Engineer",
      Status: "Rejected",
    },

    {
      uniqueNo: uuidv4(),
      Company: "TCS",
      Role: "SRE",
      Status: "Selected",
    },
  ];
})
  useEffect(()=> {
    localStorage.setItem('jobApplications',JSON.stringify(ApplicationsList))
  },[ApplicationsList])

  const [SearchInput, setSearchInput] = useState("");
  const [Companyname, setCompany] = useState("");
  const [Role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const onAddContact = (event) => {
    event.preventDefault();

    const newContact = {
      uniqueNo: uuidv4(),
      Company: Companyname,
      Role: Role,
      Status: status,
    };

    setApplicationsList([...ApplicationsList, newContact]);

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  const onSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const SearchResults = ApplicationsList.filter(eachCompany =>
    eachCompany.Company.includes(SearchInput)
  );

  const totalApplications = ApplicationsList.length;

  const totalInterview = ApplicationsList.filter(eachCompany => eachCompany.Status === "Interview").length

  const totalSelected = ApplicationsList.filter(eachCompany => eachCompany.Status === "Selected").length


  const onDeleteApplication = (uniqueNo) => {
    const updatedList = ApplicationsList.filter(eachCompany => eachCompany.uniqueNo !== uniqueNo);
    setApplicationsList(updatedList);
  };

  return (
    <div className="app">

      <h1>Job Tracker</h1>

      <p className="subtitle">
        Track your job applications
      </p>

      <input
        type="search"
        className="search-box"
        onChange={onSearchInput}
        placeholder="Search company..."
      />

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Applications</h3>
          <p className="stat-number">{totalApplications}</p>
        </div>
        <div className="stat-card">
          <h3>Interviews</h3>
          <p className="stat-number">{totalInterview}</p>
        </div>
        <div className="stat-card">
          <h3>Selected</h3>
          <p className="stat-number">{totalSelected}</p>
        </div>

      </div>

        <h2 className="section-heading">
        <span className="plus-icon">+</span>
        Add Your Application
      </h2>

      <form onSubmit={onAddContact}>

        <input
          value={Companyname}
          placeholder="Company"
          onChange={e => setCompany(e.target.value)}
        />

        <input
          value={Role}
          placeholder="Role"
          onChange={e => setRole(e.target.value)}
        />

        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit">Add</button>

      </form>
      <h2 className="section-heading">Your Applications</h2>

      <ul className="job-list">

        {SearchResults.map((eachCompany) => (
          <JobCard
            key={eachCompany.uniqueNo}
            Applications={eachCompany}
            onDeleteApplication={onDeleteApplication}
          />
        ))}

      </ul>
      
    </div>
  );
}

export default MyApplications;