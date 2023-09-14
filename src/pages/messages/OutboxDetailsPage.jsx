import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import messagesService from "../../services/messages.service";
import OutboxCard from "../../components/messages/OutboxCard";

function OutboxDetailsPage(props) {
  const [message, setMessage] = useState(null);
  const { messageId } = useParams();



  const getMessage = () => {
    messagesService
      .getMessage(messageId)
      .then((response) => {
        const oneMessage = response.data;
        setMessage(oneMessage);
      })
      .catch((error) => console.log(error));
  };

  console.log (message)

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      {message  ? (
        <div>
          <OutboxCard
          timeStamp={message.timeStamp}
            title={message.title}
            message={message.message}
          
            
          />

        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

export default OutboxDetailsPage;