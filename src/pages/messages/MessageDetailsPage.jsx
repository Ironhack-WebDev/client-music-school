import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import messagesService from "../../services/messages.service";
import MessageCard from "../../components/messages/MessageCard";
import StandardMessage from "../../components/messages/StandardMessage";

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

  useEffect(() => {
    getMessage();
  }, []);

  const deleteMessage = () => {
    messagesService
      .deleteMessage(messageId)
      .then(() => navigate("/admin"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {message && (
        <MessageCard title={message.title} message={message.message} />
      )}
      <p>Reply</p>
      <StandardMessage />
      <button onClick={deleteMessage}>Delete Message</button>
    </div>
  );
}

export default GroupDetailsPage;
