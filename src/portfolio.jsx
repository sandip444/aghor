// import React from 'react'
// import PortfolioMain from './components/pagesSection/portfolio/portfolioMain'
import React, { useEffect } from "react";
// import styles from '../../../style.js'
import { Link ,useNavigate} from "react-router-dom";
// import portfolioData from './'
import portfolioData from "./components/pagesSection/portfolio/portfolioData";
import Aos from "aos";
import "aos/dist/aos.css";
import "./portfolioHover.css";

const Portfolio = () => {
  const navigate = useNavigate();
  const handleRedirect = (url,e) => {
      e.preventDefault();
      navigate(url)
    };
  // Aos
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 500,
      easing: "linear",
    });
    // window.location.reload(false);
  }, []);

  return (
    <>
      <div className={`max-w-[960px] text-white mx-auto px-6 py-20`}>
        {/* Heading */}
        <div
          className="py-12"
          data-aos="fade-down"
          data-aos-delay="900"
          data-aos-duration="1500"
        >
          <h2 className="text-3xl sm:text-6xl text-white mt-[4%]">
            Compelling visual journeys, 
            <br className="hidden sm:block" />
            crafted to inspire
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div>
          <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-x-16 gap-y-10 auto-rows-auto ">
            {portfolioData.map(
              ({
                id,
                PortTitle,
                PortWork,
                PortDate,
                PortImg,
                PortStyle,
                PortLink,
                PortHeading,
              }) => (
                <div
                  key={id}
                  className={`w-full block ${PortStyle} promo`}
                  //   data-aos="fade-up"
                >
                  <Link to={PortTitle} onClick={()=>handleRedirect(PortTitle)}>
                    {/* work card start */}
                    <div className="w-full md:max-w-[100%] mx-auto">
                      <div className="w-full ml-0 mr-auto py-10 md:py-2 recent_cursor">
                        <div className="image-wrapper overflow-hidden">
                          <img
                            src={PortImg}
                            alt="work-2"
                            className="w-full h-full overflow-hidden duration-500 image-animation"
                          />
                        </div>

                        <div className="py-4">
                          <h3 className="text-4xl py-2">{PortHeading}</h3>
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

export default Portfolio;
