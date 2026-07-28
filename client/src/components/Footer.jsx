import React from "react";
import { Github, Linkedin, ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020202] pt-24 pb-12 px-6 lg:px-16 border-t border-white/[0.03] relative overflow-hidden">
      
      {/* ── CINEMATIC ORANGE GLOW (Center Background) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[radial-gradient(circle,rgba(234,88,12,0.04)_0%,rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          
          {/* Logo, Bio & Pitch */}
          <div className="space-y-4">
            <img className="w-30" src={logo} alt="logo" />
            <p className="text-zinc-500 text-sm max-w-[280px] font-light leading-relaxed">
              Building high-performance digital products, interactive interfaces, and business-focused web solutions.
            </p>
          </div>

          {/* Navigation & Connection Links */}
          <div className="flex gap-12 sm:gap-16">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-2 border-b border-orange-500/10 pb-1">Navigation</p>
              <Link to="/projects" className="text-zinc-500 hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300 text-sm">Projects</Link>
              <Link to="/about" className="text-zinc-500 hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300 text-sm">About Me</Link>
              <Link to="/contact" className="text-zinc-500 hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300 text-sm">Contact</Link>
            </div>
            
            {/* Social Connects */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-2 border-b border-orange-500/10 pb-1">Connect</p>
              <a 
                href="https://github.com/Arbazali0347" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-1 text-zinc-500 hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300 text-sm"
              >
                Github <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/arbaz-ali-290917325/" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-1 text-zinc-500 hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300 text-sm"
              >
                LinkedIn <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM COPYRIGHT & BRAND BAR ── */}
        <div className="pt-10 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs tracking-wide">
            © {currentYear} <span className="text-zinc-400 font-bold">Arbaz Ali</span>. All rights reserved.
          </p>
          
          {/* Social Quick-Access Buttons */}
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/Arbazali0347" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:border-orange-500/20 hover:scale-110 hover:shadow-[0_4px_15px_rgba(234,88,12,0.1)] transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arbaz-ali-290917325/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:border-orange-500/20 hover:scale-110 hover:shadow-[0_4px_15px_rgba(234,88,12,0.1)] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/arbazali2276/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-center justify-center text-zinc-500 hover:text-orange-500 hover:border-orange-500/20 hover:scale-110 hover:shadow-[0_4px_15px_rgba(234,88,12,0.1)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;