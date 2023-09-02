import GroupListPage from "./groups/GroupListPage";
import InstrumentListPage from "./instruments/InstrumentListPage";

function ClassesList() {
    return (
      <div >
      <h3>Learn an Instrument</h3>
        <InstrumentListPage />
        <br />
        <br />
        <br />
        <h3>Join a Group</h3>
        <GroupListPage />
      </div>
    );
  }
  
  export default ClassesList;