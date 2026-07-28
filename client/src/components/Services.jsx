import React from "react";
import { motion } from "framer-motion";
import {  
  Code2,
  LayoutDashboard, 
  Briefcase, 
  ShoppingBag, 
  Cpu, 
  Wrench,
  Sparkles
} from "lucide-react";

const servicesData = [
  {
    title: "React Development",
    desc: "Building highly interactive, component-driven, and blazing-fast single page applications (SPAs) tailored to modern web standards.",
    icon: Code2,
    gradient: "from-orange-500 to-amber-500",
    id: "01",
  },
  {
    title: "Dashboard Development",
    desc: "Crafting beautiful administrative portals, real-time analytics dashboards, and custom data visualization systems with absolute precision.",
    icon: LayoutDashboard,
    gradient: "from-orange-600 to-red-500",
    id: "02",
  },
  {
    title: "Business Websites",
    desc: "Developing high-fidelity corporate brand websites focused on maximum visual engagement, lead generation, and dynamic scalability.",
    icon: Briefcase,
    gradient: "from-amber-500 to-yellow-500",
    id: "03",
  },
  {
    title: "E-commerce Stores",
    desc: "Constructing robust online stores integrated with secure checkout funnels, dynamic payment processors, and modern stock control.",
    icon: ShoppingBag,
    gradient: "from-red-500 to-orange-500",
    id: "04",
  },
  {
    title: "API Integration",
    desc: "Connecting third-party web services, headless CMS platforms, custom microservices, and secure server-to-server gateway protocols.",
    icon: Cpu,
    gradient: "from-orange-500 to-rose-500",
    id: "05",
  },
  {
    title: "Website Maintenance",
    desc: "Providing continuous framework updates, code optimization, layout modifications, and 24/7 security patch implementations.",
    icon: Wrench,
    gradient: "from-amber-600 to-orange-600",
    id: "06",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#020202] text-white px-6 lg:px-16 py-24 overflow-hidden">
      
      {/* Ambient Orange Glow Behind Section */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(234,88,12,0.12)_0%,rgba(234,88,12,0.02)_60%,rgba(0,0,0,0)_80%)] blur-[80px] pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="relative w-full flex flex-col items-center text-center mb-24 select-none">
        <h2 className="absolute -top-14 text-[13vw] font-black uppercase tracking-widest text-white/[0.012] leading-none filter blur-[3px]">
          SERVICES
        </h2>
        
        <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-950 border border-zinc-900 rounded-full text-xs font-bold tracking-widest text-orange-500 mb-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          <Sparkles size={12} className="animate-pulse" />
          <span>WHAT I OFFER</span>
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
          PREMIUM <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">SERVICES</span>
        </h3>
        <div className="w-12 h-[3px] bg-orange-500 mt-4 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.7)]" />
      </div>

      {/* 3x2 Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group relative h-[360px] bg-[#0d0d0e]/95 border border-zinc-900 rounded-[2.2rem] p-8 overflow-hidden transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-4 hover:rotate-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.12)] flex flex-col justify-between"
              style={{ perspective: "1000px" }}
            >
              

              {/* Middle Row: Icon & Title */}
              <div className="space-y-4 relative z-10 my-auto">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] shadow-lg`}>
                  <div className="w-full h-full bg-[#0d0d0e] rounded-[15px] flex items-center justify-center text-orange-500 group-hover:text-white transition-colors duration-500">
                    <Icon size={24} className="stroke-[1.8]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold tracking-wide text-zinc-100 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Wireless Contactless Signal & Card Brand Hologram */}
              <div className="flex justify-between items-end pt-4 border-t border-zinc-900/80 relative z-10">
                {/* Contactless symbol mockup */}
                <div className="flex gap-1 items-end opacity-40 group-hover:opacity-80 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span className="w-1.5 h-3 rounded-r bg-zinc-400 border-r border-zinc-400" />
                  <span className="w-1.5 h-4.5 rounded-r bg-zinc-400 border-r border-zinc-400" />
                </div>

                {/* Premium Corporate Hologram logo */}
                <div className="flex items-center -space-x-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 rounded-full bg-orange-600/60" />
                  <div className="w-7 h-7 rounded-full bg-amber-500/60 mix-blend-screen" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;