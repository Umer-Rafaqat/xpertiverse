import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  HiArrowLeft, 
  HiCheckCircle, 
  HiLightBulb, 
  HiCog, 
  HiChatAlt2, 
  HiQuestionMarkCircle,
  HiCurrencyDollar,
  HiMail
} from "react-icons/hi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_CONTENT.cards[id];

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#DC2828]">Service not found!</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-[#DC2828] to-[#EA4920] text-white rounded-xl font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  const { longDesc, features, benefits, tools, images, testimonials, faq, pricing } = service.details;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
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

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >

        {/* Back Button */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 px-6 py-3 
            bg-gradient-to-r from-[#DC2828] to-[#EA4920] text-white 
            border border-[#DC2828]/50 rounded-xl font-semibold
            shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
            transition-all duration-300"
        >
          <HiArrowLeft className="text-lg" />
          Back to Services
        </motion.button>

        {/* Service Header Card */}
        <motion.div 
          variants={fadeUp}
          className="mb-16 p-10 lg:p-16 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden"
        >
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

          <div className="text-center space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#DC2828] to-[#EA4920] flex items-center justify-center text-white shadow-2xl shadow-[#DC2828]/50"
            >
              {React.createElement(service.icon, { size: 48 })}
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">{service.heading1} </span>
              <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
                {service.heading2}
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              {service.desc}
            </p>

            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#DC2828] to-[#EA4920] rounded-full mx-auto my-6"></div>

            {/* Long Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
              {longDesc}
            </p>
          </div>
        </motion.div>

        {/* Images Section */}
        {images?.length > 0 && (
          <motion.div 
            variants={fadeUp}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#DC2828]/20"
                >
                  <img
                    src={img}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiLightBulb className="text-[#DC2828] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Key Features</h2>
          </div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#DC2828]/20"
              >
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#DC2828] text-2xl flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-base leading-relaxed">{feature}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#DC2828]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCheckCircle className="text-[#DC2828] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Benefits</h2>
          </div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#DC2828]/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DC2828] to-[#EA4920] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{benefit}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#DC2828]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools Section */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCog className="text-[#DC2828] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Tools & Technologies</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-6 py-3 bg-gradient-to-r from-white/[0.1] to-white/[0.05] 
                  border border-white/20 hover:border-[#DC2828]/50
                  text-white rounded-xl text-sm font-semibold
                  shadow-lg hover:shadow-[#DC2828]/30
                  transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        {testimonials?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiChatAlt2 className="text-[#DC2828] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Client Testimonials</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#DC2828]/20"
                >
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-4">"{t.feedback}"</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#DC2828] to-[#EA4920] rounded-full mb-4"></div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {faq?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiQuestionMarkCircle className="text-[#DC2828] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              {faq.map((item, idx) => (
                <motion.details
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                >
                  <summary className="font-bold text-lg cursor-pointer text-white flex items-center gap-3">
                    <span className="text-[#DC2828]">Q:</span>
                    {item.question}
                  </summary>
                  <p className="mt-4 text-gray-400 leading-relaxed pl-6">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Section */}
        {pricing?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiCurrencyDollar className="text-[#DC2828] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Pricing Plans</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-[#DC2828]/30"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{p.plan}</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#F56716] to-[#DC2828] text-transparent bg-clip-text mb-6 text-center">{p.price}</p>
                  
                  <ul className="space-y-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <HiCheckCircle className="text-[#DC2828] text-xl flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call-to-Action */}
        <motion.div 
          variants={fadeUp}
          className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our {service.title} service.
          </p>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(220, 40, 40, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl
                bg-gradient-to-r from-[#DC2828] via-[#EA4920] to-[#F56716]
                text-white font-bold text-lg
                shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
                transition-all duration-300
                border border-[#DC2828]/50 hover:border-[#DC2828]
                relative overflow-hidden group"
            >
              <HiMail className="text-2xl" />
              Contact Us for {service.title}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}