import { PERFORMANCE_TEXT } from "../utils/constants/text";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiTrendingUp } from "react-icons/hi";

export default function PerformanceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const statsVariants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const statItem = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-gray-200 py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
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
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F56716]/10 rounded-full blur-3xl"
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
        
        {/* Centered Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10 backdrop-blur-sm"
          >
            <HiTrendingUp className="text-lg" />
            Our Performance
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">
              {PERFORMANCE_TEXT.heading}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
              {PERFORMANCE_TEXT.heading1}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            {PERFORMANCE_TEXT.description}
          </p>
        </motion.div>

        {/* Stats Grid - Centered - 3 columns */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {PERFORMANCE_TEXT.stats.slice(0, 3).map((item, index) => {
            const numericValue = parseInt(item.number.replace(/\D/g, ""), 10);
            const symbol = item.number.replace(/\d/g, "");

            return (
              <motion.div
                key={index}
                variants={statItem}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Card Container */}
                <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20">
                  
                  {/* Gradient Accent Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

                  {/* Number */}
                  <div className="text-center mb-4">
                    <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      {startCount ? <CountUp end={numericValue} duration={2.5} /> : 0}
                      {symbol}
                    </h3>
                  </div>

                  {/* Label */}
                  <p className="text-[#DC2828] font-semibold text-base lg:text-lg uppercase tracking-wide text-center">
                    {item.label}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#DC2828]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#DC2828]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#DC2828]/0 via-[#DC2828]/20 to-[#DC2828]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 lg:mt-20 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#DC2828]/50 to-transparent"
        />
      </div>
    </section>
  );
}