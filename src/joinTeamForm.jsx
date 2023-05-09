import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import SendBtn from './components/sendBtn';
import { ImAttachment } from "react-icons/im";
import styles from './style';

const positions = [
    {
        label: "Designer",
        value: "designer",
    },
    {
        label: "SEO",
        value: "seo",
    },
    {
        label: "Content Writing",
        value: "content-writing",
    },
    {
        label: "Graphic",
        value: "graphic",
    },
];

const JoinTeamForm = () => {

    const [value, setValue] = useState()

    // Attach file
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };
   
    return (
        <>
            <div className={`${styles.maxContainerWidth}  py-16 flex flex-col text-white mx-auto px-6`}>
                {/* form start */}
                <div className='py-20'>
                    <form action="">
                        <div className='grid grid-cols-2 text-white gap-y-8'>
                            {/* input and label start */}
                            <div className='md:pr-8 col-span-2 md:col-span-1 '>
                                <label htmlFor="phone" className="block text-sm font-medium ">Your name:</label>
                                <input id="name" name="name" type="text" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div className='md:pr-8 col-span-2 md:col-span-1 '>
                                <label htmlFor="phone" className="block text-sm font-medium ">Phone:</label>
                                {/* <input id="phone" name="phone" type="text" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' /> */}
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={value}
                                    onChange={setValue}
                                    className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div className='md:pr-8 col-span-2 md:col-span-1 '>
                                <label htmlFor="phone" className="block text-sm font-medium">Email address:</label>
                                <input id="email" name="email" type="email" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div className='md:pr-8 col-span-2 md:col-span-1 '>
                                <label htmlFor="phone" className="block text-sm font-medium">Positions:</label>
                                {/* <input id="city" name="city" type="text" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' /> */}
                                <select required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm'>
                                    {positions.map((position) => (
                                        <option value={position.value}>{position.label}</option>
                                    ))}
                                </select>
                            </div>
                            {/* input and label end */}

                            {/* textarea and label start */}
                            <div className='md:pr-8 col-span-2'>
                                <label htmlFor="phone" className="block text-sm font-medium">Message:</label>
                                <textarea rows='6' id="phone" name="message" type="text" autoComplete="message" required className='w-full my-2 bg-zinc-800 outline-none px-5 rounded-sm ' />
                            </div>
                            {/* textarea and label end */}

                            <div className="grid md:flex  md:justify-between items-center col-span-2 md:pr-8">

                                {/* file upload start */}
                                <div className="w-full md:w-[80%] grid md:flex md:justify-between items-center">
                                    <div className="max-w-[250px] w-full relative grid items-center bg-zinc-800 border border-[#464545] rounded-full">
                                        {/* attach and label */}
                                        <div className="relative flex items-center">
                                            <div className="w-[60px] h-[60px] flex justify-center items-center text-center rounded-full attach-icon">
                                                <ImAttachment />
                                            </div>
                                            {isFilePicked ? (<label htmlFor="file-upload" className="block text-[18px] font-medium text-center pl-10">{selectedFile.name}</label>) : (<label htmlFor="file-upload" className="block text-[18px] font-medium text-center pl-10">Attach File</label>)}

                                        </div>
                                        {/* file input */}
                                        <div className="absolute z-10">
                                            <input className=" opacity-0 cursor-pointer  w-full " id="small_size" type="file" onChange={changeHandler} />
                                        </div>
                                    </div>
                                    <div className="w-full py-4">
                                        <p className="block text-sm font-medium px-4">*.doc, *.docx, *.pdf</p>
                                    </div>
                                </div>
                                {/* file upload end */}

                                <div className="w-full md:w-[20%]">
                                    <SendBtn title="Send request" className="md:mt-0 mt-8" />
                                </div>

                            </div>

                        </div>

                    </form>
                </div>
                {/* form end */}

            </div>
        </>
    )
}

export default JoinTeamForm