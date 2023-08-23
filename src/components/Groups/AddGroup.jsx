import groupsService from "../../services/groups.service";
import { useState } from "react";


function AddGroup(props) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");
  const [imageURL, setImageURL] = useState("");

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

    groupsService
      .createGroup(requestBody)
      .then((response) => {
        setTitle("");
        setStartTime("");
        setEndTime("");
        setLocation("");
        setLeader("");
        setImageURL("");
        PaymentResponse.refreshGroups();
      })
      .catch((error) => console.log(error));
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
    </form>
  </div>
    );
}

export default AddGroup;
