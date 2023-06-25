import React from "react";
import Marquee from 'react-fast-marquee'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper";
import teamData from "./teamData";


const AboutSecfive = () => {
    return (
        <>
            <div className='text-white lg:pt-20 mt-[30px]'>
                <Marquee direction="left" speed={75} className='custom_marque overflow-hidden	'>
                    <h2 className=" text-3xl md:text-7xl ">  - Members —  Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team  &nbsp;   </h2>
                </Marquee>
            </div>
            {/* Team slider start*/}
            <div className='w-full py-20 md:py-32 px-6 '>
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    // mousewheel={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                >
                    {teamData.map(({ id, tname, designation, imgSrc }) => (
                        <SwiperSlide key={id}>
                            <div className='h-full text-white cursor-col-resize'>
                                <div>
                                    <img src={imgSrc} alt="team Members" />
                                    <h3 className='text-2xl py-2'>{tname}</h3>
                                    <p>{designation}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
            {/* Team slider end*/}
        </>
    )
}

export default AboutSecfive