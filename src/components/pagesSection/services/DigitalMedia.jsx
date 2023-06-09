import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../style'
const DigitalMedia = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white `}>
                <div className="bg-[#15236c]">
                    <img className="max-w-[80%] mx-auto mb-16" src={require('../../../assets/images/services/digital-media-marketing.svg').default} alt="services" />
                </div>
                <h1 className="text-2xl my-8">Digital Marketing Services to Attract Best Virtual Audiences</h1>

                {/*Seo Content start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Seo</span><br />Content</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Drive traffic, build engagement, score meaningful, Testing and Optimization conversions and cultivate long-term relationships with smart, cost-effective, integrated campaigns that focus on relevant targets. Flightpath’s core digital marketing services and channels include:
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Strategic Campaign Planning</li>
                                <li>Search Marketing / Pay Per Click</li>
                                <li>Email Campaigns</li>
                            </div>

                            <div>
                                <li>Organic SEO</li>
                                <li>Contextual & Display Advertising</li>
                                <li>Testing and Optimization</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Seo Content End */}

                {/*Search Engine Optimization start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Search Engine</span><br />Optimization</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Claim maximum attention of the market with our professionally crafted search engine optimization program and help your business grow like never before.
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Initial rankings</li>
                                <li>Competitive data</li>
                                <li>Link reputation</li>
                            </div>

                            <div>
                                <li>Recommended keywords</li>
                                <li>Keyword rankings</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Search Engine Optimization End */}

                {/*Sem / Pay Per Click start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Sem / Pay</span><br />Per Click</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Get a top-ranked visibility in any browsing platform ensuring more clicks and an improved traffic. Your success story will be our pride with us endeavoring through every dimension of the SEM mechanism.
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Strategic search engine selection</li>
                                <li>Comprehensive keyword research</li>
                                <li>Practical bid strategy</li>
                            </div>

                            <div>
                                <li>Engaging PPC creative</li>
                                <li>Relevant landing page</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Sem / Pay Per Click End */}

                {/*Paid Search start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Paid</span><br />Search</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Proper allocation of the funds is a crucial part of making effective and viable business. We care for every penny that you spend and make sure that you pay only for what you get under our professionally supervised PPC plans.
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Contextual Targeting</li>
                                <li>Interest Targeting</li>
                                <li>Direct Placements</li>
                            </div>

                            <div>
                                <li>Remarketing</li>
                                <li>Keyword rankings</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Paid Search End */}

                {/*Email Marketing start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Email</span><br />Marketing</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Be a part of the regular interval notifications to your customers and beyond. With the potential to reach millions at a go, we ensure the Emailer marketing campaign reaches every corner of your target market assuring business conversion.
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Campaign research & refinement</li>
                                <li>A/B & Multivariate testing</li>
                                <li>Intelligent list management</li>
                            </div>

                            <div>
                                <li>Creative strategy & production</li>
                                <li>Acquisition opportunities</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Email Marketing End */}

                {/*Influencer Marketing start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                    {/* Heading */}
                    <div className="col-span-2" >
                        <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 "><span className="font-extralight ">Influencer</span><br />Marketing</h3>
                    </div>

                    {/* Content */}
                    <div className="col-span-4 md:pl-10">
                        <p>
                            Develop an effective network of customer-related promotions with our strategic evaluation of an impeccable Influencer base. Advertise less and get more with the help of this super mechanism that we suggest.
                        </p>

                        <ul className="py-6 list-disc list-inside grid gap-4 grid-cols-2">
                            <div>
                                <li>Copy, creative, offers</li>
                                <li>Channels</li>
                                <li>Visual layout</li>
                            </div>

                            <div>
                                <li>Design elements</li>
                                <li>Functional elements</li>
                            </div>

                        </ul>
                    </div>
                </div>
                {/*Influencer Marketing End */}


                <hr />
                {/* Navigation start */}
                <div className="w-full flex justify-between py-8 md:py-12">
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Previous Service</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">See all Services</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Next Service</Link>
                </div>
                {/* Navigation start */}

            </div>

        </>
    )
}

export default DigitalMedia