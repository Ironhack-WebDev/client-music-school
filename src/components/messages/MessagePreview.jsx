import { Link } from "react-router-dom";


function MessagePreview({ title, message, _id, sender }) {
    return (
      <div>
      <Link to={`/messages/${_id}`}>
        <h3>Title: {title}</h3>
        </Link>
        <p>Message: {message}</p>
        <p>Sender: {sender}</p>
        
       
      </div>
    );
  }

  
  export default MessagePreview;
  