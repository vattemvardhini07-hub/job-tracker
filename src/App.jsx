import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import MyApplications from './Components/MyApplications'
import FindJob from './Components/FindJob.jsx'
import Login from './Components/Login'
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div className={isLoginPage ? 'app login-layout' : 'app dashboard-layout'}>
      {!isLoginPage && (
        <aside className="sidebar">
          <h2 className="logo">Track.</h2>

          <p className="nav-heading">MENU</p>

          <nav className="sidebar-nav">
            <NavLink to="/" end className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <span>▦</span> My Applications
            </NavLink>

            <NavLink to="/find-jobs" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <span>⌕</span> Find Jobs
            </NavLink>
          </nav>
        </aside>
      )}

      <main className={isLoginPage ? 'login-content' : 'main-content'}>
        <Routes>
          <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyApplications />
            </ProtectedRoute>
          }
        />
          <Route
          path="/find-jobs"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <FindJob />
            </ProtectedRoute>
          }
        />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App