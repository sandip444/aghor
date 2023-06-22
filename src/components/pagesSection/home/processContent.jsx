import React from "react";
import styles from "../../../style";
import ReadMoreBtn from "../../readMoreBtn";
import { Link } from "react-router-dom";
// import ReadMoreBtn from '../../../assets/images/readmore-text.svg'
const ProcessContent = () => {
  const handleRedirect = (e) => {
    e.preventDefault();
    window.location.href = '/expertis'; // Replace with your desired URL
  };
  return (
    <>
      <div className="flex h-full py-10 px-6  text-white z-[100]">
        <div
          className={`${styles.maxContainerWidth}  mx-auto flex flex-col md:h-[70vh] justify-between`}
        >
          <p className="text-2xl md:text-4xl">
          Our relentless pursuit of excellence and our unwavering commitment to artistic integrity set us apart in the industry. With a seamless fusion of cutting-edge technology and a deep understanding of human emotions, we craft immersive brand experiences that leave a lasting impression. 
          </p>
          <div className=" block sm:flex py-10 gap-x-20 items-center">
            <Link
              to="#" onClick={handleRedirect}
              className=" w-full md:w-[25%] flex md:justify-center pb-5"
            >
              <ReadMoreBtn />
            </Link>
            <div className="text-white-custom w-full sm:w-[75%] sm:pl-40">
              <p>
              Our team of visionary artisans, strategists, and storytellers possesses an uncanny ability to unravel the essence of a brand, infusing it with an electric energy that sparks curiosity and captivates hearts.
              </p>
              <hr className="mt-6"></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessContent;
