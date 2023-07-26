import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* props */}
      <Navbar title="TextUtils" about="About Us" />
      {/* <Navbar/> */}
      <div className="bg">
        <div className="container">
          <TextForm heading="Enter your text below" />
          <About/>
        </div>
      </div>
    </>
  );
}
export default App;
