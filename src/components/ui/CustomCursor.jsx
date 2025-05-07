// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CustomCursor = ({ position, isHovering }) => {
  return (
    <>
      {/* Outer cursor circle */}
      <motion.div
        className="custom-cursor fixed w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-50 hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="custom-cursor fixed w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
      />
    </>
  );
};

export default CustomCursor;
