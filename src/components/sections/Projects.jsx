import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "game", label: "Game Development" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my work and contributions"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform:
                        hoveredProject === project.id
                          ? "scale(1.1)"
                          : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Project Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                      {project.category === "software"
                        ? "Software"
                        : "Game Dev"}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
