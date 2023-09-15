import instrumentsService from "../../services/instruments.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditInstrumentPage(props) {
  const [instrumentName, setInstrumentName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageURL, setImageURL] = useState("");

  const navigate = useNavigate();
  const { instrumentId } = useParams();

  useEffect(() => {
    instrumentsService
      .getInstrument(instrumentId)
      .then((response) => {
        const oneInstrument = response.data;
        setInstrumentName(oneInstrument.instrumentName);
        setTeacher(oneInstrument.teacher);
        setDescription(oneInstrument.description);
        setLocation(oneInstrument.location);
        setImageURL(oneInstrument.imageURL);
      })
      .catch((error) => console.log(error));
  }, [instrumentId]);

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
      .updateInstrument(instrumentId, requestBody)
      .then((response) => {
        navigate(`/instruments/${instrumentId}`);
      });
  };

  const deleteInstrument = () => {
    instrumentsService
      .deleteInstrument(instrumentId)
      .then(() => navigate("/instruments"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-form">
    <div className="edit-form-body">
        <div className="edit-form-bubble">
      <form onSubmit={handleSubmit}>
      <div>
        <label><strong>Title:  </strong></label>
        <input
          type="text"
          name="instrumentName"
          value={instrumentName}
          onChange={(e) => setInstrumentName(e.target.value)}
        />
         </div>
      <div>
        <label><strong>Teacher:  </strong></label>
        <input
          type="text"
          name="teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
         </div>
      <div>
        <label><strong>Description:  </strong></label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         </div>
      <div>
        <label><strong>Location:  </strong></label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
         </div>
      <div>
        <label><strong>Image:  </strong></label>
        <input
          type="text"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
         </div>
      <div>
        <button type="submit">Submit</button>
        </div>
      <div>
        <button onClick={deleteInstrument}>Delete Instrument</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default EditInstrumentPage;
