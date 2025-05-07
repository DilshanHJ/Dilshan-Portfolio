// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-white">{title.split(" ")[0]} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6"></div>
    </motion.div>
  );
};

export default SectionTitle;
