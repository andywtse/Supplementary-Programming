import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import * as authService from './services/authService'
import * as pageService from './services/pageService'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Page from './components/Container/Page'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [pages, setPages] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllPages = async () => {
      const pageData = await pageService.getAll();
      setPages(pageData);
    };
    fetchAllPages();
  }, [])

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleAddPage = async (formData) => {
    const newPage = await pageService.createPage(formData)
    setPages([...pages, newPage])
  }

  const handleUpdatePage = async (updatedPageData) => {
    const newPage = await pageService.updatePage(updatedPageData);
    const newPageDataArray = pages.map((page) =>
      page._id === newPage._id ? newPage : page
    );
    setPages([...newPageDataArray]);
  };

  const handleDeletePage = async (pageId) => {
    const deletedPage = await pageService.deletePage(pageId);
    const newPagesArray = pages.filter(
      (page) => page._id !== deletedPage._id
    );
    setPages(newPagesArray);
  }

  return (
    <>
      <NavBar
        user={user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleLogout={handleLogout}
        handleAddPage={handleAddPage}
        pages={pages}
      />
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} />} />
        {pages ?
          pages.map( (page,idx) => (
            <Route
              path={`/${page.title}`}
              key={idx}
              element={
                <Page
                  page={page}
                  user={user}
                  handleDeletePage={handleDeletePage}
                  handleUpdatePage={handleUpdatePage}
                />}
            />
          ))
          :
          ""
        }
      </Routes>
    </>
  )
}

export default App
