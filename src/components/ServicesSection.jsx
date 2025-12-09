import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight } from "react-icons/hi";
import { SERVICES_CONTENT } from "../utils/constants/text";

export default function ServicesSection() {
  const { sectionTag, heading, heading1, description, cards } = SERVICES_CONTENT;
  const navigate = useNavigate();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #DC2828 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-40 left-20 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 bg-[#F56716]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10 backdrop-blur-sm"
          >
            <HiSparkles className="text-lg" />
            {sectionTag}
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{heading}</span>
            <br />
            <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
              {heading1}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group h-full"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20 flex flex-col">
                
                {/* Top Gradient Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#DC2828] to-[#EA4920] flex items-center justify-center text-white shadow-lg shadow-[#DC2828]/30"
                >
                  {React.createElement(card.icon, { size: 36 })}
                </motion.div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1">
                    {card.desc}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/service/${i}`)}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                      bg-gradient-to-r from-[#DC2828] to-[#EA4920]
                      text-white font-semibold text-sm
                      shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
                      transition-all duration-300
                      border border-[#DC2828]/50 hover:border-[#DC2828]"
                  >
                    View Details
                    <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#DC2828]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Bottom Right Corner Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#DC2828]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#DC2828]/0 via-[#DC2828]/20 to-[#DC2828]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 lg:mt-20 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#DC2828]/50 to-transparent"
        />
      </div>
    </section>
  );
}