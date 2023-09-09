import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


function NavBar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);
  const isAdmin = user && user.isAdmin;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/timetable" className="navbar-link">
          TIMETABLE
        </Link>
        <Link to="/classes" className="navbar-link">
          CLASSES
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={`/user`} className="navbar-link">
              PROFILE
            </Link>

            {isAdmin ? (
              <Link to="/admin" className="navbar-link">
                ADMIN
              </Link>
            ) : null}
            
            <button onClick={logOutUser} className="navbar-button">
              LOG OUT
            </button>
          </>
        ) : (
          <Link to="/signup" className="navbar-signup">
            SUBSCRIBE
          </Link>
        )}
        
      </div>
    </nav>
  );
}

export default NavBar;
