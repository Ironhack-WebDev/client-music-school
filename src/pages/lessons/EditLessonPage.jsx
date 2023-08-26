import lessonsService from "../../services/lessons.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditLessonPage(props) {
    const [user, setUser] = useState("");
    const [time, setTime] = useState("");
    const [length, setLength] = useState("");

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

  const deleteLesson = () => {
    lessonsService
      .deleteLesson(lessonId)
      .then(() => navigate("/lessons"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
        <button onClick={deleteLesson}>Delete Lesson</button>
      </form>
    </div>
  );
}

export default EditLessonPage;
