// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { UserCheck, Mail, Phone } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { references } from "../../data/references";

const References = () => {
  return (
    <section
      id="references"
      className="py-20 bg-gray-900/90 backdrop-blur-sm relative z-10"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="References"
          subtitle="Professional recommendations and contacts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                    <UserCheck size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">
                      {reference.name}
                    </h3>
                    <p className="text-gray-300">{reference.position}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white">{reference.department}</p>
                  <p className="text-gray-400">{reference.institution}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail size={16} className="text-purple-400 mr-2" />
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {reference.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone size={16} className="text-purple-400 mr-2" />
                    <a
                      href={`tel:${reference.phone}`}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
