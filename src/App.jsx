import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import * as authService from './services/authService'

import './App.css'

import PostBoard from './components/Posts/PostBoard'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Learning from './pages/Learning/Learning'
import Challenges from './pages/Challenges/Challenges'
import Resources from './pages/Resources/Resources'
import JobSites from './pages/JobSite/JobSites'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <NavBar
        user={user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} />} />
        <Route
          path="/learning"
          element={<Learning />} />
        <Route
          path="/challenges"
          element={<Challenges />} />
        <Route
          path="/resources"
          element={<Resources />} />
        <Route
          path="/jobsites"
          element={<JobSites />} />
      </Routes>
    </>
  )
}

export default App
