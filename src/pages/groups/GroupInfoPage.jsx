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
    groupsService
      .getGroup(groupId)
      .then((response) => {
        const oneGroup = response.data;
        setGroup(oneGroup);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const joinGroup = () => {
    const requestBody = {
      userId: user._id,
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
      </div>
      <div className="info-page-buttons">
        <div className='join-or-message-buttons'>
          <Link to={'/user'} onClick={joinGroup} style={{ textDecoration: 'none', color: 'inherit',}}>
            Join Group
          </Link>
        </div>
        <div className="join-or-message-buttons">
          <Link to={`/messages`} style={{ textDecoration: 'none', color: 'inherit',}}>
            Send a message
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GroupInfoPage;
