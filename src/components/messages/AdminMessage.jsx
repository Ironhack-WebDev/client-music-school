import messagesService from "../../services/messages.service";
import { useState, useEffect } from "react";
import useUser from "../../components/useUser";
import usersService from "../../services/users.service";

function AdminMessage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [adminUsers, setAdminUsers] = useState([]);

  const user = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      message,
      sender: user._id,
      recipient: adminUsers,
    };

    messagesService
      .createMessage(requestBody)
      .then((response) => {
        setTitle("");
        setMessage("");
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
