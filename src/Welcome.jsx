import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // If not visible, render nothing

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h1 style={styles.text}>BentoM8 - Unified Utility Dashboard</h1>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background to match your theme
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "transparent", // Making the background of the popup transparent
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  text: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff6347, #00ff00)", // Neon gradient colors
    backgroundClip: "text",
    color: "transparent",
    animation: "gradient 5s ease-in-out infinite", // Smoother gradient transition
    WebkitBackgroundClip: "text", // For WebKit browsers
  },
};

// CSS for the animation (this can go in your CSS file or styled-components)
const globalStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default Welcome;
