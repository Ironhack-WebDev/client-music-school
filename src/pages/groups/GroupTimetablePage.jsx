import { useState, useEffect } from "react";
import GroupThumbnail from "../../components/Groups/GroupThumbnail";
import groupsService from "../../services/groups.service";

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
      <p> Groups </p>
      {groups.map((group) => (
        <GroupThumbnail key={group._id} {...group} />
      ))}

    </div>
  );
}

export default GroupTimetablePage;
