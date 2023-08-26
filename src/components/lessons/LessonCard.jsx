function LessonCard({ user, time, length }) {
  return (
    <div>
      <h3>{user}</h3>
      <div>
        <p>Time: {time}</p>
        <p>Length: {length}</p>
      </div>
    </div>
  );
}

export default LessonCard;
