import { useState, useEffect } from "react";
import GroupTitle from "../components/Groups/GroupTitle";
import TeacherThumbnail from "../components/Instruments/TeacherThumbnail";
import AddGroup from "../components/Groups/AddGroup";
import AddTeacher from "../components/Instruments/AddTeacher";

import groupsService from "../services/groups.service";
import instrumentsService from "../services/instruments.service";
import useUser from "../components/useUser";
import Inbox from "./messages/inbox";

function AdminProfilePage() {
  const [groups, setGroups] = useState([]);
  const [instruments, setInstruments] = useState([]);
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

  const getAllInstruments = () => {
    instrumentsService
      .getAllInstruments()
      .then((response) => setInstruments(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllInstruments();
  }, []);


  return (
    <div>
      {user ? <h1>Welcome, {user.name}!</h1> : <p>Please log in.</p>}

      <AddGroup refreshGroups={getAllGroups} />

      <AddTeacher />

      <h3> Groups </h3>
      {groups.map((group) => (
        <GroupTitle key={group._id} {...group} />
      ))}

      <h3> Teachers </h3>
      {instruments.map((instrument) => (
        <TeacherThumbnail key={instrument._id} {...instrument} />
      ))}

<Inbox />
    </div>
  );
}

export default AdminProfilePage;
