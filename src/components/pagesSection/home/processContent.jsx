import React from "react";
import styles from "../../../style";
import ReadMoreBtn from "../../readMoreBtn";
import { Link } from "react-router-dom";
// import ReadMoreBtn from '../../../assets/images/readmore-text.svg'
const ProcessContent = () => {
  return (
    <>
      <div className="flex h-full py-10 px-6  text-white z-[100]">
        <div
          className={`${styles.maxContainerWidth}  mx-auto flex flex-col md:h-[70vh] justify-between`}
        >
          <p className="text-2xl md:text-4xl">
            We offer effective digital marketing solutions, catering to your
            need for branding, graphic designing, web development, content
            writing, and social media management. We prioritize in creating
            awareness that peaks the reach of your brand.
          </p>
          <div className=" block sm:flex py-10 gap-x-20 items-center">
            <Link
              to="/about"
              className=" w-full md:w-[25%] flex md:justify-center pb-5"
            >
              <ReadMoreBtn />
            </Link>
            <div className="text-white-custom w-full sm:w-[75%] sm:pl-40">
              <p>
                Our artists hold tireless brainstorming sessions, to produce
                creative ideas that serve you better.Our diligent workforce also
                resolves your woes concerning Ad films, corporate gifts, public
                relations, event management, and corporate service. Emphasizing
                a value-driven and client-centric approach, we ensure
                originality and transparency in our projects. We work on the
                foundation of strong work ethics that allows us to deliver
                quality output for our clients. We seek pleasure in this play of
                creativity. Delivering an output that accurately syncs with the
                idea of the client, gives us real joy.
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
