import messagesService from "../../services/messages.service";
import { useState, useEffect } from "react";
import usersService from "../../services/users.service";

function AdminMessage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
    const [adminUsers, setAdminUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      message,
      senderName,
      senderEmail,
      recipient: adminUsers,
    };

    messagesService
      .createMessage(requestBody)
      .then((response) => {
        setTitle("");
        setMessage("");
        setSenderName("");
        setSenderEmail("");
      })
      .catch((error) => console.log(error));
  };

  const getAllUsers = () => {
    usersService
      .getAllUsers()
      .then((response) => {
        const filteredUsers = response.data.filter(
          (user) => user.isAdmin === true
        );
        setAdminUsers(filteredUsers);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="text"
            name="senderEmail"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
        </div>
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

export default AdminMessage;
