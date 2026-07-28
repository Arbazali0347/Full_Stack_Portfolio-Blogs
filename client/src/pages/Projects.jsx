import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, Sparkles } from "lucide-react";

// Assets (Aap ke existing imports)
import SaaS from "../assets/SaaS.png";
import ECom from "../assets/ECom.png";
import Dark from "../assets/DarkAndLight.png";
import MyAbout from "../assets/MyAbout.png";
import Blogging from "../assets/Blogging.png";
import React_PortFolio from "../assets/React_PortFolio.png";
import React_Todo from "../assets/React_Todo.png";
import MovieSearcher from "../assets/MovieSearcher.png";
import NodeProfile from "../assets/Node_Profile.png";
import React_LinkShortner from "../assets/React_LinkShortner.png";
import React_Gallary from "../assets/React_Gallary.png";
import Saqlain_Website_Clone from "../assets/Saqlain_Website_Clone.png";
import JavaScript_messanger from "../assets/JavaScript_messanger.png";
import HTML_Portfolio from "../assets/HTML_Portfolio.png";
import HTML_CSS_Portfolio from "../assets/HTML_CSS_Portfolio.png";
import HTML_CSS_Ecom from "../assets/HTML_CSS_Ecom.png";
import Todo_Auth from "../assets/Todo_Auth.png";
import Tshirt from "../assets/T-shirt_store.png";
import ajrealestate from "../assets/ajrealestate.png";
import GlobalComputer from "../assets/GlobalComputer.png";
import perfume from "../assets/perfume_img.png";
import LinkedIn_Clone from "../assets/LinkedIn_Clone.png";
import arofeature from "../assets/arofeature.png";
import DentalMax from "../assets/Dentist-web.png";
import yumspot from "../assets/yumspot.png";
import makImage from "../assets/makImage.png";
import Guitar from "../assets/Guitar.png";
import pk from "../assets/PK.png";
import chanoor from "../assets/chanoor.png";
import tradeAlphaZone from "../assets/trade-alpha-zone.png";
import skillbox from "../assets/skill-box.png";
import nzCollection from "../assets/nz-collection.png";
import minza from "../assets/minza-collection.png";
import alifFragrance from "../assets/alif-fragrance.png";

