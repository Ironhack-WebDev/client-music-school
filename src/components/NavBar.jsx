import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <Link to="/user/:userId">User Profile</Link>
        {isLoggedIn ? (
          <>
            <button onClick={logOutUser}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
