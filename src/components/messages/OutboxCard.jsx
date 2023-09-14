function OutboxCard({ title, message, timeStamp }) {
  return (
    <div className="message-item">
      {(() => {
        const timestamp = timeStamp;
        const date = new Date(timestamp);
        const options = {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        return new Intl.DateTimeFormat("en-GB", options).format(date);
      })()}

      <div className="message-title">{title}</div>
      <div className="message-content">{message}</div>
    </div>
  );
}

export default OutboxCard;
