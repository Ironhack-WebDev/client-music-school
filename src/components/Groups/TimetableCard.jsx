import { Link } from "react-router-dom";


const TimetableCard = ({ title, startTime, endTime, location, leader, imageURL, _id }) => {
  return (
    <div className="timetable-card">
      <div className="group-time">
        <p>{startTime}-{endTime}</p>
      </div>
      <div className="group-info">
        <div className="group-title">
          <p>{title}</p>
        </div>
        <div className="group-location-leader">
          <p>Location: {location}</p>
          <p>Group Leader: {leader}</p>
        </div> 
      </div>
      <div className="group-view-button-container">
        <Link to={`/groups/info/${_id}`} className="group-view-button">
          <p>View</p>
        </Link>
      </div>
    </div>
  );
};

export default TimetableCard;
