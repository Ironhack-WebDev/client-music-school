import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';

// const testUser = {
//   userId: 'your-static-user-id',
//   name: 'Test User',
//   email: 'test@example.com',
//   imageURL: 'path/to/image',
//   phone: '123-456-7890',
//   address: '123 Test Street, Test City',
// };

const UserPage = () => {
  const { user, setUser, isLoggedIn } = useContext(AuthContext);
  // const { setUser, isLoggedIn } = useContext(AuthContext);
  // const user = testUser;

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
       <p>{user.name}</p>
       <p>{user.email}</p>
       <p>{user.phone}</p>
       <p>{user.address}</p>
       <Link to={`/user/edit/${user.userId}`}>
        <button>Edit Profile</button>
      </Link>
     </div>
    </div>
  );
};

  export default UserPage;