import { Link } from "react-router-dom";

function GroupThumbnail({title, _id}) {
    return (
      <div >
      <Link to={`/groups/${_id}`}>
        <h3>{title}</h3>
        </Link>
      </div>
    );
  }
  
  export default GroupThumbnail;