import React from "react";
import baba from "../../../assets/images/WE_AGHORI_01.png";
const Hero = () => {
  return (
    <>
      <div className="max-w-[90%] mx-auto px-4 text-white md:flex h-full z-[100]">
        <div className="w-full md:w-[50%] h-[80vh] flex flex-col justify-between">
          <h1 className="text-3xl md:text-6xl">
            <span>Advanced Team ®</span>
            <br />
            <span>Digital Design</span>
            <br />
            <span>Boutique with Focus</span>
            <br />
            <span>on Aesthetics</span>
            <br />
          </h1>
          <div className="md:w-[65%] ml-auto mr-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center md:relative   absolute top-[20%] left-0 z-[-1]">
          <img src={baba} alt="baba" className="md:w-[70%]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
