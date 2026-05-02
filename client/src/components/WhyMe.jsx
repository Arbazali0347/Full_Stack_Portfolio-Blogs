import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Smartphone, 
  Code2, 
  Zap, 
  ShieldCheck, 
  TrendingUp 
} from "lucide-react";

const reasons = [
  {
    title: "Fast Communication",
    desc: "I am always reachable. No ghosting—just clear updates and quick responses to ensure your project stays on track and deadlines are met.",
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Business-Focused Solutions",
    desc: "I don't just write code; I build tools designed to increase your sales, automate your workflow, and drive real business growth.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    title: "Modern UI/UX Design",
    desc: "Your project will look modern, sleek, and premium. I focus on high-end aesthetics that leave a lasting impression on your users.",
    icon: Zap,
    gradient: "from-purple-500 to-blue-400"
  },
  {
    title: "Scalable Clean Code",
    desc: "I follow industry-standard coding practices with the MERN Stack, ensuring your application is easy to maintain and scale as you grow.",
    icon: Code2,
    gradient: "from-orange-500 to-red-400"
  },
  {
    title: "Mobile First Approach",
    desc: "With 70% of traffic coming from mobile, I ensure every website is pixel-perfect and fully responsive across all device sizes.",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-400"
  },
  {
    title: "Post-Delivery Support",
    desc: "My commitment doesn't end at delivery. I provide ongoing support for updates, maintenance, and bug fixes whenever you need me.",
    icon: ShieldCheck,
    gradient: "from-cyan-500 to-blue-500"
  }
];

const WhyMe = () => {
  return (
    <section className="py-24 px-6 lg:px-16 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-400 font-mono tracking-widest uppercase text-sm"
          >
            Why Choose Me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Turning Visions Into <span className="text-blue-500">Reality</span>
          </motion.h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 will-change-transform"
            >
              {/* Icon Container with Gradient Glow */}
              <div className="relative w-14 h-14 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <item.icon size={28} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Trust Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-white/30 text-lg italic font-light">
            "I don't just write code; I design high-performance digital experiences."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;