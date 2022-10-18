import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Menu from "./Menu";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Info />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="./Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
