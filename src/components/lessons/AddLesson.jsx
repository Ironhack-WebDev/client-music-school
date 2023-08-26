import lessonsService from "../../services/lessons.service";
import { useState } from "react";

function AddLesson(props) {
  const [user, setUser] = useState("");
  const [time, setTime] = useState("");
  const [length, setLength] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const { instrumentId } = props
 
    const requestBody = {
      user,
      time,
      length,
      instrumentId
    };

    lessonsService
      .createLesson(requestBody)
      .then((response) => {
        setUser("");
        setTime("");
        setLength("");
        PaymentResponse.refreshLessons();
      })
      .catch((error) => console.log(error));
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Student</label>
      <input
        type="text"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label>Time</label>
      <input
        type="text"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label>Length</label>
      <input
        type="text"
        name="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  </div>;
}

export default AddLesson;
