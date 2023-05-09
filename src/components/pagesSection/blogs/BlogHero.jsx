import React from 'react'
import HeroImg from '../../../assets/images/work-9.webp'
import { TbArrowNarrowDown } from 'react-icons/tb'
const BlogHero = () => {
    return (
        <>
            <div className="w-full mx-auto">
                <div className="sm:flex grid px-6 sm:px-0">
                    {/* left side */}
                    <div className="grid relative justify-center items-center bg-[#212324] sm:w-[40%] w-full sm:py-24 sm:pl-24 sm:pr-36" >
                        <div>
                            <img src={HeroImg} alt="hero" className="w-full" />
                        </div>
                        <div className="flex justify-center items-center text-white w-24 h-24 bg-gradient-to-r from-darkGold to-lightGold absolute bottom-0 right-0">
                            <TbArrowNarrowDown size={30} />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className=" sm:w-[60%] full flex justify-start items-center z-10 py-6">
                        <div className="sm:ml-[-50px] text-white">
                            <h1 className="sm:text-[108px] text-4xl leading-10 sm:leading-[120px]  font-bold py-4 ">Our  Blogs</h1>
                            <p className="text-xl font-thin">A couple on their quest to explore<br className="hidden sm:block" />
                                the world's greatest treasures</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogHero