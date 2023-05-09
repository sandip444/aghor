import React from 'react'
import headerImg from '../../../assets/images/header-dummy-image.webp'
import BlogItem from '../../../assets/images/blog-item-dummy.webp'
import BlogItem2 from '../../../assets/images/portfolio/harmano/HARMANO-OUTDOOR_Inshop_design_Kiosk_Hoarding_Aghori_shiva_Bhole.jpg'
import styles from '../../../style'
import SendBtn from '../../../components/sendBtn';

const BlogBlur = () => {
    return (
        <>
            <div className="w-full px-6">
                {/* header section */}
                <div className="max-w-[90%] mx-auto text-white">
                    {/* header Image */}
                    <div>
                        <img src={headerImg} alt="Header" />
                    </div>
                    {/* header heading */}
                    <div className="text-center py-10">
                        <h3>WE’RE HERE TO HELP YOU</h3>
                        <h1 className="sm:text-[108px] text-4xl leading-10 sm:leading-[120px]  font-bold py-4 ">Our  Blogs</h1>
                    </div>
                </div>

                {/* Blogs List section start*/}
                <div className={`${styles.maxContainerWidth} mx-auto text-white`}>
                    {/* blog item start */}
                    <div className="my-16 relative recent_cursor ">
                        <img src={BlogItem2} alt="blog-items" />
                        <div className="p-8 bg-[#1d1b1b] md:absolute md:bottom-0 md:left-0 bg-stone-800/20 backdrop-blur">
                            <h2 className="text-2xl md:text-4xl pb-3">Benefits of Content Writing</h2>
                            <p>
                                You are not alien in this world if you are looking for the best Content Writing Services that can enhance and increase the value of your content on your social media, website, profile along with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">November 22, 2020</h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}

                    {/* blog item start */}
                    <div className="my-16 relative recent_cursor ">
                        <img src={BlogItem} alt="blog-items" />
                        <div className="p-8 bg-[#1d1b1b] md:absolute md:bottom-0 md:left-0 bg-stone-800/20 backdrop-blur">
                            <h2 className="text-2xl md:text-4xl pb-3">Benefits of Content Writing</h2>
                            <p>
                                You are not alien in this world if you are looking for the best Content Writing Services that can enhance and increase the value of your content on your social media, website, profile along with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">November 22, 2020</h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}

                    {/* blog item start */}
                    <div className="my-16 relative recent_cursor ">
                        <img src={BlogItem} alt="blog-items" />
                        <div className="p-8 bg-[#1d1b1b] md:absolute md:bottom-0 md:left-0 bg-stone-800/20 backdrop-blur">
                            <h2 className="text-2xl md:text-4xl pb-3">Benefits of Content Writing</h2>
                            <p>
                                You are not alien in this world if you are looking for the best Content Writing Services that can enhance and increase the value of your content on your social media, website, profile along with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">November 22, 2020</h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}

                    {/* blog item start */}
                    <div className="my-16 relative recent_cursor ">
                        <img src={BlogItem} alt="blog-items" />
                        <div className="p-8 md:absolute md:bottom-0 md:left-0  bg-stone-800/20 backdrop-blur">
                            <h2 className="text-2xl md:text-4xl pb-3">Benefits of Content Writing</h2>
                            <p>
                                You are not alien in this world if you are looking for the best Content Writing Services that can enhance and increase the value of your content on your social media, website, profile along with increasing website traffic and driving sales.
                            </p>
                            <div className="grid md:flex justify-between items-center py-4">
                                <h4 className="text-xl  text-gray-400 py-3">November 22, 2020</h4>
                                <SendBtn title="Read More" />
                            </div>
                        </div>
                    </div>
                    {/* blog item end */}

                </div>
                {/* Blogs List section end*/}
            </div>
        </>
    )
}

export default BlogBlur