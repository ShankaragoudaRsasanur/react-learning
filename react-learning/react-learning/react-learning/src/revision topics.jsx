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

*/