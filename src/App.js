import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Menu from '../src/components/Menu';
import Events from "./components/Events";
import Contact from "./components/Contact"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
       <>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    </div>
  );
}

export default App;
