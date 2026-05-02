import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Zap, SearchCheck, Globe } from "lucide-react"; // Added SearchCheck

const AboutMe = () => {
  return (
    <section className="py-20 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Impactful Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter">
              The Man <br /> 
              Behind The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Pixels.</span>
            </h2>
            <p className="text-white/40 text-lg font-light max-w-sm italic">
              I don't just build websites; I build business assets that dominate the web.
            </p>
          </motion.div>

          {/* Right Side: Bento Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            
            {/* Box 1: Google Indexing Power (NEW) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 backdrop-blur-md space-y-4 relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <SearchCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Google Search Specialist</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I ensure your business is fully indexed and searchable on Google from day one. If it's not on Google, it doesn't exist.
              </p>
              {/* Subtle Scan Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-all duration-1000"></div>
            </motion.div>

            {/* Box 2: Full-Stack Skill */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md space-y-4 sm:mt-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Full-Stack Magic</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Expert in MERN stack. I build robust backends and lightning-fast frontends for a seamless experience.
              </p>
            </motion.div>

            {/* Box 3: Wide Bottom Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="sm:col-span-2 p-8 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center gap-8"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                   <Globe size={20} className="text-blue-400" />
                   Scalable Business Solutions
                </div>
                <p className="text-white/50 text-sm font-light">
                   From automation to SEO, I deliver tools that increase your ROI and help your business reach a global audience.
                </p>
              </div>
              <div className="flex items-center gap-6 border-l border-white/10 pl-8">
                <div>
                   <h4 className="text-3xl font-bold text-white">10+</h4>
                   <p className="text-[10px] text-white/30 uppercase tracking-widest">Projects</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-white">Top</h4>
                   <p className="text-[10px] text-white/30 uppercase tracking-widest">Ranked</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;