import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import groupsService from "../../services/groups.service";
import GroupCard from "../../components/Groups/GroupCard";
import { Link } from "react-router-dom";


function GroupDetailsPage(props) {
  const [group, setGroup] = useState(null);
  const { groupId } = useParams();
  const getGroup = () => {

    groupsService.getGroup(groupId)    
    .then((response) => {
      const oneGroup = response.data;
      setGroup(oneGroup);
    })
    .catch((error) => console.log(error));
};


useEffect(()=> {
  getGroup();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [] );

    return (
      <div className="information-container">
    <div className="info-card">
              {group && (
        <GroupCard
          title={group.title}
          leader={group.leader}
          description={group.description}
          skillLevel={group.skillLevel}
          instruments={group.instruments}
          day={group.day}
          startTime={group.startTime}
          endTime={group.endTime}
          location={group.location}
          imageURL={group.imageURL}
        />
      )}

      <div className="info-page-buttons">
        <div className='join-or-message-buttons'>

      <Link to={`/groups/edit/${groupId}`}>
        Edit Group
      </Link>
      </div>


        <div className='join-or-message-buttons'>
      <Link to={`/admin`}>
        Return to admin
      </Link>
      </div>
      </div>

      </div>
      </div>
    );
  }
  
  export default GroupDetailsPage;