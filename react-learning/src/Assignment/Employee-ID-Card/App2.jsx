import EmployeeCard from "./EmployeeCard";

function App2() {
  return (
    <div>
      <h1>Employee ID Card</h1>

      <EmployeeCard
        name="Shankaragouda"
        department="Software Development"
        salary={50000}
        image="https://picsum.photos/200"
      />

      <EmployeeCard
        name="sahana"
        department="Testing"
        salary={40000}
        image="https://picsum.photos/201"
      />
    </div>
  );
}

export default App2;