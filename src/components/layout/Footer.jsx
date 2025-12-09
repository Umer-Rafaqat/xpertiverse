import React from "react";
import { FOOTER_CONTENT } from "../../utils/constants/text";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function FooterSection() {
  const { logo, tagline, description, copyright, navigation, quickLinks, policies } =
    FOOTER_CONTENT;

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll or navigate logic
  const handleNavigation = (id) => {
    if (id === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #DC2828 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Top Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
            
            {/* Company Info */}
            <motion.div variants={item} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🔗</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F56716] to-[#DC2828] bg-clip-text text-transparent">
                  {logo}
                </h3>
              </div>
              <p className="text-xl font-semibold text-gray-300 mb-4">{tagline}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaTwitter, link: "#" },
                  { icon: FaLinkedinIn, link: "#" },
                  { icon: FaInstagram, link: "#" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#DC2828]/10 border border-[#DC2828]/30 
                      flex items-center justify-center hover:bg-[#DC2828] hover:border-[#DC2828] 
                      transition-all duration-300 group"
                  >
                    <social.icon className="text-[#DC2828] group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Navigation
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#DC2828] to-transparent"></span>
              </h4>
              <ul className="space-y-3">
                {navigation.map((navItem, index) => {
                  let id = navItem.toLowerCase().replace(" ", "");
                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleNavigation(id)}
                        className="text-gray-400 hover:text-[#DC2828] transition-colors duration-300 
                          hover:translate-x-2 transform inline-block"
                      >
                        → {navItem}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#DC2828] to-transparent"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((quickLink, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation("contact")}
                      className="text-gray-400 hover:text-[#DC2828] transition-colors duration-300 
                        hover:translate-x-2 transform inline-block"
                    >
                      → {quickLink}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#DC2828] to-transparent"></span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-400">
                  <HiMail className="text-[#DC2828] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@company.com" className="hover:text-[#DC2828] transition-colors">
                      info@company.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <HiPhone className="text-[#DC2828] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-[#DC2828] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <HiLocationMarker className="text-[#DC2828] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <motion.div 
            variants={item}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              {copyright}
            </p>

            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {policies.map((policy, index) => (
                <button
                  key={index}
                  className="text-gray-400 hover:text-[#DC2828] transition-colors duration-300"
                >
                  {policy}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#DC2828] to-transparent"></div>
    </motion.footer>
  );
}