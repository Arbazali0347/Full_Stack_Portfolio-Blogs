import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import skillbox from "../assets/Brand_logo/skillbox.png"; 
import minza from "../assets/Brand_logo/minzas.png"; 
import ajrealestate from "../assets/Brand_logo/ajrealestate.png"; 
import aliffragrane from "../assets/Brand_logo/aliffragrane.png"; 
import chanoor from "../assets/Brand_logo/chanoor.webp"; 
import zeenat from "../assets/Brand_logo/zeenat.png"; 
import tradealpha from "../assets/Brand_logo/tradealpha.png"; 
import amchemical from "../assets/Brand_logo/amchemial.png"; 

const brands = [
  { name: "SkillBox", logo: skillbox, link: "https://skillbox.edu.pk/" },
  { name: "Minza's", logo: minza, link: "https://www.minzascollection.store/" },
  { name: "AJ Real Estate", logo: ajrealestate, link: "https://ajrealesate.pk/" },
  { name: "Alif Fragrance", logo: aliffragrane, link: "https://www.aliffragrance.store/" },
  { name: "Chanoor", logo: chanoor, link: "https://chanoor.store/" },
  { name: "NZ Collections", logo: zeenat, link: "https://thenzcollections.store/" },
  { name: "Trade Alpha Zone", logo: tradealpha, link: "https://tradealphazone.com/" },
  { name: "AM Chemical", logo: amchemical, link: "https://amchemical.store/" },
];

const LogoMarquee = () => {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-[#020202] py-28 overflow-hidden relative flex flex-col items-center justify-center">
      
      {/* ── CINEMATIC ORANGE GLOWS Behind Marquee ── */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none -z-10" />

      {/* ── SECTION TITLE ── */}
      <div className="relative w-full flex flex-col items-center text-center mb-16 select-none">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-950 border border-zinc-900 rounded-full text-xs font-bold tracking-widest text-orange-500 mb-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          <Sparkles size={12} className="animate-pulse" />
          <span>COLLABORATIONS</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          TRUSTED BY <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">GROWING BUSINESSES</span>
        </h3>
        <div className="w-10 h-[2.5px] bg-orange-500 mt-3 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.6)]" />
      </div>

      {/* ── MARQUEE WRAPPER (Faded Sides) ── */}
      <div className="relative w-full max-w-7xl overflow-hidden pointer-events-auto px-4">
        
        {/* Deep Left & Right Edge Gradual Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-10 pointer-events-none" />

        {/* ── THE SCROLLING TRACK ── */}
        <div className="flex w-full overflow-hidden select-none py-4">
          
          <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-4">
            {duplicatedBrands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[220px] sm:min-w-[260px] h-24 sm:h-32 px-10 rounded-[2rem] bg-[#0c0c0e]/30 border border-white/[0.03] backdrop-blur-md hover:border-orange-500/40 hover:bg-[#0c0c0e]/80 hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.12)] cursor-pointer group relative overflow-hidden"
              >
                {/* Real-time Dynamic Light Overlay inside Card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-white/[0.02] opacity-100 group-hover:from-orange-500/10 transition-colors duration-500 pointer-events-none" />

                {/* Outer Micro Glow Ring */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* External Link Quick Indicator (appears on hover smoothly) */}
                <div className="absolute top-3.5 right-3.5 text-zinc-600 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight size={14} />
                </div>

                {/* Highly Visible Original Colored Logo Image */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[150px] sm:max-w-[180px] max-h-[60px] sm:max-h-[70px] object-contain transition-all duration-500 group-hover:scale-105 pointer-events-none filter brightness-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
                />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* CSS For Seamless Custom Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
      
    </div>
  );
};

export default LogoMarquee;