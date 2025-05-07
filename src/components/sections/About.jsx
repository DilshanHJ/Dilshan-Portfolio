// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { User, MapPin, Phone, Mail, Calendar, Download } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/personalInfo";
import profileImage from "../../assets/images/Profile2.JPG";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg transform rotate-6 scale-105 opacity-30 blur-sm"></div>
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-700">
                <img
                  src={profileImage}
                  alt="Hashitha Dilshan"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Who am I?</h3>
            <p className="text-gray-300 mb-6">{personalInfo.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <User size={18} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Name</span>
                  <p className="text-white">{personalInfo.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Address</span>
                  <p className="text-white">{personalInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Email</span>
                  <p className="text-white">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Phone</span>
                  <p className="text-white">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full flex items-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
