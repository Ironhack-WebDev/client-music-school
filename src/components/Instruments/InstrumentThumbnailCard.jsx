import { Link } from "react-router-dom";
function InstrumentThumbnail(instrumentName, _id) {
    return (
      <div >
        <Link to={`/instruments/${_id}`}>
        <h3>{instrumentName}</h3>
        </Link>
      </div>
    );
  }
  
  export default InstrumentThumbnail;