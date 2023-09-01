import React, { useState, useEffect } from "react";
import GroupCard from "../../components/Groups/GroupCard";
import Searchbar from "../../components/Searchbar";
import groupsService from "../../services/groups.service";

function GroupListPage() {
  const [groups, setGroups] = useState([]);
  const [inputText, setInputText] = useState("");

  const getAllGroups = () => {
    groupsService
      .getAllGroups()
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  const filteredGroups = (groups || []).filter((group) => {
    return group.title.toLowerCase().includes(inputText.toLowerCase());
  });

  return (
    <div>
      <Searchbar inputText={inputText} setInputText={setInputText} />

      
      {filteredGroups.map((group) => (
        <GroupCard key={group._id} {...group} />
      ))}
    </div>
  );
}

export default GroupListPage;
