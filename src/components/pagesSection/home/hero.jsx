import React from "react";
import baba from "../../../assets/images/WE_AGHORI_01.png";
import { motion } from "framer-motion";
import HeroAnimatedText from "./heroAnimatedtext";
const Hero = () => {
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "h1", text: "Aghori Media House ®"},
    { type: "h1", text: "Emboldening and Empowering 'Brands'"}
    // { type: "h1", text: "Aghori Media House ®"},
    // { type: "h1", text: "Emboldening and Empowering 'Brands'"}
    // { type: "span1", text: "Aghori Media Team ®" },
    // { type: "span2", text: "Digital Design" },
    // { type: "span3", text: "Boutique with Focus" },
    // { type: "span4", text: "on Aesthetics" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const paragraphText = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
      },
    },
    hidden: {
      y: -200,
      opacity: 0,
    },
  };

  const variantsBaba = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
        delay: 0.5,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  return (
    <>
      <div className="max-w-[90%] mx-auto lg:px-4 text-white md:flex h-full pt-[90px]">
        <div className="w-full mt-[2%] md:w-[50%] md:h-[75vh] h-[80vh] flex flex-col justify-between gap-[10px]">
          {/* <motion.h1 className='text-3xl md:text-6xl'>
                        <span>Advanced Team ®</span><br />
                        <span>Digital Design</span><br />
                        <span>Boutique with Focus</span><br />
                        <span>on Aesthetics</span><br />
                    </motion.h1> */}

          <motion.div
            initial="hidden"
            // animate="visible"
            // animate={replay ? "visible" : "hidden"}
            animate="visible"
            variants={container}
            className="lg:mt-[-70px] md:mt-[-30px] mt-0"
          >
            <div className="home-banner-content md:mt-[10px] lg:min-w-[600px] max-w-full text-left">
              {placeholderText.map((item, index) => {
                return <HeroAnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>

          <motion.div
            variants={paragraphText}
            initial="hidden"
            animate="visible"
            className="ml-auto mr-0"
          >
            <p>
              We at Aghori Media House are a tight-knit group of open-minded
              individuals who are determined to bring the best to the table. Our
              goal is to present the best services that a brand would require.
              From graphic design to website development, from branding to
              content writing and we have so much more to offer.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-28 z-[-1] lg:invisible md:invisible sm:visible">
          <img src={baba} alt="baba" className="md:w-[70%]" />
        </div>
        <motion.div
          variants={variantsBaba}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[50%] flex justify-center items-center md:relative absolute md:top-[20%] md:visible invisible sm:top-0s left-0 z-[-1]"
        >
          <img src={baba} alt="baba" className="md:w-[70%]" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
