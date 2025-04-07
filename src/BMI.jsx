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
          <label>Weight (kg): </label>
          <input
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-lime-400 focus:outline-none"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="height flex flex-col gap-1">
          <label>Height (cm): </label>
          <input
            className="w-full rounded-lg text-black p-1 border border-gray-300 focus:border-lime-400 focus:outline-none"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      {/* Result */}
      <div className="result">
        <div className="flex flex-col gap-1 mt-5 w-full rounded-lg bg-gradient-to-tr from-lime-200 to-blue-200 text-black p-1 border border-gray-300">
          <p className="font-medium text-lg">BMI Result</p>
          <p className="text-md">Your BMI: {bmi}</p>
          <p className="text-md">Category: {category}</p>
        </div>
      </div>

      {/* Calculate Result */}
      <button
        className="bmi-submit-btn mt-8 rounded-lg bg-lime-600 p-1 hover:bg-lime-700"
        onClick={calculateBMI}
      >
        Calculate
      </button>
    </div>
  );
};

export default BMI;
