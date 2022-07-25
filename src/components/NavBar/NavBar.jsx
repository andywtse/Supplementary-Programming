import "./navbar.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import ChangePassword from "../ChangePassword/ChangePassword";
import { ChevronLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = ({
  user,
  handleLogout,
  handleSignupOrLogin,
}) => {
  return (
    <>
      {user ? (
        <nav className=" navbar-container |">
          <div className="navbar-tabs-container">
            <Link className="navbar-title nav-button rounded" to="/">Supplementary Programming</Link>
            <Link className="nav-button rounded" to="/learning">Learning</Link>
            <Link className="nav-button rounded" to="/challenges">Challenges</Link>
            <Link className="nav-button rounded" to="/resources">Resources</Link>
            <Link className="nav-button rounded" to="/jobsites">Job Sites</Link>
          </div>
          <div className="navbar-buttons-container">
            <div>
              <span className="text-lg">{user.name}</span>
            </div>
            <div>
              <button onClick={handleLogout} className="nav-button | rounded ">
                Log Out
              </button>
            </div>
            <div>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </div>
          </div>
        </nav>
      ) : (
        <nav className=" navbar-container |">
          <h1 className="navbar-title | text-2xl">Supplementary Programming</h1>
          <div className="navbar-buttons-container">
            <div>
              <Login handleSignupOrLogin={handleSignupOrLogin} />
            </div>
            <div>
              <Signup handleSignupOrLogin={handleSignupOrLogin} />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
