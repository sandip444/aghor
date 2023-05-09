import React from "react";
import { motion } from "framer-motion";
const ReadMoreBtn = () => {
  return (
    <>
      {/* Read more button start */}
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        whileHover={{ scale: 1.1 }}
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] z-[999]  flex justify-center items-center rounded-full absolute z-10 readMoreBtn"
      >
        <svg
          width="30"
          height="40"
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="readMoreSvg"
            d="M15 40C15 40 15 18.9683 15 -9.53674e-07M15 -9.53674e-07C15 13.7026 1 16.2319 1 16.2319M15 -9.53674e-07C15 13.7026 29 16.2319 29 16.2319"
            stroke="white"
            strokeWidth="2"
          ></path>
        </svg>
      </motion.div>
      {/* Read more button end */}
    </>
  );
};

export default ReadMoreBtn;
