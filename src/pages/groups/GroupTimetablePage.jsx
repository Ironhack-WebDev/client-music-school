import { useState, useEffect } from "react";
import GroupCard from "../../components/Groups/GroupCard";
import groupsService from "../../services/groups.service";
import Tabs from "../../components/Groups/Tabs";

function GroupTimetablePage() {
  const [groups, setGroups] = useState([]);

  const getAllGroups = () => {
    groupsService
      .getAllGroups()
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <div>

<Tabs />

      <p> Groups </p>
      {groups.map((group) => (
        <GroupCard key={group._id} {...group} />
      ))}

    </div>
  );
}

export default GroupTimetablePage;
