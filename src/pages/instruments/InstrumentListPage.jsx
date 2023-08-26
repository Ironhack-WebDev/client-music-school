import React, { useState, useEffect } from "react";
import InstrumentCard from "../../components/Instruments/InstrumentCard";
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
    return instrument.title.toLowerCase().includes(inputText.toLowerCase());
  });

    return (
      <div >
       <Searchbar inputText={inputText} setInputText={setInputText} />

        {filteredInstruments.map((instrument) => (
        <InstrumentCard key={instrument._id} {...instrument} />
      ))}
      </div>
    );
  }
  
  export default InstrumentListPage;