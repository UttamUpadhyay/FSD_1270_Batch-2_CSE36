import React from 'react';
//Simple Function (not a component)
function add(a,b) {
  return a + b;
}
//React Component
function Welcome() {
  return <h2>Welcome to My First React Component.</h2>
}
//Another Component 
function Info() {
  return (
    <div>
      <h3>What is a Component?</h3>
      <p>A component is a resuable piece of UI block written as a function or class in React.</p>
    </div>
  );
}

//Main App Component 
function App() {
  return (
    <div style= {{padding: "20px", fontFamily: "Arial"}}>
      <h1> Your First React Component</h1>

      {/* //Using Component */}
      <Welcome/>

      <Info/>

      <h3>How to use component?0</h3>
      <p>Use component like html tag: &lt;Welcome /&gt;</p>
      <h3>Difference between Function and Component</h3>
      <p>Normal Function Result: {add(10, 20)}</p>

    </div>
  );
}

export default App;
