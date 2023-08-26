import usersService from "../services/users.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProfile(props) {
    const [name, setName] = useState("");
  
    const navigate = useNavigate();
    const { userId } = useParams();
  
    useEffect(() => {
      usersService
        .getUser(userId)
        .then((response) => {
          const user = response.data;
          setName(user.name);
        })
        .catch((error) => console.log(error));
    }, [userId]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const requestBody = {
        name,
      };
  
      usersService.updateUser(userId, requestBody).then((response) => {
        navigate(`/users/${userId}`);
      });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default EditProfile;