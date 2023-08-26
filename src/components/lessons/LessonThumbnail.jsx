import { Link } from "react-router-dom";
function LessonThumbnail({user, _id}) {
    return (
      <div >
        <Link to={`/lessons/${_id}`}>
        <h3>{user}</h3>
        </Link>
      </div>
    );
  }
  
  export default LessonThumbnail;