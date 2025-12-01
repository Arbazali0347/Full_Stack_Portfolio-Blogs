import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // 🌟 Detect active route
    const menuRef = useRef(null);

    // Active Link Function
    const isActive = (path) => location.pathname === path;

    // Click outside to close menu
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenu(false);
            }
        };
        if (menu) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menu]);

    return (
        <div className="relative z-50">
            {/* Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white flex justify-between items-center px-4 py-5"
            >
                <h1
                    className="text-3xl font-bold tracking-wider hover:opacity-80 transition cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    ARO.
                </h1>

                {/* Desktop Links */}
                <div className="lg:flex hidden gap-6 text-lg font-medium">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About Me", path: "/about" },
                        { name: "Projects", path: "/projects" },
                        { name: "Blogs", path: "/blogs" },
                        { name: "Contact", path: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative transition ${
                                isActive(item.path)
                                    ? "text-white"
                                    : "text-gray-400 hover:text-gray-200"
                            }`}
                        >
                            {item.name}

                            {/* Active Underline */}
                            {isActive(item.path) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full shadow-md"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Website Button */}
                <button
                    className="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-black hover:bg-white/20 transition"
                    onClick={() =>
                        window.open("https://arbazali.framer.website", "_blank")
                    }
                >
                    Website
                </button>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    {menu ? (
                        <X
                            size={40}
                            onClick={() => setMenu(false)}
                            className="cursor-pointer z-100"
                        />
                    ) : (
                        <Menu
                            size={40}
                            onClick={() => setMenu(true)}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-2xl font-semibold z-40"
                    >
                        <X
                            size={40}
                            onClick={() => setMenu(false)}
                            className="absolute top-5 right-5 cursor-pointer text-white"
                        />

                        {[
                            { name: "Home", path: "/" },
                            { name: "About Me", path: "/about" },
                            { name: "Projects", path: "/projects" },
                            { name: "Blogs", path: "/blogs" },
                            { name: "Contact", path: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMenu(false)}
                                className={`transition ${
                                    isActive(item.path)
                                        ? "text-white scale-110 font-bold"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
