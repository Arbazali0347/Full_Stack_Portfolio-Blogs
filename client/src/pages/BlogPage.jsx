import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2, Send } from "lucide-react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContextProvider } from "../context/AppContext";
import { useState } from "react";
import toast from 'react-hot-toast'
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null)
    const { id } = useParams();
    const { axios } = useContext(AppContextProvider)


    const fetchBlogData = async () => {
        try {
            const { data } = await axios.get(`/api/blog/${id}`)
            if (data.success) {
                setData(data.blog)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br 
                        from-[#0f0f12] via-[#1a1c20] to-[#000000] text-white">

                <div className="flex flex-col items-center">

                    <div className="w-14 h-14 border-4 border-white/20 border-t-white 
                                rounded-full animate-spin"></div>

                    <p className="mt-4 text-lg tracking-widest text-white/60">
                        Loading…
                    </p>
                </div>
            </div>
        );
    }


    // Yaha find ki zaroorat nahi
    const blog = data;

    if (!blog) {
        return (
            <div className="text-white p-10 text-center text-2xl">
                Blog not found...
            </div>
        );
    }

    // Format Date
    const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="relative min-h-screen w-full px-6 md:px-20 py-20 text-white 
                    bg-gradient-to-br from-[#0f0f12] via-[#1a1c20] to-[#000000] overflow-hidden">
            {/* Back Arrow */}
            <motion.button
                onClick={() => navigate(-1)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-lg 
               border border-white/10 rounded-full shadow-xl
               hover:bg-white/20 transition cursor-pointer"
            >
                <ArrowLeft size={22} className="text-white" />
            </motion.button>


            {/* Floating blur divs */}
            <div className="absolute top-40 -left-20 w-96 h-96 bg-white/5 opacity-20 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/10 opacity-10 rounded-full blur-[150px]"></div>

            <div className="relative max-w-4xl mx-auto">

                <div className="text-center">
                    {/* Published Date */}
                    <p className="text-white/50 lg:text-xl text-sm mb-3">
                        Published on <span className="text-white">{formattedDate}</span>
                    </p>

                    {/* Title */}
                    <h1 className="lg:text-6xl text-2xl font-bold leading-tight">
                        {blog.title}
                    </h1>

                    {/* Subtitle */}
                    <h2 className="lg:text-2xl text-sm text-white/70 mt-4">
                        {blog.subTitle}
                    </h2>

                </div>

                {/* Image */}
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full object-cover rounded-3xl mt-8 shadow-xl"
                />

                {/* Content */}
                <div
                    className="mt-10 text-lg leading-relaxed text-white/80 blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                {/* Share Section (same as before) */}
                <div className="mt-14 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <p className="text-white/70 text-lg font-semibold mb-4 flex items-center gap-2">
                        <Share2 size={20} /> Share this blog
                    </p>

                    <div className="flex gap-4">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                        >
                            <Facebook size={22} />
                        </a>

                        <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                        >
                            <Twitter size={22} />
                        </a>

                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                        >
                            <Linkedin size={22} />
                        </a>

                        <a
                            href={`https://api.whatsapp.com/send?text=${blog.title} - ${window.location.href}`}
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                        >
                            <Send size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
