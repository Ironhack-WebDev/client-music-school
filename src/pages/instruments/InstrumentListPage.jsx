import React, { useState, useEffect } from "react";
import InstrumentThumbnail from "../../components/Instruments/InstrumentThumbnail";
import Searchbar from "../../components/Searchbar";
import instrumentsService from "../../services/instruments.service";

function InstrumentListPage() {
  const [instruments, setInstruments] = useState([]);
  const [inputText, setInputText] = useState("");

  const getAllInstruments = () => {
    instrumentsService
      .getAllInstruments()
      .then((response) => setInstruments(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllInstruments();
  }, []);

  const filteredInstruments = (instruments || []).filter((instrument) => {
    return instrument.instrumentName.toLowerCase().includes(inputText.toLowerCase());
  });

    return (
      <div>
       <Searchbar inputText={inputText} setInputText={setInputText} />
       <div className="tileContainer">
          {filteredInstruments.map((instrument) => (
            <InstrumentThumbnail key={instrument._id} {...instrument} />
          ))}
        </div>
      </div>
    );
  }
  
  export default InstrumentListPage;