// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { education } from "../../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-900/90 backdrop-blur-3xl relative z-10"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Education"
          subtitle="My academic background and qualifications"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-900"></div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                      <GraduationCap size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="mb-2">
                    <p className="text-white font-medium">{item.institution}</p>
                    {item.duration && (
                      <p className="text-gray-400 text-sm">{item.duration}</p>
                    )}
                  </div>

                  {item.details && (
                    <p className="text-gray-300 mb-3">{item.details}</p>
                  )}

                  {item.achievements.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Empty div for layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
