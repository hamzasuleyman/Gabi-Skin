import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./Pages/Home/Home";
import Price from "./Pages/Price/Price";
import OurWork from "./Pages/OurWork/OurWork"

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/ourwork" element={<OurWork />}/>
        <Route path="/price" element={<Price />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
