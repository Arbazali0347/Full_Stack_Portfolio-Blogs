import React, { useRef, useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2, Send, ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";
import toast from 'react-hot-toast';

const BlogPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { axios } = useContext(AppContextProvider);
    const [data, setData] = useState(null);

    // Reading Progress Bar Logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const fetchBlogData = async () => {
        try {
            const { data } = await axios.get(`/api/blog/${id}`);
            if (data.success) {
                setData(data.blog);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Error loading blog details");
        }
    };

    useEffect(() => {
        fetchBlogData();
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-transparent text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-gray-400 animate-pulse">Fetching Article...</p>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
    });

    return (
        <div className="relative min-h-screen w-full bg-transparent text-white pb-20 font-sans">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation & Back Button */}
            <div className="fixed top-24 left-6 lg:left-16 z-40">
                <motion.button
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all text-white shadow-2xl"
                >
                    <ArrowLeft size={20} />
                </motion.button>
            </div>

            <article className="max-w-4xl mx-auto px-6 pt-28">
                {/* Header Section */}
                <header className="space-y-6 text-center lg:text-left mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400"
                    >
                        <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                            <Tag size={14} /> {data.category || "Technology"}
                        </span>
                        <span className="flex items-center gap-1.5 italic font-light">
                            <Calendar size={14} /> {formattedDate}
                        </span>
                        <span className="flex items-center gap-1.5 italic font-light">
                            <Clock size={14} /> 5 min read
                        </span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
                    >
                        {data.title}
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl lg:text-2xl text-gray-400 font-light"
                    >
                        {data.subTitle}
                    </motion.p>
                </header>

                {/* Hero Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 mb-16"
                >
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 relative">
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 prose prose-invert prose-lg max-w-none 
                        prose-headings:font-bold prose-headings:text-white 
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-strong:text-blue-400 prose-img:rounded-3xl"
                    >
                        <div 
                            dangerouslySetInnerHTML={{ __html: data.description }} 
                            className="blog-content-container"
                        />
                    </motion.div>
                </div>

                {/* Footer / Share Section */}
                <motion.footer 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center text-center gap-8"
                >
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold italic">Arbaz Ali</h4>
                        <p className="text-gray-500 max-w-sm">Full Stack Developer & AI Enthusiast sharing insights through code and words.</p>
                    </div>

                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] w-full max-w-xl">
                        <p className="text-gray-300 font-bold mb-6 flex items-center justify-center gap-2">
                            <Share2 size={20} className="text-blue-400" /> Share the knowledge
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: <Facebook />, link: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, color: "hover:text-blue-500" },
                                { icon: <Twitter />, link: `https://twitter.com/intent/tweet?url=${window.location.href}`, color: "hover:text-cyan-400" },
                                { icon: <Linkedin />, link: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, color: "hover:text-blue-600" },
                                { icon: <Send />, link: `https://api.whatsapp.com/send?text=${window.location.href}`, color: "hover:text-emerald-500" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.footer>
            </article>
        </div>
    );
};

export default BlogPage;