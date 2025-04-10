import "./App.css";
import Navbar from "./Navbar";
import UnitConverter from "./UnitConverter";
import BMI from "./BMI";
import DateDiff from "./DateDiff";
import Bcrypt from "./bcrypt";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent flex flex-col gap-2">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4 p-4">
          {/* Unit Converter Component */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <UnitConverter />
          </div>

          {/* BMI Calculator */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <BMI />
          </div>

          {/* Date Difference Calculator */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <DateDiff />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4 p-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <Bcrypt />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
