import { useState, useEffect } from "react";
import MessagePreview from "../../components/messages/MessagePreview";
import usersService from "../../services/users.service";

function Inbox() {
  const [messages, setMessages] = useState([]);

  const getUserMessages = () => {
    usersService
      .getUserMessages()
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserMessages();
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
