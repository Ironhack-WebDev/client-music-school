import React, { useState, useEffect } from "react"; // Import React
import usersService from "../../services/users.service";

function LessonCard({ user, time, length }) {
  const [userDetails, setUserDetails] = useState(null); // Initialize userDetails with null
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    usersService
      .getUser(user)
      .then((response) => {
        const oneUser = response.data;
        setUserDetails(oneUser);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
    // Remove the second useEffect responsible for setting loading to false after a timeout
  }, [user]); // Add 'user' to the dependency array to re-fetch data when 'user' changes

  return (
    <div>
      {userDetails === null ? ( // Check if userDetails is still null
        <p>Loading lesson details...</p>
      ) : (
        <div>
          <h3>{userDetails.name}</h3> {/* Use userDetails instead of oneUser */}
          <div>
            <p>Time: {time}</p>
            <p>Length: {length} minutes</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonCard;
