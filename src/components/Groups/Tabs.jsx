import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GroupCard from "../../components/Groups/GroupCard";
import groupsService from "../../services/groups.service";

const TabContainer = () => {
  const [groups, setGroups] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (selectedDay) => {
    setFilter(selectedDay);
    
    groupsService
      .getGroupsByDay(selectedDay)
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab onClick={() => handleChange("Monday")}>Monday</Tab>
          <Tab onClick={() => handleChange("Tuesday")}>Tuesday</Tab>
          <Tab onClick={() => handleChange("Wednesday")}>Wednesday</Tab>
          <Tab onClick={() => handleChange("Thursday")}>Thursday</Tab>
          <Tab onClick={() => handleChange("Friday")}>Friday</Tab>
        </TabList>
        {filter === (
          <TabPanel>
            {groups.map((group) => (
              <GroupCard key={group._id} {...group} />
            ))}
          </TabPanel>
        )}
    


      </Tabs>
    </div>
  );
};

export default TabContainer;
