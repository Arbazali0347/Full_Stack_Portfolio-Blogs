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
  { name: "AJ Real Estate", logo: ajrealestate, link: "https://ajrealestate.pk/" },
  { name: "Alif Fragrance", logo: aliffragrane, link: "https://www.aliffragrance.store/" },
  { name: "Chanoor", logo: chanoor, link: "https://chanoor.store/" },
  { name: "NZ Collections", logo: zeenat, link: "https://thenzcollections.store/" },
  { name: "Trade Alpha Zone", logo: tradealpha, link: "https://tradealphazone.com/" },
  { name: "AM Chemical", logo: amchemical, link: "https://amchemical.store/" },
];

const LogoMarquee = () => {
  // Brands ko do baar render karte hain taake loop seamless ho
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative w-full bg-[#020202] py-24 sm:py-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle,rgba(234,88,12,0.10)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle,rgba(234,88,12,0.10)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none" />

      {/* Section title */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14 select-none px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold tracking-widest text-orange-500 mb-5">
          <Sparkles size={12} className="animate-pulse" />
          <span>COLLABORATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-400">
          Brands and businesses we have built websites and digital experiences for.
        </p>
        <div className="w-14 h-[3px] bg-orange-500 mt-5 rounded-full shadow-[0_0_14px_rgba(234,88,12,0.7)]" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full max-w-7xl overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

        <div className="flex w-full select-none py-6">
          <div className="marquee-track flex gap-6 sm:gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
            {duplicatedBrands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={index >= brands.length ? "true" : undefined}
                tabIndex={index >= brands.length ? -1 : 0}
                title={brand.name}
                className="group relative inline-flex items-center justify-center shrink-0
                  w-[260px] h-40 sm:w-[320px] sm:h-52 px-8 rounded-3xl
                  bg-gradient-to-b from-zinc-900/90 to-zinc-950
                  border border-white/[0.06]
                  shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                  hover:border-orange-500/50 hover:-translate-y-2
                  hover:shadow-[0_24px_50px_rgba(234,88,12,0.18)]
                  transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />

                {/* Bottom accent line */}
                <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* External link icon */}
                <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>

                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  draggable="false"
                  className="relative z-10 max-w-[200px] sm:max-w-[240px] max-h-[88px] sm:max-h-[120px] object-contain transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;