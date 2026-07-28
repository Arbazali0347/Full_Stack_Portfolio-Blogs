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
    platform: "WhatsApp Feedback"
  },
  {
    name: "Ahmed Raza",
    role: "AM Chemicals Manager",
    content: "Highly impressed by his MERN stack skills. He solved our complex inventory problems and delivered a secure checkout system. Highly recommended!",
    rating: 5,
    platform: "WhatsApp Feedback"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#020202] py-28 px-6 lg:px-16 relative overflow-hidden">
      
      {/* ── CINEMATIC AMBIENT GLOWS ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,rgba(0,0,0,0)_70%)] blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.04)_0%,rgba(0,0,0,0)_70%)] blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.1)]"
          >
            <MessageCircle size={24} />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Client <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Feedback</span>
          </h2>
          <div className="w-12 h-[3px] bg-orange-500 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.6)]" />
          <p className="text-zinc-400 max-w-xl font-light text-sm sm:text-base pt-2">
            Don't just take my word for it. Here is what my clients have to say about the digital solutions I've delivered.
          </p>
        </div>

        {/* ── TESTIMONIALS GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-[#0c0c0e]/30 border border-white/[0.03] backdrop-blur-md flex flex-col justify-between hover:border-orange-500/30 hover:bg-[#0c0c0e]/80 hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)]"
            >
              {/* Quote Icon Backdrop */}
              <div className="absolute top-6 right-8 text-white/[0.02] group-hover:text-orange-500/[0.03] transition-colors duration-500">
                <Quote size={80} />
              </div>

              <div className="relative space-y-6">
                {/* Dynamic Card Internal Light */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.01] via-transparent to-white/[0.01] opacity-100 group-hover:from-orange-500/[0.03] transition-all duration-500 pointer-events-none rounded-[2.5rem]" />

                {/* Orange Glow Bottom Strip */}
                <div className="absolute inset-x-12 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Premium Orange Stars */}
                <div className="flex gap-1.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-orange-500 text-orange-500 drop-shadow-[0_0_4px_rgba(234,88,12,0.4)]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-300 leading-relaxed italic font-light relative z-10 text-sm sm:text-base">
                  "{item.content}"
                </p>

                {/* Client Profile Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-orange-500/10">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      {item.name}
                      <ShieldCheck size={15} className="text-orange-500" />
                    </h4>
                    <p className="text-zinc-500 text-xs font-medium">{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Verified Platform Tag */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.04] text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-orange-500/80 group-hover:bg-orange-500/[0.03] group-hover:border-orange-500/10 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                {item.platform}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FOOTER STATUS / CTA ── */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-orange-500/[0.03] border border-orange-500/10 text-orange-500 font-semibold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Available for your next big project
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;