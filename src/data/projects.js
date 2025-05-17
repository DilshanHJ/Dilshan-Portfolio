import anova1 from "./../assets/images/AnovaJava/1.png";
import anovaweb1 from "./../assets/images/AnovaWeb/1.png";
import anovaweb2 from "./../assets/images/AnovaWeb/2.png";
import resultAnalyzer1 from "./../assets/images/ResultAnalyzer/1.png";
import resultAnalyzer2 from "./../assets/images/ResultAnalyzer/2.png";
import resultAnalyzer3 from "./../assets/images/ResultAnalyzer/3.png";
import resultAnalyzer4 from "./../assets/images/ResultAnalyzer/4.png";
import fasnet1 from "./../assets/images/Fasnet/1.png";
import fasnet2 from "./../assets/images/Fasnet/2.png";
import fasnet3 from "./../assets/images/Fasnet/3.png";
import fasnet4 from "./../assets/images/Fasnet/4.png";
import fasnet5 from "./../assets/images/Fasnet/5.png";
import fasnet6 from "./../assets/images/Fasnet/6.png";
import fasnet7 from "./../assets/images/Fasnet/7.png";
import fasnet8 from "./../assets/images/Fasnet/8.png";
import fasnet9 from "./../assets/images/Fasnet/9.png";
import fasnet10 from "./../assets/images/Fasnet/10.png";
import adms1 from "./../assets/images/Adms/1.png";
import adms2 from "./../assets/images/Adms/2.png";
import adms3 from "./../assets/images/Adms/3.png";
import adms4 from "./../assets/images/Adms/4.png";
import adms5 from "./../assets/images/Adms/5.png";
import adms6 from "./../assets/images/Adms/6.png";
import adms7 from "./../assets/images/Adms/7.png";
import hotelpms1 from "./../assets/images/HotelPms/1.png";
import hotelpms2 from "./../assets/images/HotelPms/2.png";
import hotelpms3 from "./../assets/images/HotelPms/3.png";
import hotelpms4 from "./../assets/images/HotelPms/4.png";
import hotelpms5 from "./../assets/images/HotelPms/5.png";
import hotelpms6 from "./../assets/images/HotelPms/6.png";
import hotelpms7 from "./../assets/images/HotelPms/7.png";
import hotelpms8 from "./../assets/images/HotelPms/8.png";
import hotelpms9 from "./../assets/images/HotelPms/9.png";
import hotelpms10 from "./../assets/images/HotelPms/10.png";
import hotelpms11 from "./../assets/images/HotelPms/11.png";
import hotelpms12 from "./../assets/images/HotelPms/11.png";
import hotelpms13 from "./../assets/images/HotelPms/11.png";
import hotelpms14 from "./../assets/images/HotelPms/11.png";
import hotelpms15 from "./../assets/images/HotelPms/11.png";
import hotelpms16 from "./../assets/images/HotelPms/11.png";
import hotelpms17 from "./../assets/images/HotelPms/11.png";
import hotelpms18 from "./../assets/images/HotelPms/11.png";
import hotelpms19 from "./../assets/images/HotelPms/11.png";
import hotelpms20 from "./../assets/images/HotelPms/11.png";
import hotelpms21 from "./../assets/images/HotelPms/11.png";
import hotelpms22 from "./../assets/images/HotelPms/11.png";
import hotelpms23 from "./../assets/images/HotelPms/11.png";
import hotelpms24 from "./../assets/images/HotelPms/11.png";
import hotelpms25 from "./../assets/images/HotelPms/25.png";
import aemt1 from "./../assets/images/AEMT/1.png";
import aemt2 from "./../assets/images/AEMT/2.png";
import aemt3 from "./../assets/images/AEMT/3.png";
import aemt4 from "./../assets/images/AEMT/4.png";
import aemt5 from "./../assets/images/AEMT/5.png";
import aemt6 from "./../assets/images/AEMT/6.png";
import aemt7 from "./../assets/images/AEMT/7.png";

