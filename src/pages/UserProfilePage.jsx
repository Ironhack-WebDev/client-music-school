import React, { useEffect, useContext } from 'react';
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

const UserProfilePage = () => {
  //const { user, setUser, isLoggedIn } = useContext(AuthContext);
  const { setUser, isLoggedIn } = useContext(AuthContext);
  const user = testUser;

  useEffect(() => {
    if (isLoggedIn) {
      axios.get(`/users/${user.userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn, setUser, user.userId]);

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
        <img src={user.imageURL} alt="Profile" className="profile-image" />
       <h2>{user.name}</h2>
       <p>Name: {user.name}</p>
       <p>Email: {user.email}</p>
       <p>Phone: {user.phone}</p>
       <p>Address: {user.address}</p>
       <Link to={`/user-profile/edit`}>
        <button>Edit Profile</button>
      </Link>
     </div>
    </div>
  );
};

  export default UserProfilePage;