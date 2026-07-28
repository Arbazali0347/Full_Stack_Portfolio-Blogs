import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { Instagram, Linkedin, Facebook, Youtube, Send, Sparkles, MessageSquare } from "lucide-react";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Message sent successfully!");
                    formRef.current.reset();
                },
                () => {
                    setLoading(false);
                    toast.error("Failed to send message. Try again!");
                }
            );
    };

    return (
        <div className="relative w-full min-h-screen px-6 lg:px-16 py-24 bg-[#020202] text-white overflow-hidden">
            
            {/* ── HIGH-TECH BACKGROUND GRID ── */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.02] -z-10" 
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px"
                }}
            />

            {/* ── CINEMATIC AMBIENT GLOWS ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(234,88,12,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                
                {/* ── LEFT SIDE - Branding & Socials ── */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-10"
                >
                    <div className="space-y-5">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-bold tracking-widest text-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                        >
                            <Sparkles size={11} className="animate-pulse" />
                            <span>GET IN TOUCH</span>
                        </motion.div>
                        
                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
                            Let’s Build <br /> 
                            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Something Big.</span>
                        </h1>
                        
                        <p className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed font-light">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
                        </p>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                        {[
                            { icon: <Instagram size={20} />, label: "Instagram", link: "https://www.instagram.com/arbaz_ali8253/", hoverColor: "group-hover:text-pink-500 group-hover:border-pink-500/20" },
                            { icon: <Linkedin size={20} />, label: "LinkedIn", link: "https://www.linkedin.com/in/arbaz-ali-290917325/", hoverColor: "group-hover:text-orange-500 group-hover:border-orange-500/20" },
                            { icon: <Facebook size={20} />, label: "Facebook", link: "https://www.facebook.com/profile.php?id=100067117656822", hoverColor: "group-hover:text-blue-500 group-hover:border-blue-500/20" },
                            { icon: <Youtube size={20} />, label: "YouTube", link: "https://www.youtube.com/@AroXperience", hoverColor: "group-hover:text-red-500 group-hover:border-red-500/20" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-3.5 p-4.5 rounded-2xl bg-[#0a0a0c]/40 border border-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.02] ${item.hoverColor}`}
                            >
                                <div className="text-zinc-500 group-hover:scale-105 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* ── RIGHT SIDE – CONTACT FORM ── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative group">
                        {/* Glow effect behind form on hover */}
                        <div className="absolute -inset-px bg-orange-500/10 rounded-[2.2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
                        
                        <div className="relative bg-[#0a0a0c]/40 border border-white/[0.04] p-8 lg:p-12 rounded-[2.2rem] backdrop-blur-xl shadow-2xl">
                            <h2 className="text-xl font-black uppercase tracking-wider text-white mb-8 flex items-center gap-3">
                                <MessageSquare size={18} className="text-orange-500" /> Drop me a line
                            </h2>

                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Arbaz Ali"
                                        className="w-full p-4.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white placeholder-zinc-600 focus:border-orange-500/40 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(234,88,12,0.03)] outline-none transition-all duration-300 text-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="hello@example.com"
                                        className="w-full p-4.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white placeholder-zinc-600 focus:border-orange-500/40 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(234,88,12,0.03)] outline-none transition-all duration-300 text-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows="4"
                                        className="w-full p-4.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white placeholder-zinc-600 focus:border-orange-500/40 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(234,88,12,0.03)] outline-none transition-all duration-300 resize-none text-sm"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    disabled={loading}
                                    className="w-full group relative flex items-center justify-center gap-2 p-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/10 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden cursor-pointer"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {loading ? "Sending..." : "Send Message"} 
                                        {!loading && <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;