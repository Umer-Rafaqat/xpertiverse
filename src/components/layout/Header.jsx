import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo1.png";
import { HEADER_CONTENT } from "../../utils/constants/text";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { logo, tagline, mainMenu, buttonText } = HEADER_CONTENT;

  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll or redirect logic
  const handleNavigation = (id) => {
    if (id === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      // Go to homepage, then scroll after loading
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      // Already on homepage → scroll directly
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }

    setMobileMenu(false);
  };

  // Close mobile on outside click
  useEffect(() => {
    const handler = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-black px-4 sm:px-6 lg:px-20 text-white fixed top-0 left-0 z-50 shadow-lg"
    >
      <nav className="container max-w-7xl mx-auto flex justify-between items-center py-4">

        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src={Logo} className="w-20 h-12 object-contain" />
          <div>
            <h2 className="text-3xl font-semibold">{logo}</h2>
            <p className="text-xs text-[#DC2828]">{tagline}</p>
          </div>
        </div>

      {/* Desktop Menu */}
<ul className="hidden lg:flex items-center gap-8 text-sm">
  {mainMenu.map((item, i) => (
    <li
      key={i}
      className="cursor-pointer nav-underline"
      onClick={() => handleNavigation(item.id)}
    >
      {item.label}
    </li>
  ))}
</ul>


        {/* Desktop Button → always go to contact page */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden lg:flex px-6 py-2 rounded-lg bg-[#DC2828]
                text-white hover:bg-transparent border border-[#DC2828] hover:text-[#DC2828]  hover:cursor-pointer
                transition font-medium shadow-md"
        >
          {buttonText}
        </button>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-[#DC2828] text-2xl" onClick={() => setMobileMenu(true)}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: mobileMenu ? 0 : 500, opacity: mobileMenu ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#080F20] z-50 shadow-lg px-6 py-4"
      >
        <div className="flex justify-end mb-6">
          <FaTimes size={22} className="cursor-pointer text-[#DC2828]" onClick={() => setMobileMenu(false)} />
        </div>

        <ul className="flex flex-col gap-5 text-md">
          {mainMenu.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-[#DC2828]"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </li>
          ))}

          {/* Mobile Button → navigate to contact page */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 px-5 py-2 rounded-lg bg-[#DC2828] text-white 
                font-medium shadow-md hover:opacity-90 transition"
          >
            {buttonText}
          </button>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
