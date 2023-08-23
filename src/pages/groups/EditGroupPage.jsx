import groupsService from "../../services/groups.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditGroupPage(props) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");
  const [imageURL, setImageURL] = useState("");

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
        setImageURL(oneGroup.imageURL);
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
      imageURL,
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Start Time</label>
        <input
          type="text"
          name="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <label>End Time</label>
        <input
          type="text"
          name="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Leader</label>
        <input
          type="text"
          name="leader"
          value={leader}
          onChange={(e) => setLeader(e.target.value)}
        />
        <label>Image</label>
        <input
          type="text"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button onClick={deleteGroup}>Delete Group</button>
      </form>
    </div>
  );
}

export default EditGroupPage;
