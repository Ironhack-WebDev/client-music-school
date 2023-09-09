import { Link } from "react-router-dom";

function GroupTitle({title, _id}) {
    return (
      <div >
        <Link to={`/groups/${_id}`}>
          <p className="user-group-title">{title}</p>
        </Link>
      </div>
    );
  }
  
  export default GroupTitle;