function InstrumentCard({
    instrumentName,
    teacher,
    description,
    location,
    imageURL,
  }) {
    return (
      <div>
        <h3>{teacher}</h3>
        <div>
          <p>Instrument: {instrumentName}</p>
          <p>Description: {description}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    );
  }
  
  export default InstrumentCard;
  