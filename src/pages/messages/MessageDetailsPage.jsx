import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import messagesService from "../../services/messages.service";
import MessageCard from "../../components/messages/MessageCard";
import Reply from "../../components/messages/Reply";

function GroupDetailsPage(props) {
  const [message, setMessage] = useState(null);
  const { messageId } = useParams();

  const navigate = useNavigate();

  const getMessage = () => {
    messagesService
      .getMessage(messageId)
      .then((response) => {
        const oneMessage = response.data;
        setMessage(oneMessage);
      })
      .catch((error) => console.log(error));
  };

  console.log (message)

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteMessage = () => {
    messagesService
      .deleteMessage(messageId)
      .then(() => navigate("/admin"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {message ? (
        <div>
          <MessageCard
            title={message.title}
            message={message.message}
            sender={
              message.sender
                ? message.sender.name
                : message.senderName || "Unknown Sender"
            }
            email={
              message.sender
                ? message.sender.email
                : message.senderEmail || "No Email"
            }
          
            
          />
          <Reply from={message.sender} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={deleteMessage}>Delete Message</button>
    </div>
  );
}

export default GroupDetailsPage;
