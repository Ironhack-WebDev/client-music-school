import lessonsService from "../../services/lessons.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usersService from "../../services/users.service";

function EditLessonPage() {
    const [user, setUser] = useState("");
    const [time, setTime] = useState("");
    const [length, setLength] = useState("");
    const [allUsers, setAllUsers] = useState("");
    const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { lessonId } = useParams();

  useEffect(() => {
    lessonsService
      .getLesson(lessonId)
      .then((response) => {
        const oneLesson = response.data;
        setUser(oneLesson.user);
        setTime(oneLesson.time);
        setLength(oneLesson.length);
      })
      .catch((error) => console.log(error));
  }, [lessonId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        user,
        time,
        length
    };

    lessonsService
      .updateLesson(lessonId, requestBody)
      .then((response) => {
        navigate(`/lessons/${lessonId}`);
      });
  };

  const getAllUsers = () => {
    usersService
      .getAllUsers()
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const deleteLesson = () => {
    lessonsService
      .deleteLesson(lessonId)
      .then(() => navigate("/lessons"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-form">
    <div className="edit-form-body">
        <div className="edit-form-bubble">
    {loading ? (
        <p>Loading...</p>
      ) : (
    <form onSubmit={handleSubmit}>
    <div>
      <label><strong>Student:  </strong></label>
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
          </div>
      <div>
      <label><strong>Time:  </strong></label>
      <input
        type="text"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      </div>
      <div>
      <label><strong>Length: </strong></label>
      <input
        type="text"
        name="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      </div>
      <div>
        <button type="submit">Submit</button>
        </div>
      <div>
        <button onClick={deleteLesson}>Delete Lesson</button>
        </div>
      </form>
      )}
    </div>
    </div>
    </div>
  );
}

export default EditLessonPage;
