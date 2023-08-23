function GroupCard({ title, startTime, endTime, location, leader, imageURL }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{startTime}</p>
      <p>{endTime}</p>
      <p>{location}</p>
      <p>{leader}</p>
      <p>{imageURL}</p>
    </div>
  );
}

export default GroupCard;
