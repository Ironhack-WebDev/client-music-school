import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import groupsService from "../../services/groups.service";
import usersService from "../../services/users.service";
import GroupCard from "../../components/Groups/GroupCard";
import { Link } from "react-router-dom";
import useUser from "../../components/useUser";

function GroupInfoPage(props) {
  const [group, setGroup] = useState(null);
  const [userGroups, setUserGroups] = useState([]);
  const { groupId } = useParams();
  const user = useUser();
  const navigate = useNavigate();

  const getUserGroups = () => {
    usersService
      .getUserGroups(user._id)
      .then((response) => setUserGroups(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user && user._id)
    getUserGroups();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const isUserMemberOfGroup = () => {
    return userGroups.some(groupObj => groupObj._id === groupId);
  };


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
        navigate(`/user`);
      })
      .catch((error) => {
        console.error("Error joining group:", error);
      });
  };

  const leaveGroup = () => {
    const requestBody = {
      userId: user._id,
    };

    console.log(requestBody);

    groupsService
      .leaveAGroup(groupId, requestBody)
      .then((response) => {
        navigate(`/user`);
      })
      .catch((error) => {
        console.error("Error leaving group:", error);
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

      {user && (
        <div>
          {isUserMemberOfGroup() ? (
            <button onClick={leaveGroup} style={{ textDecoration: 'none', color: 'inherit',}}>Leave Group</button>
          ) : (
            <button onClick={joinGroup} style={{ textDecoration: 'none', color: 'inherit',}}>Join Group</button>
          )}
        </div>
      )}

      </div>
      <div className="join-or-message-buttons">
      <Link to={`/contact`} style={{ textDecoration: 'none', color: 'inherit',}}>
        <button>Send a message</button>
      </Link>
    </div>
    </div>
    </div>
  );
}

export default GroupInfoPage;