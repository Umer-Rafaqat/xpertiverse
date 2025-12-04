import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineArrowRight } from "react-icons/hi";
import { companyContactData } from "../utils/constants/text";

const icons = {
  MdOutlineMail: <MdOutlineMail />,
  FiPhoneCall: <FiPhoneCall />,
  SlLocationPin: <SlLocationPin />,
};

const CompanyContact = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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
    <section className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black py-16 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10 backdrop-blur-sm"
          >
            <HiOutlineArrowRight className="text-lg" />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Contact </span>
            <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
              Information
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Reach out to us through any of these channels. We're here to help you succeed.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.values(companyContactData).map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20 overflow-hidden">
                
                {/* Top Gradient Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#DC2828] to-[#EA4920] flex items-center justify-center text-white text-3xl shadow-lg shadow-[#DC2828]/30"
                  >
                    {icons[item.icon]}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.heading}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-400 text-base">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Image */}
                  {item.image && (
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.heading}
                        className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}
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
      </div>
    </section>
  );
};

export default CompanyContact;