import { Link } from "react-router-dom";

const groupCardStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const TimetableCard = ({ title, startTime, endTime, location, leader, imageURL, _id }) => {
  return (
    <div>
    <Link to={`/groups/info/${_id}`}>
    <h3>{title}</h3>
    </Link>
    <div style={groupCardStyles}>
      <div>
        <img src={imageURL} alt="Group" style={{ width: "200px" }}/>
        </div>
      <div>
        <p>Start Time: {startTime}</p>
        <p>End Time: {endTime}</p>
      </div>
      <div>
        <p>Location: {location}</p>
        <p>Group Leader: {leader}</p>
      </div>
    </div>
    </div>
  );
};

export default TimetableCard;
