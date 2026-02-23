import React from "react";
import image from "../assets/ImageMe.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  ChevronDown,
  Code,
  Terminal,
  Server
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const techIcons = [Code, Terminal, Server];


const Header = () => {
    const navigate = useNavigate();
  const orbitVariants = {
    rotate: { rotate: 360, transition: { duration: 15, repeat: Infinity, ease: "linear" } }
  };

  return (
    <div className="relative px-6 lg:px-16 mt-16 lg:mt-5 overflow-hidden">
        

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10 mt-15"
        >
          <div className="flex items-start gap-6">
            <div className="w-[2px] h-32 bg-white/30"></div>
            <div className="space-y-5">
              {/* Name & Title */}
              <h1 className="text-5xl lg:text-6xl leading-tight font-semibold">
                <span className="text-white">Arbaz Ali</span>
                <br />
                <motion.span
                  className="text-white/60 hover:text-white transition duration-500"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Full Stack Web Developer
                </motion.span>
              </h1>
              <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                I design and develop modern, responsive, and high-performance web
                applications. Focused on clean UI, smooth interactions, and scalable
                solutions using the MERN stack.
              </p>
            </div>
          </div>

          {/* Resume & Stats */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/Arbaz_Resume2026.pdf"
              download
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 
              backdrop-blur-lg text-white hover:bg-white/20 
              hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>

            <div className="flex gap-6 text-sm text-white/50">
              <div>
                <p className="text-white text-lg">2+</p>
                <p>Years Learning</p>
              </div>
              <div>
                <p className="text-white text-lg">15+</p>
                <p>Projects Built</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4">
            {[Instagram, Linkedin, Youtube, Facebook].map((Icon, i) => (
              <div
                key={i}
                className="group p-2 border border-white/10 rounded-lg bg-white/5 
                hover:bg-white/20 hover:scale-110 transition duration-300 cursor-pointer relative"
              >
                <Icon size={20} />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-white/20 rounded opacity-0 group-hover:opacity-100 transition">
                  {Icon.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center">
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border border-white/20 rounded-3xl"></div>

            <img
              src={image}
              alt="Arbaz Ali"
              className="relative lg:h-[480px] lg:w-[420px] 
              object-cover object-top rounded-3xl 
              border border-white/20 
              shadow-[0_0_60px_-20px_rgba(255,255,255,0.15)]"
            />

            {/* Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-5 right-0 px-4 py-2 text-sm 
              bg-white/10 border border-white/20 backdrop-blur-md 
              rounded-xl text-white"
            >
              MERN Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 -left-8 
  px-5 py-2.5 text-sm font-medium
  bg-black/60 backdrop-blur-xl
  border border-white/30
  rounded-2xl text-white
  shadow-[0_10px_40px_rgba(0,0,0,0.6)]
  before:absolute before:inset-0
  before:rounded-2xl before:bg-white/5"
            >
              Modern UI
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-20 left-10 px-4 py-2 text-sm bg-white/10 border border-white/20 backdrop-blur-md rounded-xl text-white"
            >
              React.js Expert
            </motion.div>

            {/* Circular Orbiting Tech Icons */}
            <motion.div
              variants={orbitVariants}
              animate="rotate"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            >
              {techIcons.map((Icon, i) => {
                const angle = (i / techIcons.length) * 360;
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ rotate: `${angle}deg`, x: 150 }}
                  >
                    <div className="group p-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white cursor-pointer">
                      <Icon size={24} />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-white/20 rounded opacity-0 group-hover:opacity-100 transition">
                        {Icon.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={()=> navigate("/projects")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center cursor-pointer"
      >
        <ChevronDown size={28} />
        <span className="mt-1 w-1 h-1 rounded-full bg-white/50 animate-bounce"></span>
      </motion.div>
    </div>
  );
};

export default Header;