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
}, [] );

    return (
      <div >
              {group && (
        <GroupCard
          title={group.title}
          startTime={group.startTime}
          endTime={group.endTime} // Make sure to provide endTime, location, leader, and imageURL if available
          location={group.location}
          leader={group.leader}
          imageURL={group.imageURL}
        />
      )}

      <Link to={`/groups/edit/${groupId}`}>
        <button>Edit Group</button>
      </Link>
      

      </div>
    );
  }
  
  export default GroupDetailsPage;