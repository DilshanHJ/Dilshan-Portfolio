import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

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
    <section
      id="projects"
      className="relative z-10 py-20 bg-gray-900/90 backdrop-blur-3xl"
    >
      <div className="container px-4 mx-auto">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
