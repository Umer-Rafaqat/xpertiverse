import React from 'react';
import { motion } from 'framer-motion';
import contactus from '../assets/images/contactus.jpg';

const Contactform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black py-16 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #DC2828 1px, transparent 1px)',
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

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-[#DC2828]/30 rounded-full text-[#DC2828] text-sm font-semibold bg-[#DC2828]/10"
              >
                Contact Us
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Get In </span>
                <span className="bg-gradient-to-r from-[#F56716] via-[#EA4920] to-[#DC2828] text-transparent bg-clip-text">
                  Touch
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Have questions about our IT solutions? Our team is ready to help 
                you with consultation, project inquiries, or technical support.
              </p>
            </div>

            {/* Form Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm shadow-xl h-full relative overflow-hidden">
              
              {/* Top Gradient Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent rounded-full"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white font-semibold block mb-2 text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl 
                        focus:outline-none focus:border-[#DC2828] focus:ring-2 focus:ring-[#DC2828]/20
                        transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold block mb-2 text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl 
                        focus:outline-none focus:border-[#DC2828] focus:ring-2 focus:ring-[#DC2828]/20
                        transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white font-semibold block mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl 
                        focus:outline-none focus:border-[#DC2828] focus:ring-2 focus:ring-[#DC2828]/20
                        transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold block mb-2 text-sm">
                      Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl 
                        focus:outline-none focus:border-[#DC2828] focus:ring-2 focus:ring-[#DC2828]/20
                        transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-white font-semibold block mb-2 text-sm">
                    Your Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows="5"
                    className="w-full bg-white/[0.05] border border-white/10 text-white px-4 py-3 rounded-xl 
                      focus:outline-none focus:border-[#DC2828] focus:ring-2 focus:ring-[#DC2828]/20
                      transition-all duration-300 placeholder:text-gray-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl
                    bg-gradient-to-r from-[#DC2828] via-[#EA4920] to-[#F56716]
                    text-white font-bold text-base
                    shadow-lg shadow-[#DC2828]/30 hover:shadow-2xl hover:shadow-[#DC2828]/50
                    transition-all duration-300
                    border border-[#DC2828]/50 hover:border-[#DC2828]"
                >
                  Send Message →
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-full min-h-[600px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-[#DC2828]/50 transition-all duration-300 shadow-2xl">
              <img
                src={contactus}
                alt="Contact Us"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
                <p className="text-gray-200">We're excited to hear from you!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;