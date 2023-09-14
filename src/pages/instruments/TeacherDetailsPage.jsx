import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instrumentsService from "../../services/instruments.service";
import TeacherCard from "../../components/Instruments/TeacherCard";
import usersService from "../../services/users.service";
import { Link } from "react-router-dom";
import AddLesson from "../../components/lessons/AddLesson";
import LessonList from "../../components/lessons/LessonList";

function TeacherDetailsPage(props) {
  const [allUsers, setAllUsers] = useState("");
  const [instrument, setInstrument] = useState(null);
  const { instrumentId } = useParams();

  const getInstrument = () => {
    instrumentsService
      .getInstrument(instrumentId)
      .then((response) => {
        const oneInstrument = response.data;
        setInstrument(oneInstrument);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getInstrument();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllUsers = () => {
    usersService
      .getAllUsers()
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="information-container">
    <div className="info-card">
    <div>
      {instrument && (
        <TeacherCard
          instrumentName={instrument.instrumentName}
          teacher={instrument.teacher}
          description={instrument.description}
          location={instrument.location}
          imageURL={instrument.imageURL}
        />
      )}
      </div>

<div className="info-page-buttons">
    <div className='join-or-message-buttons'>

      <Link to={`/instruments/edit/${instrumentId}`}>
        Edit Teacher Details
      </Link>
</div>
      
</div>

      <LessonList instrument={instrumentId} />

      <h3> Add Lesson </h3>
      <AddLesson instrumentId={instrumentId} allUsers={allUsers} />


    </div>
    </div>
  );
}

export default TeacherDetailsPage;
