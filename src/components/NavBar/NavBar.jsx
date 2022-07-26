import '../NavBar/NavBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

const NavBar = ({
  user,
  handleLogout,
  handleSignupOrLogin,
  handleSideBarOpen,
  handleSideBarClose,
  open,
}) => {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="navbar-title  nav-button rounded" to="/">Supplementary Programming</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="nav-button rounded" to="/challenges">Challenges</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/learning"> Learn</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="nav-button rounded" to="/resources">Resources</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="nav-button rounded" to="/jobsites">Job Sites</Link>
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/signup">Sign Up</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/login">Log In</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="" onClick={handleLogout}>LOG OUT</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/changePassword">Change Password</Link></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box> 
     </>
  )}


  export default NavBar;