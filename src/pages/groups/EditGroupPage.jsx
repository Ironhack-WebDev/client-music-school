import groupsService from "../../services/groups.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditGroupPage(props) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");
  const [day, setDay] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [instruments, setInstruments] = useState([]);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { groupId } = useParams();

  useEffect(() => {
    groupsService
      .getGroup(groupId)
      .then((response) => {
        const oneGroup = response.data;
        setTitle(oneGroup.title);
        setStartTime(oneGroup.startTime);
        setEndTime(oneGroup.endTime);
        setLocation(oneGroup.location);
        setLeader(oneGroup.leader);
        setDay(oneGroup.day);
        setImageURL(oneGroup.imageURL);
        setSkillLevel(oneGroup.skillLevel);
        setInstruments(oneGroup.instruments);
        setDescription(oneGroup.description);
      })
      .catch((error) => console.log(error));
  }, [groupId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      startTime,
      endTime,
      location,
      leader,
      day,
      imageURL,
      skillLevel,
      instruments,
      description,
    };

    groupsService.updateGroup(groupId, requestBody).then((response) => {
      navigate(`/groups/${groupId}`);
    });
  };

  const deleteGroup = () => {
    groupsService
      .deleteGroup(groupId)
      .then(() => navigate("/groups"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="formPage">
    <img src={imageURL} alt="Group" />
    <div className="edit-page-container">
    <div ClassName="page-leftside">
      <form onSubmit={handleSubmit}>
              <label><strong>Image:</strong></label>
              <input
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
              <label><strong>Title:</strong></label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label><strong>Description:</strong></label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label><strong>Day:  </strong></label>
              <br />
              <select
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
              <br />
             <label><strong>Start Time:  </strong></label>
              <input
                type="text"
                name="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </form>
            </div>

            <div ClassName="page-rightside">
            <form onSubmit={handleSubmit}>
            <label><strong>End Time:  </strong></label>
              <input
                type="text"
                name="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <label><strong>Location:  </strong></label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <label><strong>Group Leader:  </strong></label>
              <input
                type="text"
                name="leader"
                value={leader}
                onChange={(e) => setLeader(e.target.value)}
              />
              <label><strong>Skill Level:  </strong></label>
              <input
                type="text"
                name="skillLevel"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
              />
              <label><strong>Instruments:  </strong></label>
              <input
                type="text"
                name="instruments"
                value={instruments}
                onChange={(e) => setInstruments(e.target.value)}
              />
            </form>
            </div>
            </div>
            <div className="edit-page-buttons">
              <button type="submit">Submit</button>
              <button onClick={deleteGroup}>Delete Group</button>
            </div>
    </div>
  );
}

export default EditGroupPage;
