import { Link } from "react-router-dom";

function MessagePreview({ title, message, _id }) {
    return (
      <div>
      <Link to={`/messages/${_id}`}>
        <h3>Title: {title}</h3>
        </Link>
        <p>Message: {message}</p>
        
      </div>
    );
  }

  
  export default MessagePreview;
  