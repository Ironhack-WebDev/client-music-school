import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import useUser from "./../components/useUser";
import usersService from "../services/users.service";


function IsAdmin({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const user = "64e6f95077d9c7530374f1a7"
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState([]);


  const getAdminUser = () => {
    usersService
    .getAdminUser(user)
    .then((response) => setAdminUser(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
       getAdminUser();
  }, []);

  console.log ("AdminUser",adminUser)

  console.log(isLoggedIn, "is logged in");

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
    return navigate ("/error");
  }
}

export default IsAdmin;