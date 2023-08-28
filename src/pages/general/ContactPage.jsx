import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import AdminMessage from "../../components/messages/AdminMessage";
import AnonMessage from "../../components/messages/AnonMessage";


function ContactPage({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {

    return (
      <div>
       <AdminMessage/>
      </div>
    );
  } else {
    return (
      <div>
       <AnonMessage/>
      </div>
    ); 
  }
}
  
  export default ContactPage;