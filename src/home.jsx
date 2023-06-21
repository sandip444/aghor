import React from "react";
import AboutContent from "./components/pagesSection/home/aboutContent";
import Ethics from "./components/pagesSection/home/Ethics";
import Hero from "./components/pagesSection/home/hero";
import HomeContact from "./components/pagesSection/home/homeContact";
import OurServices from "./components/pagesSection/home/ourServices";
import ProcessContent from "./components/pagesSection/home/processContent";
import RecentWorks from "./components/pagesSection/home/recentWorks";
import ShowCase from "./components/pagesSection/home/showCase";
import TestimonialSec from "./components/pagesSection/home/tesimonialSec";
import "./index.css"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-[10vh]"></div>
      <ShowCase />
      <AboutContent />
      <OurServices />
      <ProcessContent />
      <RecentWorks />
      <Ethics />
      <TestimonialSec />
      <HomeContact />
    </>
  );
};

export default Home;
