import { Link } from "react-router-dom";

function InstrumentCard({
  instrumentName,
  imageURL,
  _id 
}) {
  return (
    <div>
    <Link to={`/instruments/${_id}`}>
      <h3>{instrumentName}</h3>
      </Link>
      <div>
        <img src={imageURL} alt="Instrument" style={{ width: "200px" }} />
      </div>
    </div>
  );
}

export default InstrumentCard;
