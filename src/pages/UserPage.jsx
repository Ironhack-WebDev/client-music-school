import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';

const testUser = {
  userId: 'your-static-user-id',
  name: 'Test User',
  email: 'test@example.com',
  imageURL: 'path/to/image',
  phone: '123-456-7890',
  address: '123 Test Street, Test City',
};

const UserPage = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({})
   // const { setUser, isLoggedIn } = useContext(AuthContext);
 // const user = testUser;

  useEffect(() => {
    
    if (isLoggedIn && user && user._id) {
      axios.get(`http://localhost:5005/api/users/${user._id}`)
        .then(response => {
          console.log(response)
          setUserInfo(response.data);

        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn, setUserInfo, user]);

  if (!isLoggedIn) {
    return (
      <div>
        <p>Please log in to view your profile.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }


  return (
    <div className="profileContainer">
      <div className="userInformation">
        <img src={userInfo.imageURL} alt="Profile" className="profile-image" />
       <p>{userInfo.name}</p>
       <p>{userInfo.email}</p>
       <p>{userInfo.phone}</p>
       <p>{userInfo.address}</p>
       <Link to={`/user/edit/${user._id}`}>
        <button>Edit Profile</button>
      </Link>
     </div>
    </div>
  );
};

  export default UserPage;