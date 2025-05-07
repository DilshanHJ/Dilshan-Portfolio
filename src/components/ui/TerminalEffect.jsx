import { useState, useEffect } from "react";

const TerminalEffect = ({ text, speed = 50, className, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className || ""}`}>
      {displayedText}
      <span
        className={`inline-block w-2 h-4 bg-cyan-400 ml-1 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </div>
  );
};

export default TerminalEffect;
