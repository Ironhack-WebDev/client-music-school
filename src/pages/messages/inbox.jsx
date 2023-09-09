import React, { useState, useEffect } from "react";
import MessagePreview from "../../components/messages/MessagePreview";
import usersService from "../../services/users.service";
import useUser from "../../components/useUser";

function Inbox() {
  const [messages, setMessages] = useState([]);
  const user = useUser();

  const getUserMessages = () => {
    if (user && user._id) {
      usersService
        .getUserMessages(user._id)
        .then((response) => setMessages(response.data))
        .catch((error) => {
          console.error("Error fetching user messages:", error);
          // You can set an error state here and handle it in your UI
        });
    }
  };

  useEffect(() => {
    if (user) {
      getUserMessages();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      {messages.map((message) => (
        <MessagePreview key={message._id} {...message} />
      ))}
    </div>
  );
}

export default Inbox;
