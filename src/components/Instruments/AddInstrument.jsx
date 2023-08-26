import instrumentsService from "../../services/instruments.service";
import { useState } from "react";

function AddInstrument(props) {
  const [instrumentName, setInstrumentName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      instrumentName,
      teacher,
      description,
      location,
      imageURL,
    };

    instrumentsService
      .createInstrument(requestBody)
      .then((response) => {
        setInstrumentName("");
        setTeacher("");
        setDescription("");
        setLocation("");
        setImageURL("");
        PaymentResponse.refreshInstruments();
      })
      .catch((error) => console.log(error));
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="instrumentName"
        value={instrumentName}
        onChange={(e) => setInstrumentName(e.target.value)}
      />
      <label>Teacher</label>
      <input
        type="text"
        name="teacher"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>Image</label>
      <input
        type="text"
        name="imageURL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  </div>;
}

export default AddInstrument;
