import React, { useEffect } from "react";
// import styles from '../../../style.js'
import { Link } from "react-router-dom";
import portfolioData from "../portfolio/portfolioData";
import Aos from "aos";
import "aos/dist/aos.css";

const PortfolioMain = () => {
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
      <div className={`max-w-[960px] text-white mx-auto px-6 py-16`}>
        {/* Heading */}
        <div
          className="py-12"
          data-aos="fade-down"
          data-aos-delay="900"
          data-aos-duration="1500"
        >
          <h2 className="text-4xl sm:text-7xl text-white">
            In work we dream,
            <br className="hidden sm:block" />
            In dreams we work!
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div>
          <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-x-16 gap-y-10 auto-rows-auto ">
            {portfolioData.map(
              ({ id, PortTitle, PortWork, PortDate, PortImg, PortStyle }) => (
                <div
                  key={id}
                  className={`w-full block ${PortStyle}`}
                  data-aos="fade-up"
                >
                  <Link to="/single-portfolio">
                    <div className=" ">
                      {/* work card start */}
                      <div className="w-full md:max-w-[100%] mx-auto">
                        <div className="w-full ml-0 mr-auto py-10 md:py-2 recent_cursor">
                          <img
                            src={PortImg}
                            alt="work-2"
                            className="w-full h-full"
                          />
                          <div className="py-4">
                            <h3 className="text-4xl py-2">Yes {PortTitle}</h3>
                            <h4 className="flex justify-between text-slate-300">
                              <span className="w-[90%]">{PortWork}</span>
                              <span className="w-[10%]  ml-4 md:ml-0">
                                {PortDate}
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* work card end */}
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioMain;
