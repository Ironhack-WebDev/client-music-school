import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';
import Inbox from './messages/inbox';
import AdminMessage from '../components/messages/AdminMessage';
import SentMessages from '../components/messages/SentMessages';
import usersService from "../services/users.service";
import GroupSummary from "../components/Groups/GroupSummary";
import UserLessonCard from "../components/lessons/UserLessonCard";
import avatar from "../assets/default-avatar.jpeg";

const UserPage = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [userGroups, setUserGroups] = useState([]);
  const [userLessons, setUserLessons] = useState([]);
  const [activeTab, setActiveTab] = useState('inbox');
 
  const server = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    if (isLoggedIn && user && user._id) {
      axios.get(`${server}/api/users/${user._id}`) 
        .then(response => {
          setUserInfo(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
    // eslint-disable-next-line
  }, [isLoggedIn, setUserInfo, user]);

  const getUserGroups = () => {
    usersService
      .getUserGroups(user._id)
      .then((response) => setUserGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user && user._id)
    getUserGroups();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getUserLessons = () => {
    usersService
      .getUserLessons(user._id)
      .then((response) => setUserLessons(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user && user._id)
    getUserLessons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);




  if (!isLoggedIn) {
    return (
      <div>
        <p>Please log in to view your profile.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profileContainer">
      <div className="profile-left">
        <div className="userInformation">
          <img src={userInfo.imageURL || avatar } alt="Profile" className="profile-image" />
          <h3>{userInfo.name}</h3>
          <p>{userInfo.email}</p>
          <p>{userInfo.phone}</p>
          <p>{userInfo.address}</p>
        </div>
        <Link to={`/user/edit/${user._id}`} style={{ textDecoration: 'none' }}>
          <button className="profile-button">Edit Profile</button>
        </Link>   
        <div className="profileGroups">
          <div className="yourGroupsTitle">
            <p>YOUR GROUPS</p>
          </div>
          <ul className="user-group-list">
          {userGroups.map((group) => (
            <GroupSummary key={group._id} {...group} />
          ))}
          </ul>
        </div>
        <div className="profileLessons">
          <div className="yourLessonsTitle">
            <p>YOUR LESSONS</p>
          </div> 
          <ul>         
          {userLessons.map((lesson) => (
            <UserLessonCard key={lesson._id} {...lesson} />
          ))}
          </ul>
        </div>
      </div>
      <div className='profilerightSide'>
        <div className="profileMessageTabs">
          <button
            className={activeTab === 'inbox' ? 'active' : ''}
            onClick={() => toggleTab('inbox')}
          >
            INBOX
          </button>
          <button
            className={activeTab === 'sent' ? 'active' : ''}
            onClick={() => toggleTab('sent')}
          >
            SENT
          </button>
          <button
            className={activeTab === 'newMessage' ? 'active' : ''}
            onClick={() => toggleTab('newMessage')}
          >
            NEW MESSAGE
          </button>
        </div>
        <div className="messageContainer">
          {activeTab === 'inbox' ? (
            <Inbox />
          ) : activeTab === 'sent' ? (
            <SentMessages />
          ) : (
            <AdminMessage />
          )}
        </div>
      </div>
    </div>
  );
};

  export default UserPage;