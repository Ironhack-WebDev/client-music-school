import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { Link } from "react-router-dom";

const SentMessages = () => {
  const { user } = useContext(AuthContext); 
  const [sentMessages, setSentMessages] = useState([]);
  const server = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    if (user && user._id) {
      const fetchSentMessages = async () => {
        try {
          const response = await axios.get(`${server}/api/users/messages/sent?userId=${user._id}`);
          setSentMessages(response.data); 
        } catch (error) {
          console.error('Error fetching sent messages:', error);
        }
      };

      fetchSentMessages();
    }
  }, 
  // eslint-disable-next-line
  [user]);

  const previewMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + '...';
    }
    return message;
  };

  return (
    <div className="sent-messages">
   
      <ul>
        {sentMessages.map(message => (
          <Link to={`/messages/outbox/${message._id}`} className="message-link">
          <li key={message._id} className="message-item">
            <div className="message-time">
            {(() => {
                const timestamp = message.timeStamp;
                const date = new Date(timestamp);
                const options = {
                  year: '2-digit', 
                  month: '2-digit', 
                  day: '2-digit', 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  hour12: true
                };
                return new Intl.DateTimeFormat('en-GB', options).format(date);
              })()}
            </div>
            <div className="message-title">
              {message.title}
            </div>
            <div className='message-content'>
              {previewMessage(message.message, 100)}
            </div>
          </li>
          </Link>
        ))}
      </ul>
      
    </div>
  );
};

export default SentMessages;



  