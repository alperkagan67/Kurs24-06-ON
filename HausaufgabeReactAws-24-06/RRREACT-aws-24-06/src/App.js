import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footbar from "./components/layout/footbar/Footbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content">Hello from Homepage</div>
       <Footbar />
    </div>
  );
}

export default App;
