import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import StandardBtn from "./components/common/standard-btn/StandardBtn";
import ActionBtn from "./components/common/standard-btn/ActionBtn/ActionBtn";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Content>
        <div>Hello from Earth</div>
        <StandardBtn>IT</StandardBtn>
        
      <ActionBtn>HALLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOO</ActionBtn>
      </Content>
      <ActionBtn>HALLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOO</ActionBtn><Footer />
    </div>
  );
}

export default App;
