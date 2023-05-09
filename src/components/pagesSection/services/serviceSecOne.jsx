import React from 'react'
const ServiceSecOne = () => {
    return (
        <div className="text-white px-[5%]  mx-auto w-full sm:flex service_section">

            {/* left start */}
            <div className="sm:w-[30%] sm:h-screen  flex items-start pt-20">
                <div className="w-full bg-stone-800/20 backdrop-blur p-5">
                    <h2 className="text-6xl ">Branding</h2>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quibusdam in non natus iure facere, impedit similique quidem. Rerum optio delectus ducimus omnis praesentium autem aperiam sunt, quasi sit veritatis!</p>
                    <button className="p-2 border-2 border-lime-500">Read More</button>
                </div>
            </div>
            {/* left end */}

            {/* center start */}
            <div className="sm:w-[40%] sm:h-screen flex flex-col justify-center items-center relative py-10">
                <img src={require('../../../assets/images/icon2.png')} alt="services" />
                {/* <h2 className="text-9xl absolute text-center font-bold ">Web <br /><span className="text-6xl font-normal">Development</span></h2> */}
            </div>
            {/* center end */}

            {/* right start */}
            <div className="sm:w-[30%] sm:h-screen flex items-end pb-20">
                <div className="w-full bg-stone-800/20 backdrop-blur p-5">
                    <p className="py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quibusdam in non natus iure facere, impedit similique quidem. Rerum optio delectus ducimus omnis praesentium autem aperiam sunt, quasi sit veritatis!</p>
                    <button className="p-2 border-2 border-lime-500">Contact Us</button>
                </div>
            </div>
            {/* right end */}

        </div>
    )
}

export default ServiceSecOne