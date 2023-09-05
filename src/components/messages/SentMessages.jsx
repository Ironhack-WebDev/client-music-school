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
      <h2>Sent Messages</h2>
      <ul>
        {sentMessages.map(message => (
          <li key={message._id}>
            <div>
              <strong>Title:</strong> {message.title}
            </div>
            <div>
              <strong>Message:</strong> {previewMessage(message.message, 100)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentMessages;



  