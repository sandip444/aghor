import React, { useEffect } from 'react'
import styles from './style'
import servicesData from './components/pagesSection/services/servicesData'
import { motion } from "framer-motion";
import AnimatedText from "./components/pagesSection/services/AnimatedText"
import aos from "aos"
import "aos/dist/aos.css"
//import gsap from "gsap";
// import serImg from './assets/images/services/Web Development.gif'
// import serImg2 from './assets/images/services/Digital Marketing.gif'
import { Link } from 'react-router-dom'
const Services = () => {
    useEffect (() =>{
        aos.init({
            duration: 2000,
        });

    })
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        console.log("service")

        window.scrollTo(0, 0);
      }, []);

    // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading2",
            text: "Creative and strategic approach for your business goals and tasks"
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    return (
        <>

            <div data-aos="fade-up" className={`${styles.maxWidth} mx-auto px-6 md:py-20 py-10`}>

                {/* text header start */}
                <motion.div
                    initial="hidden"
                    // animate="visible"
                    // animate={replay ? "visible" : "hidden"}
                    animate="visible"
                    variants={container}
                >
                    <div className={`container ${styles.maxContainerWidth}`}>
                        {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}

                        <p className="max-w-md text-white my-6">
                        Our relentless pursuit of excellence and our unwavering commitment to artistic integrity set us apart in the industry. With a seamless fusion of cutting-edge technology and a deep understanding of human emotions, we craft immersive brand experiences that leave a lasting impression. 
                        </p>
                    </div>

                </motion.div>
                {/* content end */}
                {/* text header end */}

            </div>

            <div className={`${styles.maxWidth} mx-auto px-6 md:py-20 py-15`}>
                {/* grid start */}
                <div className="grid md:grid-cols-4 grid-cols-1 text-white gap-10 auto-rows-auto ">
                    {/* service item start */}
                    {servicesData.map(({ id, serTitle, serDescription, serImg, serLink, serStyle }) => (
                            <Link to={serLink} key={id} className={`flex md:flex-row flex-col-reverse col-span-4 md:col-span-3  mb-6 rounded-lg recent_cursor ${serStyle}`}>
                            {/* content */}
                            <div className="w-full md:w-[40%] md:p-16 p-4 justify-center  flex flex-col  ">
                                <h2 className="mb-4 text-3xl  ">{serTitle}</h2>
                                <p className="text-[14px]"> {serDescription}
                                </p>
                            </div>
                            {/* image */}
                            <div className="w-full p-4 md:w-[60%]">
                                <img src={serImg} alt={serTitle} className="w-full" />
                            </div>
                        </Link>                       
                    ))}

                    {/* service item end */}


                </div>
                {/* grid end */}
            </div>
        </>
    )
}

export default Services