

function MessageCard({ title, message, sender, email, timeStamp }) {
    return (
      <div className="message-item">
      <p>{timeStamp}</p>
        <div className="message-title">{title}</div>
        <div className='message-content'>{message}</div>
        <p>{sender}</p>
        <p>{email}</p>
      </div>
    );
  }
  
  export default MessageCard;
  