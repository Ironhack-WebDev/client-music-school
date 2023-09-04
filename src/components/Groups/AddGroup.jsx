import groupsService from "../../services/groups.service";
import { useState } from "react";


function AddGroup(props) {
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
      description
    };

    groupsService
      .createGroup(requestBody)
      .then((response) => {
        setTitle("");
        setStartTime("");
        setEndTime("");
        setLocation("");
        setLeader("");
        setDay("");
        setImageURL("");
        setSkillLevel ("");
        setInstruments ([])
        setDescription ("")
        PaymentResponse.refreshGroups();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="formPage">
    <h3>Add Group</h3>
    <form onSubmit={handleSubmit}>
    <div>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div>
      <label>Day</label>
      <input
        type="text"
        name="day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
       </div>
      <div>
      <label>Start Time</label>
      <input
        type="text"
        name="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
       </div>
      <div>
      <label>End Time</label>
      <input
        type="text"
        name="endTime"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
       </div>
      <div>
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
       </div>
      <div>
      <label>Leader</label>
      <input
        type="text"
        name="leader"
        value={leader}
        onChange={(e) => setLeader(e.target.value)}
      />
       </div>
       <div>
      <label>Skill Level</label>
      <input
        type="text"
        name="skillLevel"
        value={skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      />
       </div>
       <div>
      <label>Instruments</label>
      <input
        type="text"
        name="instruments"
        value={instruments}
        onChange={(e) => setInstruments(e.target.value)}
      />
       </div>
       <div>
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
       </div>

      <div>
      <label>Group Image URL</label>
      <input
        type="text"
        name="imageURL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    );
}

export default AddGroup;
