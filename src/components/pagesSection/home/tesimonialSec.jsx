import React, { useState } from "react";
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FaRegWindowClose } from 'react-icons/fa'
import ReactPlayer from 'react-player/youtube'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import videoShowCase from '../../../assets/videos/showcase.mp4'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper";
import testimonialData from "./testimonialData";


const TestimonialSec = () => {

    const [showVideo, setShowVideo] = useState(false);
    const [videoData, setVideoData] = useState({});
    // const Vtitle = testimonialData.map((title) => {
    //     return title.tname;
    // })
    return (
        <>
            <div className='text-white pt-20 sm:pt-5 px-6'>
                {/* <Marquee direction="left" speed={75} className='custom_marque overflow-hidden	'>
                    <h2 className=" text-3xl md:text-7xl ">  - Members —  Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team  &nbsp;   </h2>
                </Marquee> */}
                <h2 className='text-4xl md:text-8xl  md:text-center  md:mt-[80px]	 '>Clients Testimonials</h2>
            </div>
            {/* Team slider start*/}
            <div className='w-full py-10 md:py-16 px-6 '>
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    navigation={true}
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
                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Mousewheel, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonialData.map(({ id, tname, designation, imgSrc, videoUrl }) => (

                        <SwiperSlide key={id} >
                            <div className='h-full text-white cursor-col-resize'>
                                <div className="w-full">
                                    <div className="testimonialCard relative w-full flex flex-col justify-center items-center">
                                        <div className=" iconPlay absolute bottom-[5%] right-[5%] w-[60px] h-[60px]  flex justify-center items-center rounded-full" >
                                            <AiOutlinePlayCircle size={40} className="playBtn z-[3] cursor-pointer" onClick={() => {
                                                setShowVideo(true);
                                                setVideoData({
                                                    id,
                                                    tname,
                                                    designation,
                                                    imgSrc,
                                                    videoUrl
                                                })
                                            }} />
                                        </div>
                                        <img src={imgSrc} alt="team Members" className="float-left" />
                                    </div>
                                    {/* <img src={imgSrc} alt="team Members" /> */}
                                    <h3 className='text-2xl py-2'>{tname}</h3>
                                    <p>{designation}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                    {/* <div className="flex gap-5">
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                        <div className="swiper-button-next w-[50px] h-[50px] bg-white" />
                    </div> */}
                </Swiper>
            </div>




            <div>
                {
                    showVideo ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 mt-[1200%] rounded-lg shadow-lg relative flex flex-col w-full bg-[#141618] outline-none focus:outline-none">

                                        <div className="relative flex-auto">
                                            {/* <video src={videoData.videoUrl} autoPlay controls controlsList="nodownload" className='md:max-w-[100%]' /> */}
                                            {/* <video src={videoShowCase} autoPlay loop className='md:max-w-[100%]' /> */}
                                            <div className="md:w-[640px] md:h-[360px]">
                                                <ReactPlayer url={videoData.videoUrl} width='100%' height='100%'  />
                                            </div>


                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-between p-1 border-t border-solid border-slate-200 rounded-b">
                                            <h3 className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none">{videoData.tname}</h3>
                                            <button
                                                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowVideo(false)}
                                            >
                                                <FaRegWindowClose size={20} />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-75 fixed inset-0 z-40 bg-black" onClick={() => setShowVideo(false)} />

                        </>
                    ) : null
                }
            </div>

            {/* Team slider end*/}
        </>
    )
}

export default TestimonialSec