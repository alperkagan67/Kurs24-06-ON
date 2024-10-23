import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footbar from "./components/layout/footbar/Footbar";
import Buttontest from "./components/layout/buttontest/Buttontest";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Buttontest />
      <div className="content">Hello from Homepage</div>
      
       <Footbar />
      
    </div>
  );
}

export default App;