export const projects = [
  {
    id: 1,
    title: "Game Engine with Java and OpenGL",
    description:
      "Demonstrating OOP principles, OpenGL rendering using JOGL, including a custom animation engine to replace default FPS animators for smoother performance.",
    technologies: ["Java", "JOGL", "OpenGL", "Game Development", "Animation"],
    images: ["https://placehold.co/400x200/1f2937/e2e8f0?text=No+Image"],
    github: "https://github.com/DilshanHJ/game-engine-java-opengl",
    demo: null,
    category: "game",
  },
  {
    id: 2,
    title: "One-way ANOVA Analyzer",
    description:
      "A statistical tool built with Java and NetBeans IDE to calculate ANOVA tests.",
    technologies: ["Java", "GUI", "Statistics", "NetBeans"],
    images: [anova1],
    github: "https://github.com/DilshanHJ/one-way-anova-analyzer",
    demo: null,
    category: "software",
  },
  {
    id: 3,
    title: "One-way ANOVA (Web Version)",
    description:
      "Converted to a web version using JavaScript, HTML, and CSS with jQuery implementation.",
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Statistics"],
    images: [anovaweb1, anovaweb2],
    github: "https://github.com/DilshanHJ/one-way-anova-web",
    demo: null,
    category: "software",
  },
  {
    id: 4,
    title: "Results Analyzer",
    description:
      "System to manage student profiles, results, GPA calculations, and Dean's list reports.",
    technologies: ["ExpressJS", "EJS", "Node.js", "Database"],
    images: [
      resultAnalyzer1,
      resultAnalyzer2,
      resultAnalyzer3,
      resultAnalyzer4,
    ],
    github: "https://github.com/DilshanHJ/results-analyzer",
    demo: null,
    category: "software",
  },
  {
    id: 5,
    title: "FASNET Mobile App",
    description:
      "Mobile application integrates a results analyzer, LMS, and other student services into a unified system.",
    technologies: ["Flutter", "Dart", "ExpressJS", "MySQL", "Mobile App"],
    images: [
      fasnet1,
      fasnet2,
      fasnet3,
      fasnet4,
      fasnet5,
      fasnet6,
      fasnet7,
      fasnet8,
      fasnet9,
      fasnet10,
    ],
    github: null,
    demo: null,
    category: "software",
  },
  {
    id: 6,
    title: "Attendance Marking System",
    description:
      "Mobile app uses QR code scanning for lecture attendance tracking, confirming both time and location.",
    technologies: ["Flutter", "Dart", "ExpressJS", "MongoDB", "QR Code"],
    images: ["https://placehold.co/400x200/1f2937/e2e8f0?text=No+Image"],
    github: "https://github.com/DilshanHJ/attendance-marking-system",
    demo: null,
    category: "software",
  },
  {
    id: 7,
    title: "Attendance Data Management System",
    description:
      "Front-end interface for the ADMS used by Biometrix Pvt. Ltd. to manage and visualize attendance data.",
    technologies: ["Vue.js", "Front-end", "Data Visualization"],
    images: [adms1, adms2, adms3, adms4, adms5, adms6, adms7],
    github: null,
    demo: null,
    category: "software",
  },
  {
    id: 8,
    title: "Hotel Management System",
    description:
      "Full-stack solution for Biometrix Pvt. Ltd. includes OTA integration, POS, billing system, room and rate management, housekeeping, restaurant management and support for multiple room types and pricing plans.",
    technologies: ["Vue.js", "Laravel", "Full-stack", "POS", "Billing"],
    images: [
      hotelpms1,
      hotelpms2,
      hotelpms3,
      hotelpms4,
      hotelpms5,
      hotelpms6,
      hotelpms7,
      hotelpms8,
      hotelpms9,
      hotelpms10,
      hotelpms11,
      hotelpms12,
      hotelpms13,
      hotelpms14,
      hotelpms15,
      hotelpms16,
      hotelpms17,
      hotelpms18,
      hotelpms19,
      hotelpms20,
      hotelpms21,
      hotelpms22,
      hotelpms23,
      hotelpms24,
      hotelpms25,
    ],
    github: null,
    demo: null,
    category: "software",
  },
  {
    id: 9,
    title: "Automated ER Modeling Tutor",
    description:
      "A Web-Based Tutoring System where students can learn ER modeling through interactive activities, while instructors can create and manage content.",
    technologies: [
      "Web-based",
      "Education",
      "ER Modeling",
      "Final Year Project",
    ],
    images: [aemt1, aemt2, aemt3, aemt4, aemt5, aemt6, aemt7],
    demo: null,
    category: "software",
  },
];
