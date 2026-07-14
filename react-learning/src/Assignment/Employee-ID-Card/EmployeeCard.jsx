import { useState } from "react";

function EmployeeCard({ name, department, salary, image }) {

  const [status, setStatus] = useState(false);

  function toggleStatus() {
    setStatus(!status);
  }

  return (
    <div>

      <img src={image} alt={name} width="150" />

      <h2>Name: {name}</h2>

      <p>Department: {department}</p>

      <p>Salary: ₹{salary}</p>

      <p>
        Status: {status ? "Active" : "Inactive"}
      </p>

      <button onClick={toggleStatus}>
        {status ? "Make Inactive" : "Make Active"}
      </button>

    </div>
  );
}

export default EmployeeCard;
