function StudentCard({ name, course, batch }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>Course: {course}</p>

      <p>Batch: {batch}</p>
    </div>
  );
}

export default StudentCard;