function InstrumentCard({
    instrumentName,
    teacher,
    description,
    location,
    imageURL,
  }) {
    return (
      
            <div className="information-body">
            <div className="information-bubble">
      <div className="header-left-title">
        <p>{teacher}</p>
        </div>
        <div>
     

  
          <p>Instrument: {instrumentName}</p>
          <p>Location: {location}</p>
        </div>
      </div>
      </div>
    
    );
  }
  
  export default InstrumentCard;
  