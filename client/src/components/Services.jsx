import React from "react";
import { motion } from "framer-motion";
import { 
  Layout, 
  ShoppingBag, 
  Layers, 
  MonitorSmartphone 
} from "lucide-react";

const services = [
  {
    title: "Business Website Development",
    problem: "Outdated websites fail to build trust and lose potential clients.",
    solution: "I build high-end, professional websites that establish authority and convert visitors into loyal customers.",
    icon: MonitorSmartphone,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-commerce Store Development",
    problem: "Slow loading times and complex checkouts kill your sales.",
    solution: "Fast, secure, and conversion-optimized online stores built with MERN stack to scale your revenue.",
    icon: ShoppingBag,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Landing Page Design",
    problem: "Ad traffic is wasted if your landing page doesn't grab attention instantly.",
    solution: "High-impact, performance-driven landing pages designed to capture leads and maximize ROI.",
    icon: Layout,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Admin Dashboard Systems",
    problem: "Managing complex data manually leads to errors and business inefficiency.",
    solution: "Custom internal tools and dashboards that automate your workflow and organize your data seamlessly.",
    icon: Layers,
    color: "from-orange-500 to-red-500"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-600/5 blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Solutions I <span className="text-emerald-400">Deliver</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
            >
              {/* Responsive Flex: Column on mobile, Row on sm and up */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                
                {/* Icon Box */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon size={28} className="text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-red-400/90 font-medium leading-relaxed">
                      <span className="text-[10px] uppercase tracking-wider opacity-60 block mb-1">The Problem</span>
                      {service.problem}
                    </p>
                    <div className="h-px w-full bg-white/5 hidden sm:block"></div>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed italic">
                      <span className="text-emerald-400 font-semibold not-italic text-[10px] uppercase tracking-wider block mb-1">The Solution</span>
                      {service.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;