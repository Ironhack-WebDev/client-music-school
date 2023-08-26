

function MessageCard({ title, message, sender }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
        <p>{sender}</p>
      </div>
    );
  }
  
  export default MessageCard;
  