import messagesService from "../../services/messages.service";
import { useState } from "react";
import useUser from "../../components/useUser";

function Reply(props) {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState(`re: ${props.title}`);

  const user = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      message,
      sender: user._id,
      recipient: props.from,
    };

    console.log(requestBody);

    messagesService
      .createMessage(requestBody)
      .then((response) => {
        setTitle("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Reply;
