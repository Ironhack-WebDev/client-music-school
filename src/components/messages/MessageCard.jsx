

function MessageCard({ title, message, sender, email }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
        <p>{sender}</p>
        <p>{email}</p>
      </div>
    );
  }
  
  export default MessageCard;
  