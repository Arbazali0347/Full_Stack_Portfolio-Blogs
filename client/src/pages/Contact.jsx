import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast'
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

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
                    formRef.current.reset(); // EMPTY FORM
                },
                () => {
                    setLoading(false);
                    toast.error("Failed to send message. Try again!");
                }
            );
    };

    return (
        <div className="mt-10 flex flex-col lg:flex-row items-start gap-16">
            {/* LEFT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex flex-col gap-8"
            >
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                    Contact with BLACK ARO
                </h1>

                <p className="text-white/70 text-lg max-w-md leading-relaxed">
                    I love to share ideas, updates, and tips on web development and more.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mt-2">
                    {[
                        {
                            icon: <Instagram size={30} />,
                            label: "Instagram",
                            link: "https://www.instagram.com/arbaz_ali8253/",
                        },
                        {
                            icon: <Linkedin size={30} />,
                            label: "LinkedIn",
                            link: "https://www.linkedin.com/in/arbaz-ali-290917325/",
                        },
                        {
                            icon: <Facebook size={30} />,
                            label: "Facebook",
                            link: "https://www.facebook.com/profile.php?id=100067117656822",
                        },
                        {
                            icon: <Youtube size={30} />,
                            label: "YouTube",
                            link: "https://www.youtube.com/@AroXperience",
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="
                                bg-white/5 border border-white/10 p-6 rounded-3xl
                                backdrop-blur-xl cursor-pointer
                                shadow-[0_0_40px_-20px_rgba(255,255,255,0.3)]
                                hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]
                                hover:bg-white/10 hover:-translate-y-1
                                transition-all duration-300 flex flex-col items-center text-center gap-3
                            "
                        >
                            <div className="text-white">{item.icon}</div>
                            <h3 className="text-white font-semibold text-lg tracking-wide">
                                {item.label}
                            </h3>
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* RIGHT SIDE – CONTACT FORM */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="
                    flex-1 bg-white/5 border border-white/10 p-10 rounded-3xl 
                    backdrop-blur-xl w-full 
                    shadow-[0_0_70px_-20px_rgba(255,255,255,0.25)]
                "
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Send Me a Message
                </h2>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                        focus:border-white/30 outline-none"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                        focus:border-white/30 outline-none"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                        focus:border-white/30 outline-none"
                        required
                    ></textarea>

                    <button
                        className="
                            w-full p-4 rounded-xl text-white font-semibold
                            bg-white/10 border border-white/20 backdrop-blur-xl
                            hover:bg-white/20 hover:-translate-y-1
                            transition-all duration-300
                        "
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
