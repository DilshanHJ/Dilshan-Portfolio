// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image || "https://via.placeholder.com/400x200"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
            >
              <Github size={18} className="mr-1" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
            >
              <ExternalLink size={18} className="mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
