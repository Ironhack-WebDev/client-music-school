import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Monday from "../../components/Groups/Tabs/Monday";
import Tuesday from "../../components/Groups/Tabs/Tuesday";
import Wednesday from "../../components/Groups/Tabs/Wednesday";
import Thursday from "../../components/Groups/Tabs/Thursday";
import Friday from "../../components/Groups/Tabs/Friday";

import groupsService from "../../services/groups.service";

const TabContainer = ({ day, setDay }) => {
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
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Monday</Tab>
          <Tab>Tuesday</Tab>
          <Tab>Wednesday</Tab>
          <Tab>Thursday</Tab>
          <Tab>Friday</Tab>
        </TabList>
        <TabPanel>
          <Monday />
        </TabPanel>
        <TabPanel>
          <Tuesday />
        </TabPanel>
        <TabPanel>
          <Wednesday />
        </TabPanel>
        <TabPanel>
          <Thursday />
        </TabPanel>
        <TabPanel>
          <Friday />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabContainer;
