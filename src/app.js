import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CabBooking from "./pages/CabBooking";
import BusBooking from "./pages/BusBooking";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cab-booking" element={<CabBooking />} />
          <Route path="/bus-booking" element={<BusBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  
