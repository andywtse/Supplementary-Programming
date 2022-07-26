import { Box, Button, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import * as pageService from '../../services/pageService'

const Pages = ({ page }) => {

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

  return (
    <main>
      <div>
        <Box sx={{ flexGrow: 0 }}>
          <div>
            <h1>{page.title}</h1>
            <Tooltip title="Open settings">
              <Button
                sx={{ my: 2, color: 'black', display: 'block' }}
                onClick={handleOpenUserMenu}>
                <span className="text-lg">Options</span>
              </Button>
            </Tooltip>
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

            <MenuItem key='changepassword' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                UPDATE
              </Typography>
            </MenuItem>
            <MenuItem key='logout' onClick={handleCloseUserMenu}>
              <Typography textAlign="center" component={'span'}>
                <Button
                  sx={{ p: 0 }}
                >
                  DELETE
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