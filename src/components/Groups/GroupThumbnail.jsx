import { Link } from "react-router-dom";

function GroupThumbnail({title, imageURL, _id}) {
    return (
      <div >
      <Link to={`/groups/${_id}`}>
        <h3>{title}</h3>
        <p>{imageURL}</p>
        </Link>
      </div>
    );
  }
  
  export default GroupThumbnail;