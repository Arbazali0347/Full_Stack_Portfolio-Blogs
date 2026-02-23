import React from "react";
import { ArrowLeft, Zap, Sparkles, Code2, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Images (Aap ke apne paths)
import mongodb from "../assets/mongodb.svg";
import express from "../assets/Express.webp";
import react from "../assets/React.webp";
import node from "../assets/Node.png";

const About = () => {
  const navigate = useNavigate();

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const techStack = [
    { name: "MongoDB", logo: mongodb },
    { name: "Express", logo: express },
    { name: "React", logo: react },
    { name: "Node.js", logo: node },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-10 flex flex-col lg:flex-row items-center gap-16">
      
      {/* Left Side Text */}
      <motion.div
        className="flex-1 space-y-8"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4">
          {/* Tag text updated to Blue for better pop */}
          <p className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-blue-400">
            <span className="w-8 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            About Me
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            A Developer With <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text inline-block mt-2">
              Creative Vision
            </span>
          </h1>
        </div>

        <div className="space-y-5">
          {/* Paragraphs made brighter (text-gray-300) and removed font-light */}
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-white font-bold">Arbaz Ali</span>, a passionate MERN Stack Developer who loves building
            smooth, fast, and visually unique digital experiences.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            My mission is simple: Create websites that feel premium, futuristic,
            and memorable by combining high performance with creative UI/UX.
          </p>
        </div>

        <button
          className="group px-6 py-3 rounded-xl text-white bg-white/10
            backdrop-blur-md border border-white/20 
            hover:bg-white/20 hover:border-white/40
            hover:-translate-y-1 transition-all duration-300
            flex items-center gap-3 w-fit shadow-lg hover:shadow-xl"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} className="text-white group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>
      </motion.div>

      {/* Right Side Glass Card */}
      <motion.div
        className="flex-1 w-full max-w-lg bg-[#0a0a0a]/80 border border-white/20 rounded-[2rem] p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/15 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:bg-blue-500/30"></div>

        <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
          Why Work With Me?
        </h2>

        {/* Text colors brightened up to text-gray-200 */}
        <ul className="space-y-6 text-gray-200 font-medium">
          <li className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 mt-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Zap size={18} />
            </div>
            <span className="leading-relaxed mt-1">Fast, smooth & scalable development</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 mt-1 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Sparkles size={18} />
            </div>
            <span className="leading-relaxed mt-1">Unique dark-themed UI with modern touches</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 mt-1 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Code2 size={18} />
            </div>
            <span className="leading-relaxed mt-1">Creative problem-solving and clean code</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 mt-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Layers size={18} />
            </div>
            <span className="leading-relaxed mt-1">MERN Stack + tools + animations expertise</span>
          </li>
        </ul>

        {/* Tech Stack Marquee fixed: Grayscale removed, colors make it look alive */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-xs font-bold mb-6 uppercase tracking-widest text-center">
            Core Tech Stack
          </p>

          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 min-w-max"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 rounded-2xl"
                  />
                  <span className="text-gray-300 text-sm font-semibold">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;