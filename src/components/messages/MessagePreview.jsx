import { Link } from "react-router-dom";


function MessagePreview({ title, message, _id, sender }) {
    return (
    <div className="message-preview-container">
      <Link to={`/messages/${_id}`} className="message-link">
        <h3 className="message-title">Title: {title}</h3>
      </Link>
      <p className="message-content">Message: {message}</p>
    </div>
    );
  }

  
  export default MessagePreview;
  