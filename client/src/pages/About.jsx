import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-14 flex flex-col lg:flex-row items-center gap-14 px-6 lg:px-16">
      
      {/* Left Side Text */}
      <motion.div
        className="flex-1 space-y-7"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-widest text-white/50 font-semibold">
          About Me
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          A Developer With <span className="text-white/60">Creative Vision</span>
        </h1>

        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
          I'm Arbaz Ali a passionate MERN Stack Developer who loves building
          smooth, fast, and visually unique digital experiences. Every project I build carries a modern black-themed design, glass effects, and clean functionality.
        </p>

        <p className="text-white/60 text-lg max-w-xl">
          My mission is simple: Create websites that feel premium, futuristic,
          and memorable combining performance with creative UI/UX.
        </p>

        <button
          className="
            px-6 py-3 rounded-2xl text-white bg-white/10
            backdrop-blur-xl border border-white/20 
            shadow-[0_0_40px_-15px_rgba(255,255,255,0.25)]
            hover:bg-white/20 hover:shadow-[0_0_70px_-10px_rgba(255,255,255,0.3)]
            hover:-translate-y-1 transition-all duration-300
            flex items-center gap-2
          "
          onClick={() => navigate(-1)}
        >
          Back <ArrowLeft size={20} />
        </button>
      </motion.div>

      {/* Right Side Card */}
      <motion.div
        className="
          flex-1 bg-white/5 border border-white/10 rounded-3xl 
          p-10 backdrop-blur-xl 
          shadow-[0_0_80px_-20px_rgba(255,255,255,0.2)]
          hover:shadow-[0_0_120px_-10px_rgba(255,255,255,0.25)]
          transition-all duration-300
        "
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Why Work With Me?</h2>

        <ul className="space-y-4 text-white/70">
          <li className="flex gap-2">🚀 <span>Fast, smooth & scalable development</span></li>
          <li className="flex gap-2">🎨 <span>Unique black-themed UI with futuristic touches</span></li>
          <li className="flex gap-2">💡 <span>Creative problem-solving and clean code</span></li>
          <li className="flex gap-2">📦 <span>MERN Stack + modern tools + animations expertise</span></li>
        </ul>
      </motion.div>

    </div>
  );
};

export default About;
