import { useState, useEffect } from "react";

const GlitchText = ({ text, className }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Random chance to trigger glitch effect
      if (Math.random() < 0.05) {
        setIsGlitching(true);

        // Generate glitched text
        let iterations = 0;
        //eslint-disable-next-line
        const maxIterations = 10;

        const glitchEffect = setInterval(() => {
          setGlitchText(
            text
              .split("")
              .map((char, index) => {
                if (index < iterations) {
                  return text[index];
                }

                // Replace with random character
                const chars =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|';
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join("")
          );

          if (iterations >= text.length) {
            clearInterval(glitchEffect);
            setGlitchText(text);
            setIsGlitching(false);
          }

          iterations += 1 / 3;
        }, 30);

        return () => clearInterval(glitchEffect);
      }
    }, 300);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span
      className={`relative inline-block ${className || ""} ${
        isGlitching ? "text-cyan-400" : ""
      }`}
    >
      {glitchText}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70"
            aria-hidden="true"
          >
            {glitchText}
          </span>
          <span
            className="absolute top-0 left-0 ml-1 text-blue-500 opacity-70"
            aria-hidden="true"
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
