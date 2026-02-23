import React from "react";
import image from "../assets/ImageMe.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  ChevronDown,
  Code,
  Terminal,
  Server
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  { Icon: Instagram, name: "Instagram" },
  { Icon: Linkedin, name: "LinkedIn" },
  { Icon: Youtube, name: "YouTube" },
  { Icon: Facebook, name: "Facebook" }
];

const techIcons = [
  { Icon: Code, name: "Code" },
  { Icon: Terminal, name: "Terminal" },
  { Icon: Server, name: "Backend" }
];

const Header = () => {
  const navigate = useNavigate();
  
  const orbitVariants = {
    rotate: { rotate: 360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }
  };

  return (
    // Removed min-h-screen and bg color, added standard padding for a balanced size
    <div className="relative w-full flex flex-col items-center px-6 lg:px-16 py-16 lg:py-10 overflow-hidden">
      
      <div className="grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-[3px] h-28 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full mt-2"></div>
            <div className="space-y-4">
              {/* Reduced text size for better proportion */}
              <h1 className="text-4xl lg:text-6xl leading-tight font-bold tracking-tight">
                <span className="text-white">Arbaz Ali</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text inline-block mt-2"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Full Stack Web Developer
                </motion.span>
              </h1>
              <p className="text-base lg:text-lg text-white/60 max-w-lg leading-relaxed font-light">
                I design and develop modern, responsive, and high-performance web
                applications. Focused on clean UI, smooth interactions, and scalable
                solutions using the <span className="text-white/90 font-medium">MERN stack</span>.
              </p>
            </div>
          </div>

          {/* Resume & Stats */}
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/Arbaz_Resume2026.pdf"
              download
              className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 
              backdrop-blur-md text-white hover:bg-white/10 
              hover:border-white/30 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={18} className="relative z-10 group-hover:-translate-y-1 transition-transform" /> 
              <span className="relative z-10">Resume</span>
            </a>

            <div className="flex gap-8 text-sm text-white/50">
              <div className="flex flex-col">
                <span className="text-white text-2xl lg:text-3xl font-bold">2+</span>
                <span className="tracking-wider uppercase text-[10px] mt-1">Years Exp</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white text-2xl lg:text-3xl font-bold">15+</span>
                <span className="tracking-wider uppercase text-[10px] mt-1">Projects</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {socialLinks.map(({ Icon, name }, i) => (
              <div
                key={i}
                className="group p-3 border border-white/5 rounded-xl bg-white/5 
                hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative shadow-lg"
              >
                <Icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium bg-[#111] border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 5 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] rotate-3 scale-105 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl -z-10"></div>

            {/* Slightly reduced image size */}
            <img
              src={image}
              alt="Arbaz Ali"
              className="relative lg:h-[420px] lg:w-[380px] 
              object-cover object-top rounded-[2rem] 
              border border-white/10 
              shadow-[0_0_80px_-20px_rgba(59,130,246,0.15)] bg-[#0a0a0a]"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 right-[-20px] lg:right-[-40px] px-4 py-2 text-sm font-medium
              bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl 
              rounded-2xl text-white shadow-2xl"
            >
              🚀 MERN Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 -left-6 lg:-left-12 
              px-4 py-2 text-sm font-medium
              bg-gradient-to-r from-[#0a0a0a]/90 to-[#111]/90 backdrop-blur-xl
              border border-white/10
              rounded-2xl text-white
              shadow-2xl"
            >
              ✨ Modern UI
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
              className="absolute top-1/4 -left-8 lg:-left-16 px-4 py-2 text-sm font-medium bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl rounded-2xl text-white shadow-2xl"
            >
              ⚛️ React.js Expert
            </motion.div>

            {/* Scaled down orbit slightly */}
            <motion.div
              variants={orbitVariants}
              animate="rotate"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/5 rounded-full pointer-events-none -z-20"
            >
              {techIcons.map(({ Icon, name }, i) => {
                const angle = (i / techIcons.length) * 360;
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ rotate: `${angle}deg`, x: 240 }}
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="group p-3 bg-[#111] border border-white/10 rounded-full text-white/70 shadow-lg pointer-events-auto cursor-pointer hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                    >
                      <Icon size={20} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Adjusted Scroll Indicator position */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => navigate("/projects")}
        className="mt-16 text-white/30 flex flex-col items-center cursor-pointer hover:text-white transition-colors group z-20"
      >
        <span className="text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
        <div className="w-8 h-12 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-white/50 transition-colors">
          <motion.div 
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;