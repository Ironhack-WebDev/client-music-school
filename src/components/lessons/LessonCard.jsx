import { useState, useEffect } from "react";
import usersService from "../../services/users.service";

function LessonCard({ user, time, length }) {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user)

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
  }, [user]);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []); 

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
