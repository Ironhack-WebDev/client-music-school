import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Monday from "../../components/Groups/Tabs/Monday";
import Tuesday from "../../components/Groups/Tabs/Tuesday";
import Wednesday from "../../components/Groups/Tabs/Wednesday";
import Thursday from "../../components/Groups/Tabs/Thursday";
import Friday from "../../components/Groups/Tabs/Friday";
import header from "../../assets/timetable-header.jpeg";

import groupsService from "../../services/groups.service";

const TabContainer = ({ day, setDay }) => {
  const [setGroups] = useState([]);

  const getAllGroups = () => {
    groupsService
      .getAllGroups()
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <div className="timetableHeader">
          <img src={header} alt="Timetable Header" className="header-image" />
          <p>Welcome to our music school's weekly timetable! Explore the schedule below to find your favorite music groups and classes for each day of the week.</p>
      </div>
      <Tabs className="Tabs">
        <TabList>
          <Tab>MONDAY</Tab>
          <Tab>TUESDAY</Tab>
          <Tab>WEDNESDAY</Tab>
          <Tab>THURSDAY</Tab>
          <Tab>FRIDAY</Tab>
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
