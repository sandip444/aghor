import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../style'
import { brandingData } from './ServicesContents'
const Branding = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}>
                <div className="bg-[#1f1f1f]">
                    <img className="max-w-[80%] mx-auto" src={require('../../../assets/images/services/Branding.svg').default} alt="services" />
                </div>

                <div className="md:py-20 py-8 ">
                    <h1 className="text-3xl mb-8">Strategic Branding Services To Enhance Your Brand Identity</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            In the mishmash of online ads, social media, and business content, Aghori Media House is a branding agency that gives you 4 times the visibility of your competitors. The wow factor is branding. The benefits that you get from our branding services for the future are well-documented, seamless & endless. Our branding agency drives the cost down throughout the organization while increasing revenues. Not only that, our branding agency supports all of your marketing and advertising efforts, helping you work more efficiently. Get the most for your improvements and upscaling logistics by choosing our branding services.
                        </p>
                        <p>
                            At Aghori, we build brand recognition, loyalty within customers and penetrate to break the competition to a leading position. We are a steadfast branding agency that holds your credibility with customers, your industry, and the marketplace as a whole. With the help of our branding services establish your business as a better alternative to these big names out there in the market. Find and build your brand around a niche audience to which your business will be seen in some way that can enhance the better establishment of your brand image on your customers
                        </p>
                        <p>
                            Your business can become an eco-friendly option. You can be seen a more personalized in your approach.
                        </p>
                        <p>
                            Team Aghori does the perfect research and development and then arises with perfect branding strategy that suits your space & targets the aspired result. We highly respect your time and money and that’s why we are here, to minimize the efforts for you and help you to reach more customers to transform your business into a brand.
                        </p>
                        <p>
                            You can ideally depend on Aghori Media house as we are one of the rising branding agency in Mumbai providing goal-oriented branding services such as design Style (eg. logo, colors, typography, and packaging) that speak on behalf of your success as part of your brand recognition and build loyal customers for your company.
                        </p>
                        <p>
                            Some objectives we have set by ourselves to provide result oriented branding services to our clients.
                        </p>
                    </div>

                    <h2 className="text-2xl my-8">Some Objectives We Have Set By Ourselves To Provide Result Oriented Branding Services To Our Clients.</h2>

                </div>

                {brandingData.map(({ id, Img, thinTitle, Des, boldTitle }) => (
                    <>
                        {/*start */}
                        <hr />
                        <div key={id} className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">

                            {/* icon */}
                            <div className="col-span-2" >
                                <img src={Img} alt={thinTitle} className="invert  w-[60%] my-auto" />
                            </div>

                            {/* Content & Heading */}
                            <div className="col-span-4 md:pl-10">
                                <h3 className="text-3xl md:text-5xl leading-normal md:mb-10 my-5"><span className="font-extralight ">{thinTitle}</span><br />{boldTitle}</h3>
                                <p>
                                    {Des}
                                </p>
                            </div>
                        </div>
                        {/* End */}
                    </>
                ))}

                
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

export default Branding