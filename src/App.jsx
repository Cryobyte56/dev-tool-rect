import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import UnitConverter from "./UnitConverter";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {/* Unit Converter Component */}
        <div className="col-span-1">
          <UnitConverter />
        </div>

        {/* BMI Calculator */}
        <div className="col-span-1">
          {/* Add BMI calculator component here */}
        </div>

        {/* Date Difference Calculator */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          {/* Add Date Difference calculator component here */}
        </div>
      </div>
    </>
  );
}

export default App;
