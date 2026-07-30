import Header from "./component/header";
import { Footer } from "./component/footer";
import { About, Contact } from "./component/info";

function App() {
  return (
    <div style= {{padding: "28px", fontFamily: "Arial"}}>
      
      <h1>Import and Export Components Example</h1>
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;