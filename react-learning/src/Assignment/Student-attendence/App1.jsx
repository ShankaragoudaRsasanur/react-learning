import StudentCard from "./StudentCard.jsx";
function App1() {
  return (
    <div>
      <h1>Student Attendance Tracker</h1>

      <StudentCard
        name="Sahana"
        course="React"
        batch="Batch A"
      />

      <StudentCard
        name="shankar"
        course="Java"
        batch="Batch B"
      />
    </div>
  );
}

export default App1;
