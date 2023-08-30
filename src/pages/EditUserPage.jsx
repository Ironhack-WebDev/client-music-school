import usersService from "../services/users.service";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditUserPage(props) {
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    usersService
      .getUser(userId)
      .then((response) => {
        const oneUser = response.data;
        setName(oneUser.name);
        setImageURL(oneUser.imageURL);
        setEmail(oneUser.email);
        setPhone(oneUser.phone);
        setAddress(oneUser.address);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      imageURL,
      name,
      email,
      phone,
      address,
    };

    usersService.updateUser(userId, requestBody).then((response) => {
      navigate(`/users/${userId}`);
    });
  };

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit}>
        <div>
          <label>imageURL</label>
          <input
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditUserPage;
