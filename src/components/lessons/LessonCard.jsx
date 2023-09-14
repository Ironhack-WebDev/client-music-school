import { useState, useEffect } from "react";
import usersService from "../../services/users.service";
import { Link } from "react-router-dom";

function LessonCard({ user, time, length, _id }) {
  const [userDetails, setUserDetails] = useState(null);

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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);



  return (
    <div>
    {userDetails === null ? ( 
      <p>Loading lesson details...</p>
    ) : (
      <div className="lesson-card">
      <Link to={`/lessons/${_id}`}>
      <p >{userDetails.name}</p> 
      </Link>
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
