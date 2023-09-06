import instrumentsService from "../../services/instruments.service";
import { useEffect, useState } from 'react';

function UserLessonCard({ instrument, time, length, _id }) {
  const [lessonInstrument, setLessonInstrument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getInstrument = () => {
    instrumentsService
      .getInstrument(instrument)
      .then((response) => {
        const oneInstrument = response.data;
        setLessonInstrument(oneInstrument);
        setIsLoading(false); // Set isLoading to false when the data is ready
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  };

  useEffect(() => {
   
      getInstrument();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    // Render a loading indicator while waiting for data
    return <p>Loading...</p>;
  }

  // Render the component with the received data
  return (
    <div>
      <div>
        <div>
          <p>Instrument: {lessonInstrument.instrumentName}</p>
          <p>Teacher: {lessonInstrument.teacher}</p>
          <p>Time: {time}</p>
          <p>Length: {length} minutes</p>
        </div>
      </div>
    </div>
  );
}

export default UserLessonCard;
