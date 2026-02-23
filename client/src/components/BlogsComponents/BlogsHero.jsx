import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import BlogsCardList from "./BlogsCardList";

const BlogsHero = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="relative w-full px-6 lg:px-16 py-10 flex flex-col items-center bg-transparent">
            
            {/* Minimal Decorative Elements */}
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-40 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Title Section */}
            <div className="text-center space-y-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-bold uppercase tracking-widest shadow-sm"
                >
                    <Sparkles size={14} />
                    <span>Insights & Articles</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                >
                    Arbaz Ali <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">Blogging</span> <br /> Platform.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                >
                    A digital space for sharing creative thoughts, AI insights, and modern web development ideas.
                </motion.p>
            </div>

            {/* Modern Integrated Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 w-full max-w-2xl relative group"
            >
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-2 transition-all duration-300 group-focus-within:border-white/30 shadow-2xl">
                    <div className="pl-4 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for articles, topics..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-transparent p-3 lg:p-4 text-white placeholder-gray-500 outline-none text-lg"
                        value={search}
                    />
                    <button className="hidden sm:block px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 active:scale-95">
                        Search
                    </button>
                </div>
            </motion.div>

            {/* Blogs Card List */}
            <div className="w-full mt-20">
                <BlogsCardList search={search} />
            </div>
        </div>
    );
};

export default BlogsHero;