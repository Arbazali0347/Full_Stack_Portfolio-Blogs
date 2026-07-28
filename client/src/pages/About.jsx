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
    <div className="relative w-full min-h-screen bg-[#020202] flex items-center justify-center overflow-hidden py-12">
      
      {/* ── HIGH-TECH GRID LINES BACKGROUND ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}
      />

      {/* ── AMBIENT ORANGE GLOWS ── */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-tr from-orange-600/8 to-amber-500/2 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-10 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* ── LEFT SIDE TEXT ── */}
        <motion.div
          className="flex-1 space-y-8"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-5">
            {/* Tag text updated to Orange with custom pulse */}
            <p className="flex items-center gap-3 text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-orange-500">
              <span className="w-8 h-[2.5px] bg-orange-500 shadow-[0_0_12px_rgba(234,88,12,0.8)] rounded-full"></span>
              About Me
            </p>

            <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white">
              A Developer With <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-transparent bg-clip-text inline-block mt-2">
                Creative Vision
              </span>
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              I'm <span className="text-white font-bold border-b border-orange-500/30 pb-0.5">Arbaz Ali</span>, a passionate MERN Stack Developer who loves building smooth, fast, and visually unique digital experiences.
            </p>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              My mission is simple: Create websites that feel premium, futuristic, and memorable by combining high performance with creative UI/UX.
            </p>
          </div>

          {/* Premium Capsule Back Button */}
          <button
            className="group px-7 py-3.5 rounded-full text-zinc-300 bg-zinc-900/60
              border border-white/[0.05] hover:text-white
              hover:bg-[#0c0c0e]/80 hover:border-orange-500/30
              hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(234,88,12,0.15)] transition-all duration-300
              flex items-center gap-3 w-fit cursor-pointer backdrop-blur-md"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="text-orange-500 group-hover:-translate-x-1 transition-transform" />
            <span className="font-extrabold uppercase text-xs tracking-wider">Back</span>
          </button>
        </motion.div>

        {/* ── RIGHT SIDE GLASS CARD (Why Work With Me) ── */}
        <motion.div
          className="flex-1 w-full max-w-lg bg-[#0c0c0e]/30 border border-white/[0.04] rounded-[2.5rem] p-8 lg:p-10 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Subtle Accent Glow Ring Inside Card */}
          <div className="absolute -top-20 -right-20 w-44 h-44 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none transition-all duration-700 group-hover:bg-orange-500/20" />

          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 text-white flex items-center gap-3">
            <Sparkles size={20} className="text-orange-500" />
            Why Work With Me?
          </h2>

          {/* Clean lists with curated orange micro icons */}
          <ul className="space-y-6 text-zinc-300 font-light text-sm sm:text-base">
            <li className="flex items-start gap-4 group/item">
              <div className="p-2.5 bg-orange-500/10 border border-orange-500/15 rounded-xl text-orange-500 mt-0.5 group-hover/item:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(234,88,12,0.15)] shrink-0">
                <Zap size={16} />
              </div>
              <span className="leading-relaxed mt-1">Fast, smooth & scalable development</span>
            </li>
            <li className="flex items-start gap-4 group/item">
              <div className="p-2.5 bg-orange-500/10 border border-orange-500/15 rounded-xl text-orange-500 mt-0.5 group-hover/item:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(234,88,12,0.15)] shrink-0">
                <Sparkles size={16} />
              </div>
              <span className="leading-relaxed mt-1">Unique dark-themed UI with modern touches</span>
            </li>
            <li className="flex items-start gap-4 group/item">
              <div className="p-2.5 bg-orange-500/10 border border-orange-500/15 rounded-xl text-orange-500 mt-0.5 group-hover/item:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(234,88,12,0.15)] shrink-0">
                <Code2 size={16} />
              </div>
              <span className="leading-relaxed mt-1">Creative problem-solving and clean code</span>
            </li>
            <li className="flex items-start gap-4 group/item">
              <div className="p-2.5 bg-orange-500/10 border border-orange-500/15 rounded-xl text-orange-500 mt-0.5 group-hover/item:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(234,88,12,0.15)] shrink-0">
                <Layers size={16} />
              </div>
              <span className="leading-relaxed mt-1">MERN Stack + tools + animations expertise</span>
            </li>
          </ul>

          {/* ── TECH STACK MARQUEE ── */}
          <div className="mt-10 pt-8 border-t border-white/[0.04]">
            <p className="text-zinc-500 text-[10px] font-bold mb-6 uppercase tracking-[0.2em] text-center">
              [ Core Tech Stack ]
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
                    className="flex items-center gap-3 min-w-max group/logo"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-7 h-7 object-contain group-hover/logo:scale-110 transition-transform duration-300 filter brightness-95"
                    />
                    <span className="text-zinc-300 text-xs sm:text-sm font-bold tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;