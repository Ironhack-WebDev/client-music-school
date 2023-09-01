import { Link } from "react-router-dom";
function TeacherThumbnail({teacher, _id}) {
    return (
      <div >
        <Link to={`/teacher/${_id}`}>
        <h3>{teacher}</h3>
        </Link>
      </div>
    );
  }
  
  export default TeacherThumbnail;