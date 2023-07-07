import React from "react";
import Marquee from "react-fast-marquee";
import styles from "../../../style";
import ImgServicesData from "./imgServicesData";
// framer
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../../../utils/motion";

const OurServices = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="w-full  md:h-[70vh] flex flex-col justify-center  text-white relative">
        {/* service list  start*/}
        <div className="text-white z-10 w-full md:py-20 py-[30px]">
          <div
            className={`${styles.maxContainerWidth} mx-auto px-6 md:px-0 trans`}
          >
            <h2>Our Expertis:</h2>
            <ul className="font-semibold font-mono lg:pl-0 pl-[15px]">
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                <span className="font-extralight">Graphic</span> Design
              </li>
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">Branding</li>
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                <span className="font-extralight">Content</span> creation
              </li>
              
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                <span className="font-extralight">Social</span> Media Marketing
              </li>
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                <span className="font-extralight">Digital</span> Media Marketing
              </li>
              <li className="text-[24px] lg:text-[40px] 2xl:text-7xl">
                <span className="font-extralight">Web</span> Development
              </li>
            </ul>
          </div>
        </div>
        {/* service list  end*/}

        {/* Image slider start*/}
        <motion.div
          variants={slideIn("down", "ease", 0, 0.5)}
          className="w-full absolute z-1"
          viewport={{ once: false }}
        >
          <Marquee direction="left" speed={60} className="custom_marque">
            {ImgServicesData.map(({ id, imgSrc }) => (
              <div key={id} className="mx-3">
                <img src={imgSrc} alt="img" className="w-[70%] sm:w-[180%]" />
              </div>
            ))}
          </Marquee>
        </motion.div>
        {/* Image slider End*/}
      </div>
    </motion.div>
  );
};

export default OurServices;
