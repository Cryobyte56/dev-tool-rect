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

  const handleConvert = (val) => {
    setValue(val);
    if (category === "temperature") {
      const celsius =
        fromUnit === "fahrenheit"
          ? ((val - 32) * 5) / 9
          : fromUnit === "kelvin"
          ? val - 273.15
          : val;
      setResult(
        toUnit === "celsius"
          ? celsius
          : toUnit === "fahrenheit"
          ? (celsius * 9) / 5 + 32
          : celsius + 273.15
      );
    } else {
      const baseValue = val / conversions[category][fromUnit];
      setResult(baseValue * conversions[category][toUnit]);
    }
  };

  const handleFromUnitChange = (newFromUnit) => {
    setFromUnit(newFromUnit);
    handleConvert(value, newFromUnit, toUnit);
  };

  const handleToUnitChange = (newToUnit) => {
    setToUnit(newToUnit);
    handleConvert(value, fromUnit, newToUnit);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const defaultUnit = Object.keys(conversions[newCategory])[0];
    setFromUnit(defaultUnit);
    setToUnit(Object.keys(conversions[newCategory])[1] || defaultUnit);
    handleConvert(
      value,
      defaultUnit,
      Object.keys(conversions[newCategory])[1] || defaultUnit
    );
  };

  return (
    <div className="bg-neutral-950 text-black border rounded-md border-neutral-700 p-5">
      <h3 className="text-lg font-semibold text-pink-500 mb-2">
        Unit Converter
      </h3>

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
            value={value}
            onChange={(e) => handleConvert(parseFloat(e.target.value) || 0)}
            placeholder="Enter A Value"
            className="w-full rounded-lg bg-gradient-to-tr from-cyan-200 to-fuchsia-200 text-black p-1 border border-gray-300 focus:border-pink-400 focus:outline-none"
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
      <div className="flex flex-col gap-1 mt-5">
        <p className="text-white font-medium text-xl">Result</p>
        <span className="font-semibold text-xl text-white">
          = {!isNaN(result) ? result.toFixed(2) : "0.00"} {toUnit || ""}
        </span>
      </div>
    </div>
  );
};

export default UnitConverter;
