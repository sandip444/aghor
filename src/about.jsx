import React from "react";
import { Helmet } from "react-helmet";
// import AboutSecFive from './components/pagesSection/about/aboutSecFive'
import AboutSecFour from "./components/pagesSection/about/aboutSecFour";
import AboutSecOne from "./components/pagesSection/about/aboutSecOne";
import AboutSecThree from "./components/pagesSection/about/aboutSecThree";
import AboutSecTwo from "./components/pagesSection/about/aboutSecTwo";
import AboutTeamTwo from "./components/pagesSection/about/aboutTeamTwo";
import AwardSec from "./components/pagesSection/about/awardSec";
// import PostIm from "./logoo.svg";
// import {Link} from "react-router-dom"
const About = () => {
  return (
    <>
   
      <Helmet>
        <meta
          name="description"
          content="We are an award-winning no. 1 digital media agency that delivers website design, graphic design, branding, content writing, social media marketing, and more."
        />
        <title>Know More About Aghori Media House &amp; Our Skilled Team</title>
      </Helmet>
      {/* <div className="nn_log"><Link to="/" >
        <img src={PostIm} alt="logo"  />
    
    </Link></div> */}
      
      <AboutSecOne />
      <AboutSecTwo />
      <AboutSecThree />
      <AwardSec />
      <AboutSecFour />
      {/* <AboutSecFive /> */}
      <AboutTeamTwo />
    </>
  );
};

export default About;
