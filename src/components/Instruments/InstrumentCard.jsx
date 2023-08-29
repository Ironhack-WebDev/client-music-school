import { Link } from "react-router-dom";

function InstrumentCard({
  instrumentName,
  teacher,
  description,
  location,
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
        <p>Teacher: {teacher}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default InstrumentCard;
