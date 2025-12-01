import React, { useState } from "react";
import { motion } from "framer-motion";
import SaaS from "../assets/SaaS.png"
import ECom from "../assets/ECom.png"
import Dark from "../assets/DarkAndLight.png"
import MyAbout from "../assets/MyAbout.png"
import Blogging from "../assets/Blogging.png"
import React_PortFolio from "../assets/React_PortFolio.png"
import React_Todo from "../assets/React_Todo.png"
import MovieSearcher from "../assets/MovieSearcher.png"
import NodeProfile from "../assets/Node_Profile.png"
import React_LinkShortner from "../assets/React_LinkShortner.png"
import React_Gallary from "../assets/React_Gallary.png"
import LinkedIn_Clone from "../assets/LinkedIn_Clone.png"
import Saqlain_Website_Clone from "../assets/Saqlain_Website_Clone.png"
import JavaScript_messanger from "../assets/JavaScript_messanger.png"
import HTML_Portfolio from "../assets/HTML_Portfolio.png"
import HTML_CSS_Portfolio from "../assets/HTML_CSS_Portfolio.png"
import HTML_CSS_Ecom from "../assets/HTML_CSS_Ecom.png"
import Todo_Auth from "../assets/Todo_Auth.png"

const projectsData = {
  fullstack: [
    {
      title: "SaaS Background Remover",
      desc: "A complete MERN SaaS Background Remover with modern UI and dynamic sections.",
      link: "https://bg-remover-saas-rt79.vercel.app/",
      image: SaaS,
      Github: "https://github.com/Arbazali0347/BG-remover-SAAS"
    },
    {
      title: "E-Commerce App",
      desc: "Full-featured MERN e-commerce with auth, products, and UI for client.",
      link: "https://amchemical.store",
      image: ECom,
      Github: "https://github.com/Arbazali0347/AM-E-Commerce"
    },
    {
      title: "AI Blogging Platform",
      desc: "A modern blogging platform integrated with AI workflow tools.",
      link: "https://arbaz-blog-platfrom-38rn.vercel.app/",
      image: Blogging,
      Github: "https://github.com/Arbazali0347/Arbaz-blog-platfrom"
    },
  ],

  react: [
    {
      title: "Todo App",
      desc: "A clean React todo manager with smooth UI.",
      link: "https://todo-app-using-react-lyart.vercel.app/",
      image: React_Todo,
      Github: "https://github.com/Arbazali0347/Todo-App-using-React"
    },
    {
      title: "React Portfolio",
      desc: "A modern portfolio powered by API-driven content.",
      link: "https://react-my-portfolio-chi.vercel.app/",
      image: React_PortFolio,
      Github: "https://github.com/Arbazali0347/React-My-Portfolio"
    },
    {
      title: "Movie Searcher",
      desc: "Movie finder app using the OMDB API.",
      link: "https://react-movie-searcher-eta.vercel.app/",
      image: MovieSearcher,
      Github: "https://github.com/Arbazali0347/React-Movie-Searcher"
    },
    {
      title: "React Gallery",
      desc: "Image gallery fetching photos from public APIs.",
      link: "https://ract-gallary-app.vercel.app/",
      image: React_Gallary,
      Github: "https://github.com/Arbazali0347/Ract_Gallary_APP"
    },
    {
      title: "Link Shortener",
      desc: "URL shortener built with a public API.",
      link: "https://link-shortner-phi-lake.vercel.app/",
      image: React_LinkShortner,
      Github: "https://github.com/Arbazali0347/Link-Shortner"
    },
  ],

  tailwind: [
    {
      title: "Dark/Light UI",
      desc: "A modern theme toggle UI built using Tailwind CSS.",
      link: "https://dark-and-light-ruby.vercel.app/",
      image: Dark,
      Github: "https://github.com/Arbazali0347/Dark-and-Light"
    },
    {
      title: "About UI Design",
      desc: "A clean Tailwind-based About page design.",
      link: "https://my-project-tailwind.vercel.app/",
      image: MyAbout,
      Github: "https://github.com/Arbazali0347/My-About-Project"
    },
  ],

  node: [
    {
      title: "Profile Auth App",
      desc: "Node + Express authentication system with protected routes.",
      link: false,
      image: NodeProfile,
      Github: "https://github.com/Arbazali0347/Profile-Auth-Node-Express"
    },
    {
      title: "Todo Auth App",
      desc: "Full todo system with JWT authentication.",
      link: false,
      image: Todo_Auth,
      Github: "https://github.com/Arbazali0347/Todo-List-with-authentication"
    },
  ],

  css: [
    {
      title: "Saqlain Clone",
      desc: "A clean clone of Saqlain Khan’s website UI.",
      link: "https://arbazali0347.github.io/Saqlain-website-clone/",
      image: Saqlain_Website_Clone,
      Github: "https://github.com/Arbazali0347/Saqlain-website-clone"
    },
    {
      title: "Uncrypt Messenger",
      desc: "Simple messenger UI created using JavaScript.",
      link: "https://arbazali0347.github.io/Text-Messanger/",
      image: JavaScript_messanger,
      Github: "https://github.com/Arbazali0347/Text-Messanger/"
    },
    {
      title: "Portfolio UI",
      desc: "A minimal and elegant HTML/CSS portfolio.",
      link: "https://arbazali0347.github.io/Arbaz.ali-Portfolio/",
      image: HTML_Portfolio,
      Github: "https://github.com/Arbazali0347/Arbaz.ali-Portfolio"
    },
    {
      title: "Portfolio v2",
      desc: "Another modern HTML/CSS portfolio design.",
      link: "https://arbazali0347.github.io/HTML_CSS_Portfolio/",
      image: HTML_CSS_Portfolio,
      Github: "https://github.com/Arbazali0347/HTML_CSS_Portfolio"
    },
    {
      title: "E-Commerce UI",
      desc: "A simple product-focused HTML/CSS e-commerce layout.",
      link: "https://arbazali0347.github.io/E-commerce-HTML-CSS/",
      image: HTML_CSS_Ecom,
      Github: "https://github.com/Arbazali0347/E-commerce-HTML-CSS"
    },
  ],
};


