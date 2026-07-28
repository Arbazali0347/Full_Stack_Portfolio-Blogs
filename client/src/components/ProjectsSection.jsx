import React, { useState } from "react";
import { ArrowUpRight, Github, Sparkles, Globe, DivideSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import chanoor from "../assets/chanoor.png";
import ajrealestate from "../assets/aj-real-estate.png";
import tradeAlphaZone from "../assets/trade-alpha-zone.png";
import skillbox from "../assets/skill-box.png";
import nzCollection from "../assets/nz-collection.png";
import minza from "../assets/minza-collection.png";
import alifFragrance from "../assets/alif-fragrance.png";
import { useNavigate } from "react-router-dom";

const projectsData = {
  all: [
    {
      title: "SkillBox institute Website",
      desc: "A modern educational platform for SkillBox Institute, featuring course listings, admission form, student dashboards, and interactive learning modules. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://skillbox.edu.pk/",
      Image: skillbox,
      logo: false,
      Github: false,
    },
    {
      title: "Real Estate Website (AJ)",
      desc: "A modern real estate platform for showcasing property listings and capturing buyer inquiries. Helps agencies present properties professionally and manage leads online. Built with React, Node.js, Express, and MongoDB.",
      link: "https://ajrealesate.pk/",
      Image: ajrealestate,
      logo: false,
      Github: false,
    },
    {
      title: "Trade Alpha Zone Acedemy Website",
      desc: "A modern educational platform for Trade Alpha Zone Academy, featuring course listings, student dashboards, and interactive learning modules. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://tradealphazone.com/",
      Image: tradeAlphaZone,
      logo: false,
      Github: false,
    },
    {
      title: "NZ Collections brand Website",
      desc: "A modern Clothes & accesserios brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://www.thenzcollection.store/",
      Image: nzCollection,
      logo: false,
      Github: false,
    },
    {
      title: "Minza's Collections brand Website",
      desc: "Full-stack MERN e-commerce application equipped with dynamic product filtering, seamless checkout flows, and custom dashboard reporting screens.",
      link: "https://www.minzascollection.store/",
      Image: minza,
      logo: false,
      Github: false,
    },
    {
      title: "Alif Fragrance brand Website",
      desc: "A modern fragrance brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS & Express Node.js for a responsive and engaging user experience.",
      link: "https://www.aliffragrance.store/",
      Image: alifFragrance,
      logo: false,
      Github: false,
    }
  ]
};

const ProjectSection = () => {

  const navigate = useNavigate();
  const [activeTab] = useState("all");

  return (
    <section className="relative w-full min-h-screen bg-[#020202] text-white px-6 lg:px-16 py-24 overflow-hidden">
      
      {/* ── TYPOGRAPHIC BLUR / AMBIENT ORANGE GLOW SYSTEM ── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(234,88,12,0.18)_0%,rgba(234,88,12,0.04)_50%,rgba(0,0,0,0)_70%)] blur-[70px] pointer-events-none -z-10" />
      
      {/* ── HEADER SECTION WITH TYPOGRAPHIC BACKGROUND TEXT ── */}
      <div className="relative w-full flex flex-col items-center text-center mb-24 select-none">
        <h2 className="absolute -top-14 text-[13vw] font-black uppercase tracking-widest text-white/[0.012] leading-none filter blur-[3px]">
          CREATIONS
        </h2>
        
        <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-950 border border-zinc-900 rounded-full text-xs font-bold tracking-widest text-orange-500 mb-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          <Sparkles size={12} className="animate-pulse" />
          <span>PORTFOLIO</span>
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
          SELECTED <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">PROJECTS</span>
        </h3>
        <div className="w-12 h-[3px] bg-orange-500 mt-4 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.7)]" />
      </div>

      {/* ── 3 x 2 GRID CARD CONTAINER ── */}
      <motion.div
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {projectsData[activeTab].map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-4 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5 relative"
            >
              {/* 1. Dynamic Image Aspect Frame */}
              <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-zinc-950 border border-white/5 shadow-inner">
                {/* - Removed grayscale to keep original colors completely intact.
                  - Added default `scale-105` to keep the image slightly zoomed by default.
                  - Added `group-hover:scale-110` for an extra premium zoom on hover.
                */}
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 contrast-[1.02] brightness-[0.9] group-hover:brightness-100 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* 2. Text Content Blocks */}
              <div className="px-3 py-6 space-y-3 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-100 group-hover:text-orange-500 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>

                {/* 3. Operational Action Buttons */}
                <div className="flex items-center gap-3 pt-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-black font-bold text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-97"
                    >
                      <Globe size={14} /> 
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.Github ? (
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 hover:border-zinc-700 transition-all duration-300 active:scale-97"
                    >
                      <Github size={14} /> 
                      <span>Github</span>
                    </a>
                  ) : (
                    !project.link && (
                      <span className="text-zinc-600 text-xs italic font-medium tracking-wide w-full text-center py-2 bg-zinc-900/30 rounded-xl border border-zinc-900/60">
                        Private Repository
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── "MORE PROJECTS" BOTTOM ACTION ── */}
      <div className="w-full flex justify-center mt-20 relative z-10">
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group px-8 py-3.5 rounded-full bg-[#0f0f0f] border border-zinc-900 text-zinc-300 font-black text-sm uppercase tracking-widest hover:text-white hover:border-orange-500/50 shadow-[0_4px_25px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.01)] transition-all flex items-center gap-3 cursor-pointer"
        >
          <span>More Projects</span>
          <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/40 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors">
            <span className="text-xs font-bold font-mono">+</span>
          </div>
        </motion.button>
      </div>

    </section>
  );
};

export default ProjectSection;