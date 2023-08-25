import React, { useState, useEffect } from "react";
import GroupCard from "../../../components/Groups/GroupCard";
import groupsService from "../../../services/groups.service";

function Monday() {
  const [groups, setGroups] = useState([]);
  
  const requestBody = {
    date: "Monday" 
  };

  const getAllGroups = () => {
    groupsService
      .getAllGroups(requestBody)
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups(requestBody); 
  }, []);

  return (
    <div>
     <p> Groups </p>
      {groups.map((group) => (
        <GroupCard key={group._id} {...group} />
      ))}
    </div>
  );
}

export default Monday;
