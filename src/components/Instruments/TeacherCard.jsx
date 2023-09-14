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
     
     

  
          <p>Instrument: {instrumentName}</p>
          <p>Location: {location}</p>
          </div>
    
    );
  }
  
  export default InstrumentCard;
  