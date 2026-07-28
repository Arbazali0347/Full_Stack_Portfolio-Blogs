import React from "react";
import { motion } from "framer-motion";

const tickerTechs = [
  "React", "Node", "MongoDB", "Express", "TailwindCSS", "Cloudinary",
  "React", "Node", "MongoDB", "Express", "TailwindCSS", "Cloudinary"
];

const TechTicker = () => {
  return (
    /* `w-full bg-[#020202] h-40` - Is container ko humne bada aur solid black kar diya hai.
       Ab ye dono sections ke darmiyan ek solid black border-box wall ban jayega jo har kism ke white color ya drop shadow ko hamesha ke liye block aur cover kar dega. */
    <div className="relative w-full overflow-hidden pointer-events-none z-30 bg-[#020202] h-30 md:h-40 flex items-center select-none">
      
      {/* Moving Line Ribbon - Extended to 160% and left offset to prevent any side clipping */}
      <div className="absolute w-[160%] -left-[30%] bg-gradient-to-r from-orange-600 to-orange-600 py-3.5 -rotate-[3deg] border-y border-orange-400/40 shadow-[0_12px_40px_rgba(234,88,12,0.35)] flex items-center whitespace-nowrap will-change-transform scale-x-105">
        
        {/* Hardware accelerated marquee movement loop */}
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 38,
            repeat: Infinity
          }}
          className="flex gap-20 items-center uppercase tracking-[0.2em] text-black font-black text-xs md:text-2xl pr-20 will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          {[...tickerTechs, ...tickerTechs, ...tickerTechs, ...tickerTechs].map((tech, index) => (
            <span key={index} className="flex items-center gap-6">
              <span className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]">{tech}</span>
              <span className="text-orange-950/40 font-bold select-none">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechTicker;