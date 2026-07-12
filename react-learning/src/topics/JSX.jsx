// jsx/// 
// it is javascript xml and it allows us write the html like code inside the javascript  

// it is syntax extension  for javascript that allows us to write the html like syntax inside the javascript   
//    javascript+html like syntax 
// syntax for jsx
// function componentName(){
// return (
//     <div></div>
//     <h1></h1>
// )
//  }

// App component->return statement excuteded->jsx describes the ui->react display the ui -> we see the output in broweser.
// why  we need the jsx because of without jsx the react element can be harder to read 
// jsx is easer to read and write 
// jsx is must have one parent element
// fragments  it is groups multiple jsx elements and without creating an extera html elements in the dom
//  example  the jsx  with help  can we create the port poli
// function App() {
//   const name = "Shankaragouda";
//   const role = "Frontend Developer";

//   return (
//     <div>

//       <h1>{name}</h1>

//       <h2>{role}</h2>

//       <p>
//         I build responsive and interactive websites.
//       </p>

//       <button>View My Projects</button>

//     </div>
//   );
// }

// export default App;//

// //props topic

//  Props are used to send data from one component to another component, mainly from a parent component to a child component.//
// /Props help us:

// Pass data between components.
// Create reusable components.
// Avoid duplicate code.
// Display dynamic content.
// Build maintainable applications.

// App.jsx
//   ↓
// Parent component
//   ↓
// <Student name="Shankaragouda" />
//   ↓
// Props carries data
//   ↓
// Student.jsx receives data
//   ↓
// {name}
//   ↓clear
// Browser displays:
// Hello Shankaragouda

// topic on state 
//  state is like a variable in react  and states are changes at that time  react will update automaicallu
// baasic syntax for the state is
// const[state ,setstae]=useState(intialValue);
// import { useState } from "react";
//       example for state
// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}> Increase  </button>
//     </div>
//   );
// }

// export default App;cd