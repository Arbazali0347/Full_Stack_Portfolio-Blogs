import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

const WhyChooseMe = () => {
  const reasons = [
    {
      title: "Blazing Fast Performance",
      description: "Optimized, lightweight, and lag-free code for seamless loading speeds.",
      icon: <Zap size={20} className="text-orange-500" />,
    },
    {
      title: "Clean & Modern Design",
      description: "Sleek, eye-catching, and user-friendly layouts tailored to your brand identity.",
      icon: <Eye size={20} className="text-orange-500" />,
    },
    {
      title: "Secure & Scalable",
      description: "Built with industry-standard MERN & Next.js practices for complete peace of mind.",
      icon: <ShieldCheck size={20} className="text-orange-500" />,
    },
    {
      title: "Dedicated Support",
      description: "Clear communication, transparent workflow, and reliable post-launch assistance.",
      icon: <HeartHandshake size={20} className="text-orange-500" />,
    },
  ];

  return (
    <section className="bg-[#020202] py-24 px-6 lg:px-16 relative overflow-hidden">
      
      {/* ── SUBTLE AMBIENT BACKGROUND GLOW ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[radial-gradient(circle,rgba(234,88,12,0.04)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* ── COMPACT HEADER ── */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-bold tracking-widest text-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
            <Sparkles size={11} className="animate-pulse" />
            <span>MY ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Why Work <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">With Me</span>
          </h2>
          <div className="w-10 h-[2.5px] bg-orange-500 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.6)]" />
        </div>

        {/* ── COMPACT MICRO-CARDS GRID ── */}
        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-[1.75rem] bg-[#0c0c0e]/30 border border-white/[0.03] backdrop-blur-md hover:border-orange-500/20 hover:bg-[#0c0c0e]/70 transition-all duration-300 flex gap-4 items-start"
            >
              {/* Internal Accent Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.01] via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />

              {/* Glowing Left Indicator Strip */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-full shadow-[0_0_8px_rgba(234,88,12,0.8)]" />

              {/* Micro Icon Container */}
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/15 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-orange-500/20 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
                {item.icon}
              </div>

              {/* Content Space (Super Clean Typography) */}
              <div className="space-y-1.5 pt-0.5">
                <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMe;