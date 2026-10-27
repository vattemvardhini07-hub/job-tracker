import { useState } from "react"
import "./index.css"

import { useNavigate } from "react-router-dom"

const Login = ({ setIsLoggedIn }) => {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
   const navigate = useNavigate()


  const onSubmitLogin = (event) => {
  event.preventDefault()
  if(username !== "" && password !==""){
    setIsLoggedIn(true)
    navigate("/")
  }
}
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back to Track</h1>
        <p>Login to manage your job applications</p>

        <form onSubmit={onSubmitLogin}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={onChangeUsername}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={onChangePassword}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login