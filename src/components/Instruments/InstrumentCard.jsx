function InstrumentCard({
  instrumentName,
  teacher,
  description,
  location,
  imageURL
}) {
  return (
    <div>
      <h3>{instrumentName}</h3>
      <div>
        <img src={imageURL} alt="Instrument" style={{ width: "200px" }} />
        <p>Teacher: {teacher}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default InstrumentCard;
