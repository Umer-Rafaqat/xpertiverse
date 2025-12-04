import React from "react";
import { NEWSLETTER_CONTENT } from "../utils/constants/text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight } from "react-icons/hi";

export default function NewsletterSection() {
  const navigate = useNavigate();
  const { heading, heading1, description, buttonText } = NEWSLETTER_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } 
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
    >
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
        className="absolute top-20 left-20 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F56716]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Centered Card Container */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative p-10 lg:p-16 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden"
        >
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

          {/* Decorative Corner Gradients */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#DC2828]/10 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#F56716]/10 to-transparent rounded-3xl"></div>

          {/* Content - Centered */}
          <div className="relative z-10 text-center space-y-8">
            
            {/* Badge */}
            <motion.div 
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10 backdrop-blur-sm"
            >
              <HiSparkles className="text-lg" />
              Join Our Community
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">{heading}</span>
              <br />
              <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
                {heading1}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={textVariants}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.div
              variants={buttonVariants}
              className="flex justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(220, 40, 40, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="
                  group inline-flex items-center gap-3 
                  px-10 py-5 rounded-xl
                  bg-gradient-to-r from-[#DC2828] via-[#EA4920] to-[#F56716]
                  text-white font-bold text-lg
                  shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
                  transition-all duration-300
                  border border-[#DC2828]/50 hover:border-[#DC2828]
                  relative overflow-hidden
                "
                onClick={() => navigate("/contact")}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {buttonText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <HiArrowRight className="text-2xl" />
                  </motion.span>
                </span>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </motion.div>

            {/* Optional: Trust badges or small text */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DC2828]"></div>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DC2828]"></div>
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DC2828]"></div>
                <span>Join 10,000+ subscribers</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#DC2828]/50 to-transparent"
        />
      </div>
    </section>
  );
}