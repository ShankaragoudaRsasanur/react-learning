/*Definition

React is a JavaScript Library used to build User Interfaces (UI).

It was developed by Facebook (Meta).

React helps us create fast, reusable, and interactive web applications.

Real-Life Example

Think about Instagram.

Navbar
Stories
Posts
Comments
Footer

Each part is created separately and then combined.

That is exactly what React does.

Why React?

Without React

HTML becomes large.
Code is difficult to maintain.
Repeated code everywhere.

With React

Reusable code
Easy maintenance
Faster UI updates
Better performance
Features of React

 Component-Based

Virtual DOM
 Reusable Code
Fast Rendering
One-way Data

-----------------------------------------------------------------------------

2. Installing React Using Vite
Step 1
npm create vite@latest
Step 2

Project Name

react-learning
Step 3

Select

React
Step 4

Select

JavaScript
Step 5
cd react-learning
Step 6
npm install
Step 7
npm run dev

Output

http://localhost:5173

------------------------------------------------------------------------------------

Folder Structure
react-learning
│
├── node_modules
├── public
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
└── vite.config.js



main.jsx
Purpose

This is the entry point of the React application.

It renders the App component.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

Explanation

ReactDOM creates the application.
root is the div inside index.html.
App component is displayed.



--------------------------------------------------------------------


App.jsx
Purpose

It is the main component.

All other components are called inside App.jsx.

Example

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;

Output

Hello React






JSX stands for:JavaScript XML

It allows us to write HTML inside JavaScript.

Example

Without JSX

React.createElement("h1", null, "Hello");

With JSX

<h1>Hello</h1>

Much easier.

JSX Rules
Rule 1 :Only one parent element.

Correct

return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);

Wrong

return (
<h1>Hello</h1>
<p>Welcome</p>
);


Rule 2:Close all tags.

Correct

<img src="image.jpg" />

Wrong

<img src="image.jpg">


Rule 3: Use className

HTML

<div class="box"></div>

React

<div className="box"></div>

Rule 4:JavaScript inside {}


const name = "Shankar";

function App() {
  return <h1>Hello {name}</h1>;
}

Output

Hello Shankar
Expressions Inside JSX
const age = 22;

function App() {
  return <h1>Age : {age}</h1>;
}

Output

Age : 22
--------------------------------------------------------------------------
-----------component topic------------------
Components
What is a Component

A Component is a reusable piece of UI.

Example

Instead of writing Navbar many times,

Create one Navbar component.

Use it anywhere.



two types of componeets 
1.functional components and  class components
A Functional Component is a JavaScript function that returns JSX.

It is the modern way of writing React components.

Today, almost every React project uses Functional Components.

Syntax
function Home() {
  return <h1>Welcome to Home Page</h1>;
}

export default Home;



App.jsx
import Home from "./Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
Output
Welcome to Home Page
How it works
function Home() {

Creates a JavaScript function named Home.

return

Returns JSX (HTML-like code).

<Home />

Calls the component inside another component.

----class components


A Class Component is created using the JavaScript class keyword.

Before React Hooks (useState, useEffect) were introduced, developers used Class Components.

Nowadays, they are mainly seen in older React projects.

Syntax
import React, { Component } from "react";

class Home extends Component {
  render() {
    return <h1>Welcome to Home Page</h1>;
  }
}

export default Home;


App.jsx
import Home from "./Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
Output
Welcome to Home Page



differnce between functional component and class components 
Functional Component	Class Component
Uses a function	                     Uses a class
Simple and easy to write             More code
Uses Hooks (useState, useEffect)	  Uses this.state and lifecycle methods
Most popular today	                  Mostly used in older projects
Easier to understand	               More complex
*/