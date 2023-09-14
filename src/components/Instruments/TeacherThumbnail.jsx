import { Link } from "react-router-dom";
function TeacherThumbnail({teacher, _id}) {
    return (
      <div >
        <Link to={`/teacher/${_id}`}  style={{ textDecoration: 'none', color: '#694736' }}>
        <p className="teacher-title">{teacher}</p>
        </Link>
      </div>
    );
  }
  
  export default TeacherThumbnail;