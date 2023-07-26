import "./App.css";
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
        </div>
      </div>
    </>
  );
}
export default App;
