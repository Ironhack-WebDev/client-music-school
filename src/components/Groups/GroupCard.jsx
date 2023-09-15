
const GroupCard = ({ title, startTime, endTime, location, day, leader, imageURL, _id, description, skillLevel, instruments }) => {
  return (
    <div className="information">
      <div className="information-header">
        <div className="information-header-left">
          <div className="header-left-title">
            <p>{title}</p>
          </div>
          <div className="header-left-text">
            <p>{description}</p>
          </div>
        </div>
        <div className="information-header-right">
          <img src={imageURL} alt="Group"/>
        </div>
      </div>
    
    <div className="information-body">
      <div className="information-bubble">
        <p><b>Day: </b>{day}</p>
        <p><b>Time: </b>{startTime} - {endTime}</p>
        <p><b>Location: </b>{location}</p>
        <p><b>Group Leader: </b>{leader}</p>
        <p><b>Skill Level: </b>{skillLevel}</p>
        <p><b>Instruments: </b>{instruments}</p>
      </div>
    </div>
    </div>
  );
};

export default GroupCard;
