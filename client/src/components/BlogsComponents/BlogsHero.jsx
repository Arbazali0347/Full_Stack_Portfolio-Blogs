import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogsCardList from "./BlogsCardList";

const BlogsHero = () => {
    const [search, setSearch] = useState("")
    return (
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 lg:px-16 py-24 text-white
                        bg-gradient-to-br from-[#0f0f12] via-[#1a1c20] to-[#000000] overflow-hidden">

            {/* Floating blurred divs */}
            <div className="absolute top-20 -left-10 w-72 h-72 bg-white/5 opacity-20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/10 opacity-10 rounded-full blur-[150px]"></div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center leading-tight"
            >
                Arbaz ali <span className="text-gray-400">blogging</span> <br /> platform.
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-center text-white/70 max-w-3xl text-lg sm:text-xl leading-relaxed"
            >
                Welcome to my personal blogging platform a space to share thoughts, ideas, and creativity, Arbaz Ali’s personal blogging space created with passion and powered by AI.
            </motion.p>

            {/* Search bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 w-full max-w-xl flex flex-col sm:flex-row gap-3"
            >
                <input
                    type="text"
                    placeholder="Search blogs..."
                    onChange={(e)=> setSearch(e.target.value)}
                    className="w-full p-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none 
                   bg-white/5 border border-white/10 text-white 
                   placeholder-white/60 focus:outline-none focus:border-white/30 
                   text-base sm:text-lg"
                   value={search}
                />

                <button className="w-full sm:w-auto px-6 py-4 rounded-xl sm:rounded-r-xl sm:rounded-l-none 
                       bg-white/10 hover:bg-white/20 text-white 
                       font-semibold transition-all duration-300 text-base sm:text-lg">
                    Search
                </button>
            </motion.div>
            {/* Blogs Card List */}
            <BlogsCardList search={search}/>
        </div>
    );
};

export default BlogsHero;
