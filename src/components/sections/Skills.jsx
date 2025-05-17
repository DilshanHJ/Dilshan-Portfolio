// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Database, Palette, Brain, Gamepad2, Cpu } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SkillBar from "../ui/SkillBar";
import { skills } from "../../data/skills";
import TerminalEffect from "../ui/TerminalEffect";
import { useEffect, useState } from "react";

const Skills = () => {
  const [terminalIntroComplete, setTerminalIntroComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalIntroComplete(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [terminalIntroComplete]);
  return (
    <section
      id="skills"
      className="relative z-10 py-20 bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="My technical expertise across different domains"
        />
        {!terminalIntroComplete && (
          <div className="p-6 mb-10 border rounded-lg bg-gray-900/90 border-cyan-500/30">
            <TerminalEffect
              text=">> Initializing skill database...\n>> Accessing neural interface...\n>> Skill matrix loaded successfully."
              speed={30}
              className="whitespace-pre-line text-cyan-400"
              onComplete={() =>
                setTimeout(() => setTerminalIntroComplete(true), 1000)
              }
            />
          </div>
        )}
        {/* Software Development Skills */}
        <div id="skills-software" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Code size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Software Development
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.softwareDevelopment.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
        {/* Technologies Skills */}
        <div id="skills-technologies" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Cpu size={24} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Technologies</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.Technologies.map((skill, index) => (
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
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Gamepad2 size={24} className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Game Development</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Database size={24} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Database Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Palette size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Design Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-700 rounded-full">
              <Brain size={24} className="text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
