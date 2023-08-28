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
  }, []);

  console.log("Lessons:", lessons)

    return (
      <div >

        {lessons.map((lesson) => (
        <LessonCard key={lesson._id} {...lesson} />
      ))}
      </div>
    );
  }
  
  export default LessonListPage;