const projectsData = {
  fullstack: [
    {
      title: "SkillBox institute Website",
      desc: "A modern educational platform for SkillBox Institute, featuring course listings, admission form, student dashboards, and interactive learning modules. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://skillbox.edu.pk/",
      image: skillbox,
      Github: false,
    },
    {
      title: "Trade Alpha Zone Acedemy Website",
      desc: "A modern educational platform for Trade Alpha Zone Academy, featuring course listings, student dashboards, and interactive learning modules. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://tradealphazone.com/",
      image: tradeAlphaZone,
      Github: false,
    },
    {
      title: "NZ Collections brand Website",
      desc: "A modern Clothes & accesserios brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS for a responsive and engaging user experience.",
      link: "https://www.thenzcollection.store/",
      image: nzCollection,
      Github: false,
    },
    {
      title: "Minza's Collections brand Website",
      desc: "Full-stack MERN e-commerce application equipped with dynamic product filtering, seamless checkout flows, and custom dashboard reporting screens.",
      link: "https://www.minzascollection.store/",
      image: minza,
      Github: false,
    },
    {
      title: "Alif Fragrance brand Website",
      desc: "A modern fragrance brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS & Express Node.js for a responsive and engaging user experience.",
      link: "https://www.aliffragrance.store/",
      image: alifFragrance,
      Github: false,
    },
    {
      title: "Chanoor Jewelries Brand Website",
      desc: "A modern Chanoor Jewelries brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS for a responsive and engaging user experience. ",
      link: "https://chanoor.store/",
      image: chanoor,
      Github: false,
    },
    {
      title: "Zee Guitar Brand Website",
      desc: "A morden Zee Guitar brand website with a sleek design, showcasing products and features. Built with React and Tailwind CSS for a responsive and engaging user experience. ",
      link: "https://zee-guitar-aro.vercel.app/",
      image: Guitar,
      Github: false,
    },
    {
      title: "PK Fashion Fairy E-Commerce Store",
      desc: "A modern e-commerce platform for selling fashion products online. Includes product management, secure checkout, and order handling. Built with MERN Stack (MongoDB, Express, React, Node.js).",
      link: "http://pk-fashion-fairy-aro.vercel.app/",
      image: pk,
      Github: false,
    },
    {
      title: "YumSpot Crunch fries & pizza fries",
      desc: "Modern and responsive restaurant website built for a fries & pizza fries brand, featuring a clean UI, full menu showcase, and smooth user experience.",
      link: "https://yum-spot-aro.vercel.app/",
      image: yumspot,
      Github: false,
    },
    {
      title: "Mak Men's Salon",
      desc: "A stylish salon website for Mak Men's Salon, showcasing services, team, and booking options with a sleek design and user-friendly interface.",
      link: "https://mak-men-salon-aro.vercel.app/",
      image: makImage,
      Github: false,
    },
    {
      title: "DentalMax Elite",
      desc: "High-end dental clinic platform featuring AI-driven diagnostics, surgical precision layouts, and a dark-themed luxury UI.",
      link: "https://dentist-web-aro.vercel.app/",
      image: DentalMax,
      Github: false,
    },
    {
      title: "Real Estate Website (AJ)",
      desc: "A modern real estate platform for showcasing property listings and capturing buyer inquiries. Helps agencies present properties professionally and manage leads online. Built with React, Node.js, Express, and MongoDB.",
      link: "https://ajrealestate.pk/",
      image: ajrealestate,
      Github: false
    },
    {
      title: "GARB Brand full-Store",
      desc: "A full-stack Cloths store with product management and admin dashboard. Allows businesses to sell products online and manage orders efficiently. Built with MERN Stack (MongoDB, Express, React, Node.js).",
      link: "https://nextfit-seven.vercel.app/",
      image: Tshirt,
      Github: false
    },
    {
      title: "Global Computer Education Center",
      desc: "A professional education institute website for showcasing courses and admissions. Helps students explore programs and contact the institute easily. Built with React and modern responsive design.",
      link: "https://global-computer-it9u.vercel.app/",
      image: GlobalComputer,
      Github: false
    },
    {
      title: "AroFeature - Feature Feedback SaaS",
      desc: "A modern SaaS platform that helps businesses collect user feedback, prioritize ideas, and build features that users actually want. Includes voting system, feedback management, and a clean AI-powered UI. Built with MERN stack.",
      link: "https://aro-feature-frontend.vercel.app/",
      image: arofeature,
      Github: "https://github.com/Arbazali0347/AroFeature"
    },
    {
      title: "SaaS BG Remover",
      desc: "An AI-powered background remover that processes images instantly. Helps creators and businesses generate clean product images without manual editing. Built with React, Node.js, and AI API integration.",
      link: "https://bg-remover-saas-rt79.vercel.app/",
      image: SaaS,
      Github: "https://github.com/Arbazali0347/BG-remover-SAAS"
    },
    {
      title: "AM Chemical E-Commerce",
      desc: "A complete e-commerce platform for selling chemical products online. Includes product management, secure checkout, and order handling. Built with MERN Stack (MongoDB, Express, React, Node.js).",
      link: "https://amchemical.store",
      image: ECom,
      Github: "https://github.com/Arbazali0347/AM-E-Commerce"
    },
    {
      title: "AI Blogging Platform",
      desc: "A modern blogging platform with AI-assisted content tools. Allows users to write, publish, and manage blog posts easily. Built with MERN Stack and integrated AI features.",
      link: "https://arbaz-blog-platfrom-38rn.vercel.app/",
      image: Blogging,
      Github: "https://github.com/Arbazali0347/Arbaz-blog-platfrom"
    },
  ],
  react: [
    { title: "Zalvyn Perfume Brand Store", desc: "Beautifull design with brand theme and responsive website.", link: "https://zalvyn-website-aro.vercel.app/", image: perfume, Github: false },
    { title: "Movie Searcher", desc: "React app fetching data from OMDB API.", link: "https://react-movie-searcher-eta.vercel.app/", image: MovieSearcher, Github: "https://github.com/Arbazali0347/React-Movie-Searcher" },
    { title: "React Gallery", desc: "Visual gallery with API-driven images.", link: "https://ract-gallary-app.vercel.app/", image: React_Gallary, Github: "https://github.com/Arbazali0347/Ract_Gallary_APP" },
    { title: "React Todo List", desc: "The todo list maker with react.", link: "https://todo-app-using-react-lyart.vercel.app/", image: React_Todo, Github: "https://github.com/Arbazali0347/Todo-App-using-React" },
    { title: "Link Shortener", desc: "Clean UI for shortening long URLs.", link: "https://link-shortner-phi-lake.vercel.app/", image: React_LinkShortner, Github: "https://github.com/Arbazali0347/Link-Shortner" },
    { title: "The Porfolio with react", desc: "The amazing portfolio using react with tailwind", link: "https://react-my-portfolio-chi.vercel.app/", image: React_PortFolio, Github: "https://github.com/Arbazali0347/React-My-Portfolio/" },
  ],
  tailwind: [
    { title: "Dark/Light UI", desc: "Seamless theme switching interface.", link: "https://dark-and-light-ruby.vercel.app/", image: Dark, Github: "https://github.com/Arbazali0347/Dark-and-Light" },
    { title: "About UI Design", desc: "Modern About page with Glassmorphism.", link: "https://my-project-tailwind.vercel.app/", image: MyAbout, Github: "https://github.com/Arbazali0347/My-About-Project" },
    { title: "LinkedIn Login page clone", desc: "The Same design of LinkedIn in Login page.", link: false, image: LinkedIn_Clone, Github: false },
  ],
  node: [
    { title: "Profile Auth App", desc: "Secure Node.js authentication system.", link: false, image: NodeProfile, Github: "https://github.com/Arbazali0347/Profile-Auth-Node-Express" },
    { title: "Todo Auth App", desc: "Task manager with JWT security.", link: false, image: Todo_Auth, Github: "https://github.com/Arbazali0347/Todo-List-with-authentication" },
  ],
  css: [
    { title: "Saqlain Clone", desc: "Pixel perfect UI clone of a portfolio.", link: "https://arbazali0347.github.io/Saqlain-website-clone/", image: Saqlain_Website_Clone, Github: "https://github.com/Arbazali0347/Saqlain-website-clone" },
    { title: "Uncrypt Messenger", desc: "Modern chat interface layout.", link: "https://arbazali0347.github.io/Text-Messanger/", image: JavaScript_messanger, Github: "https://github.com/Arbazali0347/Text-Messanger/" },
    {
      title: "Static E-commerce design",
      desc: "The Amazing E-commerce design using with HTML_CSS.",
      link: "https://arbazali0347.github.io/E-commerce-HTML-CSS/",
      image: HTML_CSS_Ecom,
      Github: "https://github.com/Arbazali0347/E-commerce-HTML-CSS/"
    },
    {
      title: "The first Portfolio",
      desc: "The first portfolio design using with HTML_CSS.",
      link: "https://arbazali0347.github.io/HTML_CSS_Portfolio/",
      image: HTML_CSS_Portfolio,
      Github: "https://github.com/Arbazali0347/HTML_CSS_Portfolio"
    },
    {
      title: "The white theme portfolio",
      desc: "The white theme portfolio design using with HTML_CSS.",
      link: "https://arbazali0347.github.io/Arbazali-HTML-Portfolio/",
      image: HTML_Portfolio,
      Github: "https://github.com/Arbazali0347/Arbazali-HTML-Portfolio/"
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const totalProjects = Object.values(projectsData).flat().length;

  const tabs = [
    { name: "Full-Stack", key: "fullstack" },
    { name: "React", key: "react" },
    { name: "Tailwind", key: "tailwind" },
    { name: "Node", key: "node" },
    { name: "Static", key: "css" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#020202] text-white py-24 px-6 lg:px-16 overflow-hidden">
      
      {/* ── HIGH-TECH BACKGROUND GRID ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* ── CINEMATIC AMBIENT GLOWS ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── HEADER SECTION ── */}
        <div className="mb-20 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-bold tracking-widest text-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
            <Sparkles size={11} className="animate-pulse" />
            <span>MY WORKPORTFOLIO</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
            Crafted <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Works</span>
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-[#0c0c0e]/60 border border-white/[0.05] px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.8)]"></span>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{totalProjects} Projects Completed</p>
          </div>
        </div>

        {/* ── MODERN TABS ── */}
        <div className="flex justify-center gap-2.5 lg:gap-3.5 mb-20 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab.key ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/[0.02] border border-orange-500/20 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.02),0_4px_15px_rgba(234,88,12,0.08)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.name}
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-extrabold ${
                  activeTab === tab.key ? "bg-orange-500/20 text-orange-400" : "bg-white/[0.03] text-zinc-600"
                }`}>
                  {projectsData[tab.key].length}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* ── PROJECTS GRID ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {projectsData[activeTab].map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group bg-[#0a0a0c]/40 border border-white/[0.04] rounded-[2.2rem] p-4.5 hover:border-orange-500/15 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(234,88,12,0.06)] relative overflow-hidden backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-[#101014] border border-white/[0.03]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 text-xs">
                        No Preview Available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/85 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Card Content */}
                  <div className="px-2 py-5 space-y-3.5">
                    <h2 className="text-lg font-black tracking-tight text-white group-hover:text-orange-500 transition-colors duration-300 uppercase leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Buttons Action Bar */}
                <div className="px-2 pt-2.5 pb-2">
                  <div className="flex items-center gap-3 w-full">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-[10px] uppercase tracking-wider shadow-md shadow-orange-500/10 transition-all duration-300"
                      >
                        <Globe size={13} /> Live Demo
                      </a>
                    )}
                    {project.Github && (
                      <a
                        href={project.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#141417]/80 border border-white/[0.05] hover:border-orange-500/20 text-zinc-300 hover:text-white font-black text-[10px] uppercase tracking-wider transition-all duration-300"
                      >
                        <Github size={13} /> Github
                      </a>
                    )}
                    {!project.link && !project.Github && (
                      <div className="w-full text-center py-2.5 rounded-2xl bg-zinc-950/40 border border-zinc-900 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;