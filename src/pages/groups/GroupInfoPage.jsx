import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import groupsService from "../../services/groups.service";
import GroupCard from "../../components/Groups/GroupCard";
import { Link } from "react-router-dom";
import useUser from "../../components/useUser";


function GroupInfoPage(props) {

  const [group, setGroup] = useState(null);
  const { groupId } = useParams();
  const user = useUser();
  const navigate = useNavigate();
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

const joinGroup = () => {
    const requestBody = {
        userId: user._id
    };

    groupsService
      .joinAGroup(groupId, requestBody)
      .then((response) => {
        navigate(`/groups`);
      })
      .catch((error) => {
        console.error("Error joining group:", error);
      });
  };

    return (
      <div >
              {group && (
        <GroupCard
          title={group.title}
          startTime={group.startTime}
          endTime={group.endTime} 
          location={group.location}
          leader={group.leader}
          day={group.day}
          imageURL={group.imageURL}
        />
      )}

      <div>
        <button onClick={joinGroup}>Join Group</button>
        </div>

      <Link to={`/messages`}>
        <button>Send a message</button>
      </Link>

      </div>
    );
  }
  
  export default GroupInfoPage;