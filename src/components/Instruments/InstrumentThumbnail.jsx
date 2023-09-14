import { Link } from "react-router-dom";

function InstrumentCard({
  instrumentName,
  imageURL,
  _id 
}) {
  return (
    <div className="tile">
      <Link to={`/instruments/${_id}`} style={{ textDecoration: 'none', color: '#694736' }} >
        <div className="tile-image">
          <img src={imageURL} alt="Instrument" />
        </div>
        <div className="tile-info">       
          <h5>{instrumentName}</h5>
        </div> 
      </Link>
    </div>
  );
}

export default InstrumentCard;
