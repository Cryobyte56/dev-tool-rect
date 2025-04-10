import { useState } from "react";

const conversions = {
  length: { meter: 1, kilometer: 0.001, mile: 0.000621371, foot: 3.28084 },
  weight: { gram: 1, kilogram: 0.001, pound: 0.00220462 },
  temperature: {
    celsius: 1,
    fahrenheit: (c) => (c * 9) / 5 + 32,
    kelvin: (c) => c + 273.15,
  },
};

const UnitConverter = () => {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleConvert = (val, from, to, cat) => {
    setValue(val);
    if (cat === "temperature") {
      const celsius =
        from === "fahrenheit"
          ? ((val - 32) * 5) / 9
          : from === "kelvin"
          ? val - 273.15
          : val;
      setResult(
        to === "celsius"
          ? celsius
          : to === "fahrenheit"
          ? (celsius * 9) / 5 + 32
          : celsius + 273.15
      );
    } else {
      const baseValue = val / conversions[cat][from];
      setResult(baseValue * conversions[cat][to]);
    }
  };

  const handleFromUnitChange = (newFromUnit) => {
    setFromUnit(newFromUnit);
    handleConvert(value, newFromUnit, toUnit, category);
  };

  const handleToUnitChange = (newToUnit) => {
    setToUnit(newToUnit);
    handleConvert(value, fromUnit, newToUnit, category);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const defaultUnit = Object.keys(conversions[newCategory])[0];
    const secondUnit = Object.keys(conversions[newCategory])[1] || defaultUnit;
    setFromUnit(defaultUnit);
    setToUnit(secondUnit);
    handleConvert(value, defaultUnit, secondUnit, newCategory);
  };

  return (
    <div>
      <h2 className="font-semibold text-pink-500 mb-2">Unit Converter</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-5">

        {/* Category Selection */}
        <div className="flex flex-col col-span-1 sm:col-span-2 gap-1">
          <p className="text-white">Category</p>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-pink-400 focus:outline-none"
          >
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>
        </div>

        {/* User Input */}
        <div className="flex flex-col col-span-1 sm:col-span-2 gap-1">
          <p className="text-white">Value ({fromUnit || ""})</p>
          <input
            type="number"
            value={value}
            onChange={(e) =>
              handleConvert(
                parseFloat(e.target.value) || 0,
                fromUnit,
                toUnit,
                category
              )
            }
            placeholder="Enter A Value"
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-pink-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        
        {/* Unit Selection - From */}
        <div className="flex flex-col col-span-1 sm:col-span-2 gap-1">
          <p className="text-white">From</p>
          <select
            value={fromUnit}
            onChange={(e) => handleFromUnitChange(e.target.value)}
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-pink-400 focus:outline-none"
          >
            {Object.keys(conversions[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Unit Selection - To */}
        <div className="flex flex-col col-span-1 sm:col-span-2 gap-1">
          <p className="text-white">To</p>
          <select
            value={toUnit}
            onChange={(e) => handleToUnitChange(e.target.value)}
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-pink-400 focus:outline-none"
          >
            {Object.keys(conversions[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col gap-1 mt-5 w-full rounded-lg text-neutral-300 bg-gradient-to-tr from-neutral-600 to-neutral-700 p-2 border border-neutral-500">
        <p className="font-medium text-lg text-white">Unit Converted Result</p>
        <span className="text-md">
          = {!isNaN(result) ? result.toFixed(2) : "0.00"} {toUnit || ""}
        </span>
      </div>
    </div>
  );
};

export default UnitConverter;
