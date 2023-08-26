import { useState, useEffect } from "react";
import authService from "../services/auth.service"; 

function useUser() {
  const [user, setUser] = useState(null);

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      authService
        .verify()
        .then((response) => {
          const user = response.data;
          setUser(user);
        })
        .catch((error) => {
          console.error("Authentication error:", error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return user;
}

export default useUser;
