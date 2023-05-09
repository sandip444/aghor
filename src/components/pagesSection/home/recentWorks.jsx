import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReadMoreBtn from "../../readMoreBtn";
import Aos from "aos";
import "aos/dist/aos.css";

const RecentWorks = () => {
  // Aos
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 500,
      easing: "linear",
    });
  }, []);

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-10 md:py-20 px-6 md:px-16 z-[100]">
        <h2 className="text-4xl md:text-8xl text-white md:text-center font-semibold md:mt-[80px] md:my-20 my-10">
          Recent Works
        </h2>

        {/* grid section start */}
        <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-7 auto-rows-auto ">
          {/* grid box start*/}
          <div
            className="block md:row-start-[1] md:row-end-[6] md:col-start-2 col-span-2"
            // data-aos="fade-up"
          >
            {/* work card start */}
            <div className="max-w-[500px] w-full">
              <div className="w-full mx-auto  recent_cursor">
                <img
                  src={require("../../../assets/images/work-1.webp")}
                  alt="work-1"
                  className="w-full h-full"
                />
                <div className="py-4">
                  <h3 className="text-2xl md:text-4xl py-2">Rupiya</h3>
                  <h4 className="flex justify-between text-slate-300">
                    <span className="w-[90%]">
                      Rebranding / Product Design / Digital Media / UI/UX Design
                      / Website
                    </span>
                    <span className="w-[10%]  ml-4 md:ml-0">2022</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* work card end */}
          </div>
          {/* grid box end*/}

          {/* grid box start*/}
          <div
            className="block md:row-start-[10] md:row-end-[16] md:col-start-1 col-span-2"
            // data-aos="fade-up"
          >
            {/* work card start */}
            <div className="max-w-[500px] w-full">
              <div className="w-full mx-auto  recent_cursor">
                <img
                  src={require("../../../assets/images/work-2.webp")}
                  alt="work-1"
                  className="w-full h-full"
                />
                <div className="py-4">
                  <h3 className="text-2xl md:text-4xl py-2">Mitticool</h3>
                  <h4 className="flex justify-between text-slate-300">
                    <span className="w-[90%]">
                      Branding / Packaging / Social Media / Website
                    </span>
                    <span className="w-[10%]  ml-4 md:ml-0">2018</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* work card end */}
          </div>
          {/* grid box end*/}

          {/* grid box start*/}
          <div
            className="block md:row-start-[14] md:row-end-[20] md:col-start-3 col-span-2"
            // data-aos="fade-up"
          >
            {/* work card start */}
            <div className="max-w-[500px] w-full">
              <div className="w-full mx-auto  recent_cursor">
                <img
                  src={require("../../../assets/images/work-3.webp")}
                  alt="work-1"
                  className="w-full h-full"
                />
                <div className="py-4">
                  <h3 className="text-2xl md:text-4xl py-2">Siddha </h3>
                  <h4 className="flex justify-between text-slate-300">
                    <span className="w-[90%]">
                      Branding / Campaigns / Digital / Lead Generation{" "}
                    </span>
                    <span className="w-[10%]  ml-4 md:ml-0">2019</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* work card end */}
          </div>
          {/* grid box end*/}

          {/* grid box start*/}
          <div
            className="block md:row-start-[18] md:row-end-[24] md:col-start-1 col-span-2"
            // data-aos="fade-up"
          >
            {/* work card start */}
            <div className="max-w-[500px] w-full">
              <div className="w-full mx-auto  recent_cursor">
                <img
                  src={require("../../../assets/images/work-4.webp")}
                  alt="work-1"
                  className="w-full h-full"
                />
                <div className="py-4">
                  <h3 className="text-2xl md:text-4xl py-2">Guru Randhawa </h3>
                  <h4 className="flex justify-between text-slate-300">
                    <span className="w-[90%]">
                      Branding / Social Media / Event Design / Packaging / Print
                      Production / Concept
                    </span>
                    <span className="w-[10%]  ml-4 md:ml-0">2017</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* work card end */}
          </div>
          {/* grid box end*/}

          {/* grid box start*/}
          <div className="block md:row-start-[20] md:row-end-[26] md:col-start-3 col-span-2">
            {/* work card start */}
            <div className="max-w-[500px] h-full w-full flex md:justify-center items-center">
              <Link to="/portfolio">
                <ReadMoreBtn />
              </Link>
            </div>
            {/* work card end */}
          </div>
          {/* grid box end*/}
        </div>
        {/* grid section end */}
      </div>
    </>
  );
};

export default RecentWorks;
