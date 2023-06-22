import React from 'react'
import Marquee from 'react-fast-marquee'
// import teamData from "./teamData";
import teamDataTwo from "./teamDataTwo";
import SendBtn from '../../sendBtn';
const AboutTeamTwo = () => {
    return (
        <>

            {/* Team text start */}
            <div className='text-white pt-20'>
                <Marquee direction="left" speed={75} className='custom_marque overflow-hidden	'>
                    <h2 className=" text-3xl md:text-6xl ">  - Members —  Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team - Members — Team  &nbsp;   </h2>
                </Marquee>
            </div>
            {/* Team text end */}

            {/* Team Section grid start */}
            <div className="w-full h-full py-8 sm:py-20 px-6">
                <div className="max-w-screen-lg mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-left  py-8 md:px-4 sm:px-0">
                    {teamDataTwo.map(({ id, tname, designation, imgSrc, style }) => (
                        <div key={id}>
                            <div className='h-full text-white '>
                                <div className={`${style}`}>
                                    <img src={imgSrc} alt="team Members" />
                                    <h3 className='text-2xl py-2'>{tname}</h3>
                                    <p>{designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Team join Section start*/}
                <div className="text-white w-full mx-auto text-center pt-12 text-4xl">
                    {/* <h2 className='mr-[26.5%]'>Hello</h2> */}
                    <h2>Do you want to join our squad?</h2>
                    <svg className="team-offer__ico text-center w-[inherit] text-4xl mt-8" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 -6.11959e-07C15 -6.11959e-07 15 21.0317 15 40M15 40C15 26.2974 29 23.7681 29 23.7681M15 40C15 26.2974 1 23.7681 1 23.7681" stroke="white" strokeWidth="2"></path>
                    </svg>
                    {/* <Link to="../../../joinTeamForm">
                       
                        <SendBtn title="Click this button" className="mt-5" />

                    </Link> */}

                </div>

                <div className="text-center">
                    <button onClick={event =>  window.location.href='/joinTeamForm'}>
                        <SendBtn title="Click this button" className="md:mt-0 mt-7" />
                    </button>
                </div>


                {/* Team join Section end*/}
            </div>
            {/* Team Section grid end */}


        </>
    )
}

export default AboutTeamTwo