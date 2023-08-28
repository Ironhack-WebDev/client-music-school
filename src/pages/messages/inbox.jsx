import { useState, useEffect } from "react";
import MessagePreview from "../../components/messages/MessagePreview";
import messagesService from "../../services/messages.service";

function Inbox() {
  const [messages, setMessages] = useState([]);

  const getAllMessages = () => {
    messagesService
      .getAllMessages()
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <div>
      <h3> Messages </h3>
      {messages.map((message) => (
        <MessagePreview key={message._id} {...message} />
      ))}
    </div>
  );
}

export default Inbox;
