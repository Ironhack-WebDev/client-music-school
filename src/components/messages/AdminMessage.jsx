

import messagesService from "../../services/messages.service";
import { useState } from "react";
import useUser from "../../components/useUser";

function AdminMessage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const user = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      message,
      sender: user._id, 
      recipient: "64e6f95077d9c7530374f1a7"
    };

    console.log (requestBody)

    messagesService
      .createMessage(requestBody)
      .then((response) => {
        setTitle("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Message</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminMessage;