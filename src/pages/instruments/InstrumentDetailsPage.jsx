import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instrumentsService from "../../services/instruments.service";
import InstrumentCard from "../../components/Instruments/InstrumentCard";
import { Link } from "react-router-dom";

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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="information-container">
      <div className="info-card">
        {instrument && (
          <InstrumentCard
            instrumentName={instrument.instrumentName}
            teacher={instrument.teacher}
            description={instrument.description}
            location={instrument.location}
            imageURL={instrument.imageURL}
          />
        )}
      </div>
      <div className="info-page-buttons">
        <div className="join-or-message-buttons">
          <Link to={`/messages`} style={{ textDecoration: 'none', color: 'inherit',}}>
            Send a message
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstrumentDetailsPage;
