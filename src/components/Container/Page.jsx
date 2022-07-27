import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import * as pageService from '../../services/pageService'
import AddSectionModal from "./AddSectionModal"
import EditPageModal from "./EditPageModal"
import Section from "./Section"

const Pages = ({ page, handleDeletePage, handleUpdatePage, user }) => {

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
      const sectionData = await pageService.getSections(page._id)
      setSections(sectionData)
    }
    fetchAllSections()
  }, [page])

  const handleAddSection = async (formData) => {
    const newSection = await pageService.createSection(formData, page._id)
    setSections([...sections, newSection])
  }

  const handleUpdateSection = async (updatedSectionData) => {
    const newSection = await pageService.updateSection(updatedSectionData);
    const newSectionDataArray = sections.map((section) =>
      section._id === newSection._id ? newSection : section
    );
    setSections([...newSectionDataArray]);
  };

  const handleDeleteSection = async (sectionId) => {
    const deletedSection = await pageService.deleteSection(sectionId);
    const newSectionsArray = sections.filter(
      (section) => section._id !== deletedSection._id
    );
    setSections(newSectionsArray);
  }

  return (
    <main id="scrollbar">
      <div>
        <Box sx={{ flexGrow: 0 }}>
          <div className="page-header-container">
            <h1 className="page-header-title">{page.title}</h1>
            <div className="page-option-menu">
              {user ? <Button
                sx={{ my: 2, color: 'black' }}
                onClick={handleOpenUserMenu}>
                <span className="text-lg">Options</span>
              </Button>
                : ""}

            </div>
          </div>

          {sections ?
            <>
              {sections.map((section, idx) => (
                <Section
                  key={idx}
                  section={section}
                  user={user}
                  handleDeleteSection={handleDeleteSection}
                  handleUpdateSection={handleUpdateSection}
                />
              ))}
            </>
            :
            ""
          }
          {/* Menu options */}
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
            {/* Adds Section */}
            <MenuItem key='add-section-modal' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <AddSectionModal handleAddSection={handleAddSection} />
              </Typography>
            </MenuItem>

            {/* Edits Page */}
            <MenuItem key='edit-page-modal' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <EditPageModal page={page} handleUpdatePage={handleUpdatePage} />
              </Typography>
            </MenuItem>

            {/* Delete Page */}
            <MenuItem key='delete-page' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <Button
                  sx={{ p: 0, color: 'red' }}
                  onClick={() => handleDeletePage(page._id)}
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