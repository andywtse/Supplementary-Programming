import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import * as pageService from '../../services/pageService'
import AddSectionModal from "./AddSectionModal"
import EditPageModal from "./EditPageModal"

const Pages = ({ page,handleDeletePage,handleUpdatePage }) => {

  const [sections, setSections] = useState()

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const fetchAllSections = async () => {
      const sectionData = await pageService.getAll()
      setSections(sectionData.sections)
    }
    fetchAllSections()
  }, [])

  const handleAddPage = async (formData) => {
    const newSection = await pageService.createSection(formData)
    setSections([...sections, newSection])
  }

  return (
    <main>


      <div>
        <Box sx={{ flexGrow: 0 }}>
          <div className="page-header-container">
            <h1 className="page-header-title">{page.title}</h1>
            <div className="page-option-menu">
              <Button
                sx={{ my: 2, color: 'black' }}
                onClick={handleOpenUserMenu}>
                <span className="text-lg">Options</span>
              </Button>
            </div>

          </div>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key='add-section-modal' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <AddSectionModal handleAddPage={handleAddPage}/>
              </Typography>
            </MenuItem>
            <MenuItem key='edit-page-modal' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <EditPageModal page={page} handleUpdatePage={handleUpdatePage}/>
              </Typography>
            </MenuItem>
            <MenuItem key='delete-page' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <Button
                  sx={{ p: 0, color: 'red' }}
                  onClick={()=>handleDeletePage(page._id)}
                >
                  Delete Current Page
                </Button>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </main>
  )
}

export default Pages