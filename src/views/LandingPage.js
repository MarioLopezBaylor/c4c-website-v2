/**
 * @TODO Extract strings from this page into resource file
 */

import React from "react";

// core components
import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

// sections
import AboutSection from "./Sections/AboutSection";
import TeamSection from "./Sections/TeamSection";
import ContactSection from "./Sections/ContactSection";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <AboutSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
