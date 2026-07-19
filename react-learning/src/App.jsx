
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


// -----------------------------------------------------------------------------------------------

// states topics

// defination of state is a variable that stores data and updates the UI (screen) whenever its value changes.
// Without state, React cannot automatically update the UI.
// -----------------------------------------------------------------------------------------------
/*useState is a Hook.(1)

It is used to create and manage state inside a functional component.

Syntax
const [state, setState] = useState(initialValue);*/

// ------------------------------------------------------------------------------------------------
/* example for counter app

import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}

export default Counter;
*/
// ------------------------------------------------------------------------------------

//  second example for button like button

 /*import { useState } from "react";

function LikeButton() {

  const [likes, setLikes] = useState(0);

  return (
    <div>

      <h2>Likes : {likes}</h2>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Like
      </button>

    </div>
  );
}

export default LikeButton;

--------------------------------------------------------------------------------------------------


second state is updating state
Updating State:Updating state means changing the current value using the setter function.

Example:

const [count, setCount] = useState(0);

// Update the value
setCount(1);
-----------------------------------------------------------------------------------------------

State stores data that can change.
useState() creates state.
The first value (count) stores the current data.
The second value (setCount) updates the data.
When state changes, React automatically re-renders (updates) the UI.
Never change state directly like this:
count = count + 1;   // Wrong

Always update state like this:

setCount(count + 1); //  Correct


---------------------------------------------------------------------------------------------

Event Handling topic:Event handling means React performs an action when the user interacts with the webpage.

Examples of user actions:

Clicking a button
Typing in an input box
Submitting a form
Moving the mouse



We use event handling to make our website interactive.

Without event handling:

The button does nothing.
The input box cannot respond.
The form cannot be submitted.

With event handling:

The button works.
The input updates.
The form submits.

// ----------------------------------------------------------------------------------

Common React Events
Event	Purpose
onClick	When a button is clicked
onChange	When input value changes
onSubmit	When a form is submitted
onMouseOver	When the mouse moves over an element
onKeyDown	When a keyboard key is pressed



// ------------------EXAMPLE  BUTTON CLICK


function App() {

  function sayHello() {
    alert("Hello Shankaragouda!");
  }

  return (
    <button onClick={sayHello}>
      Click Me
    </button>
  );
}

export default App;
// ------------------------
it works
You click the button.
onClick runs sayHello().
An alert appears saying "Hello Shankaragouda!".


// -------------------


Summary
Event = User action (click, type, submit).
Event Handling = React responds to that action.
onClick → Button click.
onChange → Input typing.
onSubmit → Form submission.
Event = User action (click, type, submit).
Event Handling = React responds to that action.
onClick → Button click.
onChange → Input typing.
onSubmit → Form submission.


// ----------Conditional Rendering-----------


Conditional Rendering means showing different UI based on a condition.

Just like in Java, we use if, else, or the ternary operator to make decisions. In React, we use them to decide what should appear on the screen.


example     Using if...else
function App() {
  let isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Shankaragouda!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default App;

// ------------------------------------------

Using Ternary Operator (Most Common)

Syntax

condition ? truePart : falsePart


