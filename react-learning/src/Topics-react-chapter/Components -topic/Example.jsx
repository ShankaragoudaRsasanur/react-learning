/*    component topic
it is peace of code  and resuable piece of react application  an another words 
it is like a building block of react application
 basic syntax for the  componennt and  the usage is 
 Function ComponentName (){
        Return(
        <h1> hello react</h1>
);

 }
Export defalt ComponentName;
-----------------------------------------------------------
using the componemt name 

import ComponentName from "./ComponentName";

function App() {
    return (
        <ComponentName />
    );
}

export default App;

rules for the componet  Name writting 
Start with a capital letter.
  function Header() {}

  why we write capitakl letter means 
  React treats lowercase names as HTML elements.

When to Use Components

Use components whenever:

A UI is repeated.
The code becomes too long.
You want reusable code.
Different parts of the page have different responsibilities.

When to Use Components?

Use components whenever:

A UI is repeated.
The code becomes too long.
You want reusable code.
Different parts of the page have different responsibilities.