import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { Instagram, Linkedin, Facebook, Youtube, Send, Mail, MessageSquare } from "lucide-react";

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
        <div className="w-full min-h-screen px-6 lg:px-16 py-10 bg-transparent text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                
                {/* LEFT SIDE - Branding & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
                        >
                            Get In Touch
                        </motion.div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                            Let’s Build <br /> 
                            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">Something Big.</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
                        </p>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        {[
                            { icon: <Instagram size={24} />, label: "Instagram", link: "https://www.instagram.com/arbaz_ali8253/", color: "hover:text-pink-500" },
                            { icon: <Linkedin size={24} />, label: "LinkedIn", link: "https://www.linkedin.com/in/arbaz-ali-290917325/", color: "hover:text-blue-500" },
                            { icon: <Facebook size={24} />, label: "Facebook", link: "https://www.facebook.com/profile.php?id=100067117656822", color: "hover:text-blue-600" },
                            { icon: <Youtube size={24} />, label: "YouTube", link: "https://www.youtube.com/@AroXperience", color: "hover:text-red-500" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 ${item.color}`}
                            >
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE – CONTACT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative group">
                        {/* Subtle Glow behind the form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        
                        <div className="relative bg-white/[0.02] border border-white/10 p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <MessageSquare className="text-blue-400" /> Drop me a line
                            </h2>

                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Arbaz Ali"
                                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="hello@example.com"
                                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows="4"
                                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all duration-300 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    disabled={loading}
                                    className="w-full group relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-white text-black font-bold transition-all duration-300 hover:bg-blue-400 hover:text-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2 italic">
                                        {loading ? "Sending..." : "Send Message"} 
                                        {!loading && <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
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