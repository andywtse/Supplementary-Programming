import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material'
import { Link } from "react-router-dom";

import Login from '../../pages/Credentials/Login/Login'
import Signup from '../../pages/Credentials/Signup/Signup'
import ChangePassword from '../../pages/Credentials/ChangePassword/ChangePassword'

const NavBar = ({ user, handleLogout, handleSignupOrLogin, pages }) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key='learning' onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={'span'}>
                  <Link className="nav-button rounded" to="/learning">Learning</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='challenges' onClick={handleCloseNavMenu} component={'span'}>
                <Typography textAlign="center">
                  <Link className="nav-button rounded" to="/challenges">Challenges</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='resources' onClick={handleCloseNavMenu} component={'span'}>
                <Typography textAlign="center">
                  <Link className="nav-button rounded" to="/resources">Resources</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='jobsites' onClick={handleCloseNavMenu} component={'span'}>
                <Typography textAlign="center">
                  <Link className="nav-button rounded" to="/jobsites">Job Sites</Link>
                </Typography>
              </MenuItem>
              {/* {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="nav-button rounded" to={page.title}>{page.title}</Link>
                  </Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem key='learning' onClick={handleCloseNavMenu}>
              <Typography textAlign="center" component={'span'}>
                <Link className="nav-button rounded" to="/learning">Learning</Link>
              </Typography>
            </MenuItem>
            <MenuItem key='challenges' onClick={handleCloseNavMenu}>
              <Typography textAlign="center" component={'span'}>
                <Link className="nav-button rounded" to="/challenges">Challenges</Link>
              </Typography>
            </MenuItem>
            <MenuItem key='resources' onClick={handleCloseNavMenu}>
              <Typography textAlign="center" component={'span'}>
                <Link className="nav-button rounded" to="/resources">Resources</Link>
              </Typography>
            </MenuItem>
            <MenuItem key='jobsites' onClick={handleCloseNavMenu}>
              <Typography textAlign="center" component={'span'}>
                <Link className="nav-button rounded" to="/jobsites">Job Sites</Link>
              </Typography>
            </MenuItem>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ?
              <Tooltip title="Open settings">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={handleOpenUserMenu}>
                  <span className="text-lg">{user.name}</span>
                </Button>
              </Tooltip>
              :
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <MenuItem key='login' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component={'span'}>
                    <Login handleSignupOrLogin={handleSignupOrLogin} />
                  </Typography>
                </MenuItem>
                <MenuItem key='signup' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component={'span'}>
                    <Signup handleSignupOrLogin={handleSignupOrLogin} />
                  </Typography>
                </MenuItem>
              </Box>
            }
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
                  <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
                </Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component={'span'}>
                  <Button
                    sx={{ p: 0 }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;


  // <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //         <Link className="navbar-title  nav-button rounded" to="/">Supplementary Programming</Link>
  //         </Typography>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //         <Link className="nav-button rounded" to="/challenges">Challenges</Link>
  //         </Typography>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //           <Link to="/learning"> Learn</Link>
  //         </Typography>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //         <Link className="nav-button rounded" to="/resources">Resources</Link>
  //         </Typography>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //         <Link className="nav-button rounded" to="/jobsites">Job Sites</Link>
  //         </Typography>
  //           <div>
  //             <IconButton
  //               size="large"
  //               aria-label="account of current user"
  //               aria-controls="menu-appbar"
  //               aria-haspopup="true"
  //               onClick={handleMenu}
  //               color="inherit"
  //             >
  //               <AccountCircle />
  //             </IconButton>
  //             <Menu
  //               id="menu-appbar"
  //               anchorEl={anchorEl}
  //               anchorOrigin={{
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //               }}
  //               keepMounted
  //               transformOrigin={{
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //               }}
  //               open={Boolean(anchorEl)}
  //               onClose={handleClose}
  //             >
  //               <MenuItem onClick={handleClose}><Link to="/signup">Sign Up</Link></MenuItem>
  //               <MenuItem onClick={handleClose}><Link to="/login">Log In</Link></MenuItem>
  //               <MenuItem onClick={handleClose}><Link to="" onClick={handleLogout}>LOG OUT</Link></MenuItem>
  //               <MenuItem onClick={handleClose}> <Link to="/changePassword">Change Password</Link></MenuItem>
  //             </Menu>
  //           </div>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  //    </>