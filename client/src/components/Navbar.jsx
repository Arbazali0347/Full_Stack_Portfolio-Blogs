import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Send } from "lucide-react"; // Added Send icon
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef(null);

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
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
        { name: "About Me", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
        { name: "Transform", path: "/before-after" },
        { name: "Contact", path: "/contact" },
    ];

    // Function to handle the Hire Me action
    const handleHireMe = () => {
        // Option 1: Navigate to contact page
        navigate("/contact");
        // Option 2: Open WhatsApp (Uncomment below if you want direct WhatsApp)
        // window.open("https://wa.me/yourphonenumber", "_blank");
        setMenu(false);
    };

    return (
        <div className="sticky top-0 z-50 w-full pt-6 pb-4 px-4 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-7xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
                <h1
                    className="text-3xl font-bold tracking-wider cursor-pointer bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent hover:from-blue-400 hover:to-emerald-400 transition-all duration-500"
                    onClick={() => navigate("/")}
                >
                    ARO.
                </h1>

                <div className="lg:flex hidden gap-8 text-sm font-medium items-center">
                    {navLinks.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative transition-colors duration-300 py-2 ${
                                isActive(item.path)
                                    ? "text-white"
                                    : "text-white/50 hover:text-white"
                            }`}
                        >
                            {item.name}

                            {isActive(item.path) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* NEW HIRE ME BUTTON */}
                <button
                    className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-white text-black rounded-xl hover:bg-transparent hover:text-white hover:border hover:border-white/30 border border-transparent transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
                    onClick={handleHireMe}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Hire Me
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>

                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setMenu(true)}
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
                    >
                        <Menu size={24} className="text-white" />
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex justify-end"
                    >
                        <motion.div
                            ref={menuRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            className="w-[75%] max-w-sm h-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col pt-24 px-8 relative"
                        >
                            <button 
                                onClick={() => setMenu(false)}
                                className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((item, i) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => setMenu(false)}
                                            className={`text-2xl font-semibold flex items-center gap-4 transition-colors ${
                                                isActive(item.path)
                                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                                                    : "text-white/60 hover:text-white"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* MOBILE HIRE ME BUTTON */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto mb-12 w-full px-6 py-4 flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl shadow-lg active:scale-95 transition-transform"
                                onClick={handleHireMe}
                            >
                                <Send size={18} />
                                Start a Project
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;