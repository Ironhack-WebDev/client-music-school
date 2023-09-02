import { useState, useEffect } from "react";
import usersService from "../../services/users.service";
import { Link } from "react-router-dom";

function LessonCard({ user, time, length, _id }) {
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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }); 

  return (
    <div>
    {userDetails === null ? ( 
      <p>Loading lesson details...</p>
    ) : (
      <div>
      <Link to={`/lessons/${_id}`}>
      <h3>{userDetails.name}</h3> 
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
