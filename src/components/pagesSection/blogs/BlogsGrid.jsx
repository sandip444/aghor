import React from 'react'
import styles from '../../../style'
import BlogImg from '../../../assets/images/work-6.webp'
const BlogsGrid = () => {
    return (
        <>
            <div className={`${styles.maxContainerWidth} text-white mx-auto py-10 md:py-16 px-6`}>
                <div>
                    <h2 className='text-4xl md:text-9xl text-white md:text-center font-semibold md:mt-[80px] md:my-20 my-10'>Latest Blogs</h2>
                </div>

                {/* Blogs Grid start*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* post item start */}
                    <div className="sm:flex grid recent_cursor">
                        {/* Number */}
                        <div className="px-4">
                            <h4 className="text-2xl mt-2">01</h4>
                        </div>

                        {/* content */}
                        <div>
                            {/* image */}
                            <div className="relative">
                                <img src={BlogImg} alt="Blogs-images" className="w-full" />
                                <h3 className="bg-slate-600 p-3 text-xl text-center w-28 absolute top-0 left-0">Date</h3>
                            </div>

                            {/* heading & description*/}
                            <div className="py-6">
                                <h2 className="text-2xl leading-10">Exploring the wonders of Iceland</h2>
                                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusm por incididunt ut labore et dolore magna aliquat enim Lorem ipsum dolor sit amet, consectet</p>
                            </div>
                        </div>
                    </div>
                    {/* post item end */}

                    {/* post item start */}
                    <div className="sm:flex grid recent_cursor">
                        {/* Number */}
                        <div className="px-4">
                            <h4 className="text-2xl mt-2">02</h4>
                        </div>

                        {/* content */}
                        <div>
                            {/* image */}
                            <div className="relative">
                                <img src={BlogImg} alt="Blogs-images" className="w-full" />
                                <h3 className="bg-slate-600 p-3 text-xl text-center w-28 absolute top-0 left-0">Date</h3>
                            </div>

                            {/* heading & description*/}
                            <div className="py-6">
                                <h2 className="text-2xl leading-10">Exploring the wonders of Iceland</h2>
                                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusm por incididunt ut labore et dolore magna aliquat enim Lorem ipsum dolor sit amet, consectet</p>
                            </div>
                        </div>
                    </div>
                    {/* post item end */}

                    {/* post item start */}
                    <div className="sm:flex grid recent_cursor">
                        {/* Number */}
                        <div className="px-4">
                            <h4 className="text-2xl mt-2">03</h4>
                        </div>

                        {/* content */}
                        <div>
                            {/* image */}
                            <div className="relative">
                                <img src={BlogImg} alt="Blogs-images" className="w-full" />
                                <h3 className="bg-slate-600 p-3 text-xl text-center w-28 absolute top-0 left-0">Date</h3>
                            </div>

                            {/* heading & description*/}
                            <div className="py-6">
                                <h2 className="text-2xl leading-10">Exploring the wonders of Iceland</h2>
                                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusm por incididunt ut labore et dolore magna aliquat enim Lorem ipsum dolor sit amet, consectet</p>
                            </div>
                        </div>
                    </div>
                    {/* post item end */}

                    {/* post item start */}
                    <div className="sm:flex grid recent_cursor">
                        {/* Number */}
                        <div className="px-4">
                            <h4 className="text-2xl mt-2">04</h4>
                        </div>

                        {/* content */}
                        <div>
                            {/* image */}
                            <div className="relative">
                                <img src={BlogImg} alt="Blogs-images" className="w-full" />
                                <h3 className="bg-slate-600 p-3 text-xl text-center w-28 absolute top-0 left-0">Date</h3>
                            </div>

                            {/* heading & description*/}
                            <div className="py-6">
                                <h2 className="text-2xl leading-10">Exploring the wonders of Iceland</h2>
                                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusm por incididunt ut labore et dolore magna aliquat enim Lorem ipsum dolor sit amet, consectet</p>
                            </div>
                        </div>
                    </div>
                    {/* post item end */}

                </div>
                {/* Blogs Grid end*/}
            </div>
        </>
    )
}

export default BlogsGrid