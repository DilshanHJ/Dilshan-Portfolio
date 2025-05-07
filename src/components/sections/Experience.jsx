// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-900/90 backdrop-blur-lg relative z-10"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and work history"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 ml-8 pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-cyan-400 z-10 flex items-center justify-center">
                <Briefcase size={16} className="text-cyan-400" />
              </div>

              {/* Content */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 md:mb-0">
                    {job.position}
                  </h3>
                  <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-400/10 rounded-full">
                    {job.duration}
                  </span>
                </div>

                <h4 className="text-white font-medium mb-4">{job.company}</h4>

                {job.description && (
                  <p className="text-gray-300 mb-4">{job.description}</p>
                )}

                {job.responsibilities.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">
                      Responsibilities:
                    </h5>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight
                            size={16}
                            className="text-cyan-400 mt-1 mr-2 flex-shrink-0"
                          />
                          <span className="text-gray-300">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
