import GroupListPage from "./groups/GroupListPage";
import InstrumentListPage from "./instruments/InstrumentListPage";
import learnInstrument from "../assets/learn-instrument.jpeg";
import joinGroup from "../assets/join-group.jpeg";


function ClassesList() {
    return (
      <div className="classes-list-container">
        <img src={learnInstrument} alt='learn instrument' className="classes-header" />
        <InstrumentListPage />
        <img src={joinGroup} alt='join group' className="classes-header"/>
        <GroupListPage />
      </div>
    );
  }
  
  export default ClassesList;