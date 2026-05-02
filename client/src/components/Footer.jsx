import React from "react";
import { Github, Linkedin, ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          {/* Logo & Name */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              ARO<span className="text-blue-500">.</span>
            </h2>
            <p className="text-white/40 text-sm max-w-[250px] font-light">
              Building high-performance digital products and business-focused solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Navigation</p>
              <Link to="/projects" className="text-white/40 hover:text-white transition-colors text-sm">Projects</Link>
              <Link to="/about" className="text-white/40 hover:text-white transition-colors text-sm">About Me</Link>
              <Link to="/contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
            
            {/* Social Connect */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Connect</p>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white/40 hover:text-white transition-colors text-sm">
                Github <ArrowUpRight size={12} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white/40 hover:text-white transition-colors text-sm">
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {currentYear} Arbaz Ali Design. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
             <a href="https://github.com/Arbazali0347" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all">
                <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/arbaz-ali-290917325/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all">
                <Linkedin size={20} />
             </a>
             <a href="https://www.instagram.com/arbazali2276/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all">
                <Instagram size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;