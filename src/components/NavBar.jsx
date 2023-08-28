import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

// const testUser = {
//   userId: 'your-static-user-id',
//   name: 'Test User',
//   email: 'test@example.com',
//   imageURL: 'path/to/image',
//   phone: '123-456-7890',
//   address: '123 Test Street, Test City',
// };

function NavBar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);
  // const { isLoggedIn, logOutUser } = useContext(AuthContext);
  // const user = testUser;
  return (
    <nav>
      <div>
        <Link to="/timetable">Timetable</Link>
        {isLoggedIn ? (
          <>
            <Link to={`/user/${user.userId}`}>Profile</Link>
            <button onClick={logOutUser}>Log Out</button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
