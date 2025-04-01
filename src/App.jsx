import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import UnitConverter from "./UnitConverter";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-2 p-4 md:grid-cols-4">
        {/* Unit Converter Component */}
        <div className="col-span-1">
          <UnitConverter />
        </div>

        {/* BMI Calculator */}
        <div className="col-span-1">
          
        </div>

        {/* Date Difference Calculator */}
        <div className="col-span-2">
        
        </div>
      </div>
    </>
  );
}

export default App;
