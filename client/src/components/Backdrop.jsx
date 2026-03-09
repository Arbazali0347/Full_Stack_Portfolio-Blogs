import React from "react";
import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    // Fixed background that stays behind everything (-z-50)
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#050505] overflow-hidden pointer-events-none">
      
      {/* Animated Glowing Orb 1 (Top Left - Blue) */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-blue-600/15 rounded-full blur-[120px]"
      />

      {/* Animated Glowing Orb 2 (Bottom Right - Emerald) */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] bg-emerald-600/15 rounded-full blur-[120px]"
      />

      {/* Center Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/[0.02] rounded-full blur-[150px]"></div>
      
    </div>
  );
};

export default Backdrop;