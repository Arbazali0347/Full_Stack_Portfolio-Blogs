import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Zap, ArrowRight, Layers } from "lucide-react"; 

// Images Import - (Keeping your existing imports unchanged)
import todoBefore from "../assets/Before_After/before_Todo.png";
import todoAfter from "../assets/Before_After/after_Todo.png";
import after_React_Gallary from "../assets/Before_After/after_React_Gallary.png";
import before_React_Gallary from "../assets/Before_After/before_React_Gallary.png";
import before_Movie_Searcher from "../assets/Before_After/before_Movie_Searcher.png";
import after_Movie_Searcher from "../assets/Before_After/after_Movie_Searcher.png";
import after_Aj_realestate from "../assets/Before_After/after_Aj_realestate.png";
import before_Aj_realestate from "../assets/Before_After/before_Aj_realestate.png";
import before_Nextfit from "../assets/Before_After/before_Nextfit.png";
import after_Nextfit from "../assets/Before_After/after_Nextfit.png";
import before_arofeature from "../assets/Before_After/before_arofeature.png";
import after_arofeature from "../assets/Before_After/after_arofeature.png";
import before_portfolio from "../assets/Before_After/before_portfolio.png";
import after_portfolio from "../assets/Before_After/after_portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "Nextfit T-Shirt E-Commerce Store",
    before: before_Nextfit,
    after: after_Nextfit,
    tech: ["React 19", "TailwindCSS", "Framer Motion", "Node.js", "Express", "MongoDB", "Dashboard"],
    liveLink: "https://nextfit-seven.vercel.app/",
  },
  {
    id: 2,
    title: "The Movie Searcher.",
    before: before_Movie_Searcher,
    after: after_Movie_Searcher,
    tech: ["React 19", "TailwindCSS", "Framer Motion"],
    liveLink: "https://react-movie-searcher-eta.vercel.app/",
  },
  {
    id: 3,
    title: "AroFeature - Feature Feedback SaaS",
    before: before_arofeature,
    after: after_arofeature,
    tech: ["React 19", "TailwindCSS", "Framer Motion", "Node.js", "Express", "MongoDB", "Dashboard"],
    liveLink: "https://aro-feature-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Quantum Gallery Interface",
    before: before_React_Gallary,
    after: after_React_Gallary,
    tech: ["React 19", "TailwindCSS", "Framer Motion"],
    liveLink: "https://ract-gallary-app.vercel.app/",
  },
  {
    id: 5,
    title: "Real Estate Website (AJ)",
    before: before_Aj_realestate,
    after: after_Aj_realestate,
    tech: ["React 19", "TailwindCSS", "Framer Motion"],
    liveLink: "https://ajrealestate.pk/",
  },
  {
    id: 6,
    title: "Next-Gen Task Orchestrator",
    before: todoBefore,
    after: todoAfter,
    tech: ["React 19", "TailwindCSS", "Framer Motion"],
    liveLink: "https://todo-app-using-react-lyart.vercel.app/",
  },
  {
    id: 7,
    title: "Old Portfolio VS Current Portfolio",
    before: before_portfolio,
    after: after_portfolio,
    tech: ["React 19", "TailwindCSS", "Framer Motion"],
    liveLink: "https://arbaz-aro.vercel.app/",
  },
];

const ProjectSlider = ({ project, index }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);

  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(pos, 100)));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mb-44"
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-end mb-6 px-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-blue-500 font-bold">
            <Layers size={12} />
            <span>Project 0{index + 1}</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-medium text-white tracking-tight">{project.title}</h3>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <span style={{ opacity: sliderPos > 10 ? 1 : 0.2 }}>Legacy View</span>
          <span style={{ opacity: sliderPos < 90 ? 1 : 0.2 }}>Modern Build</span>
        </div>
      </div>

      {/* CENTER: THE SLIDER */}
      <div 
        ref={sliderRef}
        onMouseMove={(e) => handleSliderMove(e.clientX)}
        onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
        className="relative h-[300px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 cursor-ew-resize bg-black"
      >
        {/* AFTER IMAGE */}
        <img 
          src={project.after} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none" 
        />

        {/* BEFORE IMAGE (Masked) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden border-r border-white/40 z-10"
          style={{ width: `${sliderPos}%` }}
        >
          <img 
             src={project.before} 
             alt="Before" 
             className="absolute inset-0 h-full object-cover pointer-events-none object-top" 
             style={{ width: sliderRef.current?.offsetWidth || '100%', maxWidth: 'none' }}
          />
        </div>

        {/* --- CHANGE STARTS HERE: BOTTOM SHADOW & LABELS --- */}
        
        {/* 1. Dynamic Bottom Shadow Gradient (Ensures visibility on any image color) */}
        <div className="absolute native-bottom-shadow inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-15 pointer-events-none"></div>

        {/* 2. Before & After Labels with Enhanced Visibility */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-between p-6 pb-8">
          {/* Before Label (Left) */}
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 shadow-2xl">
             <span className="text-[10px] font-bold uppercase tracking-widest text-white">Before</span>
          </div>
          
          {/* After Label (Right) */}
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 shadow-2xl">
             <span className="text-[10px] font-bold uppercase tracking-widest text-white">After</span>
          </div>
        </div>
        
        {/* --- CHANGE ENDS HERE --- */}

        {/* Slider Handle Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/60 z-30 shadow-[0_0_15px_rgba(255,255,255,0.4)]" style={{ left: `${sliderPos}%` }}>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-1.5 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.7)]"></div>
        </div>
      </div>

      {/* BOTTOM BAR: Tech & Links */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 px-2">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] px-4 py-1.5 bg-white/[0.05] border border-white/10 rounded-full text-white/60 font-medium">
              {t}
            </span>
          ))}
          <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Zap size={10} className="text-emerald-400" />
            <span className="text-[9px] font-bold text-emerald-400 tracking-widest uppercase">AI Optimized</span>
          </div>
        </div>

        <motion.a 
          href={project.liveLink} 
          target="_blank"
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
        >
          <span className="text-xs font-bold tracking-widest uppercase">View Experience</span>
          <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowRight size={14} className="-rotate-45" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

// -- BeforeAfterSection remains unchanged --
const BeforeAfterSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center px-6 lg:px-20 py-10 text-white">
      {/* Header Section */}
      <div className="w-full max-w-6xl mb-24 space-y-4">
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.5em] text-blue-500 uppercase"
        >
          Evolution
        </motion.span>
        <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.9]">
          Design <br /> <span className="text-white/20">Transformation.</span>
        </h2>
      </div>

      {projectsData.map((project, index) => (
        <ProjectSlider key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default BeforeAfterSection;