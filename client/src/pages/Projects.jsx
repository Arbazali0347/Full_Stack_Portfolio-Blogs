import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

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
import LinkedIn_Clone from "../assets/LinkedIn_Clone.png";
import arofeature from "../assets/arofeature.png";

const projectsData = {
  fullstack: [
    {
      title: "Real Estate Website (AJ)",
      desc: "A modern real estate platform for showcasing property listings and capturing buyer inquiries. Helps agencies present properties professionally and manage leads online. Built with React, Node.js, Express, and MongoDB.",
      link: "https://ajrealestate.pk/",
      image: ajrealestate,
      Github: false
    },

    {
      title: "Nextfit E-Commerce",
      desc: "A full-stack T-shirt store with product management and admin dashboard. Allows businesses to sell products online and manage orders efficiently. Built with MERN Stack (MongoDB, Express, React, Node.js).",
      link: "https://nextfit-seven.vercel.app/",
      image: Tshirt,
      Github: "https://github.com/Arbazali0347/Nextfit"
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
    <div className="min-h-screen px-6 lg:px-16 py-16 text-white">
      {/* Header Section */}
      <div className="mb-16 text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Crafted <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Works</span>
        </h1>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <p className="text-sm text-gray-400 font-medium">{totalProjects} Projects Completed</p>
        </div>
      </div>

      {/* Modern Tabs */}
      <div className="flex justify-center gap-2 lg:gap-4 mb-16 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.key ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.name}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeTab === tab.key ? "bg-blue-500/20 text-blue-300" : "bg-white/5 text-gray-600"}`}>
                {projectsData[tab.key].length}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {projectsData[activeTab].map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-4 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Card Image */}
              <div className="relative aspect-video rounded-[1.8rem] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Card Content */}
              <div className="px-3 py-6 space-y-3">
                <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-light">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors"
                    >
                      <Globe size={14} /> Live Demo
                    </a>
                  )}
                  {project.Github && (
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-colors"
                    >
                      <Github size={14} /> Github
                    </a>
                  )}
                  {!project.link && !project.Github && (
                    <span className="text-gray-600 text-xs italic">Private Repository</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;