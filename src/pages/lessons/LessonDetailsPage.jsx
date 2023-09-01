import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import lessonsService from "../../services/lessons.service";
import LessonCard from "../../components/lessons/LessonCard";
import { Link } from "react-router-dom";

function LessonDetailsPage(props) {
  const [lesson, setLesson] = useState(null);
  const { lessonId } = useParams();
  const getLesson = () => {

    lessonsService.getLesson(lessonId)    
    .then((response) => {
      const oneLesson = response.data;
      setLesson(oneLesson);
    })
    .catch((error) => console.log(error));
};

useEffect(()=> {
    getLesson();
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [] );

    return (
      <div >
              {lesson && (
        <LessonCard
          user={lesson.user}
          time={lesson.time}
          length={lesson.length}
        />
      )}

      <Link to={`/lessons/edit/${lessonId}`}>
        <button>Edit Lesson</button>
      </Link>

      <Link to={`/admin`}>
        <button>Return to admin profile</button>
      </Link>
      </div>
    );
  }
  
  export default LessonDetailsPage;