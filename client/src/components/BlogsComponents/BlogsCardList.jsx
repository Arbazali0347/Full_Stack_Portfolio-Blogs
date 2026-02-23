import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";
import { ArrowRight, Calendar } from "lucide-react";

const BlogsCardList = ({ search }) => {
    const navigate = useNavigate();
    const { blogs } = useContext(AppContextProvider);

    const filteredBlogs = () => {
        if (!search) return blogs;
        return blogs.filter((blog) => 
            blog.title.toLowerCase().includes(search.toLowerCase()) || 
            blog.category.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div className="w-full bg-transparent">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredBlogs().length === 0 ? (
                    <div className="col-span-full py-20 text-center space-y-4">
                        <p className="text-gray-500 text-2xl font-light italic">
                            No articles matching “{search}”
                        </p>
                    </div>
                ) : (
                    filteredBlogs().map((blog, index) => (
                        <motion.div
                            key={blog._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => navigate(`/blogs/${blog._id}`)}
                            className="group cursor-pointer flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500"
                        >
                            {/* Image with Zoom Effect */}
                            <div className="relative w-full h-56 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-1 space-y-4">
                                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                                    <Calendar size={14} />
                                    <span>Updated Recently</span>
                                </div>

                                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                    {blog.title}
                                </h2>

                                <p 
                                    className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-light"
                                    dangerouslySetInnerHTML={{ "__html": blog.description.slice(0, 100) + "..." }}
                                ></p>

                                <div className="pt-4 mt-auto">
                                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn">
                                        Read Article 
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-300 text-blue-400" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BlogsCardList;