const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const totalProjects = Object.values(projectsData).flat().length;
  const tabs = [
    { name: "Full-Stack", key: "fullstack" },
    { name: "React", key: "react" },
    { name: "TailwindCss", key: "tailwind" },
    { name: "Node/Express", key: "node" },
    { name: "HTML/CSS/JavaScript", key: "css" },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-16 py-12 bg-gradient-to-br from-[#0f0f12] via-[#1a1c20] to-[#000000] text-white relative overflow-hidden">

      {/* Floating blurred divs */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-white/5 opacity-20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/10 opacity-10 rounded-full blur-[150px]"></div>

      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 
                 text-center flex items-center justify-center gap-2 sm:gap-3">
          My Projects

          <span className="text-sm sm:text-base lg:text-xl font-light 
                     bg-white/10 px-3 sm:px-4 py-[2px] sm:py-1 
                     rounded-full border border-white/10 backdrop-blur-md">
            {totalProjects}
          </span>
        </h1>

        <p className="text-center text-white/50 text-xs sm:text-sm tracking-wide">
          Total Projects Completed
        </p>
      </div>


      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
        flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 
        ${activeTab === tab.key ? "bg-white/20 backdrop-blur-md" : "bg-white/5 hover:bg-white/10"}
      `}
          >
            {/* Tab Name */}
            <span>{tab.name}</span>

            {/* Project Count Badge */}
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full">
              {projectsData[tab.key].length}
            </span>
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData[activeTab].map((project, index) => (
          <motion.div
            key={index}
            className="inline-block bg-white/5 border border-white/10 rounded-3xl p-6 
             backdrop-blur-xl shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)] 
             hover:shadow-[0_0_100px_-10px_rgba(255,255,255,0.2)] 
             transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            {/* UPDATED IMAGE */}
            <div className="relative rounded-[10px] overflow-hidden group">
              <img
                src={project.image}
                alt="No"
                className="block w-full h-full object-cover"
              />

              {/* Always-on Black Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t 
                    from-black/40 via-black/20 to-transparent 
                    pointer-events-none"></div>

              {/* Hover Inner Shadow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    shadow-inner shadow-black/40"></div>
            </div>

            <h2 className="text-2xl font-bold mb-3 mt-3">{project.title}</h2>
            <p className="text-white/60 mb-4">{project.desc}</p>

            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 
                   backdrop-blur-md hover:bg-white/20 transition"
                >
                  View Project
                </a>
              )}

              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 
                 backdrop-blur-md hover:bg-white/20 transition"
              >
                Source Code
              </a>
            </div>
          </motion.div>


        ))}
      </div>
    </div>
  );
};

export default Projects;
