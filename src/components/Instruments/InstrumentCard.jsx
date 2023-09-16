function InstrumentCard({
  instrumentName,
  teacher,
  description,
  location,
  imageURL,
  _id 
}) {
  return (
    <div className="information">
      <div className="information-header">
        <div className="information-header-left">
          <div className="header-left-title">
            <p>{instrumentName}</p>
          </div>
          <div className="header-left-text">
            <p>{description}</p>
          </div>
        </div>
        <div className="information-header-right">
          <img src={imageURL} alt="Instrument" />
        </div>
      </div>

      <div className="information-body">
        <div className="information-bubble">
        <p><b>Teacher: </b>{teacher}</p>
        <p><b>Location: </b>{location}</p>
      </div>
    </div>
    </div>
  );
};

export default InstrumentCard;
