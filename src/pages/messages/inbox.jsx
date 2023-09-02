import React, { useState, useEffect } from "react";
import MessagePreview from "../../components/messages/MessagePreview";
import messagesService from "../../services/messages.service";
//import usersService from "../../services/users.service";
import useUser from "../../components/useUser";

function Inbox() {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState ([])
  const user = useUser()


  const getReceivedMessages = () => {
    messagesService
      .getReceivedMessages(user._id)
      .then((response) => setReceivedMessages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user && user._id)
    getReceivedMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getSentMessages = () => {
    messagesService
      .getSentMessages(user._id)
      .then((response) => setSentMessages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user && user._id)
    getSentMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <h3>Inbox</h3>
      {receivedMessages.map((message) => (
        <MessagePreview key={message._id} {...message} />
      ))}

      <h3>Outbox</h3>
      {sentMessages.map((message) => (
        <MessagePreview key={message._id} {...message} />
      ))}
    </div>
  );
}

export default Inbox;
