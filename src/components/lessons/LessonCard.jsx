import React, { useState, useEffect } from "react";

function LessonCard({ user, time, length }) {
  const [loading, setLoading] = useState(true);
  console.log(user)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []); 

  return (
    <div>
      {loading ? (
        <p>Loading lesson details...</p>
      ) : (
        <div>
          <h3>{user}</h3>
          <div>
            <p>Time: {time}</p>
            <p>Length: {length}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonCard;
