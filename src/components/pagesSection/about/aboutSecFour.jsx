import React from 'react'
import clientData from './clientData'
const AboutSecFour = () => {
    return (
        <>
            <div
                name="experience"
                className=" w-full h-full md:h-full px-6 lg:py-18 py-[30px]"
            >
                <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full md:h-full text-white">
                    <div>
                        <h2 className="text-4xl  inline">
                        Our esteemed patrons
                        </h2>
                        <p className="py-6">Amongst the privileged few, our esteemed patrons grace us with their discerning taste, unwavering support, and a shared passion for extraordinary experiences.</p>
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8 md:px-20 sm:px-0">
                    {/* clientData.map(({ id, imgSrc, title, style }) */}
                        {clientData.map(({ id, imgSrc }) => (
                            
                            <div
                                key={id}
                                className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 duration-500 py-2 rounded-lg`}
                            >
                                {/* <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            > */}
                                <img src={imgSrc} alt="client" className="md:max-w-[90%] w-full mx-auto " />
                                {/* <p className="mt-4">{title}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSecFour