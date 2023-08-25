import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Monday from "./Tabs/Monday";
import Tuesday from "./Tabs/Tuesday";
import Wednesday from "./Tabs/Wednesday";
import Thursday from "./Tabs/Thursday";
import Friday from "./Tabs/Friday";


const TabContainer = () => {
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
