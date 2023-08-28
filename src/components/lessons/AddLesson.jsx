import React, { useState, useEffect } from "react";
import lessonsService from "../../services/lessons.service";

function AddLesson({ instrumentId, allUsers }) {
  const [user, setUser] = useState("");
  const [time, setTime] = useState("");
  const [length, setLength] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      userId: user,
      time,
      length,
      instrumentId,
    };

    console.log(requestBody);

    lessonsService
      .createLesson(requestBody)
      .then((response) => {
        setUser("");
        setTime("");
        setLength("");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Student</label>
          <select
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          >
            <option value="">Select a student</option>
            {allUsers.map((userOption) => (
              <option key={userOption._id} value={userOption._id}>
                {userOption.name}
              </option>
            ))}
          </select>
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
      )}
    </div>
  );
}

export default AddLesson;
