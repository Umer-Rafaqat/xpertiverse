import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ICON IMPORTS
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";
import { HiSparkles } from "react-icons/hi";

// CONSTANTS
import { ABOUT_INNOVATION } from "../utils/constants/text";

// COMPONENTS
import Counter from "./Counter";

// ICON MAP
const iconMap = {
  FaLightbulb: <FaLightbulb className="h-10 w-10 text-[#DC2828]" />,
  FaHandshake: <FaHandshake className="h-10 w-10 text-[#DC2828]" />,
  BsFillPersonCheckFill: (
    <BsFillPersonCheckFill className="text-[#DC2828] text-xl" />
  ),
  VscWorkspaceTrusted: <VscWorkspaceTrusted className="text-[#DC2828] text-xl" />,
  IoMdTrophy: <IoMdTrophy className="text-[#DC2828] text-xl" />,
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505] text-white px-4 sm:px-6 lg:px-20 py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #4D1D03 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-[#F56716]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-[#DC2828] bg-[#DC2828]/10 border border-[#DC2828]/30 text-sm font-semibold rounded-full px-6 py-2.5 backdrop-blur-sm mb-6"
          >
            <HiSparkles className="text-lg" />
            {ABOUT_INNOVATION.badge}
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="text-white">{ABOUT_INNOVATION.headingWhite}</span>
            <br />
            <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
              {ABOUT_INNOVATION.headingGradient}
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            {ABOUT_INNOVATION.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          {/* LEFT IMAGES SECTION */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-radial from-[#DC2828]/20 via-transparent to-transparent blur-3xl"></div>

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative w-full max-w-lg">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Business Team Collaboration"
                  className="w-full object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Decorative border with gradient */}
                <div className="absolute -inset-4 border-2 border-transparent bg-gradient-to-r from-[#DC2828]/30 via-[#F56716]/30 to-[#DC2828]/30 rounded-3xl -z-10 blur-sm"></div>
              </motion.div>

              {/* SMALL OVERLAY IMAGE */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="absolute -top-12 -left-8 lg:-left-12"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl border-4 border-black shadow-2xl"
                    alt="Business Analytics"
                  />
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC2828]/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* CLIENT BADGE */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-black/95 to-black/80 backdrop-blur-xl border border-[#DC2828]/30 p-5 lg:p-6 rounded-2xl shadow-2xl w-64 lg:w-72"
              >
                <div className="flex text-xl lg:text-2xl items-center text-[#DC2828] gap-1 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.ratingStars}
                </div>

                <p className="text-white font-bold text-base lg:text-lg mb-4">
                  {ABOUT_INNOVATION.happyClientsBox.title}
                </p>

                <div className="flex -space-x-2 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.clientImages.map(
                    (src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        className="h-9 w-9 lg:h-10 lg:w-10 object-cover rounded-full border-2 border-black ring-2 ring-[#DC2828]/20"
                        alt="Client"
                      />
                    )
                  )}
                </div>

                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                  {ABOUT_INNOVATION.happyClientsBox.description}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT TEXT SECTION */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* MAIN FEATURES */}
            <div className="space-y-5">
              {ABOUT_INNOVATION.features.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.15) }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent hover:from-white/[0.08] transition-all duration-300 group border border-white/5 hover:border-[#DC2828]/30"
                >
                  <div className="p-3.5 bg-gradient-to-br from-[#DC2828]/20 to-[#DC2828]/5 rounded-xl group-hover:from-[#DC2828]/30 group-hover:to-[#DC2828]/10 transition-all shadow-lg">
                    {iconMap[item.icon]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-1.5 group-hover:text-[#DC2828] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MINI FEATURES */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {ABOUT_INNOVATION.miniFeatures.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2.5 font-semibold text-white bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-3.5 rounded-xl hover:from-white/[0.1] hover:to-white/[0.05] transition-all border border-white/10 hover:border-[#DC2828]/40"
                >
                  {iconMap[item.icon]}
                  <span className="text-xs lg:text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-white/10">
              {ABOUT_INNOVATION.counters.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent hover:from-white/[0.1] transition-all"
                >
                  <p className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    <Counter to={item.value} start={isInView} />
                    {item.isPercent ? "%" : "+"}
                  </p>
                  <p className="text-[#DC2828] font-semibold text-xs lg:text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(220, 40, 40, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#DC2828] via-[#EA4920] to-[#F56716]
                  text-white font-bold text-base lg:text-lg rounded-xl
                  shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
                  transition-all duration-300 border border-[#DC2828]/50 hover:border-[#DC2828]
                  relative overflow-hidden group"
                onClick={() => navigate("/aboutdetail")}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;