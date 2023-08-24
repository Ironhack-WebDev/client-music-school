

import messagesService from "../../services/messages.service";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function StandardMessage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const context = useContext(AuthContext);
  const userId = context.user._id;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      message,
      sender: userId 
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

export default StandardMessage;