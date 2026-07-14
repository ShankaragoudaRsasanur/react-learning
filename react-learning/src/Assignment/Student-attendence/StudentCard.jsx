import { useState } from "react";

function StudentCard({ name, course, batch }) {

  const [attendanceStatus, setAttendanceStatus] = useState(false);

  function toggleAttendance() {
    setAttendanceStatus(!attendanceStatus);
  }

  return (
    <div>
      <h2>Name: {name}</h2>

      <p>Course: {course}</p>

      <p>Batch: {batch}</p>

      <p>
        Attendance: {attendanceStatus ? "Present" : "Absent"}
      </p>

      <button onClick={toggleAttendance}>
        {attendanceStatus ? "Mark Absent" : "Mark Present"}
      </button>
    </div>
  );
}

export default StudentCard;