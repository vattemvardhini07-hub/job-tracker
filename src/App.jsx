import { Routes, Route, Link } from 'react-router-dom'
import MyApplications from './Components/MyApplications'

import FindJob from "./Components/FindJob.jsx";
import './App.css'

function App() {
  return (
    <div className="app">
      <nav>
      <Link to="/">My Applications</Link>
      <Link to="/find-jobs">Find Jobs</Link>
    </nav>
      <Routes>
        <Route path="/find-jobs" element={<FindJob/>}/>
        <Route path="/" element={<MyApplications/>}/>
      </Routes>
    </div>
  )
}

export default App