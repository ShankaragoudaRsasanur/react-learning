import Input from "./Input";
import Button from "./Button";

function App() {
  return (
    <div>
      <br/>
      <h1>Registration Form</h1>

      <form  style={{paddingTop:25,borderRadius:75,}}>
        <br/>
        <Input label="Full Name" type="text" placeholder="Enter your name"/>
         <br/>
        <Input label="Email" type="email" placeholder="Enter your email" />
        <br/>
        <Input label="Password" type="password" placeholder="Enter your password" />
        <br/>
        <Input label="Mobile Number"  type="tel" placeholder="Enter your mobile number" />
        <br/>
        <Button />
      </form>
      </div>
    
  );
}

export default App;