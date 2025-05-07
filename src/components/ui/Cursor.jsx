import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable =
        hoveredElement?.tagName === "A" ||
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.closest("a") ||
        hoveredElement?.closest("button") ||
        window.getComputedStyle(hoveredElement || document.body).cursor ===
          "pointer";

      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousemove", checkPointer);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousemove", checkPointer);
    };
  }, [position.x, position.y]);

  return (
    <>
      <motion.div
        className="hidden md:block fixed w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="hidden md:block fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default Cursor;
