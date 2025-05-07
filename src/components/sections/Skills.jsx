// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Database, Palette, Brain, Gamepad2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SkillBar from "../ui/SkillBar";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Skills"
          subtitle="My technical expertise across different domains"
        />

        {/* Software Development Skills */}
        <div id="skills-software" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <Code size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Software Development
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.softwareDevelopment.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Game Development Skills */}
        <div id="skills-game" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <Gamepad2 size={24} className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Game Development</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.gameDevelopment.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div id="skills-database" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <Database size={24} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Database Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.databases.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Design Skills */}
        <div id="skills-design" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <Palette size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Design Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.design.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div id="skills-soft">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <Brain size={24} className="text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
