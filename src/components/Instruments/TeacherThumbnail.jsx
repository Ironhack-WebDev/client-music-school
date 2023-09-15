import { Link } from "react-router-dom";
function TeacherThumbnail({teacher, instrumentName, _id}) {
    return (
      <div className="tile">
        <Link to={`/teacher/${_id}`}  style={{ textDecoration: 'none', color: '#694736' }}>
        <p className="teacher-title">{teacher}</p>
        <p className="teacher-title">{instrumentName}</p>
        </Link>
      </div>
    );
  }
  
  export default TeacherThumbnail;