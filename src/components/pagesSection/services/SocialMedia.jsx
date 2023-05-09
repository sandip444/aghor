import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../style'
import { socialMediaData } from './ServicesContents'
const SocialMedia = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}>
                <div className="bg-[#fec200]">
                    <img className="max-w-[80%] mx-auto" src={require('../../../assets/images/services/Social-media-marketing.svg').default} alt="services" />
                </div>

                <div className="md:py-20 py-8 ">
                    <h1 className="text-3xl mb-8">Social Media Marketing Services To Enhance Brand Engagement</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            Aghori is a social media marketing agency that keeps up-to-date research and helps your company to grow substantially. It’s appropriate to see that our social media marketing agency and its services are a key element for success in marketing and many marketers realize the potential for business growth using our platform.
                        </p>
                        <p>
                            The contrivance of a social media strategy will greatly increase your brand recognition since you will be engaging with a vast and varied audience of consumers. To gradually initiate, create social media profiles for your business and begin interacting with others.
                        </p>
                        <p>
                            Different brands have different goals to achieve and thus, the strategies for each of the brands will showcase a unique perspective that will reflect their identity. Creating and sharing valuable content that will be needful to the audience will also grab more reach and attention than content that just talks about the brand in general. The right kind of tactic used in social media marketing involves the end-users performing a desired action such as buying the product of the brand and driving sales with it.
                        </p>
                        <p>
                            Aghori Media House, with its in-house talent in developing innovative marketing strategies produces tangible results that boost your brand’s resonation with customers thus, proving the success of the campaign for your brand.
                        </p>
                    </div>


                </div>


                {socialMediaData.map(({ id, Img, thinTitle, Des, boldTitle }) => (
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

export default SocialMedia