import React from 'react';
import { Link } from "react-router-dom";

function MessagePreview({ title, message, _id, sender, timeStamp }) {
  const previewMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + '...';
    }
    return message;
  };

  const formatDateTime = (timestamp) => {
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
  };

  return (
    <div className="inbox">
    <Link to={`/messages/${_id}`} className="message-link">
    <div className="message-item">
      <div className="message-time">
        {formatDateTime(timeStamp)}
      </div>
      
        <div className="message-title"> {title}</div>
      
      <div className="message-content"> {previewMessage(message, 100)}</div>
      </div>
      </Link>
    </div>
  );
}

export default MessagePreview;
