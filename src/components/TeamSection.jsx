import React from "react";
import { motion } from "framer-motion";
import { TEAM_CONTENT } from "../utils/constants/text";
import { AppIcons } from "../components/ui/AppIcons"; 
import { useNavigate } from "react-router-dom";
import { HiUsers, HiArrowRight } from "react-icons/hi";

export default function TeamSection() {
  const navigate = useNavigate();
  const { sectionTag, heading, heading1, description, teamMembers } = TEAM_CONTENT;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

      {/* Animated Gradient Orb */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10 backdrop-blur-sm"
          >
            <HiUsers className="text-lg" />
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
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            {description}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/all-team-members")}
            className="
              group inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-gradient-to-r from-[#DC2828] to-[#EA4920]
              text-white font-bold text-base
              shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
              transition-all duration-300
              border border-[#DC2828]/50 hover:border-[#DC2828]
            "
          >
            View All Team
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Team Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.slice(0, 4).map((member, i) => {
            const { Fb, Twitter, Pinterest } = AppIcons;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -10 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20 group"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  {/* Image */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                    
                    {/* Name & Role */}
                    <motion.div
                      initial={{ y: 0 }}
                      className="transform transition-all duration-500 group-hover:-translate-y-2"
                    >
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#DC2828] text-sm font-semibold">
                        {member.role}
                      </p>
                    </motion.div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#DC2828] to-[#EA4920] flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[#DC2828]/50 transition-shadow"
                      >
                        <Fb className="text-white text-base" />
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#DC2828] to-[#EA4920] flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[#DC2828]/50 transition-shadow"
                      >
                        <Twitter className="text-white text-base" />
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#DC2828] to-[#EA4920] flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[#DC2828]/50 transition-shadow"
                      >
                        <Pinterest className="text-white text-base" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#DC2828]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}