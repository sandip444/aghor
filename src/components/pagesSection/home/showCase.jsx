import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
// import videoShowCase from '../../../assets/videos/Hvideo.mp4'
import videoShowCase from "../../../assets/videos/showcase.mp4";
import styles from "../../../style";
// framer
import { motion } from "framer-motion";
import { videoHome, staggerContainer } from "../../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  //   const marqueeRef = useRef();

  useLayoutEffect(() => {
    gsap.to(".marqueeRef", {
      ScrollTrigger: {
        trigger: ".marqueeRef",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      rotate: 360,
      duration: 2,
    });
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="py-40 md:h-screen relative flex flex-col justify-center items-center text-white home-video-reflect">
        <motion.video
          variants={videoHome("ease", 0, 1.5)}
          viewport={{ once: false }}
          src={videoShowCase}
          autoPlay
          loop
          muted
          className={`${styles.maxContainerWidth} absolute`}
        />
        <Marquee
          pauseOnHover
          direction="left"
          speed={75}
          className="custom_marque overflow-hidden marqueeRef"
        >
          <h2 className=" text-3xl md:text-6xl py-16	">
            Graphic Design - Branding - Content Writing - Graphic Design-
            Branding - Content Writing - Graphic Design - Branding - Content
            Writing - Graphic Design - Branding - Content Writing -{" "}
          </h2>
        </Marquee>
        <div className="absolute h-[500px] top-[652px] backdrop-blur-[40px] reflection"></div>
      </div>
    </motion.div>
  );
};

export default ShowCase;
