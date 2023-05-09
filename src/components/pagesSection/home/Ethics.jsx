import React from "react";
import styles, { layout } from "../../../style.js";
import Img1 from "../../../assets/images/Send.svg";
import Img2 from "../../../assets/images/Shield.svg";
import Img3 from "../../../assets/images/Star.svg";
import Img4 from "../../../assets/images/Send.svg";

const Ethics = () => {
  const ethicsData = [
    {
      id: 1,
      // imgSrc: require("../../../assets/images/Star.svg"),
      imgSrc: Img1,
      titleEthic: "Closed Group Of Hardworking Creators ",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: 2,
      imgSrc: Img2,
      // imgSrc: require("../../../assets/images/Send.svg"),
      titleEthic: "Quality Is Our Aim",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: 3,
      imgSrc: Img3,
      // imgSrc: require("../../../assets/images/Shield.svg"),
      titleEthic: "Quick Development Assurance ",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
    {
      id: 4,
      imgSrc: Img4,
      // imgSrc: require("../../../assets/images/Shield.svg"),
      titleEthic: "We Focus On You First ",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

  return (
    <div className=" z-[100]">
      <div className={`${styles.maxWidth} mx-auto px-6`}>
        <h2 className="text-4xl md:text-8xl  text-white md:mt-[80px]	 ">
          Ethically Artistic
        </h2>
      </div>
      <div
        className={`${styles.maxWidth} py-12 md:py-20 mx-auto sm:flex row px-6 `}
      >
        {/* content */}
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Quality Output, <br className="sm:block hidden" /> with Strong Work
            Ethics.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            cumque eaque, fugit enim impedit amet ducimus unde rem quos quaerat,
            ut consequatur nostrum doloremque explicabo repellat! Animi dolores
            libero veniam!
          </p>
        </div>

        {/* ethics lists */}
        <div>
          {ethicsData.map(({ id, titleEthic, imgSrc, content }) => (
            <div
              key={id}
              className="flex flex-row p-6 items-center rounded-[20px] ethic-card"
            >
              <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGold`}
              >
                <img
                  src={imgSrc}
                  alt="icon"
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                  {titleEthic}
                </h4>
                <p className="font-poppins  text-white text-[16px] leading-[24px] mb-1">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ethics;
