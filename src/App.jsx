import React from "react";
// import Navbar from "./components/Navbar";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Portfolio from "./portfolio";
import JoinTeamForm from "./joinTeamForm";
import Error from "./error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTwo from "./components/NavbarTwo";
import Services from "./services";
import GoToTop from "./components/GoToTop";
import Footer from "./components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import OnPageChange from "./components/OnPageChange";
import TermsAndConditions from "./TermsAndConditions";
import Blogs from "./Blogs";
import SinglePost from "./components/pagesSection/blogs/post/SinglePost";
// Blogs
import ContentWritingBlog from "./components/pagesSection/blogs/post/ContentWritingBlog";
import LeadGenerationBlog from "./components/pagesSection/blogs/post/LeadGenerationBlog";
import SinglePortfolio from "./components/pagesSection/portfolio/Hearmo";
import GraphicDesigning from "./components/pagesSection/services/GraphicDesigning";
import Branding from "./components/pagesSection/services/Branding";
import WebDevelopment from "./components/pagesSection/services/WebDevelopment";
import SocialMedia from "./components/pagesSection/services/SocialMedia";
import ContentWriting from "./components/pagesSection/services/ContentWriting";
import DigitalMedia from "./components/pagesSection/services/DigitalMedia";
// Protfolios
import Mitticool from "./components/pagesSection/portfolio/Mitticool";
import Mmpl from "./components/pagesSection/portfolio/Mmpl";
import Hearmo from "./components/pagesSection/portfolio/Hearmo";
import Siddha from "./components/pagesSection/portfolio/Siddha";
import GuruRandhawa from "./components/pagesSection/portfolio/GuruRandhawa";
import { Helmet } from "react-helmet";
// Fluid Cursur
// Parallax
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  // on Back Page Reload
  window.addEventListener("popstate", (event) => {
    window.location.reload();
    window.location.reload();
  });

  return (
    <ParallaxProvider>
      <div className="">
        <Helmet>
          <title>
            Digital Marketing Agency &amp; Company In Mumbai |Aghori Media House
          </title>
          <meta
            name="description"
            content="Aghori Media House is a leading digital marketing agency having professional expertise in branding, marketing, website development services and social media.
        "
          />
        </Helmet>

        <BrowserRouter>
          <OnPageChange />
          {/* <NavbarTwo /> */}
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home className="home" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/joinTeamForm" element={<JoinTeamForm />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* Blogs */}
            <Route
              path="/blogs/benefits-of-content-writing"
              element={<ContentWritingBlog />}
            />
            <Route
              path="/blogs/Lead-Generation"
              element={<LeadGenerationBlog />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndConditions />}
            />
            <Route path="/single-post" element={<SinglePost />} />
            {/* Portfolios */}
            <Route path="/single-portfolio" element={<SinglePortfolio />} />
            <Route path="/portfolio/mitticool" element={<Mitticool />} />
            <Route path="/portfolio/mmpl" element={<Mmpl />} />
            <Route path="/portfolio/hearmo" element={<Hearmo />} />
            <Route path="/portfolio/siddha" element={<Siddha />} />
            <Route path="/portfolio/guru-randhawa" element={<GuruRandhawa />} />
            {/* Services */}
            <Route
              path="/services/graphic-designing"
              element={<GraphicDesigning />}
            />
            <Route path="/services/branding" element={<Branding />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route
              path="/services/content-writing"
              element={<ContentWriting />}
            />
            <Route path="/services/digital-media" element={<DigitalMedia />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <GoToTop />
          <Footer />
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
