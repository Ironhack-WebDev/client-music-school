import { useState, useEffect } from "react";
import GroupTitle from "../components/Groups/GroupTitle";
import TeacherThumbnail from "../components/Instruments/TeacherThumbnail";
import AddGroup from "../components/Groups/AddGroup";
import AddTeacher from "../components/Instruments/AddTeacher";

import groupsService from "../services/groups.service";
import instrumentsService from "../services/instruments.service";

function AdminProfilePage() {
  const [groups, setGroups] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [activeTab, setActiveTab] = useState('groups');

  const getAllGroups = () => {
    groupsService
      .getAllGroups()
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  const getAllInstruments = () => {
    instrumentsService
      .getAllInstruments()
      .then((response) => setInstruments(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllInstruments();
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
  
    <div className='profilerightSide'>
      <div className="AdminTabs">
        <button
          className={activeTab === 'groups' ? 'active' : ''}
          onClick={() => toggleTab('groups')}
        >
          GROUPS
        </button>
        <button
          className={activeTab === 'teachers' ? 'active' : ''}
          onClick={() => toggleTab('teachers')}
        >
          TEACHERS
        </button>
        <button
          className={activeTab === 'addGroup' ? 'active' : ''}
          onClick={() => toggleTab('addGroup')}
        >
          ADD GROUP
        </button>
        <button
          className={activeTab === 'addTeacher' ? 'active' : ''}
          onClick={() => toggleTab('addTeacher')}
        >
          ADD TEACHER
        </button>
      </div>
      <div >
      {activeTab === 'groups' ? (
    <div className="list-body">
      {groups.map((group) => (
        <GroupTitle key={group._id} {...group} />
      ))}
    </div>
  ) : activeTab === 'teachers' ? (
    <div className="list-body">
    {instruments.map((instrument) => (
      <TeacherThumbnail key={instrument._id} {...instrument} />
    ))}
    </div>
  ) : activeTab === 'addGroup' ? (
    <AddGroup refreshGroups={getAllGroups} />
  ) : activeTab === 'addTeacher' ? (
    <AddTeacher />
  ) : null}
      </div>
    </div>
  </div>
  
  );
}

export default AdminProfilePage;
