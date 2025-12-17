import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standard imports for layout (keeps them ready immediately)
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// LAZY LOADING: Pages are only loaded when the user navigates to them
const Home = lazy(() => import("./pages/Home.jsx"));
const AboutDetail = lazy(() => import("./components/AboutDetail"));
const ProjectsPage = lazy(() => import("./components/ProjectsPage.jsx"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail.jsx"));
const AllTeam = lazy(() => import("./components/AllTeam.jsx"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));

/* =====================
   Loader Component (Optimized)
===================== */
const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out slightly before the parent unmounts it
    const timer = setTimeout(() => setFadeOut(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(220, 40, 40, 0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(220, 40, 40, 0.15) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-2 border-[#DC2828]/40 rotate-45 animate-spin-slow" />
          <div className="absolute inset-3 border-2 border-[#DC2828]/70 rotate-45 animate-spin-reverse" />
          <div className="absolute inset-6 bg-[#DC2828] rounded-full animate-pulse" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Loading</h2>
          <p className="text-gray-400 text-sm">Xpertiverse</p>
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
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

/* =====================
   App Component
===================== */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Matches the internal Loader fade-out timing
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show loader on top of everything until timer finishes */}
      {loading && <Loader />}

      <Header />
      <ScrollToTop />

      {/* Suspense handles the "blank" moment while a lazy-loaded page is being fetched */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutdetail" element={<AboutDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/all-team-members" element={<AllTeam />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
