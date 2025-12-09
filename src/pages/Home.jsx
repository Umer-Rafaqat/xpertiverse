import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutUs from "../components/AboutUs.jsx";
import PerformanceSection from "../components/PerformanceSection";
import Services from "../components/ServicesSection";
import Testimonial from "../components/TestimonialSection";
import Team from "../components/TeamSection";
import WorkingTechnologies from "../components/WorkingTechnologies.jsx";
import Newsletter from "../components/NewsletterSection";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Performance Section */}
      <section id="performance">
        <PerformanceSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonial />
      </section>

      {/* Team Section */}
      <section id="team">
        <Team />
      </section>

      {/* Portfolio / Working Technologies Section */}
      <section id="portfolio">
        <WorkingTechnologies />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Newsletter />
      </section>
    </>
  );
}

export default Home;
