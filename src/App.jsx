import "./App.css";
import Navbar from "./components/Navbar";
import UnitConverter from "./components/UnitConverter";
import BMI from "./components/BMI";
import DateDiff from "./components/DateDiff";
import Bcrypt from "./components/Bcrypt_Gen";
import TextCase from "./components/TextCase";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent flex flex-col">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-4 p-4">
          {/* Unit Converter Component */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
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
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-4 p-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <Bcrypt />
          </div>
          <div className="col-span-1 sm:col-span-3 md:col-span-3 bg-neutral-950 text-white border rounded-md border-neutral-700 p-5 animate-fade-up">
            <TextCase />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
