import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { TESTIMONIALS_CONTENT } from "../utils/constants/text";

export default function TestimonialsSection() {
  const { sectionTag, heading, heading1, testimonials } = TESTIMONIALS_CONTENT;

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(350);
  const [offset, setOffset] = useState(0);
  const gap = 24;

  // ---------- Calculate Perfect Card Width ----------
  useEffect(() => {
    const updateSizes = () => {
      const screen = window.innerWidth;

      let count = 3;
      if (screen < 480) count = 1;
      else if (screen < 768) count = 1;
      else if (screen < 1024) count = 2;
      else if (screen < 1440) count = 3;
      else count = 4;

      setVisibleCards(count);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalGaps = gap * (count - 1);
        const width = (containerWidth - totalGaps) / count;
        setCardWidth(width);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const loopedTestimonials = [...testimonials, ...testimonials];

  // ---------- Auto Sliding ----------
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      let newOffset = offset + cardWidth + gap;
      if (newOffset >= (cardWidth + gap) * testimonials.length) {
        newOffset = 0;
        slider.style.transition = "none";
      } else {
        slider.style.transition = "transform 0.5s ease";
      }

      slider.style.transform = `translateX(-${newOffset}px)`;
      setOffset(newOffset);
    }, 4000);

    return () => clearInterval(interval);
  }, [offset, cardWidth, gap, testimonials.length]);

  // ---------- Manual Slide ----------
  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let newOffset = offset;

    if (direction === "left") {
      newOffset -= cardWidth + gap;
      if (newOffset < 0) {
        newOffset = (testimonials.length - 1) * (cardWidth + gap);
      }
    } else {
      newOffset += cardWidth + gap;
      if (newOffset >= (cardWidth + gap) * testimonials.length) {
        newOffset = 0;
      }
    }

    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${newOffset}px)`;
    setOffset(newOffset);
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DC2828]/10 rounded-full blur-3xl"
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
            <HiStar className="text-lg" />
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

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => moveSlider("left")}
            className="absolute top-1/2 -left-4 lg:-left-6 transform -translate-y-1/2 bg-gradient-to-r from-[#DC2828] to-[#EA4920] hover:shadow-2xl hover:shadow-[#DC2828]/50 p-4 rounded-full text-white z-20 shadow-lg transition-all duration-300 border border-[#DC2828]/50"
          >
            <FaArrowLeft className="text-lg" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => moveSlider("right")}
            className="absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 bg-gradient-to-r from-[#DC2828] to-[#EA4920] hover:shadow-2xl hover:shadow-[#DC2828]/50 p-4 rounded-full text-white z-20 shadow-lg transition-all duration-300 border border-[#DC2828]/50"
          >
            <FaArrowRight className="text-lg" />
          </motion.button>

          {/* Slider */}
          <div className="w-full overflow-hidden" ref={containerRef}>
            <div ref={sliderRef} className="flex" style={{ gap: `${gap}px` }}>
              {loopedTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 flex-none flex flex-col bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20 p-8 relative overflow-hidden group"
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Top Gradient Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FaQuoteLeft className="text-6xl text-[#DC2828]" />
                  </div>

                  {/* Star Ratings - Top */}
                  <div className="flex space-x-1 mb-6">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <HiStar 
                        key={idx} 
                        className={`text-2xl ${idx < (t.rating || 5) ? "text-[#DC2828]" : "text-gray-600"}`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 text-base leading-relaxed flex-1 relative z-10">
                    "{t.text}"
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#DC2828] to-[#EA4920] rounded-full mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {t.image && (
                      <div className="relative">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#DC2828]/30"
                        />
                        {/* Ring effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#DC2828]/50 animate-ping"></div>
                      </div>
                    )}
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{t.name}</h3>
                      <p className="text-[#DC2828] text-sm font-semibold">{t.role}</p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#DC2828]/10 to-transparent rounded-2xl opacity-0  transition-opacity duration-300"></div>

                  {/* Outer Glow on Hover */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#DC2828]/0 via-[#DC2828]/20 to-[#DC2828]/0 opacity-0  blur-xl transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#DC2828]/50 to-transparent"
        />
      </div>
    </section>
  );
}