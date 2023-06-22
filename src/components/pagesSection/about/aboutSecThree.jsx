import React from 'react'
import ReadMoreBtn from '../../readMoreBtn'
import { Link } from "react-router-dom";
const AboutSecThree = () => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href = '/expertis'; // Replace with your desired URL
      };
    return (
        <>
            <div className='w-full  h-fit md:h-[90vh] text-white  px-6 py-10'>
                <div className='md:max-w-[55%]  h-full mx-auto flex flex-col justify-center  '>
                    <p className='text-2xl md:text-4xl'>
                        Recently we have been tinkering with providing IT Solutions as well so we have everything covered for you. Along with being tech-savvy, we are also extremely intuitive at heart, and our creative minds that have forever resembled a free-bird ensure that same is also reflected in the services we offer.
                    </p>
                    <div className='w-full  flex'>
                        <p className='md:max-w-[50%] pt-12 ml-auto mr-0'>
                            Our work also certifies that we build a brand that is customized according to your requirements. Be it branding or logo design or website development we assure that everything is first approved by you and then finalized by us. Our social media experts work incredibly hard so that your brand is promoted to the best of our abilities. With our team of professional individuals, we make sure that we are not only creating your brand but that we are inculcating it.
                        </p>
                    </div>

                    <div className='grid gap-4 md:gap-0 md:py-0 py-5 md:grid-cols-2 items-center md:-mt-11  '>                  
                        <Link
                            to="#" onClick={handleRedirect}
                            >
                            <ReadMoreBtn />
                        </Link>                     
                        <div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSecThree