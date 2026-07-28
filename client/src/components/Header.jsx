import React from "react";
import image from "../assets/hero-main.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Send,
  Code2,
  Sparkles
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  { Icon: Instagram, name: "Instagram", Link: "https://www.instagram.com/arbazali2276/" },
  { Icon: Linkedin, name: "LinkedIn", Link: "https://www.linkedin.com/in/arbaz-ali-290917325/" },
  { Icon: Youtube, name: "YouTube", Link: "https://www.youtube.com/@AroXperience" },
  { Icon: Facebook, name: "Facebook", Link: "https://www.facebook.com/profile.php?id=100067117656822" }
];

const Header = () => {
  const navigate = useNavigate();

  // Mouse spotlight follow logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt Effect logic for Hero Portrait Card
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-200, 200], [8, -8]);
  const rotateY = useTransform(cardX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardX.set(x);
    cardY.set(y);
  };

  const handleCardMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 lg:py-16 overflow-hidden bg-[#020203] text-white selection:bg-orange-500 selection:text-white"
    >
      
      {/* ── 1. DYNAMIC MOUSE SPOTLIGHT GLOW ── */}
      <motion.div
        className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(249, 115, 22, 0.11), transparent 80%)`,
        }}
      />

      {/* ── 2. HIGH-TECH GRID BACKGROUND ── */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.035]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#020203_85%)] pointer-events-none -z-10" />

      {/* ── 3. CINEMATIC LIGHTING ORBS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.16)_0%,rgba(217,119,6,0.03)_50%,rgba(2,2,3,0)_75%)] blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* Main Responsive Grid Layout Container */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center justify-items-center z-10 my-auto">
        
        {/* ── HERO IMAGE PORTRAIT ── */}
        <div className="col-span-12 lg:col-span-5 w-full flex flex-col items-center justify-center relative select-none order-1 lg:order-2">
          
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-full flex justify-center items-center mx-auto transition-transform duration-200 ease-out"
          >
            
            {/* Ambient Glow behind Image */}
            <div className="absolute inset-x-6 top-10 bottom-6 rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-500/15 to-transparent blur-2xl sm:blur-3xl -z-10" />

            {/* Smooth Masked Main Portrait Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full h-auto aspect-[3/4] max-h-[360px] sm:max-h-[460px] lg:max-h-[560px] flex justify-center items-end overflow-hidden"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            >
              <img
                src={image}
                alt="Arbaz Ali"
                className="h-full w-auto object-contain object-bottom filter contrast-[1.08] brightness-[1.02]"
              />
            </motion.div>

            {/* FLOATING CARD 1: CORE STACK */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ translateZ: 25 }}
              className="absolute -top-2 right-1 sm:right-2 z-30 flex items-center gap-2.5 p-2.5 px-3.5 sm:p-3 sm:px-4 rounded-xl sm:rounded-2xl bg-zinc-950/85 border border-zinc-800/90 shadow-2xl backdrop-blur-xl"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <Code2 size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-widest text-orange-400">STACK</span>
                <span className="text-[10px] sm:text-[12px] font-extrabold text-zinc-100">MERN • NEXT.JS</span>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: WORK STATUS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ translateZ: 25 }}
              className="absolute bottom-4 -left-1 sm:left-2 z-30 flex items-center gap-2.5 p-2.5 px-3.5 sm:p-3 sm:px-4 rounded-xl sm:rounded-2xl bg-zinc-950/85 border border-zinc-800/90 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-wider text-zinc-400">STATUS</span>
                <span className="text-[10px] sm:text-[12px] font-extrabold text-white">Available For Hire</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ── CONTENT, HEADING & BUTTONS ── */}
        <div className="col-span-12 lg:col-span-7 w-full max-w-xl lg:max-w-none flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-7 relative order-2 lg:order-1 mx-auto">
          
          {/* TOP TAG BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] sm:text-xs font-extrabold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          >
            <Sparkles size={13} className="text-orange-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>IMPOSSIBLE TO IGNORE</span>
          </motion.div>

          {/* WATERMARK TYPOGRAPHY (Hidden on small screens) */}
          <div className="absolute -top-12 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 pointer-events-none select-none -z-10 w-full overflow-hidden hidden sm:block">
            <h2 className="text-[13vw] lg:text-[10vw] font-black uppercase text-white/[0.015] leading-none tracking-tighter filter blur-[1px]">
              ARBAZ
            </h2>
          </div>

          {/* MAIN HEADING */}
          <h1 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-[4.8rem] xl:text-[5.5rem] font-black uppercase text-white tracking-tight leading-[1.08] sm:leading-[0.92]">
            ARBAZ ALI <br />
            <span className="bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              FULLSTACK
            </span>{" "}
            <span className="text-orange-500 inline-block drop-shadow-[0_0_30px_rgba(249,115,22,0.45)]">
              DEV
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="w-full max-w-lg text-xs sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal px-2 sm:px-0">
            I craft ultra-responsive, high-converting web applications with the{" "}
            <span className="text-white font-semibold underline decoration-orange-500/60 underline-offset-4">
              MERN Stack & Next.js
            </span>
            . Turning complex architecture into seamless visual masterpieces.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 w-full max-w-[260px] sm:max-w-none">
            
            {/* Primary Button */}
            <button 
              onClick={() => navigate("/projects")}
              className="relative group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-black text-xs sm:text-sm tracking-wide shadow-[0_10px_35px_rgba(249,115,22,0.35)] hover:shadow-[0_15px_45px_rgba(249,115,22,0.55)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden border-t border-orange-300/40"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              <span>Explore Projects</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button 
              onClick={() => navigate("/contact")}
              className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-200 font-bold text-xs sm:text-sm hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg backdrop-blur-md"
            >
              <Send size={15} className="text-orange-500 group-hover:rotate-12 transition-transform" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* SOCIAL PLATFORMS */}
          <div className="pt-5 border-t border-zinc-900/90 w-full max-w-md">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3 text-center lg:text-left">
              CONNECT ACROSS PLATFORMS
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-3">
              {socialLinks.map(({ Icon, name, Link }, i) => (
                <a
                  key={i}
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-zinc-800/90 text-zinc-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 shadow-md backdrop-blur-md"
                  title={name}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;