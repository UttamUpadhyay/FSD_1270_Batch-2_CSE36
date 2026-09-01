import {userstate} from "react";
function App() {
  const [name, setName] = userstate("John Doe");
  const [age, setAge] = userstate(30);
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <button onClick={() => setName("Omkaar")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default App;