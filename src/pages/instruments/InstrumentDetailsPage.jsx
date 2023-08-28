import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instrumentsService from "../../services/instruments.service";
import TeacherCard from "../../components/Instruments/TeacherCard";
import usersService from "../../services/users.service";
import { Link } from "react-router-dom";
import AddLesson from "../../components/lessons/AddLesson";
import LessonList from "../../components/lessons/LessonList";

function InstrumentDetailsPage(props) {
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
  }, []);

  const getAllUsers = () => {
    usersService
      .getAllUsers()
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
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

      <h3> Add Lesson </h3>
      <AddLesson instrumentId={instrumentId} allUsers={allUsers} />


      <LessonList instrument={instrumentId} />

      <Link to={`/instruments/edit/${instrumentId}`}>
        <button>Edit Teacher Details</button>
      </Link>

      <Link to={`/admin`}>
        <button>Return to admin profile</button>
      </Link>
    </div>
  );
}

export default InstrumentDetailsPage;
