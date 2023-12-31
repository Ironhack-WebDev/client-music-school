import React, { useState, useEffect } from "react";
import LessonCard from "./LessonCard";
import lessonsService from "../../services/lessons.service";

function LessonListPage({instrument}) {
  const [lessons, setLessons] = useState([]);


  const getAllLessons = () => {
    lessonsService
      .getAllLessons(instrument)
      .then((response) => setLessons(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLessons();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <div >

        {lessons.map((lesson) => (
        <LessonCard key={lesson._id} {...lesson} />
      ))}
      </div>
    );
  }
  
  export default LessonListPage;