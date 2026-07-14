
// import StudentCard from "./Assignment/Student-attendence/StudentCard";
// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   return (
//     <>
//       <h1>Hello I am Shankaragouda</h1>
//       <h2>I am learning react.js classes</h2>
//       <p>now its start with with basic folderstructure then we can understand how to write code</p>

//       <button> click me</button>
//     </>
//   )
// }

// export default App
// function App(){
//   useEffect(() =>{
//     console.log("component loaded");
//   },[]);
//   return(
//     <h1>hello shankar</h1>
//   );
// }
// export default App;


// useEffect  With real fetch api example
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.products);
//       });
//   }, []);

//   return (
//     <div>
//       {products.map((product) => (
//         <h2 key={product.id}>
//           {product.title}
//         </h2>
//       ))}
//     </div>
//   );
// }

// export default App;





//     useRef third hook type 
// useRef has two major uses:

// 1. Directly access a DOM element

// 2. Remember a mutable value without causing re-render
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   function focusInput() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input ref={inputRef} type="text" />

//       <button onClick={focusInput}>
//         Focus Input
//       </button>
//     </div>
//   );
// }

// export default App;



// useRef creates reference
// ↓
// ref={inputRef} connects it to input
// ↓
// inputRef.current gives access to input
// ↓
// .focus() focuses the input




// useContext

// Create Context
// ↓
// Provide data
// ↓
// Any descendant component can consume it


//  simple example on  useContext

// import { createContext, useContext } from "react";

// const UserContext = createContext();

// function Profile() {
//   const name = useContext(UserContext);

//   return <h1>Hello {name}</h1>;
// }

// function App() {
//   return (
//     <UserContext.Provider value="Shankaragouda">
//       <Profile />
//     </UserContext.Provider>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <h1>Student Attendance Tracker</h1>

//       <StudentCard
//         name="Sahana"
//         course="React"
//         batch="Batch A"
//       />

//       <StudentCard
//         name="shankaragouda"
//         course="React"
//         batch="Batch B"
//       />
//     </div>
//   );
// }

// export default App;

