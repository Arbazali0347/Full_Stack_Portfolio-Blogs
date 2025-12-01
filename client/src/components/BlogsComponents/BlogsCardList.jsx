import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContextProvider } from "../../context/AppContext";


const BlogsCardList = ({ search }) => {
    const navigate = useNavigate();
    const {blogs} = useContext(AppContextProvider)
    const filteredBlogs = () => {
        if (search === "") {
            return blogs
        }
        return blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.category.toLowerCase().includes(search.toLowerCase()))
    }
    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-16 py-10 sm:py-12 text-white relative overflow-hidden mt-12">

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredBlogs().length === 0 && (
                    <p className="text-center text-white/50 col-span-full text-lg">
                        No blogs found for “{search}”
                    </p>
                )}
                {filteredBlogs().map((blog, index) => (
                    <motion.div
                        key={index}
                        onClick={() => navigate(`/blogs/${blog._id}`)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden 
               backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]
               hover:shadow-[0_0_70px_-10px_rgba(255,255,255,0.2)] 
               transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Image with dark overlay */}
                        <div className="relative w-full h-40 sm:h-48">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t 
                        from-black/40 via-black/20 to-transparent"></div>
                        </div>

                        <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                            <p className="text-white/60 text-xs sm:text-sm">{blog.category}</p>

                            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                                {blog.title}
                            </h2>

                            <p className="text-white/70 text-sm sm:text-base flex-1"
                                dangerouslySetInnerHTML={{ "__html": blog.description.slice(0, 80) }}></p>

                            <button className="mt-2 cursor-pointer sm:mt-3 px-4 py-2 rounded-full bg-white/10 
                           backdrop-blur-md hover:bg-white/20 
                           text-white font-semibold transition-all duration-300 w-max">
                                Read More
                            </button>
                        </div>
                    </motion.div>

                ))}
            </div>

        </div>
    );
};

export default BlogsCardList;
