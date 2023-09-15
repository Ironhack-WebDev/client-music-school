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
  const [titleError, setTitleError] = useState("");
const [startTimeError, setStartTimeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError("");
    setStartTimeError("");

    if (title.trim() === "") {
      setTitleError("Title is required.");
      return;
    }
  
    if (startTime.trim() === "") {
      setStartTimeError("Start Time is required.");
      return;
    }

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
    <div className="add-form">
      <div className="add-form-body">
        <div className="add-form-bubble">
    <form onSubmit={handleSubmit}>
    <div>
      <label><strong>Title:  </strong></label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className="error">{titleError}</p>
      </div>
      <div>
  <label><strong>Day:  </strong></label>
  <select
    name="day"
    value={day}
    onChange={(e) => setDay(e.target.value)}
  >
  <option value="">Please Select a Day</option>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
  </select>
</div>

      <div>
      <label><strong>Start Time:  </strong></label>
      <input
        type="text"
        name="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <p className="error">{startTimeError}</p>
       </div>
      <div>
      <label><strong>End Time:  </strong></label>
      <input
        type="text"
        name="endTime"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
       </div>
      <div>
      <label><strong>Location:  </strong></label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
       </div>
      <div>
      <label><strong>Group Leader:  </strong></label>
      <input
        type="text"
        name="leader"
        value={leader}
        onChange={(e) => setLeader(e.target.value)}
      />
       </div>
       <div>
      <label><strong>Skill Level:  </strong></label>
      <input
        type="text"
        name="skillLevel"
        value={skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      />
       </div>
       <div>
      <label><strong>Instruments:  </strong></label>
      <input
        type="text"
        name="instruments"
        value={instruments}
        onChange={(e) => setInstruments(e.target.value)}
      />
       </div>
       <div>
      <label><strong>Description:  </strong></label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
       </div>

      <div>
      <label><strong>Group Image URL:  </strong></label>
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
  </div>
  </div>
    );
}

export default AddGroup;
