import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
} from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle images array or fallback to single image property
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="overflow-hidden transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:border-cyan-400/50"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              images[currentImageIndex] ||
              "https://placehold.co/400x200/1f2937/e2e8f0?text=No+Image"
            }
            alt={`${project.title} - image ${currentImageIndex + 1}`}
            className="object-contain w-full h-full transition-transform duration-500 cursor-pointer hover:scale-110"
            style={{ objectFit: "contain" }}
            onClick={openModal}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

          {/* Image navigation controls - only show if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute p-1 text-white transition-all transform -translate-y-1/2 rounded-full left-2 top-1/2 bg-black/50 hover:bg-black/80"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute p-1 text-white transition-all transform -translate-y-1/2 rounded-full right-2 top-1/2 bg-black/50 hover:bg-black/80"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image indicator dots */}
              <div className="absolute flex space-x-1 transform -translate-x-1/2 bottom-2 left-1/2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      i === currentImageIndex ? "bg-cyan-400" : "bg-gray-400/50"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">
            {project.title}
          </h3>
          <p className="mb-4 text-gray-300">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-gray-700 rounded-full text-cyan-300"
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
                className="flex items-center text-gray-400 transition-colors duration-300 hover:text-cyan-400"
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
                className="flex items-center text-gray-400 transition-colors duration-300 hover:text-cyan-400"
              >
                <ExternalLink size={18} className="mr-1" />
                Demo
              </a>
            )}
            {/* <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 transition-colors duration-300 hover:text-cyan-400"
              onClick={openModal}
            >
              <Eye size={18} className="mr-1" />
              View Images
            </a> */}
          </div>
        </div>
      </motion.div>

      {/* Image Modal - Portal approach */}
      {isModalOpen && (
        <div className="absolute inset-0 z-[9999] overflow-y-auto overflow-x-hidden bg-black/90">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute z-50 p-2 text-white transition-colors duration-200 rounded-full bg-black/50 hover:bg-black/80 top-2 right-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-lg bg-black/70">
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} - enlarged view`}
                  className="mx-auto max-h-[80vh] object-contain"
                />

                {/* Navigation controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute p-2 text-white transition-all transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/80"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={30} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute p-2 text-white transition-all transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/80"
                      aria-label="Next image"
                    >
                      <ChevronRight size={30} />
                    </button>

                    {/* Image counter */}
                    <div className="absolute left-0 right-0 text-center text-white bottom-4">
                      <div className="flex justify-center mb-2 space-x-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-3 h-3 rounded-full ${
                              i === currentImageIndex
                                ? "bg-cyan-400"
                                : "bg-gray-500/50 hover:bg-gray-400/50"
                            }`}
                            aria-label={`View image ${i + 1}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-medium">
                        Image {currentImageIndex + 1} of {images.length}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
