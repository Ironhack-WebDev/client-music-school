import React, { useState, useEffect } from "react";
import TimetableCard from "../../../components/Groups/TimetableCard";
import groupsService from "../../../services/groups.service";

function Thursday() {
  const [groups, setGroups] = useState([]);
  
  const day = "Thursday";

  const getAllGroups = () => {
    groupsService
      .getGroupsByDay(day)
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups(); 
  }, []);

  return (
    <div>
      {groups.map((group) => (
        <TimetableCard key={group._id} {...group} />
      ))}
    </div>
  );
}

export default Thursday;
