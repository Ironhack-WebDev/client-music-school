import React, { useState, useEffect } from "react";
import LessonCard from "../../components/lessons/LessonCard";
import Searchbar from "../../components/Searchbar";
import lessonsService from "../../services/lessons.service";

function LessonListPage() {
  const [lessons, setLessons] = useState([]);
  const [inputText, setInputText] = useState("");

  const getAllLessons = () => {
    lessonsService
      .getAllLessons()
      .then((response) => setLessons(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLessons();
  }, []);

  const filteredLessons = (lessons || []).filter((lesson) => {
    return lesson.instrumentName.toLowerCase().includes(inputText.toLowerCase());
  });

    return (
      <div >
       <Searchbar inputText={inputText} setInputText={setInputText} />

        {filteredLessons.map((lesson) => (
        <LessonCard key={lesson._id} {...lesson} />
      ))}
      </div>
    );
  }
  
  export default LessonListPage;