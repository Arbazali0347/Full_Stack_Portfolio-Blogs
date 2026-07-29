import React from "react";
import { motion } from "framer-motion";
import image from "../assets/hero_mein.png";
import { Link } from "react-router-dom";
import { Sparkles, Code2, ArrowUpRight, CheckCircle2, User } from "lucide-react";

const About = () => {
  const highlightPoints = [
    "Expert MERN Stack & Next.js development",
    "Clean, robust, and lag-free code optimization",
    "Tailored aesthetic UI/UX with smooth interactions",
  ];

  return (
    <section className="bg-[#020202] py-28 px-6 lg:px-16 relative overflow-hidden">
      
      {/* ── CINEMATIC BACKGROUND GLOWS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(234,88,12,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ── LEFT SIDE: THE PREMIUM ASYMMETRIC IMAGE FRAME (5 Cols) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center items-end group"
          >
            {/* Interactive Outer Glow Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-b from-orange-500/20 via-orange-600/5 to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-700" />
            
            {/* Main Image Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[2.5rem] bg-[#0a0a0c]/40 border border-white/[0.04] backdrop-blur-md overflow-hidden flex justify-center items-end shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Radial Highlight behind photo */}
              <div className="absolute bottom-0 inset-x-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(234,88,12,0.15)_0%,rgba(0,0,0,0)_70%)]" />

              {/* Your Image "hero-main.png" with premium filters */}
              <img
                src={image}
                alt="Arbaz Ali Portrait"
                className="h-[92%] w-auto object-contain object-bottom filter grayscale contrast-[1.1] brightness-[1.02] group-hover:scale-[1.03] group-hover:brightness-[1.06] transition-all duration-700 pointer-events-none"
              />

              {/* Fade Bottom Shadow to melt image into the frame */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/40 to-transparent" />
            </div>

            {/* Quick Floaty Tech Badge overlay */}
            <div className="absolute -bottom-5 right-4 sm:right-10 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 shadow-2xl backdrop-blur-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Code2 size={15} />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase text-zinc-500 font-extrabold tracking-wider">SPECIALTY</p>
                <p className="text-white text-xs font-bold">MERN STACK</p>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT SIDE: COMPACT ABOUT CONTENT (7 Cols) ── */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center space-y-7"
          >
            {/* Elegant Mini Capsule */}
            <div className="self-start flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-bold tracking-widest text-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
              <User size={11} className="animate-pulse" />
              <span>ABOUT ME</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.1]">
              Bridging Elegant Design <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">With Clean Code</span>
            </h3>

            <div className="w-12 h-[3px] bg-orange-500 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.6)]" />

            {/* Premium Compact Pitch */}
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              Hello! I am <span className="text-white font-bold">Arbaz Ali</span>, a Full Stack Web Developer specialized in the MERN stack. I design and build highly optimized, blazing fast web layouts that elevate businesses. My priority is always to keep the visual identity sleek, professional, and completely lag-free.
            </p>

            {/* Micro Highlight Checklist */}
            <div className="space-y-3.5 pt-2">
              {highlightPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-orange-500 shrink-0">
                    <CheckCircle2 size={16} className="drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]" />
                  </div>
                  <span className="text-zinc-300 text-xs sm:text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Interactive Call to Action Button */}
            <div className="pt-4 self-start">
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;