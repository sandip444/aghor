import React from 'react'
import styles from '../../../style'
import { Link } from 'react-router-dom'
import HomeContact from '../home/homeContact'
//import PortImg from '../../../assets/images/portfolio/mmpl/BILLBOARD_mmpl_Aghori_Outdoor_shiva_Bhole.jpg'
import { mmplData } from './PortfolioContents'
const mmpl = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white `}>

                {mmplData.map((mmpl) => (
                    <>
                        {/* content section start */}
                        <div className="w-full mb-20 pt-[110px]">
                            <h1 className="text-5xl mb-[20px]">{mmpl.title}</h1>
                            <p className="text-xl md:text-3xl font-normal mb-12">
                                {mmpl.description}
                            </p>
                            <div className="py-8">
                                <h2 className="text-xl">Client</h2>
                                <h3 className="text-[16px]">{mmpl.title}</h3>
                                <br />
                                <h2 className="text-xl">Services</h2>
                                <h3 className="text-[16px]">{mmpl.services}</h3>

                            </div>
                        </div>
                        {/* content section start */}

                        {/* portfolio images start */}
                        <div className="w-full grid grid-cols-1 gap-10">
                            {mmpl.imagesLink.map(({ ImgUrl, id }) => (
                                <div key={id}>
                                    <img src={ImgUrl} alt="port" className="w-full" />
                                </div>

                            ))}

                        </div>
                        {/* portfolio images end */}
                    </>
                ))}




                {/* Navigation start */}
                <div className="w-full flex justify-between py-20">
                    <Link to="#" className="text-2xl underline underline-offset-1">Previous Project</Link>
                    <Link to="#" className="text-2xl underline underline-offset-1">See all work</Link>
                    <Link to="#" className="text-2xl underline underline-offset-1">Next Project</Link>
                </div>
                {/* Navigation start */}

            </div>

            {/* contact us section start */}
            <div className="w-full">
                <HomeContact />
            </div>
            {/* contact us section  end*/}
        </>
    )
}

export default mmpl