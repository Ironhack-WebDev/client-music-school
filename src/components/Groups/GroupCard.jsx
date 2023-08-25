import React from "react";

function GroupCard({ title, startTime, endTime, location, leader, day }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "1px solid black",
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
    //backgroundImage: `url(${imageURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
    width: "300px", 
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>Day: {day}</p>
      <p>Start Time: {startTime}</p>
      <p>End Time: {endTime}</p>
      <p>Location: {location}</p>
      <p>Group Leader: {leader}</p>
    </div>
  );
}

export default GroupCard;
