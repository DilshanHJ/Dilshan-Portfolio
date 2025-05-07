// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { leadership } from "../../data/leadership";

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="py-20 bg-gray-900/90 backdrop-blur-sm relative z-10"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Leadership & Volunteering"
          subtitle="My roles and contributions in various organizations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                  <Users size={24} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {role.position}
                </h3>
                <p className="text-white mb-2">{role.organization}</p>
                <p className="text-gray-400 mb-1">{role.institution}</p>
                <p className="text-sm text-purple-400">{role.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
