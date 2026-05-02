import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import chanoor from "../assets/chanoor.png";
import ajrealestate from "../assets/ajrealestate.png";
import ECom from "../assets/ECom.png";

// Images import (Replace these with your actual paths)
// import chanoor from "../assets/chanoor.png";
// import ajrealestate from "../assets/aj.png";
// import ECom from "../assets/ecom.png";

const projects = [
  {
    title: "Chanoor Jewelries Brand",
    business: "Luxury Jewelry E-commerce",
    problem: "Jewelry brands need high-end visual trust to convert visitors into buyers.",
    result: "Created a premium sleek UI that increased user engagement and brand value.",
    tech: ["React", "Node & Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    link: "https://chanoor.store/",
    image: chanoor, // Replace with your 'chanoor' variable
  },
  {
    title: "AJ Real Estate Platform",
    business: "Property Listing & Lead Gen",
    problem: "Real estate agencies struggle to manage property leads and professional presentation.",
    result: "Delivered a centralized MERN platform that automates lead capture and listing management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://ajrealestate.pk/",
    image: ajrealestate, // Replace with your 'ajrealestate' variable
  },
  {
    title: "AM Chemical Store",
    business: "Industrial B2B E-commerce",
    problem: "Traditional chemical sales lack digital inventory management and online checkouts.",
    result: "Developed a full-stack store with secure COD checkout and product management system.",
    tech: ["React", "Node & Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    link: "https://amchemical.store",
    image: ECom, // Replace with your 'ECom' variable
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-blue-500"></div>
            <span className="text-blue-400 uppercase tracking-[0.3em] text-sm font-bold">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              
              {/* Project Image Container */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] will-change-transform">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Overlay for link */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <a href={project.link} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform">
                        <ExternalLink size={24} />
                     </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <p className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
                    {project.business}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Problem Solution Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertCircle size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">The Problem</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <CheckCircle2 size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">The Result</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-white/10 rounded-full text-white/40 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all duration-300 group"
                  >
                    View Live Project
                    <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;