import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const Navigate = useNavigate();


  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    // If the user is not logged in ❌
    return <Navigate to="/login" />;
  } else if (isLoggedIn && user.isAdmin) {
    // If the user is logged in and an Admin, allow to see the page ✅
    return children;
  }
  // If the user is not Admin, send to error page
  else {
    return <Navigate to="/error" />;
  }
}

export default IsAdmin;
