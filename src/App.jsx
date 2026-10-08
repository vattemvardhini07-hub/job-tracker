import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import JobCard from "./Components/Jobcard";

function App() {

  const [ApplicationsList, setApplicationsList] = useState([
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
  ]);

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

      <ul className="job-list">

        {SearchResults.map((eachCompany) => (
          <JobCard
            key={eachCompany.uniqueNo}
            Applications={eachCompany}
          />
        ))}

      </ul>

    </div>
  );
}

export default App;