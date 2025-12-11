import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgVideo from "../assets/videos/bg2.mp4";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-24 flex items-center justify-center text-white relative overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ✅ Background Video (FULLY VISIBLE NOW) */}
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🎨 Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* ✔ Subtle diagonal lines */}
        {/* <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 1px,
              transparent 1px,
              transparent 35px
            )`,
            backgroundSize: "300px 300px",
          }}
          animate={{ backgroundPosition: ["0 0", "300px 300px"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        /> */}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Badge */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#FF7043] mb-5 text-base font-semibold border border-white/20 
                     rounded-full px-5 py-2 inline-block backdrop-blur-sm bg-black/40 
                     shadow-md tracking-wider uppercase"
        >
          {HERO_CONTENT.badge}
        </motion.p>

        {/* Heading 1 */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white 
                     leading-tight mb-2"
        >
          {HERO_CONTENT.heading1}
        </motion.h1>

        {/* Heading 2 */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 
                     bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] 
                     bg-clip-text text-transparent leading-tight"
        >
          {HERO_CONTENT.heading2}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-200 text-xl mb-10 max-w-3xl mx-auto font-light"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/contact"
            className="bg-[#E53935] text-white px-10 py-4 rounded-lg text-lg font-semibold 
                       shadow-lg shadow-[#E53935]/40 transition-all duration-300 
                       hover:scale-[1.03] hover:shadow-xl hover:shadow-[#E53935]/60"
          >
            {HERO_CONTENT.buttons.primary}
          </Link>

          <Link
            to="/aboutdetail"
            className="border-2 border-[#E53935] text-[#E53935] 
                       px-10 py-4 rounded-lg text-lg font-semibold 
                       transition-all duration-300 backdrop-blur-sm bg-black/40
                       hover:bg-[#E53935] hover:text-white hover:shadow-lg hover:shadow-[#E53935]/60"
          >
            {HERO_CONTENT.buttons.secondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
