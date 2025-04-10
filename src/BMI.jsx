import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    // Basic category classification
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lime-500 mb-2">BMI Calculator</h2>

      {/* Input Metrics */}
      <div className="metrics flex flex-col gap-5">
        {/* Weight */}
        <div className="weight flex flex-col gap-1">
          <label>Weight (kg):</label>
          <input
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-lime-400 focus:outline-none"
            type="number"
            min="0"
            value={weight}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value >= 0 || e.target.value === "")
                setWeight(e.target.value);
            }}
          />
        </div>

        {/* Height */}
        <div className="height flex flex-col gap-1">
          <label>Height (cm):</label>
          <input
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-lime-400 focus:outline-none"
            type="number"
            min="0"
            value={height}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (value >= 0 || e.target.value === "")
                setHeight(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Result */}
      <div className="result">
        <div className="flex flex-col gap-1 mt-5 w-full rounded-lg text-neutral-300 bg-gradient-to-tr from-neutral-600 to-neutral-700 p-2 border border-neutral-500">
          <p className="font-medium text-lg text-white">BMI Result</p>
          <p className="text-md">Your BMI: {bmi}</p>
          <p className="text-md">Category: {category}</p>
        </div>
      </div>

      {/* Calculate Result */}
      <button
        className="bmi-submit-btn mt-8 rounded-lg bg-white text-black font-medium p-2 hover:bg-neutral-200"
        onClick={calculateBMI}
      >
        Calculate
      </button>
    </div>
  );
};

export default BMI;
