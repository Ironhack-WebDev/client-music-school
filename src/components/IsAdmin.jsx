import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import usersService from "../services/users.service";

function IsAdmin({ children }) {
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const [adminUser, setAdminUser] = useState({});

  const navigate = useNavigate();


  useEffect(() => {
    
    if (isLoggedIn && user && user._id) {
      usersService.getUser(user._id)
        .then(response => {
          console.log(response)
          setAdminUser(response.data);
                  })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn, setAdminUser, user]);

  console.log (adminUser, "ADMIN")

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    // If the user is not logged in ❌
    return navigate("/login");
  } else if (isLoggedIn && adminUser.isAdmin) {
    // If the user is logged in and an Admin, allow to see the page ✅
    return children;
  }
  // If the user is not Admin, send to error page
  else {
    return navigate("/error");
  }
}

export default IsAdmin;
