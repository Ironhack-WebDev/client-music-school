import { useState, useEffect } from "react";
import GroupThumbnail from "../components/Groups/GroupThumbnail";
import AddGroup from "../components/Groups/AddGroup";
import groupsService from "../services/groups.service";
import usersService from "../services/users.service";
import useUser from "../components/useUser";
import Inbox from "./messages/inbox";

function AdminProfilePage() {
  const [groups, setGroups] = useState([]);
  const [messages, setMessages] = useState([]);
  const user = useUser();

  const getAllGroups = () => {
    groupsService
      .getAllGroups()
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups();
  }, []);

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
      {user ? <h1>Welcome, {user.name}!</h1> : <p>Please log in.</p>}

      <h3> Add Group </h3>
      <AddGroup refreshGroups={getAllGroups} />

      <h3> Groups </h3>
      {groups.map((group) => (
        <GroupThumbnail key={group._id} {...group} />
      ))}

      <Inbox />
    </div>
  );
}

export default AdminProfilePage;
