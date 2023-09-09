import { Link } from "react-router-dom";

function GroupThumbnail({title, imageURL, _id}) {
    return (
      <div >
      <Link to={`/groups/info/${_id}`}>
        <h3>{title}</h3>
        </Link>
        <div>
        <img src={imageURL} alt="Instrument" style={{ width: "200px" }} />
      </div>
      </div>
    );
  }
  
  export default GroupThumbnail;