import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Learning from './pages/Learning/Learning'
import Challenges from './pages/Challenges/Challenges'
import Resources from './pages/Resources/Resources'
import JobSites from './pages/JobSite/JobSites'
import AddReply from './components/Posts/AddReply'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [open, setOpen] = useState(true);

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  function handleSideBarClose() {
    setOpen(false);
  }

  function handleSideBarOpen() {
    setOpen(true);
  }

  return (
    <>
      <NavBar
        user={user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleLogout={handleLogout}
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        open={open}
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
          <Route
          path="/replies"
          element={<AddReply />} />
      </Routes>
    </>
  )
}

export default App
