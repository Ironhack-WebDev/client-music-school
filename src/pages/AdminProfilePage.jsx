import { useState, useEffect } from "react";
import GroupThumbnail from "../components/Groups/GroupThumbnail";
import AddGroup from "../components/Groups/AddGroup";
import groupsService from "../services/groups.service";
import messagesService from "../services/messages.service";
import StandardMessage from "../components/messages/StandardMessage";
import MessageCard from "../components/messages/MessageCard";

function AdminProfilePage() {
  const [groups, setGroups] = useState([]);
  const [messages, setMessages] = useState([]);

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
    messagesService
      .getUserMessages()
      .then((response) => setMessages(response.data))
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getUserMessages();
  }, [])
  

  return (
    <div>
      <h3> Add Group </h3>
      <AddGroup refreshGroups={getAllGroups} />

      <h3> Send Message</h3>
      <StandardMessage />

      <h3> Groups </h3>
      {groups.map((group) => (
        <GroupThumbnail key={group._id} {...group} />
      ))}

      <h3> Messages </h3>
      {messages.map((message) => (
        <MessageCard key={message._id} {...message} />
      ))}
    </div>
  );
}

export default AdminProfilePage;
