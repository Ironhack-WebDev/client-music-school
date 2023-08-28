import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instrumentsService from "../../services/instruments.service";
import InstrumentCard from "../../components/Instruments/InstrumentCard";
import AdminMessage from "../../components/messages/AdminMessage";

function InstrumentDetailsPage(props) {
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


  return (
    <div>
      {instrument && (
        <InstrumentCard
          instrumentName={instrument.instrumentName}
          teacher={instrument.teacher}
          description={instrument.description}
          location={instrument.location}
          imageURL={instrument.imageURL}
        />
      )}
<p>
      Contact us for more details or to book a trial lesson </p>
      <AdminMessage />


    </div>
  );
}

export default InstrumentDetailsPage;
