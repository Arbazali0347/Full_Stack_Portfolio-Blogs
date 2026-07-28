import React, { useState, useEffect, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Click outside listener to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menu &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-toggle-btn")
      ) {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleHireMe = () => {
    navigate("/contact");
    setMenu(false);
  };

  // Mobile Menu Motion Variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-[100] w-full py-4 px-4 sm:px-6 flex justify-center bg-black/95 border-b border-zinc-900 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_1px_0px_rgba(234,88,12,0.12)] backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl flex justify-between items-center z-10"
      >
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => {
            navigate("/");
            setMenu(false);
          }}
        >
          <img
            className="h-8 sm:h-9 w-auto object-contain"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold bg-zinc-950 p-2 rounded-full border border-zinc-800/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.02)]">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative tracking-wide ${
                isActive(item.path)
                  ? "bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_4px_12px_rgba(234,88,12,0.3),_inset_0_1px_1px_rgba(255,255,255,0.4)] border-t border-orange-400/50"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Desktop Hire Me Button */}
          <button
            className="hidden lg:flex items-center gap-3 pl-2 pr-6 py-1.5 text-sm font-bold text-white bg-gradient-to-b from-orange-500 to-orange-600 rounded-full transition-all duration-300 border-t border-orange-400/50 shadow-[0_5px_15px_rgba(234,88,12,0.35),_inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-110 hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] active:scale-95 cursor-pointer"
            onClick={handleHireMe}
          >
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-white overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
              <User size={15} className="text-zinc-300" />
            </div>
            <span className="tracking-wide">Hire Me</span>
          </button>

          {/* Mobile Hamburger Toggle Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenu(!menu)}
              className="menu-toggle-btn p-2 text-zinc-400 hover:text-white transition-colors duration-200 active:scale-90 z-50 relative"
              aria-label="Toggle Menu"
            >
              {menu ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Top-Down Dropdown */}
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-zinc-900 shadow-2xl backdrop-blur-lg flex flex-col pt-8 pb-10 px-6 z-0"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <motion.div key={item.path} variants={linkVariants}>
                  <Link
                    to={item.path}
                    onClick={() => setMenu(false)}
                    className={`text-base font-semibold block py-3.5 px-6 rounded-full transition-all duration-300 text-center tracking-wide ${
                      isActive(item.path)
                        ? "bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_4px_12px_rgba(234,88,12,0.3)] border-t border-orange-400/40"
                        : "text-zinc-400 bg-zinc-900/50 border border-zinc-800/40 hover:text-white hover:border-zinc-700/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.button
              variants={linkVariants}
              className="mt-8 w-full py-3.5 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-b from-orange-500 to-orange-600 rounded-full border-t border-orange-400/40 shadow-[0_5px_15px_rgba(234,88,12,0.3)] active:scale-95 transition-all duration-200 cursor-pointer"
              onClick={handleHireMe}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;