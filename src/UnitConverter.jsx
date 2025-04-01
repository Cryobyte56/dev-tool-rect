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
    <div className="bg-neutral-950 text-black border rounded-md border-gray-500 p-5">
      <h3 className="text-lg font-semibold text-pink-600 mb-2">
        Unit Converter
      </h3>

      {/* Category Selection */}
      <p className="text-white">Select Category</p>
      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="mb-2 rounded-md"
      >
        <option value="length">Length</option>
        <option value="weight">Weight</option>
        <option value="temperature">Temperature</option>
      </select>

      {/* User Input */}
      <div className="flex gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => handleConvert(parseFloat(e.target.value) || 0)}
          placeholder="Enter value"
          className="border p-2 rounded-md w-full"
        />

        {/* Unit Selection */}
        <select
          value={fromUnit}
          onChange={(e) => handleFromUnitChange(e.target.value)}
          className="w-24 rounded-md"
        >
          {Object.keys(conversions[category]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-2 flex gap-2 items-center text-white">
        <span>=</span>
        <span className="font-semibold">{result.toFixed(2)}</span>
        <select
          value={toUnit}
          onChange={(e) => handleToUnitChange(e.target.value)}
          className="w-24 text-black"
        >
          {Object.keys(conversions[category]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UnitConverter;
