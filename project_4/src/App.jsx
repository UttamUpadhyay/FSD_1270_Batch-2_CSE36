function App() {
  const username = "Uttam Upadhyay";
  let y = 20;
  let x = 10;
  return (
    <>
      <h1>
        {username}
      </h1>
      <h1>{10 + 20 + 30 + 40}</h1>
      <h1>{x + y }</h1>
      <button onClick={() => alert("Hello")}>click me</button>
      
    </>
  )
}
export default App;