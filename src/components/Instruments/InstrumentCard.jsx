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
            <p>Learn the art of piano and become the next big pianist sensation. Blahj de blah blah blah. more text more text more text. And a lot more text here and a lot more text there. Text everywhere.</p>
          </div>
        </div>
        <div className="information-header-right">
          <img src={imageURL} alt="Instrument" />
        </div>
      </div>

      <div className="information-body">
        <div className="information-bubble">
        <p><b>Teacher: </b>{teacher}</p>
        <p><b>Description: </b>{description}</p>
        <p><b>Location: </b>{location}</p>
      </div>
    </div>
    </div>
  );
};

export default InstrumentCard;
