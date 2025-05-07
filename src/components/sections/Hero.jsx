// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import DataMatrix from "../ui/DataMatrix";
import GlitchText from "../ui/GlitchText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* <div className="absolute inset-0 grid-background"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <DataMatrix className="w-full h-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <GlitchText
                text={personalInfo.name}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glow-text"
              />
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-8">
              First Class Honours graduate in Computer Science with a passion
              for software development, game development, and cybersecurity.
              Currently working as an Associate Software Engineer at Biometrix
              Pvt. Ltd.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6 mb-16"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            className="absolute bottom-0"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
