import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

const SentMessages = () => {
  const { user } = useContext(AuthContext); 
  const [sentMessages, setSentMessages] = useState([]);

  useEffect(() => {
    if (user && user._id) {
      const fetchSentMessages = async () => {
        try {
          const response = await axios.get(`http://localhost:5005/api/users/messages/sent?userId=${user._id}`);
          setSentMessages(response.data);
        } catch (error) {
          console.error('Error fetching sent messages:', error);
        }
      };

      fetchSentMessages();
    }
  }, [user]);

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
          <li key={message._id} className="message-item">
            <div className="message-label">
              <strong>Title:</strong>
            </div>
            <div className="message-content">
              {message.title}
            </div>
            <div className='message-container'>
              <div className="message-label">
                <strong>Message:</strong>
              </div>
              <div className="message-content">
                {previewMessage(message.message, 100)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentMessages;



  