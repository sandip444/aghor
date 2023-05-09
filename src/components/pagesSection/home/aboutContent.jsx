import React from "react";
import ReadMoreBtn from "../../readMoreBtn";
import { Link } from "react-router-dom";
import styles from "../../../style";
// import ReadMoreBtn from '../../../assets/images/readmore-text.svg'
const AboutContent = () => {
  return (
    <>
      <div className="flex h-full py-10 px-6  text-white  z-[100]">
        <div
          className={`${styles.maxContainerWidth}  mx-auto flex flex-col md:h-[80vh] justify-between`}
        >
          <p className="text-3xl md:text-6xl z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            perspiciatis, debitis blanditiis quam ullam aut repellendus, ipsam
            expedita voluptatem ipsum nisi ea natus quis itaque consequatur modi
            explicabo.
          </p>
          <div className=" block sm:flex py-10 gap-x-20 items-center">
            <Link
              to="../../../about"
              className=" w-full md:w-[25%] flex md:justify-center pb-5"
            >
              <ReadMoreBtn />
            </Link>

            <div className="text-white-custom w-full sm:w-[75%] sm:pl-40">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus repudiandae eum accusantium nulla animi possimus,
                exercitationem unde harum explicabo quo quisquam fugiat hic.
                Quia, tempora?
              </p>
              <hr className="mt-6"></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
