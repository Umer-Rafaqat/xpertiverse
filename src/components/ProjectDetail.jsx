import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiStar, HiChip } from "react-icons/hi";
import { projectsData } from "../utils/constants/projectsdata";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project not found!</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-[#DC2828] to-[#EA4920] text-white rounded-xl font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black min-h-screen relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto text-white relative z-10">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 px-6 py-3 
            bg-gradient-to-r from-[#DC2828] to-[#EA4920] text-white 
            border border-[#DC2828]/50 rounded-xl font-semibold
            shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
            transition-all duration-300"
        >
          <HiArrowLeft className="text-lg" />
          Back to Projects
        </motion.button>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl"
        >
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

          {/* Main Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Tag Badge on Image */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-[#DC2828]/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">
              {project.tag}
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="p-8 lg:p-12">
            
            {/* Title & Rating */}
            <div className="text-center mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              >
                <span className="text-white">{project.heading} </span>
                <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
                  {project.heading1}
                </span>
              </motion.h1>

              {/* Rating Stars */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center gap-1 mb-6"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <HiStar
                    key={idx}
                    className={`text-3xl ${
                      idx < project.rating ? "text-[#DC2828]" : "text-gray-600"
                    }`}
                  />
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-10"
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                {project.desc}
              </p>
            </motion.div>

            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#DC2828] to-[#EA4920] rounded-full mx-auto mb-10"></div>

            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <HiChip className="text-[#DC2828] text-2xl" />
                <h3 className="text-2xl font-bold text-white">Technologies Used</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (idx * 0.05) }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-white/[0.1] to-white/[0.05] 
                      border border-white/20 hover:border-[#DC2828]/50
                      text-white rounded-xl text-sm font-semibold
                      shadow-lg hover:shadow-[#DC2828]/30
                      transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  Project Gallery
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20"
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Bottom Gradient Accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#DC2828]/50 to-transparent"
        />
      </div>
    </section>
  );
};

export default ProjectDetail;