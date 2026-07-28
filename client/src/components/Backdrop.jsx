import React from "react";
import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    // Fixed background that stays behind everything (-z-50)
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#020202] overflow-hidden pointer-events-none">
      
      {/* ── TECH GRID LINES PATTERN ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}
      />

      {/* ── ANIMATED ORANGE GLOWING ORBS ── */}
      {/* Animated Glowing Orb 1 (Top Left - Rich Orange Glow) */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] bg-orange-600/12 rounded-full blur-[140px]"
      />

      {/* Animated Glowing Orb 2 (Bottom Right - Amber/Neon Aura) */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-gradient-to-br from-orange-500/15 to-amber-600/5 rounded-full blur-[140px]"
      />

      {/* Center Soft Ambient Light (Warm Blend) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vw] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,rgba(3,3,3,0)_70%)] rounded-full blur-[130px]"></div>

      {/* Subtle Top Linear Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/5 via-transparent to-transparent" />
      
    </div>
  );
};

export default Backdrop;