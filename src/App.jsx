import React from "react";
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

function App() {
  return (
    <Router basename="/xpertiverse">
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
  );
}

export default App;
