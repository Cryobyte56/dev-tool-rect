import bcrypt from "bcryptjs";
import React, { useState, useEffect } from "react";
import useToast from "../hooks/useToast";
import Toast from "./Toast";

const Bcrypt = () => {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");
  const { showToast, triggerToast } = useToast();

  // Toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const generateHash = async () => {
    if (!password) return;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    setHash(hashed);
  };

  const copyToClipboard = () => {
    if (hash) {
      navigator.clipboard.writeText(hash);
      triggerToast();
    }
  };

  return (
    <div className="bcrypt-container flex flex-col">
      <h2 className="font-bold text-yellow-400 mb-5">
        BCrypt Password Generator
      </h2>

      {/* Toast Notification */}
      <Toast show={showToast} message="Copied to Clipboard!" />

      <div className="flex gap-2 mb-8">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-lg w-2/3 text-black bg-zinc-200 focus:border-yellow-400 focus:outline-none"
        />
        <button
          onClick={generateHash}
          className="bg-white border text-neutral-700 font-medium px-4 py-2 rounded-lg hover:bg-neutral-300 transition w-1/3"
        >
          Generate Bcrypt
        </button>
      </div>

      {hash && (
        <div className="flex gap-2 justify-center">
          <input
            value={hash}
            readOnly
            disabled
            rows={3}
            className="w-2/3 p-2 rounded-lg font-mono text-sm text-neutral-300 bg-neutral-700 border border-neutral-500"
          />
          <button
            onClick={copyToClipboard}
            className="w-1/3 font-medium bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition flex items-center justify-center gap-2"
          >
            Copy
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
        </div>
      )}
    </div>
  );
};

export default Bcrypt;
