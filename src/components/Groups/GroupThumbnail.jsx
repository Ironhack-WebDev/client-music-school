import { Link } from "react-router-dom";

function GroupThumbnail({title, imageURL, _id}) {
    return (
      <div className="tile">
        <Link to={`/groups/info/${_id}`} style={{ textDecoration: 'none', color: '#694736' }}>
          <div className="tile-image">
            <img src={imageURL} alt="Instrument"/>
          </div>
          <div className="tile-info">   
            <h5>{title}</h5>
          </div>
        </Link>
      </div>
    );
  }
  
  export default GroupThumbnail;