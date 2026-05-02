import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sameer Ahmed",
    role: "Chanoor Jewelry Brand Owner",
    content: "It was pleasure to work with you. You were very responsive and created what we exactly want. Thank you.",
    rating: 5,
    platform: "WhatsApp Feedback"
  },
  {
    name: "Adnan jilani",
    role: "Aj Real Estate CEO",
    content: "The real estate platform Arbaz built is incredibly fast and easy to manage. Our lead generation has improved significantly since the launch.",
    rating: 5,
    platform: "Direct Feedback"
  },
  {
    name: "Ahmed Raza",
    role: "AM Chemicals Manager",
    content: "Highly impressed by his MERN stack skills. He solved our complex inventory problems and delivered a secure checkout system. Highly recommended!",
    rating: 5,
    platform: "Upwork Client"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 lg:px-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400"
          >
            <MessageCircle size={24} />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Client <span className="text-emerald-400">Feedback</span>
          </h2>
          <p className="text-white/50 max-w-xl font-light">
            Don't just take my word for it. Here is what my clients have to say about the digital solutions I've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-emerald-500/10 transition-colors">
                <Quote size={60} />
              </div>

              <div className="relative space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/70 leading-relaxed italic font-light relative z-10">
                  "{item.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-1">
                      {item.name}
                      <ShieldCheck size={14} className="text-blue-400" />
                    </h4>
                    <p className="text-white/40 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Platform Tag */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/30 uppercase tracking-widest group-hover:text-emerald-400/50 transition-colors">
                <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                {item.platform}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for your next big project
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;