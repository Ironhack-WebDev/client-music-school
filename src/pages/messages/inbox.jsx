import React, { useState, useEffect } from "react";
import MessagePreview from "../../components/messages/MessagePreview";
import messagesService from "../../services/messages.service";
//import usersService from "../../services/users.service";
//import useUser from "../../components/useUser";

function Inbox() {
  const [messages, setMessages] = useState([]);
  const userId = "64e6f95077d9c7530374f1a7"


  const getUserMessages = () => {
    messagesService
      .getUserMessages(userId)
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserMessages();
  }, []);

  return (
    <div>
      <h3>Messages</h3>
      {messages.map((message) => (
        <MessagePreview key={message._id} {...message} />
      ))}
    </div>
  );
}

export default Inbox;
