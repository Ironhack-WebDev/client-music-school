import { Link } from "react-router-dom";

function GroupTitle({title, day, leader, _id}) {
    return (
      <div className="tile">
        <Link to={`/groups/${_id}`} style={{ textDecoration: 'none', color: '#694736' }}>
          <p className="user-group-title">{title}</p>
          <p className="user-group-title">{leader}</p>
        </Link>
      </div>
    );
  }
  
  export default GroupTitle;