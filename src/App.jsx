import React from "react";
import { Home } from "./home";
import { Try } from "./try";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/try" element={<Try />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
