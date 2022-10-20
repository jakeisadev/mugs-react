import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Menu from '../src/components/Menu';
import Events from "./components/Events";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
    </div>
  );
}

export default App;
