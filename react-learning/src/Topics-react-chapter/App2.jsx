import Input from "./Input";
import Button from "./Button";

function App() {
  return (
    <div>
      <h1>Registration Form</h1>

      <form>
        <Input label="Full Name" type="text" placeholder="Enter your name"/>

        <Input label="Email" type="email" placeholder="Enter your email" />

        <Input label="Password" type="password" placeholder="Enter your password" />

        <Input label="Mobile Number"  type="tel" placeholder="Enter your mobile number" />

        <Button />
      </form>
      </div>
    
  );
}

export default App;