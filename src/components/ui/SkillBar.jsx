// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
