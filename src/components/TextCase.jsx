import React, { useState } from "react";
import useToast from "../hooks/useToast";
import Toast from "./Toast";

const TextCase = () => {
  const [text, setText] = useState("");
  const { showToast, triggerToast } = useToast();

  const toTitleCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const toAlternatingCase = (str) =>
    str
      .split("")
      .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
      .join("");

  const handleConvert = (type) => {
    switch (type) {
      case "upper":
        setText(text.toUpperCase());
        break;
      case "lower":
        setText(text.toLowerCase());
        break;
      case "title":
        setText(toTitleCase(text));
        break;
      case "alt":
        setText(toAlternatingCase(text));
        break;
      default:
        break;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    triggerToast();
  };

  return (
    <div className="text-case-converter flex flex-col gap-5">
      <h2 className="font-bold text-red-400">Text Case Converter</h2>

      {/* Text Area */}
      <textarea
        className="text-area w-full rounded-lg text-black p-1 border bg-zinc-200 border-gray-300 focus:border-red-400 focus:outline-none"
        id="text-area"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      {/* Buttons */}
      <div className="buttons flex flex-wrap gap-2 justify-center sm:justify-normal">
        <button
          onClick={() => handleConvert("upper")}
          className="bg-white text-black rounded-lg p-2 text-sm font-medium hover:bg-neutral-200"
        >
          UPPER CASE
        </button>
        <button
          onClick={() => handleConvert("lower")}
          className="bg-white text-black rounded-lg p-2 text-sm font-medium hover:bg-neutral-200"
        >
          lower case
        </button>
        <button
          onClick={() => handleConvert("title")}
          className="bg-white text-black rounded-lg p-2 text-sm font-medium hover:bg-neutral-200"
        >
          Title Case
        </button>
        <button
          onClick={() => handleConvert("alt")}
          className="bg-white text-black rounded-lg p-2 text-sm font-medium hover:bg-neutral-200"
        >
          AlTeRnAtInG CaSe
        </button>
        <button
          onClick={handleCopy}
          className="w-full sm:w-1/3 font-medium bg-red-400 text-black px-4 py-2 rounded-lg hover:bg-red-500 transition flex items-center justify-center gap-2 mt-5 sm:mt-0"
        >
          Copy to Clipboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-copy"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>
        </button>

        {/* Toast Notification */}
        <Toast show={showToast} message="Copied to Clipboard!" />
      </div>
    </div>
  );
};

export default TextCase;
