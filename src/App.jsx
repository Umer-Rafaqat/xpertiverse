import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import AboutDetail from "./components/AboutDetail";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import AllTeam from "./components/AllTeam.jsx";
import ServiceDetail from "./components/ServiceDetail";
import ContactUs from "./pages/ContactUs.jsx";
import Footer from "./components/layout/Footer.jsx";
import Logo from "./assets/images/logo1.png";

// Modern Red & Black Loader Component
const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(220, 40, 40, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(220, 40, 40, 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Geometric Loader */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer rotating square */}
          <div className="absolute inset-0 border-2 border-[#DC2828]/30 rotate-45 animate-spin-slow"></div>

          {/* Middle rotating square */}
          <div className="absolute inset-3 border-2 border-[#DC2828]/60 rotate-45 animate-spin-reverse"></div>

          {/* Inner pulsing circle */}
          <div className="absolute inset-6 bg-gradient-to-br from-[#DC2828] to-red-700 rounded-full animate-pulse"></div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Loading
          </h2>

          {/* Animated Dots */}
          <div className="flex items-center justify-center space-x-2">
            <div
              className="w-2 h-2 bg-[#DC2828] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#DC2828] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#DC2828] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          <p className="text-gray-400 text-sm">Xpertiverse</p>
        </div>

        {/* Bottom Line Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900/50 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-[#DC2828] to-transparent animate-slide-line"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(-315deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes slide-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-slide-line {
          animation: slide-line 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing content slightly before loader finishes
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2400);

    // Hide loader
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {loading && <Loader />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutdetail" element={<AboutDetail />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/all-team-members" element={<AllTeam />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
